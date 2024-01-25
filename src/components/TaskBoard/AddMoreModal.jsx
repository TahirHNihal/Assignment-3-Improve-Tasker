/* eslint-disable react/prop-types */
// import { FaCircleCheck } from "react-icons/fa6";
import { MdAddTask } from "react-icons/md";
const AddMoreModal = ({ onAddMore }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/20 backdrop-blur-sm">
        <div className="h-full w-full flex justify-center items-center">
          <div className="mx-auto my-10 w-auto max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 flex flex-col justify-center items-center">
            <span className="mb-6">
              {/* <FaCircleCheck className="text-7xl text-green-500"/> */}
              <MdAddTask className="text-7xl text-green-500" />
            </span>
            <h2 className="mb-6 text-2xl">Your task added succefully</h2>
            <div className="flex items-center justify-center space-x-3">
              <button
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                value={"addMore"}
                onClick={(e) => onAddMore(e.target.value)}
              >
                Add More
              </button>
              <button
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                value={"addMoreCancel"}
                onClick={(e) => onAddMore(e.target.value)}
              >
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMoreModal;
