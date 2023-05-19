import "../../styles/formDetails.css";

export default function Name({ formData, setFormData }) {
  return (
    <div className="form-part">
      <div className="form-field-text">
        <p className="sub-text">Step 1/5</p>
        <h2 className="main-text">Let's start with your name</h2>
        <p className="sub-text">Please fill in the details below</p>
      </div>
      <div className="form-field-input">
        <p className="sub-text">Enter your name</p>
        <input
          type="text"
          className="input-field"
          value={formData?.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
    </div>
  );
}
