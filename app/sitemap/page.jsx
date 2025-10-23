// app/sitemap/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Sitemap | IV Wellness Lounge",
  description:
    "Complete sitemap for IV Wellness Lounge including IV therapy, boosters, aesthetic, and advanced treatments.",
  alternates: {
    canonical: "https://www.ivhub.com/sitemap",
  },
};

export default function Sitemap() {
  return (
    <div className="sitemap-page py-5" style={{ margin: "50px auto" }}>
      <div className="container">
        <h2>Main Website</h2>
        <ul>
          <li>
            <Link href="https://www.ivhub.com/">Homepage</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/about-us">About Us</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/explore-us/offers">Offers</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/packages">Packages</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/contact-us">Contact Us</Link>
          </li>
          <li>
            <a href="https://book.ivhub.com/" target="_blank">
              Book Now
            </a>
          </li>
        </ul>

        <h2>IV Therapy - Wellness Drips</h2>
        <ul>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips">All Drips</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/cleanse-hub">Cleanse Hub</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/beauty-hub">Beauty Hub</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/boost-hub">Boost Hub</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/energy-hub">Energy Hub</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/fitness-hub">Fitness Hub</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/fitness-hub-express">
              Fitness Hub Express
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/glow-hub">Glow Hub</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/glow-hub-express">
              Glow Hub Express
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/hairfall-defense">
              Hairfall Defense
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/immune-hub">Immune Hub</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/womens-health-hub">
              Women’s Health Hub
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/iv-wellness-supreme">
              IV Wellness Supreme
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/zeus-drip">Zeus Drip</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/queen-victoria-drip">
              Queen Victoria
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/chelation-therapy">
              Chelation Therapy
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/performance-support">
              Performance Support
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/royal-cleanse">Royal Cleanse</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/recovery-hub-anti-stress">
              Recovery Hub (Anti-Stress)
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/hangover-iv-drip">
              Post Party Hub
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/hydration-hub-express">
              Hydration Hub Express
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/methylene-blue-IV-drip">
              Methylene Blue IV Drip
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/nad-plus">NAD+ 100mg</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/drips/ramadan-hub">Ramadan Hub</Link>
          </li>
        </ul>

        <h2>IV Therapy - Energy Boosters</h2>
        <ul>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/boosters">All Boosters</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/boosters#vitaminCBooster">
              Vitamin C Booster
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/boosters#superBBooster">
              Super B’s Booster
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/boosters#coq10Booster">
              Co-Enzyme Q10 Booster
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/boosters#micBooster">MIC Booster</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/iv-therapy/boosters#vitaminDBooster">
              Vitamin D Booster
            </Link>
          </li>
        </ul>

        <h2>Aesthetic & Anti-Aging Treatments</h2>
        <ul>
          <li>
            <Link href="https://www.ivhub.com/aesthetic">Overview</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/skin-boosters">
              Skin Boosters & Exosomes
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/mesotherapy">Mesotherapy</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/collagen-stimulation">
              Collagen Stimulation
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/prp">PRP & Growth Factors</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/chemical-peel">Chemical Peels</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/hydra-facial">
              Hydrafacial & Collagen Threads
            </Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/anti-aging">Wrinkle Relaxers</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/dermal-fillers">Dermal Fillers</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/aesthetic/lipo-sculpt">
              Lipozero & Liposculpt
            </Link>
          </li>
        </ul>

        <h2>Advanced Treatments & Laser</h2>
        <ul>
          <li>
            <Link href="https://www.ivhub.com/morpheus">Morpheus8® / Forma</Link>
          </li>
          <li>
            <Link href="https://www.ivhub.com/laser-hair-removal">
              Laser Hair Removal (Soprano Titanium)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
