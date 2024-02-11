// single selection
// multiple selection
import "./style.css";
import React, { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentID) => {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
