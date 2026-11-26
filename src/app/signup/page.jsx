import SignupForm from "@/components/auth/SignupForm";

export const metadata = {
  title: 'Create an account - Aurbina Scholars Hub',
  description: 'Create an Aurbina Scholars Hub account.',
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <section className="section-padding container-custom flex min-h-[70vh] items-center justify-center">
      <SignupForm />
    </section>
  );
}
