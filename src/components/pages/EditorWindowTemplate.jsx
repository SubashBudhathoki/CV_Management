import React, { useState, useEffect } from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { useDispatch, useSelector } from "react-redux";
import { InterviewerApi } from "../../features/api/InterviewerApi";
import { selectedUserFromDropdowntotheAssesmet } from "../../features/Candidate/CandidateSlice";

function EditorWindowTemplate(props) {
  let data = props?.data;
  const [start, setStart] = useState(data?.startTime);
  const [end, setEnd] = useState(data?.endTime);
  //const [hours, setHours] = useState(data?.hours | 2);
  const [subject, setSubject] = useState(data?.subject);
  const [description, setDescription] = useState(data?.description);
  const acceptedUser = useSelector((state) => state.Candidate.acceptedUser);
  console.log(acceptedUser);
  const dispatch = useDispatch();
  const startChange = (args) => {
    setStart(args.value);
  };

  // const hourChange = (args) => {
  //   setHours(args.value);
  // };

  // useEffect(() => {
  //   if (start && hours) {
  //     setEnd(new Date(start.getTime() + hours * 3600000));
  //   }
  // }, [start, hours]);

  return data !== undefined && Object.keys(data).length > 0 ? (
    <table
      className="custom-event-editor"
      style={{ width: "100%" }}
      cellPadding={5}
    >
      <tbody>
        <tr>
          <td className="e-textlabel">Title</td>
          <td colSpan={4}>
            <textarea
              id="subject"
              className="e-field e-input"
              type="text"
              name="subject"
              value={subject}
              style={{ width: "100%" }}
              onChange={(args) => {
                setSubject(args.target.value);
              }}
            ></textarea>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Interview Type</td>
          <td colSpan={4}>
            <DropDownListComponent
              id="interviewType"
              placeholder="Choose interviewType"
              data-name="interviewType"
              value={data.interviewType}
              className="e-field"
              style={{ width: "100%" }}
              dataSource={[
                "ReactJs Assesment",
                "UI/UX Assesment",
                "HR Assessment",
                "Dot Net Assessment",
                "TechnicalAssessment",
              ]}
            ></DropDownListComponent>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">From</td>
          <td colSpan={4}>
            <DateTimePickerComponent
              id="startTime"
              format="dd/MM/yy hh:mm a"
              data-name="startTime"
              value={start}
              change={startChange.bind(this)}
              className="e-field"
            ></DateTimePickerComponent>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">To</td>
          <td colSpan={4}>
            <DateTimePickerComponent
              id="endTime"
              format="dd/MM/yy hh:mm a"
              data-name="endTime"
              value={end}
              className="e-field"
            ></DateTimePickerComponent>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Candidate</td>
          <td colSpan={4}>
            <DropDownListComponent
              id="candidate"
              placeholder="Choose Candidate"
              data-name="candidate"
              value={data.candidate}
              className="e-field"
              style={{ width: "100%" }}
              // dataSource={
              //   acceptedUser.map(
              //     (user) => user.id + ". " + user.fname + " " + user.lname
              //   )

              //   //   [
              //   //   "Anish Karki",
              //   //   "Aabhash Shahi",
              //   //   "Subash budhathoki",
              //   //   "Sudip Shrestha",
              //   // ]
              // }

              dataSource={acceptedUser.map(
                (user) => user.id + ". " + user.fname + " " + user.lname
              )}
              change={(args) => {
                const selectedCandidate = acceptedUser.find(
                  (user) =>
                    user.id + ". " + user.fname + " " + user.lname ===
                    args.value
                );
                console.log(selectedCandidate);
                if (selectedCandidate) {
                  dispatch(
                    selectedUserFromDropdowntotheAssesmet(selectedCandidate)
                  );
                }
              }}
            ></DropDownListComponent>
          </td>
        </tr>

        <tr>
          <td className="e-textlabel">Interviewer</td>
          <td colSpan={4}>
            <DropDownListComponent
              id="interviewer"
              placeholder="Choose Interviewer"
              data-name="interviewer"
              value={data.interviewer}
              className="e-field"
              style={{ width: "100%" }}
              dataSource={InterviewerApi.map(
                (interviewer) => interviewer.Interviewer
              )}
            ></DropDownListComponent>
          </td>
        </tr>
        {/* <tr>
          <td className="e-textlabel">Description</td>
          <td colSpan={4}>
            <textarea
              id="description"
              className="e-field e-input"
              name="description"
              rows={3}
              cols={50}
              style={{
                width: "100%",
                height: "60px !important",
                resize: "vertical",
              }}
              value={description}
              onChange={(args) => {
                setDescription(args.target.value);
              }}
            ></textarea>
          </td>
        </tr> */}
      </tbody>
    </table>
  ) : (
    <div></div>
  );
}

export default EditorWindowTemplate;
