import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSelector } from "../../slices/list";
import { fetchData } from "../../slices/list";
import { Character } from "../../components/Character/Character";
import "./ListPage.css";

const ListPage = () => {
  const dispatch = useDispatch();
  const { list, loading, hasErrors } = useSelector(listSelector);
  useEffect(() => {
    console.log("fetch data");
    dispatch(fetchData());
  }, [dispatch]);
  console.log("list", list);
  const renderList = () => {
    if (loading) return <p>Loading list...</p>;
    if (hasErrors) return <p>Unable to display list.</p>;

    return (
      list.results &&
      list.results.map((item) => (
        <Character key={item.last_name} item={item} excerpt />
      ))
    );
  };

  return <section className="list-wrapper">{renderList()}</section>;
};

export default ListPage;
