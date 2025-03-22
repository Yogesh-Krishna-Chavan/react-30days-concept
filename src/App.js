import Book from "./Book";
import "./App.css";
import books from "./books.json";

function App() {
  return (
    <div className="hero">
      <h1 style={{ color: "red" }}>Online Book Web App</h1>
      <h2>Book Store</h2>
      {books.map((ele) => {
        //Array with map()
        return (
          <Book
            image={ele.image}
            title={ele.title}
            publisher={ele.publisher}
            price={ele.price}
          />
        );
      })}
    </div>
  );
}

export default App;
