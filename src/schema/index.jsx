import * as Yup from "yup";

export const Yupschema = Yup.object({
  id: Yup.number().required("please enter your Id"),
  fname: Yup.string().min(2).max(25).required("Please enter your Name"),
  lname: Yup.string().min(2).max(25).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your Email"),
  position: Yup.string().required("please enter your Position"),
  select: Yup.string().required("please select your Level"),

  phone: Yup.number().required("Please Enter you Phone Number"),
  Experience: Yup.string().required("please enter your Experience"),
  city: Yup.string().required("please enter your City"),
  salary: Yup.string().required("please enter your Salary Expectation"),

  // image: Yup.mixed().required(),
});
