import VNavBar from "../compontents/VNavBar";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const ManageOffersPage = () => {
  const { data: session } = useSession();
  const [view, setView] = useState("lReceived");

  const [listingOffersRecieved, setListingOffersRecieved] = useState();
  const [requestOffersRecieved, setRequestOffersReceived] = useState();
  const [listingOffersSent, setListingOffersSent] = useState();
  const [requestOffersSent, setRequestOffersSent] = useState();

  const LORHandler = () => {
    setView("lReceived");
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

  const getOffers = async () => {
    await fetch("/api/offers", {
      method: "POST",
      body: JSON.stringify(session.user.email),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let [listingOffersR, requestOffersR, listingOffersS, requestOffersS] =
          data;
        setListingOffersRecieved(listingOffersR);
        setRequestOffersReceived(requestOffersR);
        setListingOffersSent(listingOffersS);
        setRequestOffersSent(requestOffersS);
      });
  };

  useEffect(() => {
    if (session) {
      getOffers();
    }
  }, [session]);

  return (
    <div id="manage-page-container">
      <VNavBar manage="active-btn" />
      <div id="manage-body-container">
        <h5 id="manage-offers-title">Manage Offers</h5>
        {view == "lReceived" ? (
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
