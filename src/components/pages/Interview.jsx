import React, { useEffect, useState } from "react";
import { MdWork, MdDateRange } from "react-icons/md";
import { FcVideoCall } from "react-icons/fc";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";

import { registerLicense, extend } from "@syncfusion/ej2-base";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditorWindowTemplate from "./EditorWindowTemplate";
import { selectedCalendarData } from "../../features/Calendardata/CalendardataSlice";
registerLicense(
  "ORg4AjUWIQA/Gnt2V1hhQlJAfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5bd0RjXn5dcXxWRGNc"
);

const Interview = () => {
  const navigate = useNavigate();
  const selectedUser = useSelector((state) => state.Candidate.selectedUser);
  console.log(selectedUser);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const dispatch = useDispatch();
  const handleMeeting = () => {
    navigate("/MeetingDetail");
  };

  let scheduleObj;
  const fieldsData = {
    id: "id",
    subject: { name: "subject" },
    interviewType: { name: "interviewType", default: "" },
    startTime: { name: "startTime" },
    endTime: { name: "endTime" },
    description: { name: "description" },
    candidate: { name: "candidate", default: "" },
    interviewer: { name: "interviewer", default: "" },
  };
  const [scheduleModel, setScheduleModel] = useState({
    currentAction: "InitialRendering",
    currentView: "Week",
    selectedDate: new Date(2023, 7, 15),
    dataSource: localStorage.getItem("appointments")
      ? JSON.parse(localStorage.getItem("appointments"))
      : [],
  });
  const [newlyCreatedEvent, setNewlyCreatedEvent] = useState(null);
  console.log("This is from useState", newlyCreatedEvent);

  useEffect(() => {
    if (newlyCreatedEvent) {
      const startTimeString = newlyCreatedEvent.startTime.toLocaleTimeString(
        [],
        { hour: "2-digit", minute: "2-digit" }
      );
      const endTimeString = newlyCreatedEvent.endTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const serializedEvent = {
        ...newlyCreatedEvent,
        startTime: startTimeString,
        endTime: endTimeString,
      };

      dispatch(selectedCalendarData(serializedEvent));
      setShowUserDetails(true);
    }
  }, [newlyCreatedEvent]);

  function editorTemplate(props) {
    return <EditorWindowTemplate data={props}></EditorWindowTemplate>;
  }

  function onActionBegin(args) {
    if (
      ["eventCreate", "eventChange", "eventRemove"].indexOf(args.requestType) >
      -1
    ) {
      if (args.requestType === "eventCreate") {
        console.log("Event Created:", args.addedRecords);
        setNewlyCreatedEvent(args.addedRecords[0]);
      }
      // Prevent the default CRUD action by setting up true
      args.cancel = true;
      let resultData = extend([], scheduleModel.dataSource, null, true);
      if (args.addedRecords.length > 0) {
        // Adding appointment
        resultData = resultData.concat(args.addedRecords);
      }
      if (args.changedRecords.length > 0) {
        for (let i = 0; i < args.changedRecords.length; i++) {
          const index = resultData.findIndex((data) => {
            return data.id === args.changedRecords[i].id;
          });
          // Updating appointment
          resultData[index] = args.changedRecords[i];
        }
      }
      if (args.deletedRecords.length > 0) {
        for (let i = 0; i < args.deletedRecords.length; i++) {
          const index = resultData.findIndex((data) => {
            return data.id === args.deletedRecords[i].id;
          });
          // Deleting appointment
          resultData.splice(index, 1);
        }
      }
      // Update the state with the new data
      localStorage.setItem("appointments", JSON.stringify(resultData));
      setScheduleModel((prevState) => ({
        ...prevState,
        dataSource: resultData,
      }));
    }
  }

  // const eventTemplate = (props) => {
  //   return <div className="template-wrap">{props.customer}</div>;
  // };

  const eventTemplate = (props) => {
    return (
      <div className="template-wrap">
        <div>{props.candidate}</div> {/* Display candidate field */}
        <div>{props.interviewer}</div> {/* Display interviewer field */}
        <div>{props.interviewType}</div> {/* Display interviewer field */}
      </div>
    );
  };

  const onPopupOpen = (args) => {
    if (args.type == "QuickInfo") {
      args.cancel = true;
      var currentAction = args.target.classList.contains("e-work-cells")
        ? "Add"
        : "Save";
      scheduleObj.openEditor(args.data, currentAction);
    }
  };
  return (
    <>
      <div>
        <div className="flex justify-center mt-12 gap-4">
          {showUserDetails && (
            <div className="bg-white p-8 shadow-lg flex flex-col gap-3 leading-relaxed rounded-md">
              <div className="flex flex-col gap-8">
                <img
                  src={selectedUser?.photo}
                  alt=""
                  className="w-28 h-28 rounded-full border-2 border-gray-200 object-cover"
                />
                <div>
                  <h3>{newlyCreatedEvent.candidate}</h3>
                  <span>{selectedUser?.email}</span>
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-1">
                  <MdWork />
                  <span>InterViewer</span>
                </h3>
                <span>{newlyCreatedEvent.interviewer}</span>
              </div>
              <div>
                <h3 className="flex items-center gap-1">
                  <FcVideoCall />
                  Interview Type
                  <span></span>
                </h3>
                <span>{newlyCreatedEvent.interviewType}</span>
              </div>
              <div>
                <h3 className="flex items-center gap-1  ">
                  <MdDateRange />
                  <span> Date and Time</span>
                </h3>
                <span>
                  {newlyCreatedEvent
                    ? newlyCreatedEvent.startTime.toLocaleString()
                    : ""}
                  {newlyCreatedEvent
                    ? newlyCreatedEvent.endTime.toLocaleString()
                    : ""}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleMeeting()}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Meeting
                </button>
              </div>
            </div>
          )}
          <div className="App">
            <ScheduleComponent
              width="100%"
              height="650px"
              ref={(t) => (scheduleObj = t)}
              selectedDate={scheduleModel.selectedDate}
              currentView={scheduleModel.currentView}
              startHour="11:00 AM"
              endHour="18:00 PM"
              eventSettings={{
                dataSource: scheduleModel.dataSource,
                template: eventTemplate.bind(this),
                fields: fieldsData,
              }}
              editorTemplate={editorTemplate.bind(this)}
              actionBegin={onActionBegin.bind(this)}
              popupOpen={onPopupOpen.bind(this)}
            >
              <ViewsDirective>
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
                <ViewDirective option="WorkWeek" />
                <ViewDirective option="Month" />
                <ViewDirective option="Agenda" />
              </ViewsDirective>
              <Inject
                services={[
                  Day,
                  Week,
                  WorkWeek,
                  Month,
                  Resize,
                  DragAndDrop,
                  Agenda,
                ]}
              />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interview;
