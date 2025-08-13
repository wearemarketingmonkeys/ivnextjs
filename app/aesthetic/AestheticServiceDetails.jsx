import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import aestheticData from "../../mocks/aestheticData.json";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ReactCompareImage from "react-compare-image";

const AestheticServiceDetails = () => {
  const { serviceName } = useParams();
  const [aestheticsService, setAestheticsService] = useState([]);
  const videoRef = useRef(null);

  // FIXED: aestheticData is inside aestheticDataFile.aestheticData
  const currentAesthetic = aestheticData.aestheticData[0];
  const subHeading = currentAesthetic?.subHeading || "";

  // Split subHeading into array
  const strings = subHeading.split("|").map(str => str.trim());

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    if (!strings.length) return;

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * strings.length);
      setRandomString(strings[randomIndex]);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [strings]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.removeAttribute("controls");
    }
  }, []);

  const videos = import.meta.glob("../../assets/video/*.mp4", { eager: true });
  const images = import.meta.glob("../../assets/img/aesthetic/*.webp", {
    eager: true,
  });
  const icons = import.meta.glob("../../assets/img/aesthetic/*.png", {
    eager: true,
  }); /* for image */

  useEffect(() => {
    const fetchAestheticServices = () => {
      const updatedAestheticService = aestheticData.aestheticData.map(
        (aesthetic) => ({
          ...aesthetic,
          video: videos[`../../assets/video/${aesthetic.video}`]?.default || "",
          img:
            images[`../../assets/img/aesthetic/${aesthetic.img}`]?.default ||
            "",
          beforeImg:
            images[`../../assets/img/aesthetic/${aesthetic.beforeImg}`]
              ?.default || "",
          afterImg:
            images[`../../assets/img/aesthetic/${aesthetic.afterImg}`]
              ?.default || "",
          treatableConcerns: aesthetic.treatableConcerns.map((concern) => ({
            ...concern,
            icons:
              icons[`../../assets/img/aesthetic/${concern.icons}`]?.default ||
              "",
          })),
          treatmentsTips: aesthetic.treatmentsTips.map((tip) => ({
            ...tip,
            tips: tip.tips.map((subTip) => ({
              ...subTip,
              icon:
                icons[`../../assets/img/aesthetic/${subTip.icon}`]?.default ||
                "",
            })),
          })),
        })
      );
      setAestheticsService(updatedAestheticService);
    };

    fetchAestheticServices();
  }, []);

  // Find the relevant service from the JSON file
  const service = aestheticsService.find(
    (item) => item.fullDetailsUrl === `/aesthetic/${serviceName}`
  );

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <div className="aesthetic-details">
      <div className="details-hero">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              {service.video ? (
                <div className="imgVidBox">
                  <video
                    ref={videoRef}
                    muted
                    autoPlay
                    loop
                    playsInline
                    controls={undefined}
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="imgVidBox">
                  <img src={service.img} alt={service.title} />
                </div>
              )}
            </div>
            <div className="right">
              <h1>{service.title}</h1>
              <div className="dur-cost">
                <span>Starting at AED{service.startingAmount}</span>
                <span>|</span>
                <span>{service.duration} min duration</span>
              </div>
              <div className="why-love">{service.whyWeLoveIt}</div>
              <div className="treatable-area">
                <p>
                  <strong>Treatable Area</strong>
                </p>
                <p>{service.treatableArea}</p>
              </div>
              <div className="single-concern-wrap">
                {service.treatableConcerns.map((x, index) => (
                  <div className="single-concern" key={index}>
                    <img src={x.icons} alt="concern icon" />
                    <span>{x.txt}</span>
                  </div>
                ))}
              </div>
              <p className="discount">
                <strong>
                  {service.discount}% discount on 3 or more sessions
                </strong>
              </p>
              <div className="btn-wrap">
                <Link to={service.bookingBtn} className="btn">
                  Book Now
                </Link>
              </div>
              {service?.othertext ? (
                  // Render the content from service.othertext
                  <h2 dangerouslySetInnerHTML={{ __html: service.othertext }} />
                ) : (
                  // Render the default Price & Package section
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
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="pre-post">
        <div className="container">
          <div className="randomstrings">
            <p>{randomString}</p>
          </div>
          <div className="pre-post-wrap">
            <Accordion allowZeroExpanded>
              {service.treatmentsTips.map((x, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{x.name}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="tips-wrapper">
                      {x.tips.map((y, yIndex) => (
                        <div className="tips-wrap" key={yIndex}>
                          <img src={y.icon} alt="icon" />
                          <p>{y.txt}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="price-package">
        <div className="container">
          <div className="price-package-wrap">
            <div className="left">
              <div className="left-wrap">
                <h1>Results</h1>
                <p>{service?.resultTxt || "No results available."}</p>
                {service?.beforeImg && service?.afterImg ? (
                  <ReactCompareImage
                    leftImage={service.beforeImg}
                    rightImage={service.afterImg}
                  />
                ) : (
                  <p>Image comparison not available.</p>
                )}
              </div>
              
            </div>
            <div className="right">
              <div className="faq">
                <div className="container">
                  <div className="faq-wrap">
                    <h1>Questions? We've Got Answers</h1>
                    <Accordion allowZeroExpanded>
                      {service.faq.map((x, index) => (
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
              {/* <h1>Price & Package</h1>
              {service?.treatments?.length > 0 &&
                service.treatments.map((x, index) => (
                  <div className="single-treatment" key={index}>
                    <h2>{x.category}</h2>
                    <div className="treatment-services">
                      {x.services?.map((y, yIndex) => (
                        <div className="single-treatment-service" key={yIndex}>
                          <span>{y.name}</span>
                          <span>{y.price} AED</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AestheticServiceDetails;
