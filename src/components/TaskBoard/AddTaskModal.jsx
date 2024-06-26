import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

const AddTaskModal = ({ onHideModal, onSubmit, taskToUpdate }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/20 backdrop-blur-sm">
        <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 relative">
          <span
            className="absolute top-[20px] right-[20px] cursor-pointer"
            onClick={onHideModal}
          >
            <ImCancelCircle className="text-[30px] hover:text-red-500" />
          </span>
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {isAdd ? "Add New Task" : "Edit Task"}
          </h2>
          {/* inputs */}
          <div className="space-y-9 text-white lg:space-y-10">
            {/* title */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                required
                value={task.title}
                onChange={handleInputChange}
              />
            </div>
            {/* description */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                required
                value={task.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            {/* input group */}
            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              {/* tags */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  required
                  value={task.tags}
                  onChange={handleInputChange}
                />
              </div>
              {/* priority */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  required
                  value={task.priority}
                  onChange={handleInputChange}
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
          {/* inputs ends */}
          <div className="mt-16 flex justify-center lg:mt-20">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white font-semibold transition-all hover:opacity-80"
              onClick={(e) => onSubmit(task, isAdd)}
            >
              {isAdd ? "Create New Ttask" : "Update Task"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTaskModal;
