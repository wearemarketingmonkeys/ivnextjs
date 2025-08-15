'use client';
import VerticalCarousel from '../components/VerticalCarousel';

export default function VerticalCarouselClient({ steps }) {
  if (!Array.isArray(steps) || steps.length === 0) return null;
  return <VerticalCarousel steps={steps} />;
}
