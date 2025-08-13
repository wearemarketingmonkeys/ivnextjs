import React from "react";
import morpheusHeroVideo from "../assets/video/morpheus8.mp4";
import morpheusResult from "../assets/img/morpheus/result.png";
import calendarIcon from "../assets/img/morpheus/calendar.png";
import { Link } from "react-router-dom";
import infoIcon from "../assets/img/morpheus/info.png";
import VerticalCarousel from "../components/VerticalCarousel";
import step1Img from "../assets/img/morpheus/step1.jpg";
import step2Img from "../assets/img/morpheus/step2.jpg";
import step3Img from "../assets/img/morpheus/step3.jpg";
import beforeImg from "../assets/img/morpheus/morpheus-before.webp";
import afterImg from "../assets/img/morpheus/morpheus-after.webp";
import beforeIcon from "../assets/img/morpheus/before.png";
import afterIcon from "../assets/img/morpheus/after.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ReactCompareImage from "react-compare-image";

const service = {
  treatments: [
    {
      category: "Body",
      services: [
        { name: "Morpheus Face", price: "2299" },
        { name: "Morpheus Body", price: "2999" }
      ]
    },
    {
      category: "Add-On",
      services: [
        { name: "PRP", price: "399" },
        { name: "Exosomes", price: "1499" }
      ]
    }
  ]
};


const steps = [
  {
    img: step1Img,
    title: "Cleanse & Prep",
    desc: "Your service begins with a skin analysis and cleanse. Then, a topical anesthetic will be applied.",
  },
  {
    img: step2Img,
    title: "Microneedling",
    desc: "A matrix of needles penetrates the dermis to immediately stimulate collagen & elastin production.",
  },
  {
    img: step3Img,
    title: "Radiofrequency Energy",
    desc: "Radiofrequency energy is delivered deep into the skin to remodel collagen and jumpstart the body's natural healing process.",
  },
];

const beforeAfter = [
  {
    icon: beforeIcon,
    title: "Before Your Treatment",
    list: [
      "Wait to book Morpheus8 if you've had other facial treatments (Injectables) -except for Hydrafacial- within the past two weeks.",
      "If you've recently had a sunburn, wait one week before undergoing this treatment.",
      "Avoid photosensitizing medications, such as antibiotics, for at least 2 days prior to treatment.",
    ],
  },
  {
    icon: afterIcon,
    title: "After Your Treatment",
    list: [
      "Avoid strenuous exercise or activities that cause sweating for a few days.",
      "Use a gentle cleanser, moisturizer, and SPF 30.",
      "Do not scratch or pick at your skin as it heals.",
    ],
  },
];

const faq = [
  {
    question: "Who is Morpheus8 best for?",
    answer:
      "Morpheus8 is ideal for individuals seeking to tighten their skin, diminish the appearance of scars, and boost collagen production for a youthful, radiant complexion.",
  },
  {
    question: "What are the benefits of radiofrequency energy?",
    answer:
      "Radiofrequency energy heats the skin's deeper layers, stimulating the production of collagen and elastin. This process enhances skin texture and complexion, resulting in a more youthful and radiant appearance.",
  },
  {
    question: "When will I see results?",
    answer:
      "Initial results can appear as soon as 3 days after the treatment, with optimal results typically visible around 3 weeks later.",
  },
  {
    question: "How often should I get Morpheus8?",
    answer:
      "The frequency of treatments depends on your specific goals. Generally, we recommend a series of 3 treatments, spaced 4 weeks apart.",
  },
  {
    question: "Is it the same as regular microneedling?",
    answer:
      "Morpheus8 goes beyond traditional microneedling by incorporating radiofrequency and reaching deeper layers of the skin. This enhances its effectiveness in stimulating collagen production.",
  },
  {
    question: "What is the downtime?",
    answer:
      "Post-treatment, you may experience redness, flaking, and puffiness. Minor bruising is also possible and typically resolves within a few days. The redness, flaking, and puffiness should subside within a few days as well.",
  },
  {
    question: "How long does it take?",
    answer:
      "The entire Morpheus8 RF Microneedling session lasts about 90 minutes, which includes the time needed to apply the numbing cream.",
  },
  {
    question: "Why is it called Morpheus8?",
    answer:
      "The treatment is named after Morpheus from The Matrix, as it uses a matrix of microneedles.",
  },
  {
    question: "Can I wear makeup after treatment?",
    answer:
      "We advise against wearing makeup for 1-2 days post-treatment due to possible redness during this period.",
  },
  {
    question: "What other treatments can I pair with Morpheus8?",
    answer:
      "Plasma injections are an excellent complement to Morpheus8, as they can accelerate recovery time. This treatment can be performed immediately after your Morpheus8 session.",
  },
  {
    question: "What do you mean by 'exfoliating active ingredients'?",
    answer:
      "These are ingredients in skincare products that cause exfoliation, either physically or chemically. Examples include acids, non-comedogenic retinols, benzoyl peroxide, and scrubs.",
  },
  {
    question: "Can I get this a few days before an event?",
    answer:
      "It's best to avoid scheduling this treatment a few days before an event, as you might experience some redness and flaking afterward.",
  },
];

