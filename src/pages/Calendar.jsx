import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import Modal from "react-modal";
import moment from "moment";
import { useGoogleLogin, googleLogout, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/BigCalendar.css";
import googleLogo from "../assets/images/googlelogo.png"
import Header from "../components/Header";

const localizer = momentLocalizer(moment);
Modal.setAppElement("#root");

const EventComponent = ({ event }) => (
  <div>
    <strong>{event.title}</strong>
    {event.description && <p style={{ margin: 0 }}>{event.description}</p>}
  </div>
);

const CalendarPage = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [currentEvent, setCurrentEvent] = useState(null);
  const [view, setView] = useState("month"); // Track the current view
  const [selectedDate, setSelectedDate] = useState(new Date()); // Track the selected date
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    console.log("Events passed to Calendar:", events);
  }, [events]);

  // if modal is open
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [modalIsOpen]);

  useEffect(() => {
    const accessToken =
      localStorage.getItem("googleAccessToken") ||
      sessionStorage.getItem("googleAccessToken");
    if (accessToken) {
      setUser({ accessToken });
      fetchEvents(accessToken);
    } else {
      console.log("No access token found. User needs to log in.");
    }
  }, []);

  useEffect(() => {
    // Automatically update end time to 1 hour after start time if start time changes
    if (
      newEvent.start &&
      (!newEvent.end || moment(newEvent.end).isBefore(moment(newEvent.start)))
    ) {
      setNewEvent((prevEvent) => ({
        ...prevEvent,
        end: moment(prevEvent.start).add(1, "hour").toISOString(),
      }));
    }
  }, [newEvent.start]);

  const login = useGoogleLogin({
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    onSuccess: async (response) => {
      console.log("Login Successful Response:", response);
      const accessToken = response.access_token;

      if (!accessToken) {
        console.error("Access Token is missing in the response!");
        return;
      }

      // Save token in both localStorage and sessionStorage
      localStorage.setItem("googleAccessToken", accessToken);
      sessionStorage.setItem("googleAccessToken", accessToken);
      console.log("Access token saved successfully:", accessToken);

      setUser({ ...response, accessToken });
      await fetchEvents(accessToken);
    },
    onError: (error) => console.error("Login Failed:", error),
    scope: import.meta.env.VITE_GOOGLE_API_SCOPES,
  });

  const fetchEvents = async (accessToken) => {
    try {
      const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
      const apiBase = import.meta.env.VITE_GOOGLE_CALENDAR_API;

      console.log("Fetching events for Calendar ID:", calendarId);
      console.log("API Base URL:", apiBase);
      console.log("Access Token:", accessToken);

      const { data } = await axios.get(`${apiBase}/${calendarId}/events`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const formattedEvents = data.items
        .filter((item) => item.start && item.end) // Filter valid events
        .map((item) => ({
          id: item.id,
          title: item.summary || "No Title",
          description: item.description || "",
          start: new Date(item.start.dateTime || item.start.date),
          end: new Date(item.end.dateTime || item.end.date),
        }));

      console.log("Formatted Events for Calendar:", formattedEvents);
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Failed to fetch events. Please try again.");
    }
  };

  // when clicking a date
  const handleSelectSlot = (slotInfo) => {
    console.log("Date clicked:", slotInfo);

    const selectedDate = moment(slotInfo.start).startOf("day"); // Get the start of the selected day
    const defaultStartTime = selectedDate.clone().hour(8); // Set start time to 08:00 AM
    const defaultEndTime = selectedDate.clone().hour(9); // Set end time to 09:00 AM

    if (view === "month") {
      setSelectedDate(slotInfo.start);
      setView("day")
    } else {
      // If already in day view, open modal for new event
      const roundedStart = moment(slotInfo.start).startOf("hour").toISOString(); // Round to nearest hour
    const roundedEnd = moment(roundedStart).add(1, "hour").toISOString(); // Add 1 hour

      setNewEvent({
        title: "",
        description: "",
        start: roundedStart,
        end: roundedEnd,
      });

      setModalIsOpen(true);
    }
  };

  const handleViewChange = (newView) => {
    setView(newView); // Update the current view state
  };

  const handleSaveEvent = async () => {
    if (!newEvent.title || !newEvent.start) {
      setValidationError("Please fill in all fields.");
      return;
    }
  
    const accessToken = user.accessToken;
  
    // Automatically set the end time to one hour after the start time
    const event = {
      summary: newEvent.title,
      description: newEvent.description,
      start: { dateTime: newEvent.start },
      end: { dateTime: moment(newEvent.start).add(1, "hour").toISOString() },
    };
  
    try {
      await axios.post(
        `${import.meta.env.VITE_GOOGLE_CALENDAR_API}/${import.meta.env.VITE_GOOGLE_CALENDAR_ID}/events`,
        event,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
  
      setModalIsOpen(false);
      setNewEvent({ title: "", description: "", start: "" }); // Reset form
      setValidationError(""); // Clear validation error
      fetchEvents(accessToken); // Refresh events
    } catch (error) {
      console.error("Error saving event:", error);
      setValidationError("Failed to save the event. Please try again.");
    }
  };
  

  const logout = () => {
    console.log("logging out");
    googleLogout();
    localStorage.removeItem("googleAccessToken"); // Clear token from local storage
    sessionStorage.removeItem("googleAccessToken"); // Clear token from sessionStorage
    setUser(null);
    setEvents([]);
  };

  const generateTimeOptions = (startTime, endTime) => {
    const times = [];
    const start = moment(startTime, "HH:mm");
    const end = moment(endTime, "HH:mm");

    while (start <= end) {
      times.push(start.format("HH:mm"));
      start.add(30, "minutes"); // Increment by 30 minutes
    }

    return times;
  };

  const handleUpdateEvent = async (event) => {
    console.log("Updating event:", event.id);
    const accessToken = user.accessToken;
  
    // Automatically set the end time to one hour after the start time
    const updatedEvent = {
      summary: event.title,
      description: event.description,
      start: { dateTime: event.start },
      end: { dateTime: moment(event.start).add(1, "hour").toISOString() },
    };
  
    try {
      await axios.put(
        `${import.meta.env.VITE_GOOGLE_CALENDAR_API}/${import.meta.env.VITE_GOOGLE_CALENDAR_ID}/events/${event.id}`,
        updatedEvent,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
  
      console.log("Event updated successfully:", event.id);
      setModalIsOpen(false); // Close the modal after update
      setCurrentEvent(null); // Reset the current event state
      setNewEvent({ title: "", description: "", start: "" }); // Reset form
      setValidationError(""); // Clear validation error
      fetchEvents(accessToken); // Refresh the events list
    } catch (error) {
      console.error("Error updating event:", error.response?.data || error);
      setValidationError("Failed to update the event. Please try again."); // Display error message
    }
  };

  const handleDeleteEvent = async (eventId) => {
    console.log("Deleting event:", eventId);
    const accessToken = user.accessToken;
  
    try {
      await axios.delete(
        `${import.meta.env.VITE_GOOGLE_CALENDAR_API}/${import.meta.env.VITE_GOOGLE_CALENDAR_ID}/events/${eventId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
  
      console.log("Event deleted successfully:", eventId);
      setModalIsOpen(false); // Close the modal after deletion
      setCurrentEvent(null); // Reset current event
      setNewEvent({ title: "", description: "", start: "" }); // Reset form
      setValidationError(""); // Clear validation error
      fetchEvents(accessToken); // Refresh the events after deletion
    } catch (error) {
      console.error("Error deleting event:", error.response?.data || error);
      alert("Failed to delete event. Please try again.");
    }
  };


  return (
    <div className="calendarWrapper">
      <Header className={"blackHeader calendarHeader"}/>
    <div className="calendarContainer" style={{ height: "auto" }}>
      {!user || !user.accessToken ? (
        <div className="beforeLoginContainer">
        <button onClick={login}>
          <img src={googleLogo}></img>
          Login with Google
        </button>
        </div>
      ) : (
        <div
          className={`calendar-container ${modalIsOpen ? "modal-active" : ""}`}
        >
          {/* <Header className={"blackHeader"}/> */}
          <button onClick={logout}>Logout</button>
          {/* <button onClick={() => createEvent(user.accessToken)}>
            Create Event
          </button> */}
         <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            defaultDate={new Date()}
            date={selectedDate}
            view={view}
            onView={handleViewChange} // Handle view changes
            onNavigate={(date) => setSelectedDate(date)} // Handle navigation
            style={{ height: 500, border: "1px solid black", padding: "10px" }}
            views={["month", "week", "day"]}
            components={{ event: EventComponent }}
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={(event) => {
              setCurrentEvent(event);
              setModalIsOpen(true);
            }}
            min={new Date(0, 0, 0, 8, 0, 0)} // Start time at 8:00 AM
            max={new Date(0, 0, 0, 17, 0, 0)} // End time at 5:00 PM
          />

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => {
              setModalIsOpen(false);
              setCurrentEvent(null);
            }}
            overlayClassName="custom-overlay"
          >
            <h2>{currentEvent ? "Edit Appointment" : "Add Drop Off"}</h2>

            {/* Validation Error Message */}
            {validationError && (
              <p style={{ color: "red" }}>{validationError}</p>
            )}

            <label>Name:</label>
            <input
              type="text"
              value={currentEvent ? currentEvent.title : newEvent.title}
              onChange={(e) => {
                if (currentEvent) {
                  setCurrentEvent({ ...currentEvent, title: e.target.value });
                } else {
                  setNewEvent({ ...newEvent, title: e.target.value });
                }
              }}
            />

            <label>Description:</label>
            <textarea
              value={
                currentEvent ? currentEvent.description : newEvent.description
              }
              onChange={(e) => {
                if (currentEvent) {
                  setCurrentEvent({
                    ...currentEvent,
                    description: e.target.value,
                  });
                } else {
                  setNewEvent({ ...newEvent, description: e.target.value });
                }
              }}
              style={{ padding: "20px" }}
            />

            <label>Drop off date:</label>
            <input
              type="date"
              value={moment(
                currentEvent ? currentEvent.start : newEvent.start
              ).format("YYYY-MM-DD")}
              onChange={(e) => {
                if (currentEvent) {
                  setCurrentEvent({
                    ...currentEvent,
                    start: moment(currentEvent.start)
                      .set({
                        year: e.target.value.split("-")[0],
                        month: e.target.value.split("-")[1] - 1,
                        date: e.target.value.split("-")[2],
                      })
                      .toISOString(),
                  });
                } else {
                  setNewEvent({
                    ...newEvent,
                    start: moment(newEvent.start)
                      .set({
                        year: e.target.value.split("-")[0],
                        month: e.target.value.split("-")[1] - 1,
                        date: e.target.value.split("-")[2],
                      })
                      .toISOString(),
                  });
                }
              }}
            />

            <label>Time:</label>
            <select
              value={moment(
                currentEvent ? currentEvent.start : newEvent.start
              ).format("HH:mm")}
              onChange={(e) => {
                if (currentEvent) {
                  setCurrentEvent({
                    ...currentEvent,
                    start: moment(currentEvent.start)
                      .set({
                        hour: e.target.value.split(":")[0],
                        minute: e.target.value.split(":")[1],
                      })
                      .toISOString(),
                  });
                } else {
                  setNewEvent({
                    ...newEvent,
                    start: moment(newEvent.start)
                      .set({
                        hour: e.target.value.split(":")[0],
                        minute: e.target.value.split(":")[1],
                      })
                      .toISOString(),
                  });
                }
              }}
            >
              {generateTimeOptions("08:00", "17:00").map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* <label>End Date:</label>
            <input
              type="date"
              value={moment(newEvent.end).format("YYYY-MM-DD")}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  end: moment(newEvent.end)
                    .set({
                      year: e.target.value.split("-")[0],
                      month: e.target.value.split("-")[1] - 1,
                      date: e.target.value.split("-")[2],
                    })
                    .toISOString(),
                })
              }
            />

            <label>End Time:</label>
            <select
              value={moment(newEvent.end).format("HH:mm")}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  end: moment(newEvent.end)
                    .set({
                      hour: e.target.value.split(":")[0],
                      minute: e.target.value.split(":")[1],
                    })
                    .toISOString(),
                })
              }
            >
              {generateTimeOptions("08:00", "17:00").map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select> */}

            <button
              onClick={() => {
                if (currentEvent) {
                  handleUpdateEvent(currentEvent);
                } else {
                  handleSaveEvent();
                }
              }}
            >
              {currentEvent ? "Update" : "Save"}
            </button>
            {currentEvent && (
              <button onClick={() => handleDeleteEvent(currentEvent.id)}>
                Delete
              </button>
            )}
            <button
              onClick={() => {
                setModalIsOpen(false);
                setCurrentEvent(null);
                setValidationError("")
              }}
            >
              Cancel
            </button>
          </Modal>
        </div>
      )}
    </div>
    </div>
  );
};

export default CalendarPage;
