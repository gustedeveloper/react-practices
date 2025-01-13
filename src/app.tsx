import { FC } from "react";
import { useState } from "react";

const Square: FC = () => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue("X");
  };
  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

export const Board: FC = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};
