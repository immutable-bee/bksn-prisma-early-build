import VNavBar from "../components/VNavBar";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const FormStepOne = (props) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const userEmail = session.user.email;
      setSenderEmail(userEmail);
    }
  }, [session]);

  const [senderEmail, setSenderEmail] = useState();

  const [newRequest, setNewRequest] = useState({
    title: "",
    condition: "",
    format: "",
    author: "",
    isbn: "",
    notes: "",
    date_expires: new Date("2023-03-20").toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date_expires") {
      setNewRequest({
        ...newRequest,
        date_expires: new Date(value).toISOString(),
      });
    } else {
      setNewRequest({ ...newRequest, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/makerequest", {
      method: "POST",
      body: JSON.stringify([senderEmail, newRequest]),
    });

    return await response.json();
  };

  return (
    <div className="make-request-page-container">
      <VNavBar requestBook="active-btn" />
      <div className="make-request-body-container">
        <h5 className="corner-title">Request a book</h5>
        <div className="request-form-container">
          <h4 className="request-form-title">Your Request</h4>
          <form className="new-request-form" onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              name="title"
              className="new-request-field"
              type="text"
              placeholder="Book Title"
              contentLeft={
                <Image
                  src="/request-a-book/icon-tag.svg"
                  alt="tag icon"
                  height="17"
                  width="17"
                  id="tag-icon"
                />
              }
            />
            <Input
              onChange={handleChange}
              name="isbn"
              className="new-request-field"
              type="text"
              placeholder="ISBN"
              contentLeft={
                <Image
                  src="/request-a-book/icon-hashtag.svg"
                  alt="hashtag icon"
                  height="17"
                  width="17"
                  id="hashtag-icon"
                />
              }
            />
            <Input
              onChange={handleChange}
              name="author"
              className="new-request-field"
              type="text"
              placeholder="Author"
              contentLeft={
                <Image
                  src="/request-a-book/icon-person.svg"
                  alt="person icon"
                  height="17"
                  width="17"
                  id="person-icon"
                />
              }
            />
            <Input
              onChange={handleChange}
              name="condition"
              className="new-request-field"
              type="text"
              placeholder="Condition"
              contentLeft={
                <Image
                  src="/request-a-book/icon-clipboard.svg"
                  alt="clipboard icon"
                  height="17"
                  width="17"
                  id="clipboard-icon"
                />
              }
            />
            <Input
              onChange={handleChange}
              name="format"
              className="new-request-field"
              type="text"
              placeholder="Format"
              contentLeft={
                <Image
                  src="/request-a-book/icon-book.svg"
                  alt="book icon"
                  height="17"
                  width="17"
                  id="book-icon"
                />
              }
            />
            <Input
              onChange={handleChange}
              name="notes"
              className="new-request-field"
              type="text"
              placeholder="Notes"
              contentLeft={
                <Image
                  src="/request-a-book/icon-chatdots.svg"
                  alt="chat icon"
                  height="17"
                  width="17"
                  id="chat-icon"
                />
              }
            />
            <Input
              onChange={handleChange}
              className="new-request-expires-field"
              name="date_expires"
              type={"date"}
              labelLeft="Expires:"
            />
            <Button
              type="submit"
              onClick={props.formStepHandler}
              rounded
              className="request-next-btn"
            >
              {props.formStepOneBtnText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const FormStepTwo = (props) => {
  return (
    <div className="make-request-page-container">
      <VNavBar requestBook="active-btn" />
      <div className="make-request-body-container">
        <div className="top-row">
          <Button
            size={"1"}
            className="return-btn"
            onClick={props.returnBtn}
            icon={
              <Image
                src="/onboarding/chevron-icon.svg"
                alt="return icon"
                width="17"
                height="17"
              />
            }
          ></Button>
          <h5 className="corner-title">Request a book</h5>
        </div>
        <div className="request-form-container">
          <h4 className="request-form-title">
            Your Contact and Shipping Details
          </h4>
          <form className="new-request-form">
            <Input
              className="new-request-field"
              placeholder="Your bookstore email"
              contentLeft={
                <Image
                  src="/icons/icon-envelope.svg"
                  alt="envelope icon"
                  height="17"
                  width="17"
                  id="envelope-icon"
                />
              }
            />
            <Input
              className="new-request-field"
              placeholder="Shipping Address"
              contentLeft={
                <Image
                  src="/icons/icon-location.svg"
                  alt="location icon"
                  height="17"
                  width="17"
                  id="location-icon"
                />
              }
            />
            <Input
              className="new-request-field"
              placeholder="Shipping City"
              contentLeft={
                <Image
                  src="/icons/icon-map.svg"
                  alt="map icon"
                  height="17"
                  width="17"
                  id="map-icon"
                />
              }
            />
            <Input
              className="new-request-field"
              placeholder="Shipping State"
              contentLeft={
                <Image
                  src="/icons/icon-map.svg"
                  alt="map icon"
                  height="17"
                  width="17"
                  id="map-icon"
                />
              }
            />
            <Input
              className="new-request-field"
              placeholder="Zip Code"
              contentLeft={
                <Image
                  src="/icons/icon-hashtag.svg"
                  alt="hashtag icon"
                  height="17"
                  width="17"
                  id="hashtag-icon"
                />
              }
            />
            <Button
              className="request-next-btn"
              onClick={props.formStepHandler}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
/*
const FormStepThree = (props) => {
  return (
    <div className="make-request-page-container">
      <VNavBar requestBook="active-btn" />
      <div className="make-request-body-container">
        <div className="top-row">
          <Button
            size={"1"}
            className="return-btn"
            onClick={props.returnBtn}
            icon={
              <Image
                src="/onboarding/chevron-icon.svg"
                alt="return icon"
                width="17"
                height="17"
              />
            }
          ></Button>
          <h5 className="corner-title">Request a book</h5>
        </div>
        <div className="request-form-container">
          <h4 className="request-form-title">Your Payment Details</h4>
          <form className="new-request-form">
            <Input
              className="new-request-field"
              placeholder="Your Card Number"
              contentLeft={
                <Image
                  src="/icons/icon-cc.svg"
                  alt="CC icon"
                  height="17"
                  width="17"
                  id="cc-icon"
                />
              }
            />
            <Input
              className="new-request-field"
              placeholder="Expires"
              contentLeft={
                <Image
                  src="/icons/icon-calender.svg"
                  alt="calender icon"
                  height="17"
                  width="17"
                  id="calender-icon"
                />
              }
            />
            <Input
              className="new-request-field"
              placeholder="CVV"
              contentLeft={
                <Image
                  src="/icons/icon-hashtag.svg"
                  alt="hashtag icon"
                  height="17"
                  width="17"
                  id="hashtag-icon"
                />
              }
            />
            <Checkbox>I agree to the Terms and Conditions</Checkbox>
            <Button
              className="request-next-btn"
              onClick={props.formStepHandler}
            >
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
*/
const MakeRequestPage = () => {
  // State object for handling the 3 views of the request a book form
  const [requestFormStep, setRequestFormStep] = useState(0);
  const [formOneBtnText, setFormOneBtnText] = useState("Next");

  // increments form step, passed to next button
  const requestFormBtnHandler = () => {
    if (requestFormStep == 0) {
      setRequestFormStep(1);
    } else if (requestFormStep == 1) {
      handleSubmitRequest();
    }
  };

  // decrements form step, passed to return button
  const returnBtnHandler = () => {
    if (requestFormStep == 1) {
      setRequestFormStep(0);
    } else {
      setRequestFormStep(1);
    }
  };

  if (requestFormStep == 0) {
    return <FormStepOne formStepOneBtnText={formOneBtnText} />;
  } else if (requestFormStep == 1) {
    return (
      <FormStepTwo
        formStepHandler={requestFormBtnHandler}
        returnBtn={returnBtnHandler}
      />
    );
  } /* else if (requestFormStep == 2) {
    return (
      <FormStepThree
        formStepHandler={requestFormBtnHandler}
        returnBtn={returnBtnHandler}
      />
    );
  }
  */
};

export default MakeRequestPage;
