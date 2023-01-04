import React from "react";
import { Link } from "react-router-dom";
import "./Character.css";

export const Character = ({ item, excerpt }) => {
  const character = (
    <article className={`item-detail${!excerpt ? ` item-detail--single` : ""}`}>
      <img src={item.image} alt={`${item.first_name} ${item.last_name}`} />
      <div className="item-detail__text-container">
        <h3>{`${item.first_name} ${item.last_name}`}</h3>
        <span>
          {item.gender === "M"
            ? "Man"
            : item.gender === "F"
            ? "Woman"
            : "Other"}
        </span>
        <span>{item.profession}</span>
        {!excerpt && (
          <span dangerouslySetInnerHTML={{ __html: item.description }} />
        )}
      </div>
    </article>
  );
  return excerpt ? (
    <Link to={`/characters/${item.id}`} className="button">
      {character}
    </Link>
  ) : (
    character
  );
};
