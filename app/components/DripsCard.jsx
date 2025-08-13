import React from 'react';
import Link from 'next/link';

export default function DripsCard({
  dripsImg,
  title,
  desc,
  bookBtnUrl,
  moreDetailsUrl,
  dripsNumber,
  price,
}) {
  const detailsHref = moreDetailsUrl || '#';
  const bookHref = bookBtnUrl || '#';

  return (
    <div className="single-drips-details">
      <div className="img-box">
        <img src={dripsImg} alt={title || 'IV drip'} />
        {/* If you want a price badge on the image, uncomment:
        <span>{price ? `AED ${price}` : ''}</span> */}
      </div>

      <div className="wrap">
        <div className="left">
          <Link href={detailsHref} className="btntitle" aria-label={`See details for ${title}`}>
            <h1>{title}</h1>
          </Link>

          {/* Using a stroke-style button to show the price (links to details) */}
          <Link href={detailsHref} className="btn btn-stroke" aria-label={`Price and details for ${title}`}>
            {price ? <>AED {price}</> : 'Know More'}
          </Link>
        </div>

        {desc && <p>{desc}</p>}
      </div>

      {/* If you want a dedicated booking CTA instead of the price button above, swap this in:
      <div className="btn-wrap">
        <Link href={bookHref} className="btn">Book An Appointment</Link>
      </div>
      */}
    </div>
  );
}
