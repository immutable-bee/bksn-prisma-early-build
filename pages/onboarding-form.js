import { useSession } from "next-auth/react";

const OnboardingFormPage = () => {
  const { data: session } = useSession({ required: true });

  const updateUser = async (data) => {
    await fetch("api/onboarding", {
      method: "POST",
      body: JSON.stringify([session.user.email, { data }]),
    });
  };
};

export default OnboardingFormPage;
