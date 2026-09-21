import React from "react";

export default function AuthInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon,
}) {
  return (
    <div className="auth-field">
      <label>{label}</label>

      <div className={`auth-input ${error ? "has-error" : ""}`}>
        {icon && <span className="auth-input-icon">{icon}</span>}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>

      {error && <small className="auth-error">{error}</small>}
    </div>
  );
}
