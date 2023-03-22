import VNavBar from "../components/VNavBar";
import { ModalBase } from "../components/Modal";
import { Button, Modal, Input, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import RequestCard from "../components/RequestCard";
import Image from "next/image";
import { getSession, useSession } from "next-auth/react";
import { prisma } from "../db/prismaDb";

const yellowCover = "/books/yellow-book.svg";
const greenCover = "/books/green-book.svg";
const blueCover = "/books/blue-book.svg";

// initial server side requests fetch
export async function getServerSideProps() {
  const requests = await prisma.request.findMany({
    include: {
      owner: {
        select: {
          business_name: true,
          business_state: true,
          business_city: true,
          id: true,
        },
      },
    },
  });

  return {
    props: {
      initialRequests: JSON.parse(JSON.stringify(requests)),
    },
  };
}

const openRequestIcon = (
  <Image
    src="/books/shopping-bag.svg"
    alt="Shopping bag icon"
    width="27"
    height="27"
  />
);

const submittedRequestIcon = (
  <Image src="/icons/icon-cross.svg" alt="Cancel icon" width="15" height="15" />
);

const makeOfferModalHead = (
  <Modal.Header>
    <h4>Make an Offer</h4>
  </Modal.Header>
);

const makeOfferModalBody = (
  <Modal.Body id="make-offer-modal-body-container">
    <Input
      className="make-offer-modal-field"
      bordered
      placeholder="Your Offer"
      contentLeft={
        <Image
          src="/icons/icon-tag.svg"
          alt="tag icon"
          width={20}
          height={20}
        />
      }
    />
    <Input
      className="make-offer-modal-field"
      bordered
      placeholder="Notes"
      contentLeft={
        <Image
          src="/icons/icon-comment.svg"
          alt="comment icon"
          width={20}
          height={20}
        />
      }
    />
    <Input
      className="make-offer-modal-field"
      bordered
      placeholder="Your bookstore email"
      contentLeft={
        <Image
          src="/icons/icon-envelope.svg"
          alt="envelope icon"
          width={20}
          height={20}
        />
      }
    />
    <div id="modal-upload-box">
      <Image
        src="/icons/icon-cloud.svg"
        alt="cloud icon"
        id="modal-upload-icon"
        width={"34"}
        height={"34"}
      />
      <h5 id="modal-upload-box-bold-txt">Select a picture to upload</h5>
      <h6 id="modal-upload-box-txt">or drag and drop it here</h6>
    </div>
    <Input
      className="make-offer-modal-field"
      bordered
      placeholder="Your card number"
      contentLeft={
        <Image src="/icons/icon-cc.svg" alt="cc icon" width={20} height={20} />
      }
    />
    <div id="make-offer-modal-row">
      <Input
        className="make-offer-modal-row-field"
        bordered
        placeholder="Expires"
        contentLeft={
          <Image
            className="make-offer-modal-row-icon"
            src="/icons/icon-calender.svg"
            alt="calender icon"
            width={20}
            height={20}
          />
        }
      />
      <Input
        className="make-offer-modal-row-field"
        bordered
        placeholder="CVV"
        contentLeft={
          <Image
            className="make-offer-modal-row-icon"
            src="/icons/icon-hashtag.svg"
            alt="hashtag icon"
            width={20}
            height={20}
          />
        }
      />
    </div>
    <Checkbox className="modal-checkbox">
      <h6 className="tc-text">I agree to the Terms and Condtions</h6>
    </Checkbox>
  </Modal.Body>
);

const MakeOfferModalFooter = (props) => (
  <Modal.Footer className="modal-footer">
    <Button rounded id="make-offer-modal-submit-btn">
      Submit Offer
    </Button>
    <Button id="make-offer-modal-cancel-btn" onClick={props.closebtn}>
      Cancel
    </Button>
  </Modal.Footer>
);

const RequestsPage = ({ initialRequests }) => {
  const { data: session } = useSession();

  // modal/view states
  const [view, setView] = useState("open requests");
  const [mvisible, setmVisible] = useState(false);

  // request types storage
  const [requests, setRequests] = useState(initialRequests);
  const [submittedRequests, setSubmittedRequests] = useState();
  const [inventory, setInventory] = useState();

  // api calls
  const cancelRequestHandler = async (request) => {
    deleteRequest(request);
  };

  const getInventory = async () => {
    await fetch("api/inventory", {
      method: "POST",
      body: JSON.stringify(session.user.email),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let inventoryItems = data;
        setInventory(inventoryItems);
      });
  };

  const getSubmittedRequests = async () => {
    await fetch("/api/submittedrequests", {
      method: "POST",
      body: JSON.stringify(session.user.email),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let ownedRequests = data;
        setSubmittedRequests(ownedRequests);
      });
  };

  const deleteRequest = async (request) => {
    await fetch("api/deleterequest", {
      method: "POST",
      body: JSON.stringify([session.user.email, request.id]),
    }).then((response) => {
      getSubmittedRequests();
      return response.json();
    });
  };

  useEffect(() => {
    if (session) {
      getInventory();
      getSubmittedRequests();
    }
  }, [session]);

  // modal/view handlers
  const requestModalHandler = () => setmVisible(true);
  const requestModalCloseHandler = () => setmVisible(false);
  const tabHandler = async () => {
    if (view == "open requests") {
      setView("requests submitted");
    } else {
      setView("open requests");
    }
  };

  // condition for filtering inventory/requests arrays
  const matchingCondition = ({ itemB, itemA }) => itemB.title == itemA.title;
  // returns filtered array of matching title.values between inventory & requests
  const matches = requests.filter((itemB) =>
    inventory.some((itemA) => matchingCondition({ itemB, itemA }))
  );
  // returns negatively filtered array from requests where matching titles in inventory are removed
  const noMatch = requests.filter(
    (itemB) => !inventory.some((itemA) => matchingCondition({ itemB, itemA }))
  );

  return (
    <div id="request-page-container">
      <VNavBar className="v-nav-bar-element" requests="active-btn" />
      <div id="requests-body-container">
        <h5 id="request-title">Requests</h5>
        <ModalBase
          viewstate={mvisible}
          closehandler={requestModalCloseHandler}
          header={makeOfferModalHead}
          body={makeOfferModalBody}
          footer={<MakeOfferModalFooter closebtn={requestModalCloseHandler} />}
        />
        {view == "open requests" ? (
          <div id="open-request-view-container">
            <div id="request-view-buttons-container">
              <Button onClick={tabHandler} id="active-tab" rounded size={"sm"}>
                Open Requests
              </Button>{" "}
              <Button
                onClick={tabHandler}
                className="inactive-tab"
                rounded
                size={"sm"}
              >
                Requests Submitted
              </Button>
            </div>
            <div id="request-content-container">
              <h4 className="requests-category-title">In your Inventory</h4>
              <div id="requests-in-inv-container">
                {requests.map((book) => {
                  return (
                    <RequestCard
                      key={book.id}
                      title={book.title}
                      storeName={book.owner.business_name}
                      location={`${book.owner.business_city}, ${book.owner.business_state}`}
                      cover={greenCover}
                      buttonType={"request-shopping-bag"}
                      btnHandler={requestModalHandler}
                      icon={openRequestIcon}
                    />
                  );
                })}
              </div>
              <h4 className="requests-category-title">Newest to Oldest</h4>
              <div id="requests-not-ininv-container">
                {requests.map((request) => {
                  return (
                    <RequestCard
                      key={request.id}
                      title={request.title}
                      storeName={request.owner.business_name}
                      location={`${request.owner.business_city}, ${request.owner.business_state}`}
                      cover={yellowCover}
                      buttonType={"request-shopping-bag"}
                      btnHandler={requestModalHandler}
                      icon={openRequestIcon}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div id="submitted-reqeust-view-container">
            <div id="request-view-buttons-container">
              <Button
                onClick={tabHandler}
                className="inactive-tab"
                rounded
                size={"sm"}
              >
                Open Requests
              </Button>{" "}
              <Button onClick={tabHandler} id="active-tab" rounded size={"sm"}>
                Requests Submitted
              </Button>
            </div>
            <h4 className="requests-category-title">Your Requests</h4>
            <div id="submitted-requests-content-container">
              {submittedRequests.map((request) => {
                return (
                  <RequestCard
                    key={request.id}
                    title={request.title}
                    //correct later
                    storeName={request.condition}
                    location={request.format}
                    cover={yellowCover}
                    buttonType={"request-cancel-button"}
                    icon={submittedRequestIcon}
                    btnHandler={() => {
                      cancelRequestHandler(request);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <ModalBase />
    </div>
  );
};

export default RequestsPage;
