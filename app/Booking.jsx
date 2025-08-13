import React from "react";
import BookingForm from "../components/BookingForm";
import bookingHero from "../assets/img/booking/hero.png";
import { RxArrowTopRight } from "react-icons/rx";

const Booking = () => {
  return (
    <div className="booking">
      <img className="hero-img" src={bookingHero} alt="booking" />
      <div className="overlay"></div>
      <div className="booking-wrapper">
        <div className="container">
          <div className="booking-wrap">
            <span>IV WEllness Lounge Clinic</span>
            <h1 className="heading">Booking Now</h1>
            <div className="btn-wrap">
              <div className="btn btn-stroke">
                <span>Online Booking</span>
                <RxArrowTopRight />
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
