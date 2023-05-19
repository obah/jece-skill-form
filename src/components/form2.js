import { useState } from "react";
import City from "./formDetails/city";
import Country from "./formDetails/country";
import HouseAddress from "./formDetails/houseAddress";
import Name from "./formDetails/name";
import Telephone from "./formDetails/telephone";
import "../styles/form.css";

//! this form componenet has more functionality than the other one as it allows the user to easily switch between the sections either through the next button or through options on the side. Works well but the state manangement causes the button switching or form validation to break in some certain scenarios

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    houseNumber: "",
    street: "",
    telephone: 0,
    country: "",
  });
  const [section, setSection] = useState(0);
  const [formValid, setFormValid] = useState(false);

  //to help with switching between sections, through the next button or section buttons by the side
  const switcher = () => {
    switch (+section) {
      case 0:
        return <Name formData={formData} setFormData={setFormData} />;
      case 1:
        return <City formData={formData} setFormData={setFormData} />;
      case 2:
        return <Telephone formData={formData} setFormData={setFormData} />;
      case 3:
        return <HouseAddress formData={formData} setFormData={setFormData} />;
      case 4:
        return <Country formData={formData} setFormData={setFormData} />;
      default:
        return <Name formData={formData} setFormData={setFormData} />;
    }
  };

  const formSectionOptions = [
    {
      title: "Your name",
      description: "First, Middle & Last name",
      icon: "iconHere",
      page: 0,
    },
    {
      title: "City",
      description: "Location",
      icon: "iconHere",
      page: 1,
    },
    {
      title: "Telephone",
      description: "Number",
      icon: "iconHere",
      page: 2,
    },
    {
      title: "House",
      description: "Address",
      icon: "iconHere",
      link: "house",
      page: 3,
    },
    {
      title: "Country of",
      description: "Residence",
      icon: "iconHere",
      page: 4,
    },
  ];

  //go to the next form section using the next button but first validate the visitor put in the right data
  const validateForm = (sectionNumber) => {
    if (sectionNumber === 0) {
      if (formData.name === "" || formData.name?.length <= 1) {
        setFormValid(false);
        alert("Your Name is missing.");
      } else {
        setFormValid(true);
      }
    } else if (sectionNumber === 1) {
      if (
        formData.city === "" ||
        formData.city?.length <= 1 ||
        formData.state === "" ||
        formData.state?.length <= 1
      ) {
        setFormValid(false);
        alert("Your City or State is missing.");
      } else {
        setFormValid(true);
      }
    } else if (sectionNumber === 2) {
      if (formData.telephone === "" || formData.telephone?.length <= 1) {
        setFormValid(false);
        alert("Your Telephone number is missing.");
      } else {
        setFormValid(true);
      }
    } else if (sectionNumber === 3) {
      if (
        formData.houseNumber === "" ||
        formData.houseNumber?.length < 1 ||
        formData.street === "" ||
        formData.street?.length <= 1
      ) {
        setFormValid(false);
        alert("Your House number or Street is missing");
      } else {
        setFormValid(true);
      }
    }
  };

  const handleFormSwitch = () => {
    if (+section >= 4) {
      setSection(0);
    } else {
      validateForm(section);
      if (formValid) {
        setSection(+section + 1);
      }
    }
  };
  console.log("section is :" + section);

  //one final form data validation is done here, because visitors can easily switch between the form sections without using the next button
  const handleFormSubmit = () => {
    if (formData.country === "Select country") {
      alert("Please select your country of residence.");
    } else if (
      formData.name === "" ||
      formData.name?.length <= 1 ||
      formData.city === "" ||
      formData.city?.length <= 1 ||
      formData.state === "" ||
      formData.state?.length <= 1 ||
      formData.telephone === "" ||
      formData.telephone?.length <= 1 ||
      formData.houseNumber === "" ||
      formData.houseNumber?.length < 1 ||
      formData.street === "" ||
      formData.street?.length <= 1
    ) {
      alert("Please ensure you have filled the form completely and properly");
    } else {
      const visitor = formData.name;
      alert(`Thank you ${visitor}, we will get back to you soon`);
      setSection(0);
      setFormData({
        name: "",
        city: "",
        state: "",
        houseNumber: "",
        street: "",
        telephone: 0,
        country: "",
      });
    }
  };

  return (
    <section className="form-card">
      <div className="form-heading">
        <h1 className="main-heading">My Skill Level</h1>
        <p className="subheading">
          Answer the following questions to begin your plan
        </p>
      </div>
      <div className="form-body">
        <div className="form-section">
          {formSectionOptions.map((options) => (
            <div
              className="sidebar-option"
              key={options.title}
              onClick={() => setSection(`${options.page}`)}
            >
              <div className="section-text">
                <p>{options.title}</p>
                <p>{options.description}</p>
              </div>
              <button
                className={`icons ${
                  section === options.page ? "selected-icon" : ""
                }`}
              >
                {options.icon}
              </button>
              <div
                className={`indicator ${
                  section === options.page ? "selected-indicator" : ""
                }`}
              ></div>
            </div>
          ))}
          <div className="line"></div>
        </div>
        <div className="form-field">
          {switcher()}
          <div>
            {section >= 4 ? (
              <button onClick={handleFormSubmit} className="form-button">
                SUBMIT
              </button>
            ) : (
              <button onClick={handleFormSwitch} className="form-button">
                NEXT STEP
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
