// components/ModalShell.jsx
'use client';

export default function ModalShell({ open, onClose, title, img, children, asPage = false }) {
  if (!open) return null;

  return (
    <div className={`modalOverlay ${asPage ? 'asPage' : ''}`} role="dialog" aria-modal="true">
      <div className="modalPanel">
        <button className="modalClose" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modalBody">
          <div className="modalLeft">
            <img className="modalImg" src={img} alt={title || 'Peptide'} loading="lazy" />
          </div>

          <div className="modalRight">{children}</div>
        </div>
      </div>
    </div>
  );
}
