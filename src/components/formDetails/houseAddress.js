import "../../styles/formDetails.css";

export default function HouseAddress({ formData, setFormData }) {
  return (
    <div>
      <div className="form-field-text">
        <p className="sub-text">Step 4/5</p>
        <h2 className="main-text">
          Almost there, we need your precise location
        </h2>
        <p className="sub-text">Please fill in the details below</p>
      </div>
      <div className="form-field-divider"></div>
      <div className="form-field-input">
        <p className="sub-text">Enter your house number</p>
        <input
          type="text"
          className="input-field"
          value={formData?.houseNumber}
          onChange={(e) =>
            setFormData({ ...formData, houseNumber: e.target.value })
          }
          required
        />
        <p className="sub-text">Enter your street</p>
        <input
          type="text"
          className="input-field-2"
          value={formData?.street}
          onChange={(e) => setFormData({ ...formData, street: e.target.value })}
          required
        />
      </div>
    </div>
  );
}
