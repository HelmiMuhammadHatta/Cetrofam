import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { saveLead } from '../server/actions'
import { X } from 'lucide-react'

const downloadSchema = z.object({
  email: z.string().email('Format email tidak valid'),
})

type DownloadData = z.infer<typeof downloadSchema>

interface PdfDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export function PdfDownloadModal({ isOpen, onClose, pdfUrl }: PdfDownloadModalProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DownloadData>({
    resolver: zodResolver(downloadSchema)
  })

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  const onSubmit = async (data: DownloadData) => {
    setSubmitStatus('loading')
    try {
      const result = await saveLead({ data: {
        name: 'PDF Downloader',
        email: data.email,
        leadType: 'investor',
        message: 'Downloaded CP'
      }})
      
      if (result.success) {
        setSubmitStatus('success')
        // Buka PDF di tab baru
        window.open(pdfUrl, '_blank')
        // Tutup modal
        setTimeout(() => onClose(), 1500)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Terjadi kesalahan.')
      }
    } catch (err) {
      setSubmitStatus('error')
      setErrorMessage('Terjadi kesalahan jaringan.')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white text-forest w-full max-w-md rounded-sm shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-forest/50 hover:text-forest transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-serif font-bold mb-2">Unduh Company Profile</h2>
          <p className="text-forest/70 mb-6">Silakan masukkan email Anda untuk mendapatkan tautan unduhan langsung dokumen investasi kami.</p>

          {submitStatus === 'success' ? (
            <div className="bg-wheat/20 text-forest p-4 rounded-sm font-medium text-center">
              Dokumen akan terbuka di tab baru...
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Email Anda *</label>
                <input 
                  type="email" 
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                  placeholder="email@perusahaan.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
              </div>

              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm font-bold">{errorMessage}</p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 bg-forest text-cream font-bold rounded-sm hover:bg-forest/90 transition-colors disabled:opacity-50 mt-4"
              >
                {isSubmitting ? 'Memproses...' : 'Unduh Sekarang'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
