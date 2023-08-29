import React from "react";
import { Template } from "../OfferLetterTemplate/Template";
import { AiOutlineCheckCircle, AiOutlineDown } from "react-icons/ai";
const LetterTemplates = () => {
  return (
    <>
      <div className="px-10 py-10 flex flex-col gap-6 text-md font-light">
        <h2 className="w-full py-4 shadow-md border-2 border-white flex items-center justify-between px-2">
          Choose Template
          <AiOutlineDown size={25} />
        </h2>
        <div className="flex flex-col gap-8">
          {Template.map((template, index) => (
            <div
              key={index}
              value={template.value}
              className="bg-white w-full py-4 px-2 shadow-md rounded-lg flex justify-between items-center"
            >
              {template.name}
              <AiOutlineCheckCircle size={25} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LetterTemplates;

// // import React, { useRef, useState } from "react";
// // import JoditEditor from "jodit-react";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { setStatus, setTableData } from "../../features/Template/TemplateSlice";
// // const LetterTemplates = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const editorRef = useRef(null);
// //   const [editorContent, setEditorContent] = useState(location.state?.content);
// //   const displayTableData = useSelector(
// //     (state) => state.Template.displayTableData
// //   );
// //   console.log(displayTableData);

// //   const handleEditorChange = (content) => {
// //     setEditorContent(content);
// //     console.log(editorContent);
// //   };

// //   const handleEmail = () => {
// //     const { displayUser } = location.state;
// //     toast.success("Email Successfully send to the User", {
// //       position: "top-right",
// //       autoClose: 1000,
// //       hideProgressBar: false,
// //       closeOnClick: true,
// //       pauseOnHover: true,
// //       draggable: true,
// //       progress: undefined,
// //       theme: "light",
// //     });
// //     dispatch(setStatus({ displayUser, status: "emailSent" }));
// //     setEditorContent("");
// //   };
// //   const handleDraft = () => {
// //     const { displayUser, displayTemplate } = location.state;

// //     dispatch(
// //       setTableData({
// //         displayUser,
// //         displayTemplate,
// //         content: editorContent,
// //       })
// //     );
// //     dispatch(setStatus({ displayUser, status: "Draft" }));

// //     navigate("/OfferLetters", { state: { status: "Draft" } });
// //   };

// //   return (
// //     <div>
// //       <JoditEditor
// //         ref={editorRef}
// //         value={editorContent}
// //         onChange={handleEditorChange}
// //       />
// //       <div className="flex gap-8">
// //         <div>
// //           <button
// //             onClick={() => handleEmail()}
// //             className="w-44 h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
// //           >
// //             Send Email
// //           </button>
// //           <ToastContainer />
// //         </div>
// //         <div>
// //           <button
// //             className="w-44 h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
// //             onClick={() => handleDraft()}
// //           >
// //             Draft
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LetterTemplates;

// // // const handleDraft = (prev) => {
// // //   dispatch(setTableData({ ...prev, content: editorContent }));
// // //   navigate("/OfferLetters");
// // // };
// // // const handleDraft = () => {
// // //   const updatedTableData = displayTableData.map((tableData) => {
// // //     if (
// // //       //  tableData.displayUser
// // //       tableData.displayUser === location.state?.displayUser // Replace with the correct key for template
// // //     ) {
// // //       console.log(tableData.displayUser);
// // //       console.log(location.state?.displayUser);
// // //       console.log(editorContent);
// // //       return {
// // //         // displayUser: tableData.displayUser,
// // //         // displayTemplate: tableData.displayTemplate,
// // //         ...tableData,
// // //         content: editorContent,
// // //       };
// // //     }
// // //     return tableData;
// // //   });

// // //   dispatch(setTableData(updatedTableData));
// // //   navigate("/OfferLetters");
// // // };

// import React, { useRef, useState } from "react";
// import JoditEditor from "jodit-react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { setStatus, setTableData } from "../../features/Template/TemplateSlice";

// const LetterTemplates = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const editorRef = useRef(null);
//   const [editorContent, setEditorContent] = useState(location.state?.content);
//   const displayTableData = useSelector(
//     (state) => state.Template.displayTableData
//   );
//   const emailStatus = displayTableData.find(
//     (data) => data.displayUser === location.state.displayUser
//   )?.status;
//   console.log(emailStatus);

//   console.log(displayTableData);

//   const handleEditorChange = (content) => {
//     setEditorContent(content);
//     console.log(editorContent);
//   };

//   const handleEmail = () => {
//     const { displayUser } = location.state;
//     toast.success("Email Successfully send to the User", {
//       position: "top-right",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//     dispatch(setStatus({ displayUser, status: "emailSent" }));
//     setEditorContent("");
//   };

//   const handleDraft = () => {
//     const { displayUser, displayTemplate } = location.state;

//     dispatch(
//       setTableData({
//         displayUser,
//         displayTemplate,
//         content: editorContent,
//       })
//     );
//     dispatch(setStatus({ displayUser, status: "Draft" }));

//     navigate("/OfferLetters", { state: { status: "Draft" } });
//   };

//   return (
//     <div className="px-8">
//       {emailStatus === "emailSent" ? (
//         <div className="flex flex-col gap-8 px-16 py-12 mt-10 shadow-2xl border-4 border-white">
//           <div className="text-lg font-semibold underline">Review</div>
//           <div>
//             <JoditEditor
//               ref={editorRef}
//               value={editorContent}
//               onChange={handleEditorChange}
//               config={{
//                 readonly: true,
//                 toolbar: false,
//                 statusbar: false,
//               }}
//             />
//           </div>
//         </div>
//       ) : (
//         <div>
//           <JoditEditor
//             ref={editorRef}
//             value={editorContent}
//             onChange={handleEditorChange}
//           />

//           <div className="flex gap-8">
//             <div>
//               <button
//                 onClick={() => handleEmail()}
//                 className="w-44 h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//               >
//                 Send Email
//               </button>
//               <ToastContainer />
//             </div>
//             <div>
//               <button
//                 className="w-44 h-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//                 onClick={() => handleDraft()}
//               >
//                 Draft
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LetterTemplates;
