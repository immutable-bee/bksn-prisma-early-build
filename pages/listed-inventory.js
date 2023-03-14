import { useEffect, useState } from "react";
import Book from "../compontents/BookCard";
import VNavBar from "../compontents/VNavBar";
import SearchBar from "../compontents/SearchBar";
import { ModalBase } from "../compontents/Modal";
import { Input, Modal, Button } from "@nextui-org/react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const buyRequestModalHeader = (
  <Modal.Header className="modal-header">
    <h4 className="modal-title">Request To Buy</h4>;
  </Modal.Header>
);
const buyRequestModalBody = (
  <Modal.Body className="modal-body">
    <Input
      className="buy-modal-field"
      bordered
      id="brmb-field1"
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
      className="buy-modal-field"
      bordered
      id="brmb-field2"
      placeholder="Your Bookstore email"
      contentLeft={
        <Image
          src="/icons/icon-envelope.svg"
          alt="envelope icon"
          width={20}
          height={20}
        />
      }
    />
    <Input
      className="buy-modal-field"
      bordered
      id="brmb-field3"
      placeholder="Shipping Address"
      contentLeft={
        <Image
          src="/icons/icon-location.svg"
          alt="icon location"
          width={20}
          height={20}
        />
      }
    />
    <Input
      className="buy-modal-field"
      bordered
      id="brmb-field4"
      placeholder="Shipping City"
      contentLeft={
        <Image src="icons/icon-map.svg" alt="map icon" width={20} height={20} />
      }
    />
    <div id="modal-body-row">
      <Input
        bordered
        id="brmb-field5"
        placeholder="Shipping State"
        contentLeft={
          <Image
            src="/icons/icon-map.svg"
            alt="map icon"
            width={20}
            height={20}
          />
        }
      />
      <Input
        bordered
        id="brmb-field6"
        placeholder="Zip Code"
        contentLeft={
          <Image
            src="/icons/icon-hashtag.svg"
            alt="hashtag icon"
            width={20}
            height={20}
          />
        }
      />
    </div>
  </Modal.Body>
);
const BuyRequestModalFooter = (props) => (
  <Modal.Footer className="modal-footer">
    <Button id="modal-next-btn">Next</Button>
    <Button onClick={props.closebtn} id="modal-cancel-btn">
      Cancel
    </Button>
  </Modal.Footer>
);

const blueCover = "/books/blue-book.svg";

const ListedInvPage = () => {
  const { data: session } = useSession({ required: true });

  const [inventory, setInventory] = useState([]);

  const [books, setBooks] = useState([
    {
      title: "Da Vinci Code",
      condition: "Good Condition",
      price: "$10.99",
      id: 1,
    },
    {
      title: "Angels and Demons",
      condition: "As good as new",
      price: "$10.99",
      id: 2,
    },
    {
      title: "Catching Fire",
      condition: "Good Condition",
      price: "$10.99",
      id: 3,
    },
    {
      title: "Twilight",
      condition: "Fair Condition",
      price: "$10.99",
      id: 4,
    },
    {
      title: "The Lost Symbom",
      condition: "Good Condtion",
      price: "$14.99",
      id: 5,
    },
    {
      title: "Da Vinci Code",
      condition: "Good Condition",
      price: "$10.99",
      id: 1,
    },
    {
      title: "Angels and Demons",
      condition: "As good as new",
      price: "$10.99",
      id: 2,
    },
    {
      title: "Catching Fire",
      condition: "Good Condition",
      price: "$10.99",
      id: 3,
    },
  ]);
  const [visible, setVisible] = useState(false);

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

  const deleteListing = async (listing) => {
    await fetch("api/deletelisting", {
      method: "POST",
      body: JSON.stringify([session.user.email, listing.id]),
    }).then((response) => {
      getInventory();
      return response.json();
    });
  };

  const modalHandler = () => setVisible(true);
  const modalCloseHandler = () => setVisible(false);

  // function to display book detail view
  const bookClickHandler = () => {};

  useEffect(() => {
    if (session) {
      getInventory();
    }
  }, [session]);

  const deleteInventoryHandler = async (listing) => {
    deleteListing(listing);
  };

  return (
    <div id="listed-inv-container">
      <VNavBar listed="active-btn" />

      <div id="listed-inv-content-container">
        <h5 id="listed-inventory-title"> Listed Inventory</h5>
        <SearchBar />
        <ModalBase
          viewstate={visible}
          closehandler={modalCloseHandler}
          header={buyRequestModalHeader}
          body={buyRequestModalBody}
          footer={<BuyRequestModalFooter closebtn={modalCloseHandler} />}
        />
        <div id="books-container">
          {inventory.map((book) => {
            if (book.title.length <= 15) {
              return (
                <Book
                  key={book.id}
                  title={book.title}
                  condition={book.condition}
                  price={book.price}
                  btnHandler={() => {
                    deleteInventoryHandler(book);
                  }}
                  cover={blueCover}
                  icon={"/icons/icon-cross.svg"}
                />
              );
            } else {
              return (
                <Book
                  key={book.id}
                  title={book.title.slice(0, 14).concat("...")}
                  condition={book.condition}
                  price={book.price}
                  btnHandler={() => {
                    deleteInventoryHandler(book);
                  }}
                  cover={blueCover}
                  icon={"/icons/icon-cross.svg"}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
//};

export default ListedInvPage;
