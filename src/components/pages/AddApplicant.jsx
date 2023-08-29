import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useFormik } from "formik";
import { Yupschema } from "../../schema";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/Adduser/UserSlice";

const AddApplicant = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const inputRef = useRef(null);
  const initialValues = {
    id: "",
    fname: "",
    lname: "",
    email: "",
    position: "",
    photo: "",
    select: "",
    phone: "",
    Experience: "",
    city: "",
    salary: "",
  };
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: Yupschema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(addUser(values));
      navigate("/Applicant");
    },
  });
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex py-5 px-1 w-full gap-4"
      >
        <div className="w-[30%]">
          {image && (
            <img src={image} alt="" className="rounded-full w-60 h-60" />
          )}
          <div
            onClick={() => {
              inputRef.current.click();
            }}
          >
            <span className="flex items-center justify-center">
              <button
                type="button"
                className="w-44 h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Image
              </button>
              <AiOutlineCloudUpload size={78} />
            </span>
            <input
              name="image"
              type="file"
              ref={inputRef}
              accept="image/*"
              value={values.image}
              onChange={(event) => {
                const selectedImage = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  if (reader.readyState == 2) {
                    setFieldValue("photo", reader.result);
                    setImage(reader.result);
                  }
                };

                reader.readAsDataURL(selectedImage);
              }}
              onBlur={handleBlur}
              className="hidden"
            />
          </div>
        </div>
        <div className="w-[60%] flex flex-col gap-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="fname"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
              {errors.fname && touched.fname ? (
                <p className="text-red-700">{errors.fname}</p>
              ) : null}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lname"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
              {errors.lname && touched.lname ? (
                <p className="text-red-700">{errors.lname}</p>
              ) : null}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (98********)
              </label>
              {errors.phone && touched.phone ? (
                <p className="text-red-700">{errors.phone}</p>
              ) : null}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="city"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_city"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
              {errors.city && touched.city ? (
                <p className="text-red-700">{errors.city}</p>
              ) : null}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="Experience"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.Experience}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Experience
              </label>
              {errors.Experience && touched.Experience ? (
                <p className="text-red-700">{errors.Experience}</p>
              ) : null}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="id"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={values.id}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Id
              </label>
              {errors.id && touched.id ? (
                <p className="text-red-700">{errors.id}</p>
              ) : null}
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {errors.email && touched.email ? (
              <p className="text-red-700">{errors.email}</p>
            ) : null}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="salary"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.salary}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Salary Expectation
            </label>
            {errors.salary && touched.salary ? (
              <p className="text-red-700">{errors.salary}</p>
            ) : null}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="position"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={values.position}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Position
            </label>
            {errors.position && touched.position ? (
              <p className="text-red-700">{errors.position}</p>
            ) : null}
          </div>

          <div>
            <select
              name="select"
              className="block w-full px-4 py-3 text-base rounded-lg text-gray-900 bg-transparentborder-0 border-b-2 border-gray-300 dark:border-gray-600"
              value={values.select}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="Job level">Job Level</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
            {errors.select && touched.select ? (
              <p className="text-red-700">{errors.select}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-44 h-12 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddApplicant;
