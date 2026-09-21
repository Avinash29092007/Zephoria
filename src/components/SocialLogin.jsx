import React from "react";
import { Chrome, Apple } from "lucide-react";

export default function SocialLogin({ onDemoToast }) {
  return (
    <div className="social-login">
      <button
        type="button"
        onClick={() => onDemoToast("Google login is simulated in Demo Mode.")}
      >
        <Chrome size={17} />
        Continue with Google
      </button>

      <button
        type="button"
        onClick={() => onDemoToast("Apple login is simulated in Demo Mode.")}
      >
        <Apple size={17} />
        Continue with Apple
      </button>
    </div>
  );
}
