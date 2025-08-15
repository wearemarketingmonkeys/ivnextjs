'use client';
import VerticalCarousel from '../components/VerticalCarousel';

export default function VerticalCarouselClient({ steps = [] }) {
  if (!steps.length) return null;
  return <VerticalCarousel steps={steps} />;
}
