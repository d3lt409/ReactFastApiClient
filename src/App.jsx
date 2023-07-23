import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TaskForm from "./pages/TaskForm";
import Nabvar from "./components/Nabvar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto ">
        <Nabvar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/task/:id" element={<TaskForm />} />
          <Route path="/task/new" element={<TaskForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
