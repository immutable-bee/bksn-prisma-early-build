import Image from "next/image";
import { Button } from "@nextui-org/react";

const Book = (props) => {
  return (
    <div className="book-container">
      <Image
        className="book-cover"
        src={props.cover}
        alt="blue book cover"
        width="120"
        height="120"
      />
      <h5 className="book-title">{props.title}</h5>
      <h6 className="book-condition">{props.condition}</h6>
      <div className="book-row-div">
        <h6 className="book-price">{props.price}</h6>
        <Button
          onClick={props.btnHandler}
          size={1}
          className="book-shopping-bag"
          light
          icon={
            <Image src={props.icon} alt="return icon" width="15" height="15" />
          }
        ></Button>
      </div>
    </div>
  );
};

export default Book;
