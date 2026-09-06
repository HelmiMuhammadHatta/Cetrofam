import { useEffect } from 'react'
import { X } from 'lucide-react'

interface PdfDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export function PdfDownloadModal({ isOpen, onClose, pdfUrl }: PdfDownloadModalProps) {
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

          <form action={import.meta.env.VITE_FORM_ENDPOINT || '#'} method="POST" className="space-y-4">
            <input type="hidden" name="form_type" value="Investor" />
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + pdfUrl : ''} />
            
            <div>
              <label className="block text-sm font-bold mb-1">Email Anda *</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full px-4 py-3 rounded-sm border border-forest/20 focus:outline-none focus:border-forest bg-cream/30" 
                placeholder="email@perusahaan.com"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-forest text-cream font-bold rounded-sm hover:bg-forest/90 transition-colors mt-4"
            >
              Unduh Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
