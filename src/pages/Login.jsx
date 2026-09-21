import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Compass,
  Map,
  Sparkles,
  ShieldCheck,
  Navigation,
  Mail,
  User,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

import { useAuth } from "../auth/AuthContext";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import SocialLogin from "../components/SocialLogin";
import DemoLogin from "../components/DemoLogin";

export default function Login() {
  const [mode, setMode] = useState("login");

  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 3500);
  };

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-image-overlay"></div>

        <div className="auth-brand">
          <div className="brand-logo">
            <Compass size={24} />
          </div>

          <span>
            YATRA <b>AI</b>
          </span>
        </div>

        <div className="auth-visual-content">
          <span className="auth-eyebrow">
            <Sparkles size={15} />
            INTELLIGENT TRAVEL PLANNING
          </span>

          <h1>
            Your journey
            <br />
            <span>starts here.</span>
          </h1>

          <p>
            Plan smarter journeys with AI-powered recommendations,
            adaptive routes and real-world travel intelligence.
          </p>

          <div className="auth-features">
            <div>
              <Map size={18} />
              <span>
                <b>Smart Journey Planning</b>
                Compare routes, costs and travel time.
              </span>
            </div>

            <div>
              <Navigation size={18} />
              <span>
                <b>Adaptive Travel</b>
                React to delays, traffic and availability.
              </span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>
                <b>Travel with Confidence</b>
                One intelligent travel companion.
              </span>
            </div>
          </div>
        </div>

        <div className="auth-visual-footer">
          Travel smarter. Adapt faster.
        </div>
      </div>

      <div className="auth-panel">
        <div className="auth-card">
          <div className="mobile-auth-brand">
            <div className="brand-logo">
              <Compass size={22} />
            </div>

            <span>
              YATRA <b>AI</b>
            </span>
          </div>

          {mode === "login" ? (
            <LoginForm
              setMode={setMode}
              showToast={showToast}
            />
          ) : (
            <SignupForm
              setMode={setMode}
              showToast={showToast}
            />
          )}
        </div>
      </div>

      {toast && (
        <div className="toast auth-toast">
          <CheckCircle2 size={17} />

          <span>{toast}</span>

          <button onClick={() => setToast("")}>
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}


function LoginForm({ setMode, showToast }) {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [forgotOpen, setForgotOpen] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await login(email, password, remember);

      showToast("Welcome back to YATRA AI.");

      const destination =
        location.state?.from || "/";

      setTimeout(() => {
        navigate(destination, { replace: true });
      }, 400);
    } catch (error) {
      setErrors({
        general: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDemoSuccess = () => {
    showToast("Welcome to YATRA AI Demo Mode.");

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 400);
  };

  return (
    <>
      <div className="auth-heading">
        <span className="auth-small-label">WELCOME BACK</span>

        <h2>Sign in to YATRA AI</h2>

        <p>
          Continue planning smarter journeys.
        </p>
      </div>

      {errors.general && (
        <div className="auth-general-error">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleLogin}>
        <AuthInput
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: "" });
          }}
          placeholder="you@example.com"
          error={errors.email}
          icon={<Mail size={17} />}
        />

        <PasswordInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: "" });
          }}
          error={errors.password}
        />

        <div className="auth-options">
          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="forgot-button"
            onClick={() => setForgotOpen(true)}
          >
            Forgot password?
          </button>
        </div>

        <button
          className="auth-submit"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="button-spinner"></span>
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </form>

      <div className="auth-divider">
        <span>OR</span>
      </div>

      <SocialLogin onDemoToast={showToast} />

      <DemoLogin onSuccess={handleDemoSuccess} />

      <p className="auth-switch">
        Don't have an account?

        <button onClick={() => setMode("signup")}>
          Create account
        </button>
      </p>

      {forgotOpen && (
        <ForgotPassword
          onClose={() => setForgotOpen(false)}
          showToast={showToast}
        />
      )}
    </>
  );
}


function SignupForm({ setMode, showToast }) {
  const { signup } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [travelStyle, setTravelStyle] = useState("Balanced");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters.";
    }

    if (password !== confirm) {
      newErrors.confirm =
        "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await signup({
        name,
        email,
        password,
        travelStyle,
      });

      showToast("Account created successfully.");

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    } catch (error) {
      setErrors({
        general: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="auth-heading">
        <span className="auth-small-label">
          START YOUR JOURNEY
        </span>

        <h2>Create your account</h2>

        <p>
          Build smarter travel plans with YATRA AI.
        </p>
      </div>

      {errors.general && (
        <div className="auth-general-error">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSignup}>
        <AuthInput
          label="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Arjun Kumar"
          error={errors.name}
          icon={<User size={17} />}
        />

        <AuthInput
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          error={errors.email}
          icon={<Mail size={17} />}
        />

        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <PasswordInput
          label="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Re-enter your password"
          error={errors.confirm}
        />

        <div className="auth-field">
          <label>Travel style <span>(optional)</span></label>

          <select
            className="auth-select"
            value={travelStyle}
            onChange={(e) =>
              setTravelStyle(e.target.value)
            }
          >
            <option>Balanced</option>
            <option>Budget Explorer</option>
            <option>Luxury Traveler</option>
            <option>Adventure</option>
            <option>Family</option>
            <option>Relaxed</option>
          </select>
        </div>

        <button
          className="auth-submit"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="button-spinner"></span>
              Creating account...
            </>
          ) : (
            <>
              Create Account
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </form>

      <p className="auth-switch">
        Already have an account?

        <button onClick={() => setMode("login")}>
          Sign in
        </button>
      </p>
    </>
  );
}


function ForgotPassword({ onClose, showToast }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      showToast("Password reset link simulated successfully.");
    }, 1000);
  };

  return (
    <div className="modal-backdrop">
      <div className="forgot-modal">
        <button
          className="modal-close"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        {!success ? (
          <>
            <div className="modal-icon">
              <Mail size={20} />
            </div>

            <h3>Reset your password</h3>

            <p>
              Enter your email and we'll simulate sending
              you a password reset link.
            </p>

            <form onSubmit={handleSubmit}>
              <AuthInput
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="you@example.com"
                error={error}
                icon={<Mail size={17} />}
              />

              <button
                className="auth-submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Send Reset Link"}
              </button>
            </form>
          </>
        ) : (
          <div className="reset-success">
            <CheckCircle2 size={45} />

            <h3>Check your email</h3>

            <p>
              This is a simulated password reset flow
              for the YATRA AI prototype.
            </p>

            <button
              className="auth-submit"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
