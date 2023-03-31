import React from "react";
import { list } from "../../utils/fakeData";
import Row from "./row";

export default function CollapsedList() {
  return (
    <div className="d-grid">
      <span>
        Ahora tenemos un listado con datos ocultos. (now we have a list with
        hidden data)
      </span>
      {list.map((person, index) => (
        <Row data={person} key={index} />
      ))}
      <span className="mt-3">
        Primero, vamos a crear un nuevo componente para cada fila, cada fila
        debe tener su propiedad para mostrar u ocultar la información, esto lo
        podemos conseguir utilizando el hook de react useState. (First we need a
        new component for each row, it is cause each row needs his own state to
        show or hidde the extra data, in this case we are using the hook
        useState from reactjs to show or hide the data.)
      </span>
      <span className="mt-3">
        {
          "Ejemplo (example): const [show, setShow] = useState(false) iniciamos el estado como falso para que la información se encuentre oculta. (We set as default the false boolean to hide by default the data)"
        }
      </span>
      <span className="mt-3">
        Luego necesitaremos algún botón o etiqueta desde dónde cambiar el estado. (Then we need a button or something to update this property.)
        {"<span onClick={() => setShow(!show)}>{show ? 'show less' : 'show more' }</span>"}
        Aquí creamos una etiqueta span, y forzamos el cambio de estado con cada click. (on this way we are creating an span, and we are forcing the status update on each click)
      </span>
      <span className="mt-3">{"{show && <span>País: {data.country}, Edad: {data.age}</span>}"}</span>
    </div>
  );
}
