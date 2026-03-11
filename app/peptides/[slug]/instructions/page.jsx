import peptidesInstruction from '../../../mocks/peptidesInstruction.json'
import InstructionVideoButton from './VideoSection'

export async function generateMetadata({ params }) {
  const peptide = peptidesInstruction.find(
    (p) => p.slug === params.slug
  )

  const peptideName = peptide?.name || "Peptide"

  return {
    title: `${peptideName} Peptide Instructions | IV Wellness Lounge Clinic in Dubai`,
    description: `Learn how to properly use ${peptideName}, including dosage, injection sites, recommended cycles, and timing.`,
    robots: "index, follow",

    alternates: {
      canonical: `https://ivhub.com/peptides/${params.slug}/instructions`,
    },

    openGraph: {
      title: `${peptideName} Peptide Instructions | IV Wellness Lounge`,
      description: `Complete instructions for ${peptideName} including dosage protocol, injection sites, and recommended cycles.`,
      url: `https://ivhub.com/peptides/${params.slug}/instructions`,
      siteName: "IV Wellness Lounge",
      images: [
        {
          url: "https://ivhub.com/og.png",
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${peptideName} Peptide Instructions | IV Wellness Lounge`,
      description: `Usage instructions, dosage, and injection guidance for ${peptideName}.`,
      images: ["https://ivhub.com/og.png"],
    },
  }
}

export default function InstructionsPage({ params }) {

  const peptide = peptidesInstruction.find(
    (p) => p.slug === params.slug
  )

  if (!peptide) {
    return <div className="p-10">Instructions not found</div>
  }

  const i = peptide.instructions

  return (
    <main className="peptidepage peptideInsPage">
      <div className="wrap">
        <div className="max-w-5xl mx-auto py-10 px-6">

          <h1 className="text-3xl font-bold mb-8">
            {peptide.name} Instructions
          </h1>
          <hr/>
          <br/>
          {/* Dose */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Dose Per Injection : </h2>
            <p>{i.dosePerInjection.amount} = {i.dosePerInjection.units} per injection.</p>
            <p>Dose Protocol: {i.dosePerInjection.protocol}</p>
          </section>
          <br/>
          {/* Pen Details */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Pen Details : </h2>
            <p>{i.penDetails.totalPeptide} in {i.penDetails.volume}</p>
            <p>Concentration: {i.penDetails.concentration}</p>
            <p>Duration: {i.penDetails.duration}</p>
          </section>
          <br/>
          {/* Cycles */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Recommended Cycles : </h2>
            <p>{i.recommendedCycles.duration}</p>
            <p className="mt-2 text-sm text-gray-600">
              {i.recommendedCycles.note}
            </p>
          </section>
          <br/>
          {/* Injection Sites */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Injection Site : </h2>
            <p className="mb-4">{i.injectionSite.description}</p>

            {i.instructionImage && (
              <img
                src={i.instructionImage}
                alt={`${peptide.name} injection sites`}
                className="border rounded-lg"
              />
            )}
          </section>
          <br/>
          <br/>
          <br/>
          <section className="mb-8">
            <InstructionVideoButton
              videoUrl={i.instructionVideo || 'https://mails.ivhub.com/peptide-instruction.mp4'}
              peptideName={peptide.name}
            />
          </section>
          <br/>
          {/* Time */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Time of Day : </h2>
            <p>{i.timeOfDay.general}</p>
            <p>{i.timeOfDay.morning}</p>
            <p className="mt-2">{i.timeOfDay.night}</p>
          </section>

          <br/>
          {/* Important */}
          <section className="bg-gray-100 p-5 rounded-lg">
            <h2 className="font-semibold mb-2">Important Information : </h2>
            <p className="text-sm">{i.importantInformation}</p>
          </section>

        </div>
      </div>
    </main>
  )
}