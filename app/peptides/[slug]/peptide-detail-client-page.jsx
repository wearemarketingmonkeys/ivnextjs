// app/peptides/[slug]/peptide-detail-client-page.jsx
'use client';

import { useRouter } from 'next/navigation';
import ModalShell from './ModalShell';
import PeptideDetail from './PeptideDetail';

export default function PeptideDetailClientPage({ peptide }) {
  const router = useRouter();

  return (
    <div className="peptidepage">
      <ModalShell
        open={true}
        asPage={true}
        onClose={() => router.push('/peptides', { scroll: false })}
        title={peptide.name}
        img={peptide.detailimg || peptide.img}
      >
        <PeptideDetail peptide={peptide} />
      </ModalShell>
    </div>
  );
}
