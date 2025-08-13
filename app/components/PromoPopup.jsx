import React, { useState } from "react";

const PromoPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;

  return (
    <>
      <div style={styles.overlay}>
        <div className="popup">
          <div className="imageWrapper">
            <img
              src="/assets/img/popup.jpg"
              alt="Laser Treatment Promo"
              className="promo-img"
            />
          </div>
          <div className="content">
            <span style={styles.closeBtn} onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <h2 style={styles.title}>PROMOS</h2>
            <h3 style={styles.subTitle}>LASER HAIR REMOVAL</h3>
            <p>upto 50% OFF!</p>
            <h3 style={styles.discount}>Complimentary Booster (worth AED 499)</h3>
            <p>with the purchase of any IV Drip valued at AED 1599</p>
            <h3 style={styles.discount}>Hollywood or Korean Facelift</h3>
            <p>Get 50% OFF!</p>
            <a
              href="https://api.whatsapp.com/send/?phone=97180048482&text=Hello&type=phone_number&app_absent=0"
              className="main-btn btn"
              style={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Local component-scoped styles */}
      <style>{`
        .popup {
          display: flex;
          flex-direction: row;
          max-width: 700px;
          width: 90%;
          border-radius: 10px;
          overflow: hidden;
          background-color: #f0eee3;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .imageWrapper {
          width: 50%;
          min-height: 400px;
          position: relative;
        }

        .promo-img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .content {
          width: 50%;
          padding: 40px 30px;
          color: #3d3428;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .popup {
            flex-direction: column;
            max-height: 620px;
          }

          .content{
            padding: 10px 30px;
          }

          .imageWrapper,
          .content {
            width: 100%;
          }

          .imageWrapper {
            min-height: 200px;
          }

          .promo-img {
            max-height: 200px;
          }
          
          .popup h2{
            font-size: 25px !important;
          }

          .popup h3{
            font-size: 15px !important;
          }

        }
      `}</style>
    </>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 15,
    right: 20,
    fontSize: 24,
    cursor: "pointer",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: "15px 0 5px",
  },
  discount: {
    fontSize: 18,
    fontWeight: "bold",
    margin: "15px 0 5px",
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    fontSize: 14,
    cursor: "pointer",
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "flex-start",
    textDecoration: "none",
    textAlign: "center",
  },
};

export default PromoPopup;