import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TVideo1 from "../assets/video/IV-Welness-Drips.mp4";
import TVideoCover1 from "../assets/img/home/tvideocover1.webp";
import TVideoCover2 from "../assets/img/home/ar2.webp";

const clients = [
  {
    id: 1,
    review:
      "I had an amazing experience with Prachi! She is incredibly skilled, professional, and attentive to detail. She took the time to understand my needs and provided excellent service, making me feel comfortable and pampered throughout. My skin feels amazing, and I love the results! Highly recommend her for anyone looking for top-notch beauty services.",
    videoUrl: TVideo1,
    videoCover: TVideoCover1,
  },
  {
    id: 2,
    review:
      "I recently had the pleasure of visiting [iv wellness lounge], and I can't say enough good things about my experience there. From the moment I walked in, I was greeted with a warm and welcoming atmosphere. The staff at [lounge] are not only highly professional but also genuinely caring and attentive.",
    videoUrl: TVideo1,
    videoCover: TVideoCover2,
  },
  {
    id: 3,
    review:
      "I’ve done laser, hydra facial and IV drips here; it’s a very pretty looking, clean place with very sweet staff. Najma was my laser tech and hydra facial therapist and she was so knowledgeable and explained every step in detail along the way! Dinkle was very good with the IV drip and managed to prick me with no pain at all :) very satisfied with their services and would recommend.",
    videoUrl: TVideo1,
    videoCover: TVideoCover1,
  },
  {
    id: 4,
    review:
      "A great experience, was looked after Shazia who made me feel at home as soon as I walked in. Felt super refreshed and the drip was painless. Definitely coming back!",
    videoUrl: TVideo1,
    videoCover: TVideoCover2,
  },
  {
    id: 5,
    review:
      "The best choice for laser hair removal! The place is so clean and tidy. Just three sessions I can see the result. Only 4-5 are almost enough. The doctor here is very professional and patient. Give me suggestions but didn’t make me feel like they are selling something. They just suggest what you really need. And recommend my fav Dr.Salka. Btw the price here is more reasonable than many other places that I searched before. At least I am paying something really deserves the price, not being robbed ;)",
    videoUrl: TVideo1,
    videoCover: TVideoCover1,
  },
  {
    id: 6,
    review:
      "After getting the initial symptoms of a cold - throat on fire, body aches and general lethargy, I decided to try IV Hub in hopes of avoiding sick days. The nurse came to my house and gave me the immune hub with additional paracetamol. Within 12 hours the body aches had gone and my throat was 80% better and by 24 hours nearly completely better. My energy levels were good and I had zero congestion. So far its lasting and I am so grateful to avoid the 'man down' situation.",
    videoUrl: TVideo1,
    videoCover: TVideoCover2,
  },
  {
    id: 7,
    review:
      "I got my first session of Forma and Morpheus by Dr Salka today. I have been finding her everywhere in Dubai because she is great in her work with machines and Alhamdullilah I am super happy with how my face was transformed and looked lifted and slimmer immediately after my session. Highly recommended. The staff in the clinic is sooper friendly too. Amazing place.",
    videoUrl: TVideo1,
    videoCover: TVideoCover2,
  },
];


const Testimonial = () => {
  return (
    <div className="client-reviews">
      <div className="container">
        <div className="client-reviews__header">
          <h4>You're making us blush!</h4>
          <h1>What People Are Saying</h1>
        </div>

        <Carousel
          arrows={false}
          autoPlay
          autoPlaySpeed={7000}
          infinite
          showDots={false}
          transitionDuration={1000}
          responsive={{
            all: {
              breakpoint: { max: 3000, min: 0 },
              items: 1,
            },
          }}
        >
          {clients.map((client) => (
            <div key={client.id} className="client-reviews__content">
              <div className="client-reviews__left">
                <blockquote>"{client.review}"</blockquote>
              </div>

              <div className="client-reviews__right">
                <div
                  className="video-container"
                  style={{
                    backgroundImage: `url(${client.videoCover})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <video
                    src={client.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
