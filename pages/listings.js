import { prisma } from "../db/prismaDb";
import VNavBar from "../components/VNavBar";
import { useState } from "react";
import Book from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export async function getServerSideProps() {
  const allListings = await prisma.listing.findMany({
    include: {
      owner: {
        select: {
          business_name: true,
          business_state: true,
          business_city: true,
        },
      },
    },
  });

  return {
    props: {
      initialListings: JSON.parse(JSON.stringify(allListings)),
    },
  };
}

const blueCover = "/books/blue-book.svg";

const ListingsPage = ({ initialListings }) => {
  const [listings, setListings] = useState(initialListings);

  return (
    <div id="listings-page-container">
      <VNavBar listings={"active-btn"} />
      <div id="listings-content-container">
        <h5 id="listings-title">Listings</h5>
        <SearchBar />
        <div id="books-container">
          {listings.map((book) => {
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
