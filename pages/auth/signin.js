import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Button, Input, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import AuthContainer from "../../components/AuthContainer";

const providers = [
  {
    name: "google",
    icon: "/icons/icon-google.svg",
  },
  {
    name: "facebook",
    icon: "/icons/icon-fb.svg",
  },
  {
    name: "apple",
    icon: "/icons/icon-apple.svg",
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
    <AuthContainer
      content={
        <div className="auth-content-container">
          <h2 className="auth-title-text">
            Welcome to the Booksellers Network!
          </h2>
          <form id="login-form" onSubmit={handleSubmit}>
            <Input
              className="onboard-fields"
              placeholder="Your Email"
              id="email"
              name="email"
              type="email"
              contentLeft={
                <Image
                  src="/onboarding/icons_envelope.svg"
                  alt="mail icon"
                  height="17"
                  width="17"
                  id="bmail-icon"
                />
              }
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button id="login-btn" type="submit">
              Continue with email
            </Button>
            <Tooltip
              id="first-time-tooltip"
              content={
                "Welcome! At Booksellers Network we do not use email/password for login to keep your account as secure as possible. Instead you may enter your email and a signin link will be emailed to you. The first time you go through this process an account will be created for you. Alternatively you may also create an account using one of the social providers below. After creating your account you will have access to view our platform but will be unable to use our service (I.E. making or accepting offers) until you are approved. Approval usually happens within 24 hours."
              }
              color="primary"
            >
              <h6 id="first-time-label">First Time?</h6>
            </Tooltip>
          </form>
          <div id="center-split">
            <div className="dashed-line"></div>
            <h5 id="or-text">Or</h5>
            <div className="dashed-line"></div>
          </div>
          <div id="social-auth-container">
            {providers.map(({ name, icon }) => (
              <Button
                key={name}
                size={""}
                className="social-provider-btn"
                onClick={handle0AuthSignIn(name)}
                icon={
                  <Image
                    className="social-provider-icon"
                    src={icon}
                    alt={`${name} icon`}
                    width="30"
                    height="30"
                  />
                }
              ></Button>
            ))}
          </div>
          <h6 id="apply-terms">
            Booksellers Network is an exclusive network for booksotres in the
            US. When the application is submitted, you will be able to login
            into the booksellers network, but will not have access to sell or
            buy books until the approval process is complete. Read more
          </h6>
        </div>
      }
    />
  );
};

export default SignInPage;
