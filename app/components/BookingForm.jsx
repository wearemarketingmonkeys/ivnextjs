import { useState } from "react";
import { GoClock } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";

// Demo service data
const services = {
  "IV Therapy": [
    "Immune Hub",
    "Energy Boost",
    "Recovery Plus",
    "Detox Cleanse",
  ],
  "Health Checkups": [
    "Basic Health Screen",
    "Full Body Check",
    "Women's Health",
    "Men's Health",
  ],
  "Aesthetic Packages": [
    "Anti-aging Treatment",
    "Skin Rejuvenation",
    "Body Contouring",
    "Face Lift",
  ],
};

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("IV Therapy");
  const [selectedServices, setSelectedServices] = useState([""]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("lounge");
  const [formErrors, setFormErrors] = useState({});
  const [medicalInfo, setMedicalInfo] = useState({
    hasConditions: "",
    ageRestricted: "",
    isPregnant: "",
  });
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const addService = () => {
    setSelectedServices([...selectedServices, ""]);
  };

  const updateService = (index, value) => {
    const newServices = [...selectedServices];
    newServices[index] = value;
    setSelectedServices(newServices);
  };

  const validateStep1 = () => {
    const errors = {};

    if (!selectedServices[0]) errors.service = true;
    if (!date) errors.date = true;
    if (!time) errors.time = true;
    if (!location) errors.location = true;

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors = {};

    if (!medicalInfo.hasConditions) errors.conditions = true;
    if (!medicalInfo.ageRestricted) errors.age = true;
    if (!medicalInfo.isPregnant) errors.pregnant = true;
    if (!personalInfo.name) errors.name = true;
    if (!personalInfo.email) errors.email = true;
    if (!personalInfo.phone) errors.phone = true;

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      // Handle form submission
      console.log("Form submitted:", {
        category,
        selectedServices,
        date,
        time,
        location,
        medicalInfo,
        personalInfo,
      });
    }
  };

  if (step === 1) {
    return (
      <div className="booking-card">
        <div className="card-header">
          <h1 className="card-title">Book an Appointment</h1>
          <p className="card-description">
            <GoClock />
            <span>Everyday Days: 10 am - 10pm</span>
          </p>
          <div className="progress-bar"></div>
          <div className="tabs">
            {Object.keys(services).map((cat) => (
              <button
                key={cat}
                className={`tab ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="card-content">
          {selectedServices.map((service, index) => (
            <div key={index} className="form-group">
              <label>What would you like to come in for?</label>
              <select
                value={service}
                onChange={(e) => updateService(index, e.target.value)}
                className={formErrors.service ? "error" : ""}
              >
                <option value="">Select a service</option>
                {services[category].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div className="btn-wrap">
            <button
              className="btn btn-stroke btn-stroke-green"
              onClick={addService}
            >
              + Add More
            </button>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={formErrors.date ? "error" : ""}
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={formErrors.time ? "error" : ""}
            >
              <option value="">Select time</option>
              {Array.from({ length: 13 }, (_, i) => i + 9).map((hour) => (
                <option key={hour} value={`${hour}:00`}>
                  {`${hour}:00`}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <div
              className={`radio-group ${formErrors.location ? "error" : ""}`}
            >
              <div className="radio-item">
                <input
                  type="radio"
                  id="lounge"
                  name="location"
                  value="lounge"
                  checked={location === "lounge"}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="lounge">
                  Lounge (IV Wellness Lounge, Marble Walk, DIFC, Dubai. Timings
                  10AM - 10PM Everyday)
                </label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="home"
                  name="location"
                  value="home"
                  checked={location === "home"}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="home">Home/Office</label>
              </div>
            </div>
          </div>

          <button onClick={handleNext} className="btn">
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-card">
      <div className="card-header">
        <h1 className="card-title">Book an Appointment</h1>
        <p className="card-description">
          <GoClock />
          <span>Everyday Days: 10 am - 10pm</span>
        </p>
        <div className="progress-bar bar2"></div>
      </div>

      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Do any of the participants receiving a drip have any significant
              medical conditions, such as issues with the heart, kidneys or
              liver, or conditions such as diabetes or cancer? *
            </label>
            <div
              className={`radio-group ${formErrors.conditions ? "error" : ""}`}
            >
              <div className="radio-item">
                <input
                  type="radio"
                  id="conditions-yes"
                  name="conditions"
                  value="yes"
                  checked={medicalInfo.hasConditions === "yes"}
                  onChange={(e) =>
                    setMedicalInfo({
                      ...medicalInfo,
                      hasConditions: e.target.value,
                    })
                  }
                />
                <label htmlFor="conditions-yes">Yes</label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="conditions-no"
                  name="conditions"
                  value="no"
                  checked={medicalInfo.hasConditions === "no"}
                  onChange={(e) =>
                    setMedicalInfo({
                      ...medicalInfo,
                      hasConditions: e.target.value,
                    })
                  }
                />
                <label htmlFor="conditions-no">No</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>
              Are any of the participants receiving a drip under the age of 18
              or over the age of 70? *
            </label>
            <div className={`radio-group ${formErrors.age ? "error" : ""}`}>
              <div className="radio-item">
                <input
                  type="radio"
                  id="age-yes"
                  name="age"
                  value="yes"
                  checked={medicalInfo.ageRestricted === "yes"}
                  onChange={(e) =>
                    setMedicalInfo({
                      ...medicalInfo,
                      ageRestricted: e.target.value,
                    })
                  }
                />
                <label htmlFor="age-yes">Yes</label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="age-no"
                  name="age"
                  value="no"
                  checked={medicalInfo.ageRestricted === "no"}
                  onChange={(e) =>
                    setMedicalInfo({
                      ...medicalInfo,
                      ageRestricted: e.target.value,
                    })
                  }
                />
                <label htmlFor="age-no">No</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Are you or anyone in your group currently pregnant? *</label>
            <div
              className={`radio-group ${formErrors.pregnant ? "error" : ""}`}
            >
              <div className="radio-item">
                <input
                  type="radio"
                  id="pregnant-yes"
                  name="pregnant"
                  value="yes"
                  checked={medicalInfo.isPregnant === "yes"}
                  onChange={(e) =>
                    setMedicalInfo({
                      ...medicalInfo,
                      isPregnant: e.target.value,
                    })
                  }
                />
                <label htmlFor="pregnant-yes">Yes</label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="pregnant-no"
                  name="pregnant"
                  value="no"
                  checked={medicalInfo.isPregnant === "no"}
                  onChange={(e) =>
                    setMedicalInfo({
                      ...medicalInfo,
                      isPregnant: e.target.value,
                    })
                  }
                />
                <label htmlFor="pregnant-no">No</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              value={personalInfo.name}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
              className={formErrors.name ? "error" : ""}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
              className={formErrors.email ? "error" : ""}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              type="tel"
              value={personalInfo.phone}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, phone: e.target.value })
              }
              className={formErrors.phone ? "error" : ""}
            />
          </div>

          <div className="note">
            <IoMdInformationCircleOutline />
            <p>
              Please Note: The nurse arrival time window may be up to 60 minutes
              from the requested time to allow for travel and previous
              appointment delays.
            </p>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
