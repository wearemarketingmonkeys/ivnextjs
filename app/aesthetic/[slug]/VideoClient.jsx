'use client';
import { useEffect, useRef } from 'react';

export default function VideoClient({ src }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el) el.removeAttribute('controls');
  }, []);
  if (!src) return null;
  return (
    <video ref={ref} muted autoPlay loop playsInline controls={undefined}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
