import React from "react";
import "./error.scss";

export const Error = ({
  addClass,
  text,
}: {
  addClass?: string;
  text: string;
}) => {
  return <div className={`${addClass} error`}>{text}</div>;
};
