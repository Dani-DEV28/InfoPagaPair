import React from "react";
import Card from "./Card";

export function CardList({ reviews }) {
  return (
    <div>
      {reviews.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}