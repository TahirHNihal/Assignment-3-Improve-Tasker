import { useContext, useState } from "react";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import TaskActions from "./TaskActions";
import { toast } from "react-toastify";
import EmptyTask from "./EmptyTask";
import { TaskContext } from "../../contexts/taskContext";

const TaskBoard = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  //Handle Modal Hide
  const handleModalHide = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };
  //Handle Modal Show
  const handleModalShow = () => {
    setShowModal(true);
  };
  //Handle task Add and Delete
  const handleAddEditTask = (newTask, isAdd) => {
    if (
      !newTask.title ||
      !newTask.description ||
      !newTask.tags ||
      !newTask.priority
    ) {
      toast.warning("All fields are required!", {
        position: "top-right",
        theme: "dark",
      });
      setShowModal(true);
    } else if (isAdd) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      toast.success("Task added successfully 🥳", {
        position: "top-right",
        theme: "dark",
      });
      setShowModal(false);
    } else {
      dispatch({ type: "UPDATE_TASK", payload: newTask });
      toast.success("Task updated successfully 🥳", {
        position: "top-right",
        theme: "dark",
      });
      setTaskToUpdate(null);
      setShowModal(false);
    }
  };
  //Handle Edit Task Modal
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };
  //Handle Favorite Toggle
  const handleFavorite = (taskId) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: taskId });
  };
  //Handle Delete Single task
  const handleSingleTaskDelete = (taskId) => {
    const conf = confirm("Are you sure to delete the task? 😱");
    if (conf) {
      dispatch({ type: "DELETE_TASK", payload: taskId });
      toast.success("Your task deleted successfully! 🎉", {
        position: "top-right",
        theme: "dark",
      });
    }
  };
  //Handle All Task Delete
  const handleAllTasksDelete = () => {
    const conf = confirm("Are you sure to delete all the tasks? 😱");
    if (conf) {
      dispatch({ type: "DELETE_ALL_TASKS" });
      toast.success("All tasks deleted successfully! 🎉", {
        position: "top-right",
        theme: "dark",
      });
    }
  };
  //Handle Search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      {showModal && (
        <AddTaskModal
          onHideModal={handleModalHide}
          onSubmit={handleAddEditTask}
          taskToUpdate={taskToUpdate}
        />
      )}
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <div className="mb-14 items-center justify-between sm:flex">
              <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
              <TaskActions
                onShowModal={handleModalShow}
                onDeleteTasks={handleAllTasksDelete}
                onSearch={handleSearch}
              />
            </div>
            {tasks.length > 0 ? (
              <TaskList
                // tasks={tasks}
                onEdit={handleEditTask}
                onClickFav={handleFavorite}
                onSingleDelete={handleSingleTaskDelete}
                searchQuery={searchQuery}
              />
            ) : (
              <EmptyTask />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
