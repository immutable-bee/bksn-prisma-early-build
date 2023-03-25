import VNavBar from "../components/VNavBar";
import { useEffect, useState } from "react";
import Book from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useSession } from "next-auth/react";

const blueCover = "/books/blue-book.svg";

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data: session } = useSession();

  const fetchListings = async () => {
    const response = await fetch("/api/listings", {
      method: "POST",
      body: JSON.stringify(session.user.email),
    });
    setListings(await response.json());
  };

  useEffect(() => {
    if (session) {
      fetchListings();
    }
  }, [session]);

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    const fetchSearchData = async () => {
      const response = await fetch(`/api/search?search=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    };

    fetchSearchData();
  }, [searchQuery]);

  return (
    <div id="listings-page-container">
      <VNavBar listings={"active-btn"} />
      <div id="listings-content-container">
        <h5 id="listings-title">Listings</h5>
        <SearchBar onSearch={setSearchQuery} />
        <div id="books-container">
          {(searchResults.length > 0 ? searchResults : listings).map((book) => {
            if (book.title.length <= 15) {
              return (
                <Book
                  key={book.id}
                  title={book.title}
                  condition={book.condition}
                  price={book.price}
                  btnHandler={() => {
                    deleteInventoryHandler(book.sku);
                  }}
                  cover={blueCover}
                  icon={"/books/shopping-bag.svg"}
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
                    deleteInventoryHandler(book.sku);
                  }}
                  cover={blueCover}
                  icon={"/books/shopping-bag.svg"}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
