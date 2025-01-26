import { FC } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const DetailPage: FC = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Detail Page</h1>
      <h2>User: {id}</h2>
      <Link to="/list">Back to List Page</Link>
    </>
  );
};
