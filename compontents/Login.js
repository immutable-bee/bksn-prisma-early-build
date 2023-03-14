import Link from "next/link";
import Image from "next/image";
import { Spacer, Input, Button, Checkbox } from "@nextui-org/react";
import AuthContainer from "./AuthContainer";
import { useState } from "react";
import { Register } from "./Register";
import { signIn, useSession } from "next-auth/react";

const LoginContentOne = (props) => {
  return (
    <div id="login-content-one" className="auth-content-container">
      <h2 className="auth-title-text">Welcome to the Booksellers Network!</h2>
      <Input
        type="email"
        placeholder="Your Email"
        className="onboard-fields"
        contentLeft={
          <Image
            src="/onboarding/icons_envelope.svg"
            alt="mail icon"
            height="17"
            width="17"
            id="bmail-icon"
          />
        }
      />
      <Spacer y={0.5} />
      <Input
        type="password"
        placeholder="Password"
        className="onboard-fields"
        contentLeft={
          <Image
            src="/onboarding/lock-icon.svg"
            alt="lock icon"
            height="17"
            width="17"
            id="pass-icon"
          />
        }
      />
      <Spacer y={0.5} />
      <Button light rounded id="forgot-pass-txt">
        Forgot Password?
      </Button>
      <Link href="/">
        <Button size="lg" id="login-btn" rounded onClick={() => signIn()}>
          Log In
        </Button>
      </Link>
      <h6 id="signup-text" className="auth-content-text">
        Don't have an acoount yet?{" "}
      </h6>
      <Link id="apply-now-link" href="/" onClick={props.registerViewHandler}>
        <h5 id="apply-now-text">Apply Now</h5>
      </Link>
    </div>
  );
};

const LoginContentTwo = (props) => {
  return (
    <div id="login-content-two" className="auth-content-container">
      <Link className="apply-return-link" href="/" onClick={props.returnclick}>
        <Image
          className="apply-return-button"
          src="/onboarding/chevron-icon.svg"
          alt="return icon"
          width="17"
          height="17"
        />
      </Link>
      <h3 className="auth-title-text">Verification Code</h3>
      <h5>Please enter the code we sent you by email to test@example.com</h5>
      <Input type="number" />
      <Button rounded>Continue</Button>
      <Button light color="primary">
        Resend Code
      </Button>
    </div>
  );
};

export const Login = (props) => {
  const { data: session } = useSession();

  const [type, setType] = useState("login");
  const [loginStep, setLoginStep] = useState(0);

  const handleType = () => {
    if (type == "login") {
      setType("register");
    } else {
      setType("login");
    }
  };

  const handleLoginStep = () => {
    if (loginStep == 0) {
      setLoginStep(1);
    } else {
      setLoginStep(0);
    }
  };
  if (type == "login") {
    if (loginStep == 0) {
      return (
        <AuthContainer
          content={
            <LoginContentOne
              loginOnSubmit={handleLoginStep}
              registerViewHandler={handleType}
            />
          }
        />
      );
    } else {
      return (
        <AuthContainer
          content={<LoginContentTwo returnclick={handleLoginStep} />}
        />
      );
    }
  } else {
    return <Register handleLoginReturn={handleType} />;
  }
};
