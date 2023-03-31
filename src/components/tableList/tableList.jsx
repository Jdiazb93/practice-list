import React, { useState } from "react";
import { list } from "../../utils/fakeData";

export default function TableList() {
  const [addBorders, setAddBorders] = useState(false);
  console.log(addBorders);
  return (
    <div className="d-grid">
      <span>Listado dentro de una tabla (list on a table.)</span>
      <span>
        Sólo se muestra nombre y apellido (only showing name and lastname)
      </span>
      <span>
        Cada tr puede tener una propiedad de border para agregar bordes, pero se
        debe juntar con la propiedad border-collapse: collapse (every tr can
        have a border property to add borders on each row but it also needs a
        border-collapse: collapse to have effect on the tr)
      </span>
      <span onClick={() => setAddBorders(!addBorders)}>
        Agregar bordes (add borders)
      </span>
      <table className={`w-fit ${addBorders && "borders"}`}>
        {list.map((person, index) => (
          <tr
            key={index}
            className={`${index % 2 !== 0 && "b-light"} ${
              addBorders && "borders"
            }`}
          >
            {person.name} {person.surname}
          </tr>
        ))}
      </table>
    </div>
  );
}
