import AuthContainer from "./AuthContainer";
import Link from "next/link";
import Image from "next/image";
import { Spacer, Input, Button, Checkbox, Modal } from "@nextui-org/react";
import { ModalBase } from "./Modal";
import { useState } from "react";

const OnboardContentOne = (props) => {
  return (
    <div id="onboard-content-one-container" className="auth-content-container">
      <Link
        className="apply-return-link"
        href="/"
        onClick={props.loginReturnHandler}
      >
        <Image
          className="apply-return-button"
          src="/onboarding/chevron-icon.svg"
          alt="return icon"
          width="17"
          height="17"
        />
      </Link>

      <h2 className="auth-title-text">Apply to join the Bookseller Network</h2>
      <form id="apply-form" onSubmit={props.onSubmit}>
        <Input
          name="bname"
          className="onboard-fields"
          id="bname"
          placeholder="Business Name"
          contentLeft={
            <Image
              src="/icons/icon-tag.svg"
              alt="tag icon"
              height="17"
              width="17"
              id="bname-icon"
            />
          }
        />
        <Spacer y={0.5} />
        <Input
          name="email"
          className="onboard-fields"
          type="email"
          id="bmail"
          placeholder="Business Email"
          helperText="Will serve as your login email"
          contentLeft={
            <Image
              src="/onboarding/icons_envelope.svg"
              alt="tag icon"
              height="17"
              width="17"
              id="bname-icon"
            />
          }
        />
        <Spacer y={1.5} />
        <Input
          name="phone"
          className="onboard-fields"
          type="tel"
          id="btel"
          placeholder="Business Phone Number"
          contentLeft={
            <Image
              src="/onboarding/icons_phone.svg"
              alt="tag icon"
              height="17"
              width="17"
              id="bname-icon"
            />
          }
        />
        <Spacer y={0.5} />
        <Input
          name="url"
          className="onboard-fields"
          type="url"
          id="burl"
          placeholder="Website URL"
          contentLeft={
            <Image
              src="/onboarding/icons_link-on.svg"
              alt="tag icon"
              height="17"
              width="17"
              id="bname-icon"
            />
          }
        />
        <Spacer y={0.5} />
        <Input.Password
          name="password"
          placeholder="Password"
          id="password"
          className="onboard-fields"
          contentLeft={
            <Image
              src="/icons/icon-lock.svg"
              alt="tag icon"
              height="17"
              width="17"
              id="bname-icon"
            />
          }
        />
      </form>
      <Button
        type="submit"
        rounded
        id="application-next"
        className="application-btn"
        onClick={props.nextclick}
      >
        Next
      </Button>
      <h6 id="apply-terms">
        Booksellers Network is an exclusive network for booksotres in the US.
        When the application is submitted, you will be able to login into the
        booksellers network, but will not have access to sell or buy books until
        the approval process is complete. Read more
      </h6>
    </div>
  );
};

const OnboardContentTwo = (props) => {
  return (
    <div id="onboard-content-two-container" className="auth-content-container">
      <Link className="apply-return-link" href="/" onClick={props.returnclick}>
        <Image
          className="apply-return-button"
          src="/onboarding/chevron-icon.svg"
          alt="return icon"
          width="17"
          height="17"
        />
      </Link>

      <h2 className="auth-title-text">Apply to join the Booksellers Network</h2>
      <form id="apply-form-2" onSubmit={props.onSubmit}>
        <Input
          name="street"
          type="text"
          placeholder="Business Address"
          className="onboard-fields"
          contentLeft={
            <Image
              src="/onboarding/icons_location.svg"
              alt="location icon"
              height="17"
              width="17"
              id="baddress-icon"
            />
          }
        />
        <Spacer y={0.5} />
        <Input
          name="city"
          type="text"
          placeholder="Business City"
          className="onboard-fields"
          contentLeft={
            <Image
              src="/onboarding/map-icon.svg"
              alt="map icon"
              height="17"
              width="17"
              id="bcity-icon"
            />
          }
        />
        <Spacer y={0.5} />
        <div id="input-row-container">
          <Input
            className="short-onboard-fields"
            name="state"
            type="text"
            placeholder="Business State"
            contentLeft={
              <Image
                src="/onboarding/map-icon.svg"
                alt="map icon"
                height="17"
                width="17"
                id="bstate-icon"
              />
            }
          />
          <Input
            className="short-onboard-fields"
            name="zip"
            type="number"
            placeholder="Zip Code"
            contentLeft={
              <Image
                src="/onboarding/hashtag-icon.svg"
                alt="tag icon"
                height="17"
                width="17"
                id="bzip-code-icon"
              />
            }
          />
        </div>
      </form>
      <div id="t-c-container">
        <Checkbox size="sm" id="t-c-checkbox">
          I agree to the
        </Checkbox>
        <Button size={""} id="t-c-link" onClick={props.tcHandler}>
          Terms and Conditions
        </Button>
      </div>
      <Button
        type="submit"
        rounded
        size="lg"
        id="submit-application"
        className="application-btn"
      >
        Submit Application
      </Button>
      <h6 id="apply-terms">
        Booksellers Network is an exclusive network for booksotres in the US.
        When the application is submitted, you will be able to login into the
        booksellers network, but will not have access to sell or buy books until
        the approval process is complete. Read more
      </h6>
    </div>
  );
};

