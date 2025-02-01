import React from "react";

export const Button = ({
  addClass,
  text,
  onClick,
}: {
  addClass: string;
  text: string;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className={addClass}>
      {text}
    </button>
  );
};
