import React from "react";
import HeroSection from "../components/HeroSection";
const heroImg = "/assets/img/blog/blog-hero.webp";

export const metadata = {
  title: 'Who We Are | IV Wellness Lounge',
  description: 'Your partner for safe and effective beauty &amp; wellness. We demystify cosmetic dermatology through medically-tested procedures for natural results.',
};

const About = () => {
  return (
    <>
    <div className="about-us">
      <div className="about-hero">
        <HeroSection
          img={heroImg}
          textLight1={"Your Beauty &"}
          textItalic1={"Wellness Ally"}
          desc={
            "In an industry that can be overwhelming and often overrun with misinformation, false promises, and asterisks, we founded IV Wellness Lounge to help you understand what's what."
          }
        />
        <div className="details">
          <div className="details-bg"></div>
          <div className="container">
            <div className="details-wrap">
              <div className="left">
                <div className="container">
                  <h1>A Haven For High-Tech Beauty & Wellness Services</h1>
                  <p>
                    We founded our company to demystify cosmetic dermatology and
                    make it more accessible. We believe everyone should look &
                    feel their best based on their own skin & wellness goals, so
                    we put together a carefully curated collection of the safest
                    medically-tested procedures that deliver optimal results.
                  </p>
                </div>
              </div>
              <div className="right">
                <div className="container">
                  <h1>The Modern Way to Take Care of Your Skin & Health</h1>
                  <p>
                    We believe in natural-looking - not overdone - results, so
                    we've created a menu of the most powerful treatments that
                    you can receive in an hour or less, paired with a product
                    regimen to help your results last. Designed to help you look
                    like yourself, but better - refreshed, rejuvenated and
                    renewed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="container">
            <div className="services-wrapper">
              <div className="col-12">
                <h2>How We Evaluate Our Services</h2>
              </div>
              <div className="services-wrap">
                <div className="step-1">
                  <h1>
                    1<span>Safety</span>
                  </h1>
                  <p>
                    Your safety is our number one priority, which is why our
                    services are curated for safety. And also why they'll only
                    ever be performed on you by a medical professional.
                  </p>
                </div>
                <div className="step-2">
                  <h1>
                    2<span>Medical Validation</span>
                  </h1>
                  <p>
                    No pseudoscience regarded as “evidence” or miracle claims
                    here. We take testing seriously, so our services are only
                    ever ones backed by sound scientific research.
                  </p>
                </div>
                <div className="step-3">
                  <h1>
                    3<span>Powerful Results</span>
                  </h1>
                  <p>
                    Forget recovery time - we only select services that give
                    efficacy with little to no down time so that you can easily
                    fit your appointment into a lunch break.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
