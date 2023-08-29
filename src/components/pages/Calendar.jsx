import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateSelect = (selectInfo) => {
    setSelectedRange(selectInfo);
    // You can open a modal or form here to input event details
    // For simplicity, let's just log the selected range to the console
    console.log("Selected range:", selectInfo.startStr, selectInfo.endStr);
  };

  const handleEventClick = (eventClickInfo) => {
    setSelectedEvent(eventClickInfo.event);
    // You can open a popup box or modal with event details here
  };

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
        //  weekends={weekendsVisible}
          select={handleDateSelect}
          events={events}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          selectAllow={(selectInfo) => {
            const today = new Date();
            // Only allow selecting future dates
            return selectInfo.start > today;
          }}
        />
      </div>
      {selectedEvent && (
        <div className="popup">
          <h3>{selectedEvent.title}</h3>
          <p>Start: {selectedEvent.start.toLocaleString()}</p>
          {/* Add more event details as needed */}
          {/* You can also add a close button in the popup */}
        </div>
      )}
    </>
  );
};

const events = [
  { title: "Meeting", start: new Date() },
  { title: "event 1", date: "2023-08-14" },
  { title: "event 2", date: "2023-08-15" },
];

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;
