import React, { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

export default function PasswordInput({
  label = "Password",
  value,
  onChange,
  placeholder = "Enter your password",
  error,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="auth-field">
      <label>{label}</label>

      <div className={`auth-input ${error ? "has-error" : ""}`}>
        <span className="auth-input-icon">
          <LockKeyhole size={17} />
        </span>

        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setShow(!show)}
        >
          {show ? <EyeOff size={17} /> : <Eye size={17} />}
        </button>
      </div>

      {error && <small className="auth-error">{error}</small>}
    </div>
  );
}
