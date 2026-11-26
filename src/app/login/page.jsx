import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: 'Sign in - Aurbina Scholars Hub',
  description: 'Sign in to the Aurbina Scholars Hub admin dashboard.',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <section className="section-padding container-custom flex min-h-[70vh] items-center justify-center">
      <LoginForm />
    </section>
  );
}
