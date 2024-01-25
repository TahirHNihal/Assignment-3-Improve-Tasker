import { TfiFaceSad } from "react-icons/tfi";

const EmptyTask = () => {
  return (
    <>
      <div className="text-center">
        <span>
          <TfiFaceSad className="text-7xl text-center text-red-500 inline-block mb-4" />
        </span>
        <h1 className="text-5xl text-center">No task found please add task.</h1>
      </div>
    </>
  );
};

export default EmptyTask;
