import React, { useState } from "react";
import "./SeafarerProfile.css";

const SeafarerProfile = () => {
  const [currentPage, setCurrentPage] = useState("seafarer-details");

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal"
  ];

  const countries = [
    "India", "UAE", "Indonesia", "Nepal"
  ];

  const [personalDetails, setPersonalDetails] = useState({
    indosNumber: "",
    surname: "",
    givenName: "",
    gender: "",
    dob: "",
    placeOfBirth: "",
    birthState: "",
    birthCountry: "",
    nationality: "",
    discipline: "",
    email: "",
    phoneNumber: "",
  });

  const [addressDetails, setAddressDetails] = useState({
    present: {
      roomHouseNo: "",
      streetName: "",
      city: "",
      district: "",
      pin: "",
      state: "",
      country: ""
    },
    permanent: {
      roomHouseNo: "",
      streetName: "",
      city: "",
      district: "",
      pin: "",
      state: "",
      country: ""
    }
  });

  const [physicalDetails, setPhysicalDetails] = useState({
    height: "",
    eyeColor: "",
    identificationMark: "na",
    hairColor: "",
    complexion: ""
  });

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
  
    // Validate personal details
    Object.keys(personalDetails).forEach((key) => {
      if (!personalDetails[key].trim()) {
        newErrors[key] = "This field is required.";
      }
    });

     // Email validation: Must contain "@gmail.com"
     if (personalDetails.email && !personalDetails.email.endsWith("@gmail.com")) {
      newErrors.email = "Please enter a valid email address with @gmail.com";
    }

    // Phone number validation: Must be exactly 10 digits
    if (personalDetails.phoneNumber && !/^\d{10}$/.test(personalDetails.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number with 10 digits";
    }
  
    // Validate address details (both present and permanent)
    Object.keys(addressDetails.present).forEach((key) => {
      if (!addressDetails.present[key].trim()) {
        newErrors[`present_${key}`] = "This field is required.";
      }
    });
  
    Object.keys(addressDetails.permanent).forEach((key) => {
      if (!addressDetails.permanent[key].trim()) {
        newErrors[`permanent_${key}`] = "This field is required.";
      }
    });

    // Validate physical details
    Object.keys(physicalDetails).forEach((key) => {
      if (!physicalDetails[key].trim()) {
        newErrors[key] = "This field is required.";
      }
    });
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSaveAndNext = () => {
    if (validateFields()) {
      alert("Form saved successfully!");
      setCurrentPage("educational-details");
    }
  };

  const handleNext = () => {
    if (validateFields()) {
      setCurrentPage("educational-details");
    }
  };

  const handleClear = () => {
    setPersonalDetails({
      indosNumber: "",
      surname: "",
      givenName: "",
      gender: "",
      dob: "",
      placeOfBirth: "",
      birthState: "",
      birthCountry: "",
      nationality: "",
      discipline: "",
      email: "",
      mobileNumber: "",
    });
    setAddressDetails({
      present: {
        roomHouseNo: "",
        streetName: "",
        city: "",
        district: "",
        pin: "",
        state: "",
        country: ""
      },
      permanent: {
        roomHouseNo: "",
        streetName: "",
        city: "",
        district: "",
        pin: "",
        state: "",
        country: ""
      }
    });
    setErrors({});
  };

  const handleExit = () => {
    handleClear();
    setCurrentPage("seafarer-details"); // Exit to initial state
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
      <ul className="menu">
          <li onClick={() => navigateTo("seafarer-details")}>Seafarer Details</li>
          <li onClick={() => navigateTo("educational-details")}>Educational Details</li>
          <li onClick={() => navigateTo("professional-training-details")}>Professional Training Details</li>
          <li onClick={() => navigateTo("certificates")}>Certificates</li>
          <li onClick={() => navigateTo("documents")}>Documents</li>
          <li onClick={() => navigateTo("print-profile")}>Click to View and Print Your Profile</li>
          <li onClick={() => navigateTo("master-checker")}>Master Checker</li>
          <li onClick={() => navigateTo("seaservice-details")}>Seaservice Details</li>
          <li onClick={() => navigateTo("clearing_seaservice-details")}>Clearing Details</li>
          <li onClick={() => navigateTo("mail-box")}>Mail Box</li>
          <li onClick={() => navigateTo("cop")}>CoP</li>
          <li onClick={() => navigateTo("main-menu")}>Main Menu</li>
        </ul>
      </div>

      {currentPage === "seafarer-details" && (
        <div className="formContainer">
          <h2>Seafarer Profile</h2>
          <form id="seafarerForm">
            <fieldset>
              <legend>Personal Details</legend>
              <div className="form-columns">
                <div className="form-column">
                  <div className="form-field">
                    <label>
                      Indos No<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Indos No"
                      value={personalDetails.indosNumber}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, indosNumber: e.target.value })
                      }
                      className={errors.indosNumber ? "input-error" : ""}
                    />
                    {errors.indosNumber && <small className="error">{errors.indosNumber}</small>}
                  </div>
                  <div className="form-field">
                    <label>
                      Surname<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Surname"
                      value={personalDetails.surname}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, surname: e.target.value })
                      }
                      className={errors.surname ? "input-error" : ""}
                    />
                    {errors.surname && <small className="error">{errors.surname}</small>}
                  </div>
                  {/* Email Field */}
                  <div className="form-field">
                    <label>
                      Email<span className="required">*</span>:
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={personalDetails.email}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, email: e.target.value })
                      }
                      className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && <small className="error">{errors.email}</small>}
                  </div>

                  
                  <div className="form-field">
                    <label>
                      Gender<span className="required">*</span>:
                    </label>
                    <select
                      value={personalDetails.gender}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, gender: e.target.value })
                      }
                      className={errors.gender ? "input-error" : ""}
                    >
                      <option value="">------</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && <small className="error">{errors.gender}</small>}
                  </div>
                  <div className="form-field">
                    <label>
                      Date of Birth<span className="required">*</span>:
                    </label>
                    <input
                      type="date"
                      value={personalDetails.dob}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, dob: e.target.value })
                      }
                      className={errors.dob ? "input-error" : ""}
                    />
                    {errors.dob && <small className="error">{errors.dob}</small>}
                  </div>
                  <div className="form-field">
                    <label>
                      Birth State<span className="required">*</span>:
                    </label>
                    <select
                      value={personalDetails.birthState}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, birthState: e.target.value })
                      }
                      className={errors.birthState ? "input-error" : ""}
                    >
                      <option value="">------</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {errors.birthState && <small className="error">{errors.birthState}</small>}
                  </div>
                </div>

                <div className="form-column">
                  <div className="form-field">
                    <label>
                      Discipline<span className="required">*</span>:
                    </label>
                    <select
                      value={personalDetails.discipline}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, discipline: e.target.value })
                      }
                      className={errors.discipline ? "input-error" : ""}
                    >
                      <option value="">------</option>
                      <option value="nautical">Nautical</option>
                      <option value="container">Container</option>
                      <option value="cargoship">Cargo Ship</option>
                      <option value="cruise">Cruise</option>
                    </select>
                    {errors.discipline && <small className="error">{errors.discipline}</small>}
                  </div>
                  <div className="form-field">
                    <label>
                      Given Name<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Given name"
                      value={personalDetails.givenName}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, givenName: e.target.value })
                      }
                      className={errors.surname ? "input-error" : ""}
                    />
                    {errors.surname && <small className="error">{errors.givenName}</small>}
                  </div>
                  {/* Phone Number Field */}
                  <div className="form-field">
                    <label>
                      Phone Number<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      value={personalDetails.phoneNumber}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, phoneNumber: e.target.value })
                      }
                      className={errors.phoneNumber ? "input-error" : ""}
                    />
                    {errors.phoneNumber && <small className="error">{errors.phoneNumber}</small>}
                  </div>
                  <div className="form-field">
                    <label>
                      Place of Birth<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Place of Birth"
                      value={personalDetails.placeOfBirth}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, placeOfBirth: e.target.value })
                      }
                      className={errors.placeOfBirth ? "input-error" : ""}
                    />
                    {errors.placeOfBirth && <small className="error">{errors.placeOfBirth}</small>}
                  </div>
                  <div className="form-field">
                    <label>
                      Birth Country<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Birth Country"
                      value={personalDetails.birthCountry}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, birthCountry: e.target.value })
                      }
                      className={errors.birthCountry ? "input-error" : ""}
                    />
                    {errors.birthCountry && <small className="error">{errors.birthCountry}</small>}
                  </div>
                  <div className="form-field">
                    <label>
                      Nationality<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Nationality"
                      value={personalDetails.nationality}
                      onChange={(e) =>
                        setPersonalDetails({ ...personalDetails, nationality: e.target.value })
                      }
                      className={errors.nationality ? "input-error" : ""}
                    />
                    {errors.nationality && <small className="error">{errors.nationality}</small>}
                  </div>
                </div>
              </div>
            </fieldset>
          


      <fieldset className="address-fieldset">
        <legend className="address-legend">Address Details</legend>
        <div className="address-columns">
          {/* Present Address Section */}
          <div className="address-column">
            <h3>Present Address</h3>
            <div className="address-field">
              <label htmlFor="present_roomHouseNo">Room/House No<span className="required">*</span>:</label>
              <input
                type="text"
                id="present_roomHouseNo"
                value={addressDetails.present.roomHouseNo}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    present: { ...addressDetails.present, roomHouseNo: e.target.value },
                  })
                }
                className={errors.present_roomHouseNo ? "input-error" : ""}
              />
              {errors.present_roomHouseNo && <small className="error">{errors.present_roomHouseNo}</small>}
            </div>

            <div className="address-field">
              <label htmlFor="present_streetName">Street Name<span className="required">*</span>:</label>
              <input
                type="text"
                id="present_streetName"
                value={addressDetails.present.streetName}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    present: { ...addressDetails.present, streetName: e.target.value },
                  })
                }
                className={errors.present_streetName ? "input-error" : ""}
              />
              {errors.present_streetName && <span className="error">{errors.present_streetName}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="present_city">City<span className="required">*</span>:</label>
              <input
                type="text"
                id="present_city"
                value={addressDetails.present.city}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    present: { ...addressDetails.present, city: e.target.value },
                  })
                }
                className={errors.present_city ? "input-error" : ""}
              />
              {errors.present_city && <span className="error">{errors.present_city}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="present_district">District<span className="required">*</span>:</label>
              <input
                type="text"
                id="present_district"
                value={addressDetails.present.district}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    present: { ...addressDetails.present, district: e.target.value },
                  })
                }
                className={errors.present_district ? "input-error" : ""}
              />
              {errors.present_district && <span className="error">{errors.present_district}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="present_pin">Pin<span className="required">*</span>:</label>
              <input
                type="text"
                id="present_pin"
                value={addressDetails.present.pin}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    present: { ...addressDetails.present, pin: e.target.value },
                  })
                }
                className={errors.present_pin ? "input-error" : ""}
              />
              {errors.present_pin && <span className="error">{errors.present_pin}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="present_state">State<span className="required">*</span>:</label>
              <select
                id="present_state"
                value={addressDetails.present.state}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    present: { ...addressDetails.present, state: e.target.value },
                  })
                }
                className={errors.present_state ? "input-error" : ""}
              >
                <option value="">Select State<span className="required">*</span>:<span className="required">*</span></option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.present_state && <span className="error">{errors.present_state}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="present_country">Country<span className="required">*</span>:</label>
              <select
                id="present_country"
                value={addressDetails.present.country}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    present: { ...addressDetails.present, country: e.target.value },
                  })
                }
                className={errors.present_country ? "input-error" : ""}
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.present_country && <span className="error">{errors.present_country}</span>}
            </div>
          </div>

          {/* Permanent Address Section */}
          <div className="address-column">
            <h3>Permanent Address</h3>
            <div className="address-field">
              <label htmlFor="permanent_roomHouseNo">Room/House No<span className="required">*</span>:</label>
              <input
                type="text"
                id="permanent_roomHouseNo"
                value={addressDetails.permanent.roomHouseNo}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    permanent: { ...addressDetails.permanent, roomHouseNo: e.target.value },
                  })
                }
                className={errors.permanent_roomHouseNo ? "input-error" : ""}
              />
              {errors.permanent_roomHouseNo && <span className="error">{errors.permanent_roomHouseNo}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="permanent_streetName">Street Name<span className="required">*</span>:</label>
              <input
                type="text"
                id="permanent_streetName"
                value={addressDetails.permanent.streetName}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    permanent: { ...addressDetails.permanent, streetName: e.target.value },
                  })
                }
                className={errors.permanent_streetName ? "input-error" : ""}
              />
              {errors.permanent_streetName && <span className="error">{errors.permanent_streetName}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="permanent_city">City<span className="required">*</span>:</label>
              <input
                type="text"
                id="permanent_city"
                value={addressDetails.permanent.city}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    permanent: { ...addressDetails.permanent, city: e.target.value },
                  })
                }
                className={errors.permanent_city ? "input-error" : ""}
              />
              {errors.permanent_city && <span className="error">{errors.permanent_city}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="permanent_district">District<span className="required">*</span>:</label>
              <input
                type="text"
                id="permanent_district"
                value={addressDetails.permanent.district}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    permanent: { ...addressDetails.permanent, district: e.target.value },
                  })
                }
                className={errors.permanent_district ? "input-error" : ""}
              />
              {errors.permanent_district && <span className="error">{errors.permanent_district}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="permanent_pin">Pin<span className="required">*</span>:</label>
              <input
                type="text"
                id="permanent_pin"
                value={addressDetails.permanent.pin}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    permanent: { ...addressDetails.permanent, pin: e.target.value },
                  })
                }
                className={errors.permanent_pin ? "input-error" : ""}
              />
              {errors.permanent_pin && <span className="error">{errors.permanent_pin}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="permanent_state">State<span className="required">*</span>:</label>
              <select
                id="permanent_state"
                value={addressDetails.permanent.state}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    permanent: { ...addressDetails.permanent, state: e.target.value },
                  })
                }
                className={errors.permanent_state ? "input-error" : ""}
              >
                <option value="">Select State<span className="required">*</span>:</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.permanent_state && <span className="error">{errors.permanent_state}</span>}
            </div>
            <div className="address-field">
              <label htmlFor="permanent_country">Country<span className="required">*</span>:</label>
              <select
                id="permanent_country"
                value={addressDetails.permanent.country}
                onChange={(e) =>
                  setAddressDetails({
                    ...addressDetails,
                    permanent: { ...addressDetails.permanent, country: e.target.value },
                  })
                }
                className={errors.permanent_country ? "input-error" : ""}
              >
                <option value="">Select Country<span className="required">*</span>:</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.permanent_country && <span className="error">{errors.permanent_country}</span>}
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset>
              <legend>Physical Details</legend>
              <div className="form-columns">
                <div className="form-column">
                  <div className="form-field">
                    <label>
                      Height (in cms)<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Height"
                      value={physicalDetails.height}
                      onChange={(e) =>
                        setPhysicalDetails({ ...physicalDetails, height: e.target.value })
                      }
                      className={errors.height ? "input-error" : ""}
                    />
                    {errors.height && <small className="error">{errors.height}</small>}
                  </div>

                  <div className="form-field">
                    <label>
                      Eye Color<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Eye Color"
                      value={physicalDetails.eyeColor}
                      onChange={(e) =>
                        setPhysicalDetails({ ...physicalDetails, eyeColor: e.target.value })
                      }
                      className={errors.eyeColor ? "input-error" : ""}
                    />
                    {errors.eyeColor && <small className="error">{errors.eyeColor}</small>}
                  </div>

                  <div className="form-field">
                    <label>
                      Identification Mark<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Identification Mark"
                      value={physicalDetails.identificationMark}
                      onChange={(e) =>
                        setPhysicalDetails({ ...physicalDetails, identificationMark: e.target.value })
                      }
                      className={errors.identificationMark ? "input-error" : ""}
                    />
                    {errors.identificationMark && (
                      <small className="error">{errors.identificationMark}</small>
                    )}
                  </div>
                </div>

                <div className="form-column">
                  <div className="form-field">
                    <label>
                      Hair Color<span className="required">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Hair Color"
                      value={physicalDetails.hairColor}
                      onChange={(e) =>
                        setPhysicalDetails({ ...physicalDetails, hairColor: e.target.value })
                      }
                      className={errors.hairColor ? "input-error" : ""}
                    />
                    {errors.hairColor && <small className="error">{errors.hairColor}</small>}
                  </div>

                  <div className="form-field">
                    <label>
                      Complexion<span className="required">*</span>:
                    </label>
                    <select
                      value={physicalDetails.complexion}
                      onChange={(e) =>
                        setPhysicalDetails({ ...physicalDetails, complexion: e.target.value })
                      }
                      className={errors.complexion ? "input-error" : ""}
                    >
                      <option value="">Select Complexion</option>
                      <option value="fair">Fair</option>
                      <option value="medium">Medium</option>
                      <option value="dark">Dark</option>
                    </select>
                    {errors.complexion && <small className="error">{errors.complexion}</small>}
                  </div>
                </div>
              </div>
            </fieldset>

      </form>
      </div>
      
      )}
      

      <div className="buttonGroup">
        <button type="button" onClick={handleSaveAndNext}>
          Save & Next
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
        <button type="button" onClick={handleExit}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default SeafarerProfile;
