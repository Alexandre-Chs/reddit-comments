import { Link } from "@tanstack/react-router";

const inputClassName =
  "h-11 rounded-xl border border-neutral-800 bg-neutral-950/70 px-4 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500/40";

const RegisterForm = () => {
  return (
    <form className="grid gap-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-10 shadow-[0_40px_70px_-50px_rgba(15,15,15,0.8)] backdrop-blur">
      <header className="grid gap-2 text-center">
        <h2 className="text-xl font-semibold text-neutral-50">Create your account</h2>
        <p className="text-sm text-neutral-400">
          Already on Reddit Team Inbox?
          <Link to="/auth/login" className="ml-2 font-medium text-neutral-200 hover:text-white">
            Sign in
          </Link>
        </p>
      </header>

      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="fullName" className="text-xs font-medium uppercase tracking-wide text-neutral-300">
            Full name
          </label>
          <input id="fullName" name="fullName" type="text" placeholder="Jane Doe" className={inputClassName} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="teamName" className="text-xs font-medium uppercase tracking-wide text-neutral-300">
            Team name
          </label>
          <input
            id="teamName"
            name="teamName"
            type="text"
            placeholder="Growth Collective"
            className={inputClassName}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-neutral-300">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            className={inputClassName}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="password" className="text-xs font-medium uppercase tracking-wide text-neutral-300">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="grid gap-1 text-xs text-neutral-500">
        <p>
          By signing up, you agree to our
          <a href="#" className="ml-1 text-neutral-200 underline-offset-2 hover:underline">
            Terms of Service
          </a>{" "}
          and
          <a href="#" className="ml-1 text-neutral-200 underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-xl border border-neutral-700 bg-white/5 px-4 text-sm font-semibold text-neutral-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200/30"
      >
        Join the waitlist
      </button>
    </form>
  );
};

export default RegisterForm;
