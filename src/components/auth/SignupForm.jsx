'use client'
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password) {
      return toast.error("Please fill in all fields");
    }
    if (data.password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }
    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);
      await axios.post("/api/auth/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      toast.success("Account created successfully");

      // Sign the new account straight in, then let the admin layout authorise it
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        return window.location.href = "/login";
      }

      window.location.href = "/admin";
    } catch (e) {
      return toast.error(e.response?.data?.message || e.message || "Unable to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass mx-auto flex w-full max-w-md flex-col gap-5 p-6 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Create your account</h1>
        <p className="text-sm text-slate-600">Admin access is granted by email allowlist.</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">Full name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          placeholder="Your name"
          onChange={handleChange}
          className="input-field"
          value={data.name} />
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
            autoComplete="new-password"
            placeholder="At least 8 characters"
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

      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">Confirm password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          id="confirmPassword"
          autoComplete="new-password"
          placeholder="Repeat your password"
          onChange={handleChange}
          className="input-field"
          value={data.confirmPassword} />
      </div>

      <div className="w-full flex justify-center pt-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-3 disabled:opacity-60">
          {loading ? "Creating account..." : "Create account"}
        </button>
      </div>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary-600 transition hover:text-primary-700">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
