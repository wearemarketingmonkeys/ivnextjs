// app/blogs/[slug]/ShareBarClient.jsx
'use client';

import { useEffect, useState } from 'react';
import { FaFacebookF, FaLink, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function ShareBarClient() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    try {
      setCurrentUrl(window.location.href);
    } catch {
      setCurrentUrl('');
    }
  }, []);

  const copyToClipboard = async () => {
    try {
      if (navigator?.clipboard?.writeText && currentUrl) {
        await navigator.clipboard.writeText(currentUrl);
        alert('Link copied to clipboard!');
      }
    } catch {
      // no-op
    }
  };

  if (!currentUrl) {
    return null; // don’t render icons until we know the URL
  }

  return (
    <div className="share-wrap">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X/Twitter"
      >
        <FaTwitter />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <button onClick={copyToClipboard} className="copy-link-button" aria-label="Copy link">
        <FaLink />
      </button>
    </div>
  );
}
