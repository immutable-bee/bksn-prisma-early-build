import Image from "next/image";
import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function VNavBar(props) {
  const { data: session } = useSession();
  const [copyMessage, setCopyMessage] = useState({ color: "white" });
  const handleCopy = () => {
    navigator.clipboard.writeText("https://booksellers-network-1.vercel.app/");
    setCopyMessage({ color: "black" });
  };

  return (
    <div id="nav-container">
      <Image
        src="/logo.png"
        alt="logo"
        width="180"
        height="110"
        id="nav-bar-logo"
      />
      <Link href="/listed-inventory">
        <Button
          size={""}
          id={props.listed}
          rounded
          className="nav-item"
          icon={
            <Image
              className="nav-icon"
              src="/nav/listed-inv-icon.svg"
              alt="List Inventory Icon"
              width="17"
              height="17"
            />
          }
        >
          Listed Inventory
        </Button>
      </Link>
      <Spacer y={0.5} />
      <Link href="/listings">
        <Button
          size={""}
          id={props.listings}
          rounded
          className="nav-item"
          icon={
            <Image
              className="nav-icon"
              src="/icons/icon-money.svg"
              alt="Listings Icon"
              width="17"
              height="17"
            />
          }
        >
          Listings
        </Button>
      </Link>
      <Spacer y={0.5} />
      <Link href="/request-a-book">
        <Button
          size={""}
          id={props.requestBook}
          rounded
          className="nav-item"
          icon={
            <Image
              className="nav-icon"
              src="/nav/make-request-icon.svg"
              alt="Make Request Icon"
              width="17"
              height="17"
            />
          }
        >
          Request a book
        </Button>
      </Link>
      <Spacer y={0.5} />
      <Link href="/requests">
        <Button
          size={""}
          id={props.requests}
          rounded
          className="nav-item"
          icon={
            <Image
              className="nav-icon"
              src="/nav/requests-icon.svg"
              alt="Requests Icon"
              width="17"
              height="17"
            />
          }
        >
          Requests
        </Button>
      </Link>
      <Spacer y={0.5} />
      <Link href="/manage-offers">
        <Button
          size={""}
          id={props.manage}
          rounded
          className="nav-item"
          icon={
            <Image
              className="nav-icon"
              src="/nav/manage-icon.svg"
              alt="Manage Icon"
              width="17"
              height="17"
            />
          }
        >
          Manage Offers
        </Button>
      </Link>
      <Spacer y={0.5} />
      <Link href="/upload-inventory">
        <Button
          size={""}
          id={props.upload}
          rounded
          className="nav-item"
          icon={
            <Image
              className="nav-icon"
              src="/nav/upload-inv-icon.svg"
              alt="Upload Inventory Icon"
              width="17"
              height="17"
            />
          }
        >
          Upload Inventory
        </Button>
      </Link>

      <h6 id="copy-success-message" style={copyMessage}>
        Link copied to clipboard
      </h6>
      <Button rounded id="invite-btn" size={""} onClick={handleCopy}>
        Invite Bookstore
      </Button>
      <Button
        size={""}
        id="sign-out"
        onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
      >
        {" "}
        Sign Out?
      </Button>
    </div>
  );
}
