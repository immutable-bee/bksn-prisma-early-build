import { Button } from "@nextui-org/react";
import Image from "next/image";

// todo populate every eleemnt with props, pick field to get document reference
export const BookDetail = () => {
  const notes =
    "Dolor faucibus mollis eget orci mattis vitae. Id nulla feugiat in inter dum faucibus bibendum interdum in mi. Arcu ut at fermentum sem per ornare erat semper. Rhoncus dui et tempus lobortis. Adipiscing sagittis lectus condimentum cursus. Orci id facilisis. Vel pharetra congue curabitur dui sit a enim. Vitae justo duis place rat amet. Eget mauris vivamus scelerisque tempor. Rhoncus in eget porttitor posuere faucibus viverra nam imperdiet. Nibh elis.";

  return (
    <div id="book-detail-container">
      <div id="detail-cover-container">
        <Image
          id="detail-book-cover"
          alt="book-cover"
          src="/books/blue-book.svg"
          width={"340"}
          height={"460"}
        />
      </div>
      <div id="book-detail-content-container">
        <div id="title-isbn-container">
          {/* props.title */}
          <h4 id="detail-book-title">Life of Pi</h4>
          {/* props.isbn */}
          <h5 id="detail-isbn">ISBN: 978-1-4028-94620-6</h5>
        </div>
        {/* props.price - applicable to all instances except submitted requests - maybe change title is it belongs to current user e.g. (desired price) */}
        <h5 id="detail-price">$10.99</h5>
        <div id="ACF-detail-row">
          <h6 className="detail-title">Author</h6>
          <h6 className="detail-title">Condition</h6>
          <h6 className="detail-title">Format</h6>
        </div>
        <div id="ACF-content-row">
          {/* props.author */}
          <h6 className="detail-text">Yann Martel</h6>
          {/* props.condition */}
          <h6 className="detail-text">New</h6>
          {/* props.format */}
          <h6 className="detail-text">Hardcover</h6>
        </div>
        {/* props.notes */}
        <h6 id="detail-notes-title">Notes</h6>
        <p id="detail-notes">{notes}</p>
        {/* todo make conditional with submitted requests and listed inv = delete request/listing */}
        <Button rounded id="detail-btn">
          Request to Buy
        </Button>
      </div>
    </div>
  );
};
