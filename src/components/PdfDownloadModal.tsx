import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface PdfDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export function PdfDownloadModal({ isOpen, onClose, pdfUrl }: PdfDownloadModalProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const FORM_ID = "h1z6x0p2wu6"

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('loading')
    
    try {
      // @ts-ignore
      const forminit = new window.Forminit()
      const formData = new FormData(e.currentTarget)
      
      const { error } = await forminit.submit(FORM_ID, formData)
      
      if (error) {
        setSubmitStatus('error')
        setErrorMessage(error.message)
      } else {
        setSubmitStatus('success')
        window.open(pdfUrl, '_blank')
        setTimeout(() => onClose(), 1500)
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="fi-sender-userId" value="investor" />
              
              <div>
                <label className="block text-sm font-bold mb-1">Email Anda *</label>
                <input 
                  type="email" 
                  name="fi-sender-email"
                  required
                  className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                  placeholder="email@perusahaan.com"
                />
              </div>

              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm font-bold">{errorMessage}</p>
              )}

              <button 
                type="submit" 
                disabled={submitStatus === 'loading'}
                className="w-full py-3 bg-forest text-cream font-bold rounded-sm hover:bg-forest/90 transition-colors disabled:opacity-50 mt-4"
              >
                {submitStatus === 'loading' ? 'Memproses...' : 'Unduh Sekarang'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
