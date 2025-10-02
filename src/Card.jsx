import React from "react";

export default function Card({ item }) {
  const paragraphs = item.body.split("/n");

  return (
    <div>
      <img src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <h4>{item.OneLiner}</h4>
      {paragraphs.map((para, index) => (
        <p key={index}>{para.trim()}</p>
      ))}
      <hr />
    </div>
  );
}
