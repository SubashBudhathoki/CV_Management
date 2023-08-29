import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../../features/Adduser/UserSlice";
import { useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Edit = () => {
  const allUser = useSelector((state) => state.User.user);
  console.log(allUser);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const existing = allUser.filter((item) => item.id == id);
  console.log(existing);
  const { fname, lname, email, position, select, phone, Experience, city } =
    existing[0];
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [Id, setId] = useState(id);
  const [ufname, setfName] = useState(fname);
  const [ulname, setlName] = useState(lname);
  const [uemail, setEmail] = useState(email);
  const [uposition, setPosition] = useState(city);
  const [uSalary, setSalary] = useState(city);
  const [uCity, setCity] = useState(position);
  const [uselect, setSelect] = useState(select);
  const [uphone, setPhone] = useState(phone);
  const [uExperience, setExperience] = useState(Experience);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        id: Id,
        fname: ufname,
        lname: ulname,
        email: uemail,
        position: uposition,
        city: uCity,
        salary: uSalary,
        select: uselect,
        phone: uphone,
        Experience: uExperience,
      })
    );
    navigate("/Applicant");
  };

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
              value={image}
              onChange={(event) => {
                const selectedImage = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  if (reader.readyState == 2) {
                    //  setFieldValue("photo", reader.result);
                    setImage(reader.result);
                  }
                };

                reader.readAsDataURL(selectedImage);
              }}
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
                value={ufname}
                onChange={(e) => setfName(e.target.value)}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lname"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={ulname}
                onChange={(e) => setlName(e.target.value)}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
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
                value={uphone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (98********)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="city"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={uCity}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <label
                htmlFor="floating_city"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
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
                value={uExperience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Experience
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="id"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Id
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="salary"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={uSalary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
            <label
              htmlFor="salary"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Salary Expectation
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="position"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={uposition}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Position
            </label>
          </div>

          <div>
            <select
              name="select"
              className="block w-full px-4 py-3 text-base rounded-lg text-gray-900 bg-transparentborder-0 border-b-2 border-gray-300 dark:border-gray-600"
              value={uselect}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="Job level">Job Level</option>
              <option value="Junior">Junior</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Semi-Senoir">Semi-Senoir</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-44 h-12 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Submit
          </button>
        </div>
      </form>
      {/* <form
        action=""
        onSubmit={handleSubmit}
        className="flex py-5 px-1 w-full gap-4"
      >
        <div className="w-[30%]">
          <div>
            <label htmlFor="Name">Image</label>
            <input
              name="image"
              type="file"
              value={image}
              onChange={(event) => {
                const selectedImage = event.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImage(reader.result);
                };
                if (selectedImage) {
                  reader.readAsDataURL(selectedImage);
                }
              }}
            />
            {image && <img src={image} alt="" className="rounded-lg " />}
          </div>
          <div>
            <textarea name="message" cols="40" rows="5"></textarea>
          </div>
        </div>
        <div className="w-[60%] flex flex-col gap-4">
          <div>
            <label htmlFor="Name">ID</label>
            <input
              name="id"
              type="number"
              placeholder="Number"
              className="w-full h-12 border pl-2 "
              value={Id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full h-12 border pl-2"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Name">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full h-12 border pl-2"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Name">Phone</label>
            <input
              name="phone"
              type="number"
              placeholder="phone"
              className="w-full h-12 border pl-2"
              value={uphone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Name">Position</label>
            <input
              name="position"
              type="text"
              placeholder="Position"
              className="w-full h-12 border pl-2"
              value={uposition}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Name">Experience</label>
            <input
              name="Experience"
              type="text"
              placeholder="Experience"
              className="w-full h-12 border pl-2"
              value={uExperience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="">
            <select
              name="select"
              value={uselect}
              onChange={(e) => setSelect(e.target.value)}
              className="w-full h-8"
            >
              <option value="JobLevel">JobLevel</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className=" w-44 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Update
            </button>
          </div>
        </div>
      </form> */}
    </>
  );
};

export default Edit;
