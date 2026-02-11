import React from "react";
import { useParams } from "react-router";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Details</h1>
      <p>Route param id: {id ?? "unknown"}</p>
    </main>
  );
};

export default Details;
