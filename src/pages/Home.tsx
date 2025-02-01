import React from "react";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import List from "../components/List";
import { RootState } from "../store";
import { useGetTodos } from "../hooks/useGetTodos";

const Home: React.FC = () => {
  const { cruds } = useSelector((state: RootState) => state.reactCruds);

  useGetTodos();

  return (
    <>
      <h1 className="title">Software Finder</h1>
      <div className="content">
        <Form />
        {cruds.length > 0 && <List />}
      </div>
    </>
  );
};

export default Home;
