import { useEffect, useState } from "react";
import { MdOutlineAddBox } from 'react-icons/md';
import { Link } from "react-router-dom";

import Spinner from "../components/Spinner";
import BooksTable from "../components/home/BookTable";
import { getAllBooksHandler } from "../services/bookServices";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllBooksHandler()
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>

        <Link to='/'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <BooksTable books={books} />
      )}
    </div>
  )
}

export default Home