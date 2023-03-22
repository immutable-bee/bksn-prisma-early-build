import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (!session) {
      push("/auth/signin");
    } else {
      push("/listings");
    }
  }, [session]);
};

export default Index;
