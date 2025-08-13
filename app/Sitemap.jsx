import React from "react";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="sitemap-page py-5" style={{ margin: "50px auto" }}>
      <div className="container">
        {/* <div className="hero p-5">
            <h1>IVHUB Website Sitemap</h1>
        </div> */}
        <h2>Main Website</h2>
        <ul>
        <li><a href="https://www.ivhub.com/" target="_blank">Homepage</a></li>
        <li><a href="https://www.ivhub.com/about-us" target="_blank">About Us</a></li>
        <li><a href="https://www.ivhub.com/explore-us/offers" target="_blank">Offers</a></li>
        <li><a href="https://www.ivhub.com/packages" target="_blank">Packages</a></li>
        <li><a href="https://www.ivhub.com/blogs" target="_blank">Blogs</a></li>
        <li><a href="https://www.ivhub.com/contact-us" target="_blank">Contact Us</a></li>
        <li><a href="https://book.ivhub.com/" target="_blank">Book Now</a></li>
        </ul>
        <h2>IV Therapy - Wellness Drips</h2>
        <ul>
        <li><a href="https://www.ivhub.com/iv-therapy/drips" target="_blank">All Drips</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/cleanse-hub" target="_blank">Cleanse Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/beauty-hub" target="_blank">Beauty Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/boost-hub" target="_blank">Boost Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/energy-hub" target="_blank">Energy Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/fitness-hub" target="_blank">Fitness Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/fitness-hub-express" target="_blank">Fitness Hub Express</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/glow-hub" target="_blank">Glow Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/glow-hub-express" target="_blank">Glow Hub Express</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/hairfall-defense" target="_blank">Hairfall Defense</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/immune-hub" target="_blank">Immune Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/womens-health-hub" target="_blank">Women’s Health Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/iv-wellness-supreme" target="_blank">IV Wellness Supreme</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/zeus-drip" target="_blank">Zeus Drip</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/queen-victoria-drip" target="_blank">Queen Victoria</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/chelation-therapy" target="_blank">Chelation Therapy</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/performance-support" target="_blank">Performance Support</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/royal-cleanse" target="_blank">Royal Cleanse</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/recovery-hub-anti-stress" target="_blank">Recovery Hub (Anti-Stress)</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/hangover-iv-drip" target="_blank">Post Party Hub</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/hydration-hub-express" target="_blank">Hydration Hub Express</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/nad-plus" target="_blank">NAD+ 100mg</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/drips/ramadan-hub" target="_blank">Ramadan Hub</a></li>
        </ul>
        <h2>IV Therapy - Energy Boosters</h2>
        <ul>
        <li><a href="https://www.ivhub.com/iv-therapy/boosters" target="_blank">All Boosters</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/boosters#vitaminCBooster" target="_blank">Vitamin C Booster</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/boosters#superBBooster" target="_blank">Super B’s Booster</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/boosters#coq10Booster" target="_blank">Co-Enzyme Q10 Booster</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/boosters#micBooster" target="_blank">MIC Booster</a></li>
        <li><a href="https://www.ivhub.com/iv-therapy/boosters#micBooster" target="_blank">Vitamin D Booster</a></li>
        </ul>
        <h2>Aesthetic & Anti-Aging Treatments</h2>
        <ul>
        <li><a href="https://www.ivhub.com/aesthetic" target="_blank">Overview</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/skin-boosters" target="_blank">Skin Boosters & Exosomes</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/mesotherapy" target="_blank">Mesotherapy</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/collagen-stimulation" target="_blank">Collagen Stimulation</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/prp" target="_blank">PRP & Growth Factors</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/chemical-peel" target="_blank">Chemical Peels</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/medical-grade-skincare" target="_blank">Medical Grade Skincare</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/hydra-facial" target="_blank">Hydrafacial & Collagen Threads</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/anti-aging" target="_blank">Wrinkle Relaxers</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/dermal-fillers" target="_blank">Dermal Fillers</a></li>
        <li><a href="https://www.ivhub.com/aesthetic/lipo-sculpt" target="_blank">Lipozero & Liposculpt</a></li>
        </ul>
        <h2>Advanced Treatments & Laser</h2>
        <ul>
        <li><a href="https://www.ivhub.com/morpheus" target="_blank">Morpheus8® / Forma</a></li>
        <li><a href="https://www.ivhub.com/laser-hair-removal" target="_blank">Laser Hair Removal (Soprano Titanium)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sitemap;