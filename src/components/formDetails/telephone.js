import "../../styles/formDetails.css";

export default function Telephone({ formData, setFormData }) {
  return (
    <div>
      <div className="form-field-text">
        <p className="sub-text">Step 3/5</p>
        <h2 className="main-text">Now your contact detail</h2>
        <p className="sub-text">Please fill in the details below</p>
      </div>
      <div className="form-field-divider"></div>
      <div className="form-field-input">
        <p className="sub-text">
          Enter your telephone number with country code
        </p>
        <input
          type="number"
          className="input-field-2"
          value={formData?.telephone}
          onChange={(e) =>
            setFormData({ ...formData, telephone: e.target.value })
          }
          required
        />
      </div>
    </div>
  );
}
