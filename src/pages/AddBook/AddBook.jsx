import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8800/books", data);
      navigate(-1);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
        <label className="block mb-4">
          <span>Title:</span>
          <input
            type="text"
            {...register("title", { required: true })}
            className={`form-input mt-1 block w-full ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}
        </label>
        <label className="block mb-4">
          <span>Description:</span>
          <textarea
            {...register("desc", { required: true })}
            className={`form-textarea mt-1 block w-full ${
              errors.desc ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.desc && (
            <span className="text-red-500">Description is required</span>
          )}
        </label>
        <label className="block mb-4">
          <span>Cover Image URL:</span>
          <input
            type="text"
            {...register("cover", { required: true })}
            className={`form-input mt-1 block w-full ${
              errors.cover ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.cover && (
            <span className="text-red-500">Cover Image URL is required</span>
          )}
        </label>
        <label className="block mb-4">
          <span>Price:</span>
          <input
            type="number"
            {...register("price", { required: true })}
            className={`form-input mt-1 block w-full ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.price && (
            <span className="text-red-500">Price is required</span>
          )}
        </label>
        <button
          type="submit"
          className="btn btn-outline btn-sm  w-full text-white py-2 px-4 rounded "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
