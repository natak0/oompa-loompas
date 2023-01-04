import React from "react";
import { Character } from "../../components/Character/Character";
import { useGetOompasByPageQuery } from "../../services/oompas";

import "./ListPage.css";

const ListPage = () => {
  const { data, error, isLoading } = useGetOompasByPageQuery("1");
  console.log("list", data);
  const renderList = () => {
    if (isLoading) return <p>Loading list...</p>;
    if (error) return <p>Unable to display list.</p>;
    return (
      data.results &&
      data.results.map((item) => (
        <Character key={item.last_name} item={item} excerpt />
      ))
    );
  };

  return <section className="list-wrapper">{renderList()}</section>;
};

export default ListPage;
