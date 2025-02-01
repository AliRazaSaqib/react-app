import React from "react";

export const Error = ({
  addClass,
  text,
}: {
  addClass: string;
  text: string;
}) => {
  return <div className={addClass}>{text}</div>;
};
