import { useState } from "react";

function ToggleButtons() {
  // these are initialColors: ['gray','gray','gray','gray','gray']
  const initialColors = Array(5).fill("gray");
  const [buttonColors, setButtonColors] = useState(initialColors);

  return (
    <div>
      {initialColors.map((_, index) => (
        <button
          key={index}
          style={{
            backgroundColor: buttonColors[index],
            padding: "10px",
            margin: "5px",
            border: "none",
          }}
          onClick={() =>
            setButtonColors(() =>
              buttonColors.map((el, i) =>
                i === index ? (el == "blue" ? "gray" : "blue") : el
              )
            )
          }
        >
          Button {index + 1}
        </button>
      ))}
    </div>
  );
}

export default ToggleButtons;
