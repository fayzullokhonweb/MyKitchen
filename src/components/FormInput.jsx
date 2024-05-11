import React from "react";

function FormInput({ label, name, type, placeholder }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input

        type={type}
        name={name}
        placeholder={placeholder}
        className="input focus:border-none input-bordered input-secondary w-full "
      />
    </label>
  );
}

export default FormInput;
