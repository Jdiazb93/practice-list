import React from "react";
import { list } from "../../utils/fakeData";

export default function CommonList() {
  return (
    <div className="d-grid">
      <span>Listado común (common uncontrolled list)</span>
      <span>Sólo se muestran propiedades nombre y apellido (showing only name and lastname)</span>
      <ul>
        {list.map((person, index) => (
          <li key={index}>
            {person.name} {person.surname}
          </li>
        ))}
      </ul>
    </div>
  );
}
