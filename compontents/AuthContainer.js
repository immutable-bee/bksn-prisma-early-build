import Image from "next/image";

const AuthContainer = (props) => {
  return (
    <div className="onboarding-page-container">
      <div id="ellipse-1"></div>
      <div id="ellipse-2"></div>
      <div id="people-svg-container">
        <Image
          id="people-svg"
          src="/onboarding/people.svg"
          alt="People Networking"
          width={500}
          height={450}
        />
      </div>
      <div id="auth-rect-container">
        <Image src="/logo.png" alt="Logo" width="228" height="107" id="logo" />
        {props.content}
      </div>
    </div>
  );
};

export default AuthContainer;
