import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPassword from "@/components/auth/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Reset your account password."
    >
      <ForgotPassword />
    </AuthLayout>
  );
}