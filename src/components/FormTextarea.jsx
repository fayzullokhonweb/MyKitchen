import React from "react";

function FormTextarea({ label, name, placeholder }) {
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <textarea
          name={name}
          className="textarea  h-24  focus:border-none input-bordered input-secondary"
          placeholder={placeholder}
        ></textarea>
      </label>
    </div>
  );
}

export default FormTextarea;
