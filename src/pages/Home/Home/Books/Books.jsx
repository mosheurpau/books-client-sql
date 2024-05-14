import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center mx-auto">
      <h2 className="text-3xl my-10 font-bold">My Book Shop</h2>
      <div className="grid grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div key={index} className="text-center">
            {book.cover && (
              <img
                className="mx-auto w-40 h-40 bg-slate-600"
                src={book.cover}
                alt="cover img"
              />
            )}
            <div>
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p>{book.desc}</p>
              <p>{book?.price}</p>
              <button
                className="btn btn-outline btn-sm text-red-500"
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
              <button className="btn btn-outline btn-sm ms-2">Update</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="btn btn-outline btn-sm">
          <Link to="add">Add new Books</Link>
        </button>
      </div>
    </div>
  );
};

export default Books;
