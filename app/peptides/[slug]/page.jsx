import PeptidesClient from '../PeptidesClient';
import peptidesJson from '../../mocks/peptidesData.json';

const SITE_URL = 'https://ivhub.com';

const peptidesList = Array.isArray(peptidesJson)
  ? peptidesJson
  : (peptidesJson.peptides || peptidesJson.peptidesData || []);

// helper: make absolute URL for OG/Twitter images
const toAbsoluteUrl = (src) => {
  if (!src) return `${SITE_URL}/og.png`;
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  return `${SITE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
};

export function generateMetadata({ params }) {
  const peptide = peptidesList.find((p) => p.slug === params.slug);

  // fallback (404-ish)
  if (!peptide) {
    const title = 'Peptides | IV Wellness Lounge Clinic';
    const description = 'Peptide therapy details.';
    const url = `${SITE_URL}/peptides`;

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: 'website',
        images: [
          {
            url: `${SITE_URL}/og.png`,
            width: 1200,
            height: 630,
            alt: 'IV Wellness Lounge Clinic'
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`${SITE_URL}/og.png`]
      }
    };
  }

  const title = peptide.details?.headline || `${peptide.name} | IV Wellness Lounge Clinic`;
  const description = peptide.metadesc || 'Peptide therapy details.';
  const url = `${SITE_URL}/peptides/${peptide.slug}`;

  // Use detailimg first, then img, then og fallback
  const image = toAbsoluteUrl(peptide.detailimg || peptide.img);

  return {
    title,
    description,
    alternates: { canonical: url },

    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'IV Wellness Lounge Clinic',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: peptide.name || 'Peptide therapy'
        }
      ]
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export default function PeptideSlugPage({ params }) {
  const faq = peptidesList?.faq || [];

  return (
    <PeptidesClient
      initialPeptides={peptidesList}
      faq={faq}
      initialSlug={params.slug}
    />
  );
}