const Morpheus = () => {
  return (
    <div className="morpheus">
      <div className="morpheus-hero">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              <video autoPlay loop muted>
                <source src={morpheusHeroVideo} type="video/mp4" />
              </video>
            </div>
            <div className="right">
              <h1>
                Morpheus8 RF <br /> Microneedling
              </h1>
              {/* <p>
                <i>
                  June Summer Offer <strong>AED 1799</strong> per session(Face)
                </i>
              </p> */}
              <div className="description">
                A radiofrequency-enhanced microneedling treatment that
                revitalizes collagen production for renewed, taut, and visibly
                rejuvenated skin.
              </div>
              <h2>
                How Morpheus8 RF Microneedling Works for Your Unique Needs
              </h2>
              <div className="description">
                Dealing with skin laxity, fine lines, wrinkles, or scarring?
                Morpheus8 combines microneedling and radiofrequency to address
                these concerns and is safe for everyone.
              </div>
              {/* <div className="ideal-for">
                <p>
                  <strong>Does Not Treat:</strong>
                </p>
                <p>Acne Scarring | Sensitive Skin</p>
              </div> */}
              <div className="ideal-for">
                <p>
                  <strong>Ideal For:</strong>
                </p>
                <p>
                  All Skin Tones | Scarring | Stretchmarks | Collagen Production
                </p>
              </div>
              <div className="pricesection">
                <h1>Price & Package</h1>
                <br />
                <Accordion allowZeroExpanded className="price-package-accordion">
                  {service?.treatments?.length > 0 &&
                    service.treatments.map((x, index) => (
                      <AccordionItem key={index}>
                        <AccordionItemHeading>
                          <AccordionItemButton>{x.category}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="treatment-services">
                            {x.services?.map((y, yIndex) => (
                              <div className="single-treatment-service" key={yIndex}>
                                <span>{y.name}</span>
                                <span>{y.price} AED</span>
                              </div>
                            ))}
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
              <div className="btn-wrap">
                <Link to={"https://api.whatsapp.com/send/?phone=97180048482&text=Hello, I want to book the Morpheus8 Treatment&type=phone_number&app_absent=0"} className="btn">
                  BOOK Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <div className="container">
          <VerticalCarousel steps={steps} />
        </div>
      </div>

      <div className="before-after">
        <div className="container">
          <div className="before-after-wrap">
            {beforeAfter.map((x, index) => (
              <div className="wrapper" key={index}>
                <img src={x?.icon} alt={x.title} />
                <h1>{x?.title}</h1>
                {x.desc && <h2>{x.desc}</h2>}
                <ul>
                  {x?.list.map((y, yIndex) => (
                    <li key={yIndex}>{y}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="morpheus-result">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              {/* <img src={morpheusResult} alt="morpheus hair removal" /> */}
              <ReactCompareImage
                    leftImage={beforeImg}
                    rightImage={afterImg}
                  />
            </div>
            <div className="right">
              <h1>Results</h1>
              <div className="description">
              Morpheus8 combined with PRP and Exosomes delivers a powerful skin rejuvenation treatment that enhances texture, reduces unwanted fat, tightens skin, and improves overall tone for a visibly refreshed and youthful appearance.
              </div>
              <div className="unwanted-hair">
                <img src={calendarIcon} alt="hair removal" />
                <span>Frequency</span>
              </div>
              <div className="description">
                Morpheus8 (3 sessions)
              </div>
            </div>
          </div>
          <div className="info">
            <img src={infoIcon} alt="info" />
            <span>
              Shave, the area that you want to get lasered atleast 24hrs before
              the appointment.
            </span>
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="container">
          <div className="faq-wrap">
            <h1>Questions? We've Got Answers</h1>
            <Accordion allowZeroExpanded>
              {faq.map((x, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{x.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="tips-wrapper">{x.answer}</div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Morpheus;
