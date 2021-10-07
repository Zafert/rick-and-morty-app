import React from "react";

function Card(props) {
  return (
    <div>
      <img src={props.character.image} />
      {props.character.name} {props.character.status} {props.character.species}
      <ol>
        {props.character.episode.map((episode) => (
          <li>{episode}</li>
        ))}
      </ol>
    </div>
  );
}

export default Card;
