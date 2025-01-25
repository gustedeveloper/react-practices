import { Link } from "react-router-dom";

export const ListPage = () => {
  return (
    <>
      <h1>List Page</h1>
      <Link to="/detail">Navigate to Detail Page</Link>
    </>
  );
};
