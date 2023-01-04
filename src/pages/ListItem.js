import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Character } from "../components/Character/Character";
import { useGetOompasByCharacterQuery } from "../services/oompas";

const ListItem = ({ match }) => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetOompasByCharacterQuery(id);
  console.log("character", data, id);

  const renderItem = () => {
    if (isLoading) return <p>Loading item...</p>;
    if (error) return <p>Unable to display item.</p>;

    if (id && data) return <Character item={data} />;
  };

  return <section>{renderItem()}</section>;
};

export default ListItem;
