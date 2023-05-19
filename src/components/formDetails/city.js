import "../../styles/formDetails.css";

export default function City({ formData, setFormData }) {
  return (
    <div>
      <div className="form-field-text">
        <p className="sub-text">Step 2/5</p>
        <h2 className="main-text">Now let's know your location</h2>
        <p className="sub-text">Please fill in the details below</p>
      </div>
      <div className="form-field-divider"></div>
      <div className="form-field-input">
        <p className="sub-text">Enter your city</p>
        <input
          type="text"
          className="input-field"
          value={formData?.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
        />
        <p className="sub-text">Enter your state</p>
        <input
          type="text"
          className="input-field-2"
          value={formData?.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.state })}
          required
        />
      </div>
    </div>
  );
}
