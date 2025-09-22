import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-16 text-neutral-100">
      <div className="grid w-full max-w-5xl gap-12 md:grid-cols-[1.1fr_minmax(0,1fr)] md:items-center">
        <section className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Register
          </span>
          <div className="grid gap-4 text-neutral-300">
            <h1 className="text-3xl font-semibold text-neutral-50 sm:text-4xl">
              Set up your Reddit Team Inbox
            </h1>
            <p className="text-sm leading-relaxed text-neutral-400">
              Create an account to centralize every Reddit mention, assign conversations, and keep your team aligned without leaving the keyboard.
            </p>
          </div>
        </section>

        <div className="md:justify-self-end">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
