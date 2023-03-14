import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

const SearchBar = (props) => {
  return (
    <div id="searchbar-container">
      <Input
        id="searchbar-input-field"
        clearable
        bordered
        color={"primary"}
        type="text"
        placeholder="Search for a book by title or author"
        contentLeft={
          <Image
            src="/icons/icon-search.svg"
            alt="search icon"
            height="17"
            width="17"
            id="search-icon"
          />
        }
      />
      <Button
        id="settings-btn"
        size={"1"}
        icon={
          <Image
            src="/icons/icon-settings.svg"
            alt="settings icon"
            width="20"
            height="20"
          />
        }
      ></Button>
    </div>
  );
};

export default SearchBar;
