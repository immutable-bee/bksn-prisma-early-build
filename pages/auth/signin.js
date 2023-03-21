import React, { useState } from "react";
import {
  useSession,
  providers,
  signIn,
  csrfToken,
  getSession,
} from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/react";
import { useFormik } from "formik";

const providers = [
  {
    name: "google",
  },
  {
    name: "facebook",
  },
  {
    name: "apple",
  },
];

const SignInPage = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");

  console.log(session);
  if (status == "loading") return <h1>Checking Authentication ... </h1>;

  if (session) {
    setTimeout(() => {
      push("/listings");
    }, 5000);

    return <h1>you are already signed in</h1>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return false;

    signIn("email", { email, redirect: false });
  };

  const handle0AuthSignIn = (provider) => () => signIn(provider);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Continue with email</Button>
      </form>
      <div>
        {providers.map(({ name }) => (
          <Button
            key={name}
            size={""}
            className="social-provider-btn"
            onClick={handle0AuthSignIn(name)}
          >
            Sign in with {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SignInPage;
