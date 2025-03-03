import "../styles/publicCalendar.css";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import axios from "axios";

const localizer = momentLocalizer(moment);

const AppointmentScheduler = () => {
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        details: ""
    });
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const [currentView, setCurrentView] = useState(Views.MONTH);
    
    useEffect(() => {
        fetchAvailableSlots();
    }, []);

    const fetchAvailableSlots = async () => {
        try {
            const calendarId = import.meta.env.VITE_CALENDAR_ID;
            const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
                params: {
                    key: import.meta.env.VITE_CALENDAR_API_KEY,
                    timeMin: new Date().toISOString(),
                    singleEvents: true,
                    orderBy: "startTime"
                }
            });

            const eventsData = response.data.items.map(event => ({
                id: event.id,
                start: new Date(event.start.dateTime || event.start.date),
                end: new Date(event.end.dateTime || event.end.date),
                title: event.summary || "Unavailable",
                available: !event.summary.includes("Unavailable")
            }));

            setAvailableSlots(eventsData);
            setEvents(eventsData);
        } catch (error) {
            console.error("Error fetching slots from Google Calendar", error);
            setAvailableSlots([]);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedSlot) {
            alert("Please select a time slot.");
            return;
        }
        try {
            alert("Appointment booked successfully!");
            setSelectedSlot(null);
            setFormData({ name: "", email: "", phone: "", businessName: "", details: "" });
        } catch (error) {
            console.error("Error booking appointment", error);
            alert("Failed to book appointment. Please try again.");
        }
    };

    const handleSelectDate = (slot) => {
        setSelectedDate(slot.start);
        setCurrentView(Views.DAY);
    };

    const handleSelectSlot = ({ start }) => {
        setSelectedSlot({ start, end: moment(start).add(1, 'hour').toDate(), available: true });
    };

    return (
        <div>
            <h2>Schedule a Consultation</h2>
            {loading ? (
                <p>Loading available slots...</p>
            ) : (
                <Calendar 
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    selectable
                    view={currentView}
                    onView={setCurrentView}
                    onSelectSlot={handleSelectSlot}
                    onSelectEvent={(event) => {
                        if (event.available) {
                            setSelectedSlot(event);
                        }
                    }}
                    onNavigate={(date, view) => {
                        if (view === Views.DAY) {
                            setSelectedDate(date);
                        }
                    }}
                />
            )}

            {selectedSlot && (
                <form onSubmit={handleSubmit}>
                    <h3>Booking for {moment(selectedSlot.start).format("MMMM Do YYYY, h:mm A")}</h3>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                    <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
                    <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleInputChange} required />
                    <textarea name="details" placeholder="Project Details" value={formData.details} onChange={handleInputChange} required />
                    <button type="submit">Book Appointment</button>
                </form>
            )}
        </div>
    );
};

export default AppointmentScheduler;
