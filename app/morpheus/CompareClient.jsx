'use client';
import { useRef, useState } from 'react';

/** Before/After compare slider (no deps) */
export default function CompareClient({
  before,
  after,
  altBefore = 'Before',
  altAfter = 'After',
  initial = 50, // starting split %
}) {
  const wrapRef = useRef(null);
  const [pct, setPct] = useState(initial); // % of BEFORE visible (left)

  const setFromClientX = (clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - r.left, 0), r.width);
    setPct(Math.round((x / r.width) * 100));
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    const move = (ev) => setFromClientX(ev.clientX);
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  const onTouchStart = () => {
    const move = (ev) => setFromClientX(ev.touches[0].clientX);
    const end = () => {
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', end);
      window.removeEventListener('touchcancel', end);
    };
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend', end);
    window.addEventListener('touchcancel', end);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPct((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPct((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={wrapRef}
      className="compare"
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      onKeyDown={onKeyDown}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 720,
        aspectRatio: '4 / 3',
        overflow: 'hidden',
        borderRadius: 12,
        boxShadow: '0 10px 30px rgba(0,0,0,.08)',
        background: '#f6f6f6',
        userSelect: 'none'
      }}
    >
      {/* AFTER (base, right) */}
      {after && (
        <img
          src={after}
          alt={altAfter}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      {/* BEFORE (overlay, left clipped by pct) */}
      {before && (
        <div style={{ position: 'absolute', inset: 0, width: `${pct}%`, overflow: 'hidden' }}>
          <img
            src={before}
            alt={altBefore}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Divider + Handle */}
      <div
        style={{
          position: 'absolute', top: 0, bottom: 0, left: `calc(${pct}% - 1px)`,
          width: 2, background: 'rgba(255,255,255,.9)', boxShadow: '0 0 0 1px rgba(0,0,0,.08)'
        }}
      />
      <button
        type="button"
        aria-label="Drag to compare"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{
          position: 'absolute', top: '50%', left: `${pct}%`, transform: 'translate(-50%, -50%)',
          width: 28, height: 28, borderRadius: '50%', border: 'none',
          background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,.15)', cursor: 'ew-resize'
        }}
      />
    </div>
  );
}
