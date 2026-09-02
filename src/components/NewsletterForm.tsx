import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { saveLead } from '../server/actions'
import { CheckCircle } from 'lucide-react'

const newsletterSchema = z.object({
  email: z.string().email('Email tidak valid'),
})

type NewsletterData = z.infer<typeof newsletterSchema>

export function NewsletterForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema)
  })

  const onSubmit = async (data: NewsletterData) => {
    setSubmitStatus('loading')
    try {
      const result = await saveLead({ data: {
        name: 'Subscriber', // Default name for newsletter
        email: data.email,
        leadType: 'newsletter',
      }})
      
      if (result.success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Terjadi kesalahan.')
      }
    } catch (err) {
      setSubmitStatus('error')
      setErrorMessage('Terjadi kesalahan jaringan.')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="max-w-md mx-auto bg-forest text-cream p-4 flex items-center justify-center gap-3 rounded-sm border border-forest/20 shadow-lg">
        <CheckCircle size={24} className="text-wheat" />
        <span className="font-bold">Berhasil berlangganan! Terima kasih.</span>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <div className="flex-1 relative">
          <input 
            type="email" 
            placeholder="Alamat Email Anda" 
            {...register('email')}
            className={`w-full px-4 py-3 rounded-sm border ${errors.email ? 'border-red-500' : 'border-forest/20'} focus:outline-none focus:ring-2 focus:ring-forest bg-white text-forest`} 
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="px-6 py-3 bg-forest text-cream font-medium rounded-sm hover:bg-forest/90 transition-colors disabled:opacity-70 whitespace-nowrap"
        >
          {isSubmitting ? '...' : 'Dapatkan'}
        </button>
      </form>
      {errors.email && <p className="text-red-300 text-sm mt-2 text-left">{errors.email.message as string}</p>}
      {submitStatus === 'error' && <p className="text-red-300 text-sm mt-2 text-left">{errorMessage}</p>}
    </div>
  )
}
