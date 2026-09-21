import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useAuth } from "../auth/AuthContext";

export default function DemoLogin({ onSuccess }) {
  const { demoLogin } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleDemo = async () => {
    setLoading(true);

    try {
      await demoLogin();
      onSuccess();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className="demo-login"
      onClick={handleDemo}
      disabled={loading}
    >
      <span>
        <Sparkles size={17} />
        {loading ? "Entering Demo Mode..." : "Continue as Demo User"}
      </span>

      {!loading && <ArrowRight size={17} />}
    </button>
  );
}