const modalBaseProps = (props) => {
  return {
    head: (
      <Modal.Header className="modal-header">
        <h4 className="modal-title">Terms & Conditions</h4>;
      </Modal.Header>
    ),
    body: (
      <Modal.Body className="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis
          parturient montes nascetur ridiculus mus mauris. Orci sagittis eu
          volutpat odio. Morbi blandit cursus risus at ultrices mi. Mattis
          molestie a iaculis at erat. Neque vitae tempus quam pellentesque nec.
          Et ligula ullamcorper malesuada proin libero nunc consequat interdum
          varius. Massa massa ultricies mi quis hendrerit. Sed risus ultricies
          tristique nulla aliquet. Blandit libero volutpat sed cras ornare arcu
          dui vivamus arcu. Phasellus egestas tellus rutrum tellus. Elementum
          integer enim neque volutpat ac tincidunt vitae semper quis. Cras
          semper auctor neque vitae tempus quam. Nec sagittis aliquam malesuada
          bibendum arcu vitae elementum curabitur vitae. Amet risus nullam eget
          felis. Magna sit amet purus gravida quis blandit turpis cursus in.
          Auctor elit sed vulputate mi sit amet mauris commodo quis. Quam nulla
          porttitor massa id neque aliquam vestibulum. Elementum curabitur vitae
          nunc sed velit dignissim.
        </p>
      </Modal.Body>
    ),
    foot: (
      <Modal.Footer className="modal-footer">
        {" "}
        <Button onClick={props.closebtn} id="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    ),
  };
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

const TCModalFoot = (props) => {
  return (
    <Modal.Footer className="modal-footer">
      {" "}
      <Button onClick={props.closebtn} id="modal-close-btn">
        Close
      </Button>
    </Modal.Footer>
  );
};

export const Register = (props) => {
  const [visible, setVisible] = useState(false);
  const [showApplyPageTwo, setShowApplyPageTwo] = useState(false);

  const tcModalHandler = () => setVisible(true);
  const tcModalCloseHandler = () => setVisible(false);

  const handleApplyNextClick = () => {
    setShowApplyPageTwo(true);
  };
  const handleReturnClick = () => {
    setShowApplyPageTwo(false);
  };

  if (!showApplyPageTwo) {
    return (
      <AuthContainer
        content={
          <OnboardContentOne
            nextclick={handleApplyNextClick}
            loginReturnHandler={props.handleLoginReturn}
            // onSubmit={onSubmitForm1}
          />
        }
      />
    );
  } else {
    return (
      <>
        <AuthContainer
          content={
            <OnboardContentTwo
              returnclick={handleReturnClick}
              //onSubmit={onSubmitForm2}
              tcHandler={tcModalHandler}
            />
          }
        />
        <ModalBase
          viewstate={visible}
          header={tcModalHead}
          body={tcModalBody}
          footer={<TCModalFoot closebtn={tcModalCloseHandler} />}
          closehandler={tcModalCloseHandler}
        />
      </>
    );
  }
};
