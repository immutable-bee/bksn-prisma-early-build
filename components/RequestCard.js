import Image from "next/image";
import { Button } from "@nextui-org/react";

const RequestCard = (props) => {
  return (
    <div className="request-card-container">
      <Image
        className="book-cover"
        src={props.cover}
        alt="blue book cover"
        width="120"
        height="120"
      />

      <h5 className="request-card-title">{props.title}</h5>
      <h6 className="request-detail-storename">{props.storeName}</h6>
      <div className="request-card-row">
        <h6 className="request-card-location">{props.location}</h6>

        <Button
          onClick={props.btnHandler}
          size={1}
          className={props.buttonType}
          light
          icon={props.icon}
        ></Button>
      </div>
    </div>
  );
};

export default RequestCard;
