import React, { useState } from "react";

export default function Row({ data }) {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-3">
      <li>
        {data.name} {data.surname}{" "}
        <span onClick={() => setShow(!show)}>
          {show ? "show less" : "show more"}
        </span>
      </li>
      {show && (
        <span>
          País: {data.country}, Edad: {data.age}
        </span>
      )}
    </div>
  );
}
