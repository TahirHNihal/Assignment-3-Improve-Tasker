import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import "react-toastify/dist/ReactToastify.css";
import { useReducer } from "react";
import TaskReducer from "./reducers/TaskReducer";
import { tasksData } from "./data/data";
import { TaskContext } from "./contexts/taskContext";

export default function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, tasksData);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <>
        <Header />
        <HeroSec />
        <TaskBoard />
        <Footer />
        <ToastContainer />
      </>
    </TaskContext.Provider>
  );
}
