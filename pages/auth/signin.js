import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Button, Input, Loading, Tooltip, Modal } from "@nextui-org/react";
import Image from "next/image";
import AuthContainer from "../../components/AuthContainer";
import { ModalBase } from "../../components/Modal";

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

const firstTimeMessage = () => {
  return (
    <p id="first-time-text">
      Welcome!<br></br> To get started please either enter your email or choose
      from one of our account providers. <br></br>
      <br></br> If you choose to use your email you will receive a sign in link.
      The first email will also create an account for you.<br></br>
      <br></br>After creating your account you will have access to view our
      platform but will be unable to use our service (I.E. making or accepting
      offers) until you are approved. Approval usually happens within 24 hours.
      <br></br>
      <br></br>
      By proceeding you are "opting in" to receive emails relevant to your
      account from Booksellers Network
    </p>
  );
};

const tcModalHead = (
  <Modal.Header className="modal-header">
    <h4 className="modal-title">Terms & Conditions</h4>;
  </Modal.Header>
);
const tcModalBody = (
  <Modal.Body className="modal-body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Magnis dis parturient
      montes nascetur ridiculus mus mauris. Orci sagittis eu volutpat odio.
      Morbi blandit cursus risus at ultrices mi. Mattis molestie a iaculis at
      erat. Neque vitae tempus quam pellentesque nec. Et ligula ullamcorper
      malesuada proin libero nunc consequat interdum varius. Massa massa
      ultricies mi quis hendrerit. Sed risus ultricies tristique nulla aliquet.
      Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Phasellus
      egestas tellus rutrum tellus. Elementum integer enim neque volutpat ac
      tincidunt vitae semper quis. Cras semper auctor neque vitae tempus quam.
      Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
      vitae. Amet risus nullam eget felis. Magna sit amet purus gravida quis
      blandit turpis cursus in. Auctor elit sed vulputate mi sit amet mauris
      commodo quis. Quam nulla porttitor massa id neque aliquam vestibulum.
      Elementum curabitur vitae nunc sed velit dignissim.
    </p>
  </Modal.Body>
);
const TCModalFoot = (props) => (
  <Modal.Footer className="modal-footer">
    {" "}
    <Button onClick={props.closebtn} id="modal-close-btn">
      Close
    </Button>
  </Modal.Footer>
);

const SignInPage = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [visible, setVisible] = useState(false);
  const termsModalHandler = () => setVisible(true);
  const termsModalCloseHandler = () => setVisible(false);

  console.log(session);
  if (status == "loading")
    return <AuthContainer content={<h1>Checking Authentication ... </h1>} />;

  if (session) {
    setTimeout(() => {
      push("/listings");
    }, 5000);

    return <AuthContainer content={<h5>you are already signed in</h5>} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email) return false;

    signIn("email", { email, redirect: false }).then(
      setTimeout(() => {
        setLoginSuccess(true), setLoading(false);
      }, 3000)
    );
  };

  const handle0AuthSignIn = (provider) => () => signIn(provider);

  if (!loading && !loginSuccess) {
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
            </form>
            <div id="center-split">
              <div className="dashed-line"></div>
              <h5 id="or-text">Or</h5>
              <div className="dashed-line"></div>
            </div>
            <div id="social-auth-container">
              <Button
                size={""}
                className="social-provider-btn"
                onClick={handle0AuthSignIn(providers[0].name)}
                icon={
                  <Image
                    className="social-provider-icon"
                    src={providers[0].icon}
                    alt={`${providers[0].name} icon`}
                    width="35"
                    height="35"
                  />
                }
              ></Button>
              <Button
                size={""}
                className="social-provider-btn"
                onClick={handle0AuthSignIn(providers[1].name)}
                icon={
                  <Image
                    className="social-provider-icon"
                    src={providers[1].icon}
                    alt={`${providers[1].name} icon`}
                    width="35"
                    height="35"
                  />
                }
              ></Button>
              <Button
                size={""}
                id="apple-btn"
                className="social-provider-btn"
                onClick={handle0AuthSignIn(providers[2].name)}
                icon={
                  <Image
                    id="apple-icon"
                    className="social-provider-icon"
                    src={providers[2].icon}
                    alt={`${providers[2].name} icon`}
                    width="45"
                    height="45"
                  />
                }
              ></Button>
            </div>
            <h6 id="apply-terms">
              Booksellers Network is an exclusive network for booksotres in the
              US. When the application is submitted, you will be able to login
              into the booksellers network, but will not have access to sell or
              buy books until the approval process is complete.
              <h6 id="modal-text-link" onClick={termsModalHandler}>
                Read more
              </h6>
            </h6>
            <Tooltip
              id="first-time-tooltip"
              content={firstTimeMessage()}
              color="default"
            >
              <h6 id="first-time-label">First Time?</h6>
            </Tooltip>
            <ModalBase
              viewstate={visible}
              header={tcModalHead}
              body={tcModalBody}
              footer={<TCModalFoot closebtn={termsModalCloseHandler} />}
              closehandler={termsModalCloseHandler}
            />
          </div>
        }
      />
    );
  } else if (loading) {
    return (
      <AuthContainer
        content={
          <div className="auth-content-container">
            {" "}
            <Loading id="login-loading" size="xl"></Loading>
          </div>
        }
      />
    );
  } else if (loginSuccess) {
    return (
      <AuthContainer
        content={
          <div className="auth-content-container">
            <p id="email-success-message">
              {" "}
              Email sent. Please be sure to check your spam folder if you do not
              see it. You may now close this tab{" "}
            </p>
          </div>
        }
      />
    );
  }
};

export default SignInPage;
