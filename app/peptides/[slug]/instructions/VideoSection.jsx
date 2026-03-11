'use client'

import { useEffect, useState } from 'react'

function VideoModal({ open, onClose, videoUrl, peptideName }) {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="videoModalOverlay" onClick={onClose}>
      <div
        className="videoModal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="videoModalHeader">
          <h3>{peptideName} Instruction Video</h3>

          <button
            type="button"
            className="videoModalClose"
            onClick={onClose}
            aria-label="Close video modal"
          >
            ×
          </button>
        </div>

        <div className="videoContainer">
          <video controls playsInline preload="metadata">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default function InstructionVideoButton({ videoUrl, peptideName }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="videoButton"
      >
        ▶ Watch Instruction Video
      </button>

      <VideoModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={videoUrl}
        peptideName={peptideName}
      />
    </>
  )
}