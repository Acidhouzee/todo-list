import Form from "./Form/Form";
import TasksTable from "./TasksTable/TasksTable";
import SearchForm from "./serachForm/SearchForm";

export const App = () => {
  return (
    <>
      <Form />
      <SearchForm />
      <TasksTable />
    </>
  );
};
