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
            Standard Instructions for {peptide.name} 
          </h1>
          <hr/>
          <p><small><i>(Doses / Dosages may vary based on doctor consultation)</i></small></p>
          <br/>
          {/* Dose */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              {i.dosePerPuff ? "Dose Per Puff" : "Dose Per Injection"}
            </h2>

            {Array.isArray(i.dosePerInjection) &&
              i.dosePerInjection.map((dose, index) => (
                <p key={index}>{dose}</p>
              ))}

            {Array.isArray(i.dosePerPuff) &&
              i.dosePerPuff.map((dose, index) => (
                <p key={index}>{dose}</p>
              ))}

            {i.dosePerInjection && !Array.isArray(i.dosePerInjection) && (
              <>
                <p>
                  {i.dosePerInjection.amount} = {i.dosePerInjection.units} per injection.
                </p>
                <p>Dose Protocol: {i.dosePerInjection.protocol}</p>
              </>
            )}
          </section>
          
          {i.doseProtocol && (
            <>
            <br/>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Dose Protocol</h2>

              {Array.isArray(i.doseProtocol)
                ? i.doseProtocol.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
                : <p>{i.doseProtocol}</p>}
            </section>
            </>
          )}

          <br/>
          {/* Pen Details */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              {i.nasalSprayDetails ? "Nasal Spray Details" : "Pen Details"}
            </h2>

            {i.penDetails && (
              <>
                <p>{i.penDetails.totalPeptide} in {i.penDetails.volume}</p>
                <p>Concentration: {i.penDetails.concentration}</p>
                <p>Duration: {i.penDetails.duration}</p>
              </>
            )}

            {i.nasalSprayDetails && (
              <>
                <p>{i.nasalSprayDetails.totalPeptide} in {i.nasalSprayDetails.volume}</p>
                <p>Concentration: {i.nasalSprayDetails.concentration}</p>
                <p>Duration: {i.nasalSprayDetails.duration}</p>
              </>
            )}
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
          {i.injectionSite && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Injection Site</h2>

              <p className="mb-4">{i.injectionSite.description}</p>

              {i.instructionImage && (
                <img
                  src={i.instructionImage}
                  alt={`${peptide.name} injection sites`}
                  className="border rounded-lg"
                />
              )}
            </section>
          )}
          

          {i.instructionImage && (
            <>
            <br/>
            <br/>
            <br/>
            <section className="mb-8">
              <InstructionVideoButton
                videoUrl={i.instructionVideo || 'https://mails.ivhub.com/peptide-instructions.mp4'}
                peptideName={peptide.name}
              />
            </section>
            <br/>
            </>
          )}
          
          {/* Time */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Time of Day : </h2>
            <p>{i.timeOfDay.general}</p>
            <p>{i.timeOfDay.morning}</p>
            <p className="mt-2">{i.timeOfDay.night}</p>
          </section>
          <br/>
          <section className="mb-8">
            <h1 className="text-xl font-semibold mb-2">Written Instructions</h1>
            <h2 className="text-xl font-semibold mb-2">How to use the pen : </h2>
            <p>•  There is a dial on top of the pen. Turn the dial to your prescribed number of units.</p>
            <p>•  Disinfect the injection area (abdomen, thighs, or upper arm).</p>
            <p>•  Insert the needle and press the pen down fully until the display returns to zero.</p>
            <p>•  Keep holding the pen in place for about 20–25 seconds to ensure the full dose is delivered.</p>
            <p>•  Then remove the pen carefully.</p>
            <p>•  Dispose of the needle and replace it with a new one.</p>
            <p>•  Always use a new needle for every injection.</p>
          </section>
          <br/>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">How to replace the cartridge : </h2>
            <p>•  Unscrew or open the pen according to its design.</p>
            <p>•  Remove the empty cartridge from inside the pen.</p>
            <p>•  Insert the new cartridge into the holder (ensure it is properly seated and aligned).</p>
            <p>•  Close or screw the pen back together securely.</p>
          </section>
          <br/>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">How to prime the pen (important before first use after cartridge change) : </h2>
            <p>•  Attach a new needle to the pen.</p>
            <p>•  Turn the dial to a 2 units (as instructed, usually a minimal amount for priming).</p>
            <p>•  Hold the pen with the needle pointing upwards.</p>
            <p>•  Gently tap the pen to allow any air bubbles to rise to the top.</p>
            <p>•  Press the pen until you see a small drop of liquid appear at the tip of the needle.</p>
            <p>•  If no drop appears, repeat the process until it does.</p>
          </section>
          <br/>
          <br/>
          {/* Important */}
          <section className="bg-gray-100 p-5 rounded-lg">
            <h2 className="font-semibold mb-2">Important Information : </h2>
            <p className="text-sm">{i.importantInformation}</p>
          </section>
          <br/>
          <small><i>For Research and Education purposes only</i></small>
        </div>
      </div>
    </main>
  )
}