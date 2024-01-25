import { IoMdSearch } from "react-icons/io";

const TaskActions = ({ onShowModal, onDeleteTasks, onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <>
      <div className="flex items-center space-x-5">
        <form>
          <div className="flex">
            <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <input
                type="search"
                id="search-dropdown"
                className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                placeholder="Search Task"
                name="search"
                required
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
              >
                <IoMdSearch className="text-[22px]" />

                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={onShowModal}
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={onDeleteTasks}
        >
          Delete All
        </button>
      </div>
    </>
  );
};

export default TaskActions;
