import React, { useState } from "react";
import { list } from "../../utils/fakeData";

export default function FilteredList() {
  const [search, setSearch] = useState("");

  const listfiltered = list.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.surname.toLowerCase().includes(search.toLowerCase()) ||
      f.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-grid">
      <span>
        Tabla con input para filtrar el listado. (Table with an input to filter
        the list)
      </span>
      <span>
        Se puede filtrar por nombre, apellido o país. (you can filter by name,
        lastname or country)
      </span>
      <input onChange={(e) => setSearch(e.target.value)} className="mt-3"/>
      {listfiltered.map((person, index) => (
        <li key={index}>
          {person.name} {person.surname} {person.country}
        </li>
      ))}
      <span className="mt-3">
        Primero se debe crear la función del filtro, en este caso usamos un
        array, por lo que podemos utilizar la función array.filter, posterior el
        resultado de esta función, el cuál será un arreglo con los valores
        filtrados por la búsqueda, podemos aplicar un array.map para entregar el
        resultado. (first we need to filter the list, in this case we are using
        an array, so we can use the array.filter function to filter the initial
        list, after this list is filtered, we have a new array as the result, so
        we only need to use an array.map to show every property.)
      </span>
      <span className="mt-3">
        Ejemplo (example): const filter = list.filter((filter) {"=>"}
        filter.name.toLowerCase().includes(search.toLowerCase())), en este caso
        la propiedad llamada filter será nuestro arreglo filtrado. (in this case
        the property called filter is the result array.)
      </span>
      <span className="mt-3">
        Ahora solo debemos aplicar la función de map para mostrar el resultado.
        (now we only need to use a map function to show the resulted list):
        list.map((person, index) {"=>"} {"<li key={index}>{person.name}</li>"})
      </span>
    </div>
  );
}
