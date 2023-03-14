import { prisma } from "../db/prismaDb";
import VNavBar from "../compontents/VNavBar";
import { useState } from "react";
import Book from "../compontents/BookCard";
import SearchBar from "../compontents/SearchBar";

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
  );
};

export default ListingsPage;
