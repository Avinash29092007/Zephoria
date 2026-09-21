import {
  CheckCircle2,
  Mail,
  X,
} from "lucide-react";

import {
  useState,
} from "react";

import AuthInput from "../components/AuthInput";

interface ForgotPasswordModalProps {
  onClose: () => void;
  onToast: (message: string) => void;
}

export default function ForgotPasswordModal({
  onClose,
  onToast,
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const submit = async () => {
    setError("");

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      setError(
        "Please enter a valid email address."
      );

      return;
    }

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setLoading(false);
    setSuccess(true);

    onToast(
      "Password reset instructions have been sent."
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="forgot-password-title"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={19} />
        </button>

        {!success ? (
          <>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
              <Mail size={22} />
            </div>

            <h2
              id="forgot-password-title"
              className="text-2xl font-bold tracking-tight text-slate-900"
            >
              Reset your password
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your email and we'll send you
              a password reset link.
            </p>

            <div className="mt-6">
              <AuthInput
                id="reset-email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                error={error}
              />
            </div>

            <button
              type="button"
              onClick={submit}
              disabled={loading}
              className="mt-5 flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#09213d] px-4 text-sm font-bold text-white transition hover:bg-[#0d3159] disabled:opacity-60"
            >
              {loading
                ? "Sending..."
                : "Send Reset Link"}
            </button>
          </>
        ) : (
          <div className="py-5 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={32} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Check your email
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Password reset instructions have
              been sent.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-xl bg-[#09213d] px-6 py-3 text-sm font-bold text-white"
            >
              Back to Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
