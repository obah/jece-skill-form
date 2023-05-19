import { useState } from "react";
import City from "./formDetails/city";
import Country from "./formDetails/country";
import HouseAddress from "./formDetails/houseAddress";
import Name from "./formDetails/name";
import Telephone from "./formDetails/telephone";
import { HiOutlineUser, HiOutlineHome } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";
import { RiRoadMapLine } from "react-icons/ri";
import "../styles/form.css";

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

  //to help with switching between sections, through the next button
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
      icon: <HiOutlineUser />,
      page: 0,
    },
    {
      title: "City",
      description: "Location",
      icon: <RiRoadMapLine />,
      page: 1,
    },
    {
      title: "Telephone",
      description: "Number",
      icon: <FiPhoneCall />,
      page: 2,
    },
    {
      title: "House",
      description: "Address",
      icon: <HiOutlineHome />,
      page: 3,
    },
    {
      title: "Country of",
      description: "Residence",
      icon: <IoEarthOutline />,
      page: 4,
    },
  ];

  //go to the next form section using the next button but first validate the visitor put in the right data
  const handleFormSwitch = () => {
    if (section === 0) {
      if (formData.name === "" || formData.name?.length <= 1) {
        alert("Your Name is missing.");
      } else {
        setSection(+section + 1);
      }
    } else if (section === 1) {
      if (
        formData.city === "" ||
        formData.city?.length <= 1 ||
        formData.state === "" ||
        formData.state?.length <= 1
      ) {
        alert("Your City or State is missing.");
      } else {
        setSection(+section + 1);
      }
    } else if (section === 2) {
      if (formData.telephone === "" || formData.telephone?.length <= 1) {
        alert("Your Telephone number is missing.");
      } else {
        setSection(+section + 1);
      }
    } else if (section === 3) {
      if (
        formData.houseNumber === "" ||
        formData.houseNumber?.length < 1 ||
        formData.street === "" ||
        formData.street?.length <= 1
      ) {
        alert("Your House number or Street is missing");
      } else {
        setSection(+section + 1);
      }
    } else if (section === 4) {
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
        <h1>My Skill Level</h1>
        <p>Answer the following questions to begin your plan</p>
      </div>
      <div className="form-body">
        <div className="form-section">
          {formSectionOptions.map((options) => (
            <div className="sidebar-option" key={options.title}>
              <div className="section-text">
                <p>{options.title}</p>
                <p>{options.description}</p>
              </div>
              <p
                className={`icons ${
                  section === options.page ? "selected-icon" : ""
                }`}
              >
                {options.icon}
              </p>
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
          <div className="form-button">
            <button onClick={handleFormSwitch}>
              {section === 4 ? "SUBMIT" : "NEXT STEP"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
