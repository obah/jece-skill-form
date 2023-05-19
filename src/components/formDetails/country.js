import "../../styles/formDetails.css";

export default function Country({ formData, setFormData }) {
  const countries = [
    { name: "Nigeria" },
    { name: "Australia" },
    { name: "Canada" },
    { name: "China" },
    { name: "India" },
    { name: "Ireland" },
    { name: "Germany" },
    { name: "Ghana" },
    { name: "Netherlands" },
    { name: "South Africa" },
    { name: "Sweden" },
    { name: "United kingdom" },
    { name: "United States of America" },
  ];

  return (
    <div>
      <div className="form-field-text">
        <p className="sub-text">Step 5/5</p>
        <h2 className="main-text">
          Finally, your current country of residence
        </h2>
        <p className="sub-text">Please fill in the details below</p>
      </div>
      <div className="form-field-divider"></div>
      <div className="form-field-input">
        <p className="sub-text">What country do you live in currently</p>
        <label>
          <div className="selector">
            <select
              name="country"
              className="form-select"
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              value={formData?.country}
            >
              {countries.map((country) => (
                <option value={country.name} key={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
    </div>
  );
}
