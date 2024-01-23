import { useState } from "react";
import Form from "./Form/Form";
import TasksTable from "./TasksTable/TasksTable";
import SearchForm from "./serachForm/SearchForm";

export const App = () => {

  const [test, setTest] = useState(false);

  const testF = (value) => {
    console.log(!value);
    setTest(!value ? false : true);
  }

  return (
    <>
      <Form />
      <SearchForm testF={testF} />
      <TasksTable test={test} />
    </>
  );
};
