import Backdrop from "./Components/Backdrop";
import Modal from "./Components/Modal";
import Todo from "./Components/Todo";

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <Todo title="React Todo" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
