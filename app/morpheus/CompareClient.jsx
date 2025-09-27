'use client';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function CompareClient({ before, after }) {
  if (!before || !after) {
    return <p>Image comparison not available.</p>;
  }

  return (
    <div className="compare-wrapper">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={before} alt="Before" />}
        itemTwo={<ReactCompareSliderImage src={after} alt="After" />}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
