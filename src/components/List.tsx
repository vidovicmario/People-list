import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <li className="List">
            <div className="List-header">
              <img className="List-img" src={person.url} alt="/" />
              <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className="List-note"> {person.note}</p>
          </li>
        );
      })}
    </>
  );
};

export default List;
