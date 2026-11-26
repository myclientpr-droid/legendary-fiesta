'use client'
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

// Only allow same-origin paths, so a crafted ?callbackUrl=https://evil.test
// cannot bounce a user off the site right after they authenticate.
const resolveCallbackUrl = () => {
  const fromQuery = new URLSearchParams(window.location.search).get("callbackUrl");
  if (fromQuery?.startsWith("/") && !fromQuery.startsWith("//")) return fromQuery;
  return "/admin";
};

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      return toast.error("Please enter your email and password");
    }

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        setData(data => ({...data, password: ""}));
        return toast.error("Invalid email or password");
      }

      toast.success("Signed in successfully");
      // Full navigation so server components pick up the new session cookie
      window.location.href = resolveCallbackUrl();
    } catch (e) {
      return toast.error(e.message || "Unable to sign in right now");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass mx-auto flex w-full max-w-md flex-col gap-5 p-6 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Welcome back</h1>
        <p className="text-sm text-slate-600">Sign in to manage news and programs.</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="you@example.com"
          onChange={handleChange}
          className="input-field"
          value={data.email} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Your password"
            onChange={handleChange}
            className="input-field pr-16"
            value={data.password} />
          <button
            type="button"
            onClick={() => setShowPassword(showPassword => !showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-slate-800">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center pt-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-3 disabled:opacity-60">
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </div>

      <p className="text-center text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-primary-600 transition hover:text-primary-700">
          Create one
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
