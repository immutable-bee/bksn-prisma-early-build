import VNavBar from "../compontents/VNavBar";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const ManageOffersPage = () => {
  const [view, setView] = useState("lReceived");

  const LORHandler = () => {
    setView("lRecieved");
  };
  const LOSHandler = () => {
    setView("lSent");
  };
  const RORHandler = () => {
    setView("rReceived");
  };
  const ROSHandler = () => {
    setView("rsent");
  };

  return (
    <div id="manage-page-container">
      <VNavBar manage="active-btn" />
      <div id="manage-body-container">
        <h5 id="manage-offers-title">Manage Offers</h5>
        {view == "lRecieved" ? (
          <div id="manage-view-buttons-container">
            <Button id="active-tab" rounded size={"sm"}>
              Listed Offers Recieved
            </Button>
            <Button
              onClick={LOSHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Listed Offers Sent
            </Button>
            <Button
              onClick={RORHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Request Offers Received
            </Button>
            <Button
              onClick={ROSHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Request Offers Sent
            </Button>
          </div>
        ) : view == "lSent" ? (
          <div id="manage-view-buttons-container">
            <Button
              onClick={LORHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Listed Offers Recieved
            </Button>
            <Button id="active-tab" rounded size={"sm"}>
              Listed Offers Sent
            </Button>
            <Button
              onClick={RORHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Request Offers Received
            </Button>
            <Button
              onClick={ROSHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Request Offers Sent
            </Button>
          </div>
        ) : view == "rReceived" ? (
          <div id="manage-view-buttons-container">
            <Button
              onClick={LORHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Listed Offers Recieved
            </Button>
            <Button
              onClick={LOSHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Listed Offers Sent
            </Button>
            <Button id="active-tab" rounded size={"sm"}>
              Request Offers Received
            </Button>
            <Button
              onClick={ROSHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Request Offers Sent
            </Button>
          </div>
        ) : (
          <div id="manage-view-buttons-container">
            <Button
              onClick={LORHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Listed Offers Recieved
            </Button>
            <Button
              onClick={LOSHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Listed Offers Sent
            </Button>
            <Button
              onClick={RORHandler}
              className="inactive-tab"
              rounded
              size={"sm"}
            >
              Request Offers Received
            </Button>
            <Button id="active-tab" rounded size={"sm"}>
              Request Offers Sent
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageOffersPage;
