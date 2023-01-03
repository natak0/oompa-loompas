import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchItem, itemSelector } from "../slices/item";
import { Character } from "../components/Character/Character";

const ListItem = ({ match }) => {
  const dispatch = useDispatch();
  const {
    item,
    loading: itemLoading,
    hasErrors: itemHasErrors,
  } = useSelector(itemSelector);
  let { id } = useParams();

  useEffect(() => {
    id && dispatch(fetchItem(id));
  }, [dispatch, id]);

  const renderItem = () => {
    if (itemLoading) return <p>Loading item...</p>;
    if (itemHasErrors) return <p>Unable to display item.</p>;

    return <Character item={item} />;
  };

  return <section>{renderItem()}</section>;
};

export default ListItem;
