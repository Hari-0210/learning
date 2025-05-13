import { useState } from "react";

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function isToday(date, month, year) {
  const today = new Date();
  return (
    date === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
  );
}

function EventPlanner() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [events, setEvents] = useState({}); // { 'YYYY-MM-DD': [event1, event2] }
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventInput, setEventInput] = useState("");

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function handlePrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }
  function handleNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }
  function handlePrevYear() {
    setCurrentYear(currentYear - 1);
  }
  function handleNextYear() {
    setCurrentYear(currentYear + 1);
  }
  function handleDateClick(date) {
    setSelectedDate(date);
    setEventInput("");
  }
  function handleAddEvent() {
    if (!eventInput.trim()) return;
    const key = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(selectedDate).padStart(2, "0")}`;
    setEvents((prev) => ({
      ...prev,
      [key]: prev[key] ? [...prev[key], eventInput] : [eventInput],
    }));
    setEventInput("");
  }
  function hasEvent(date) {
    const key = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(date).padStart(2, "0")}`;
    return !!events[key];
  }
  function getEventsForDate(date) {
    const key = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(date).padStart(2, "0")}`;
    return events[key] || [];
  }

  // Generate calendar grid
  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(<td key={`empty-${i}`}></td>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const isCurrent = isToday(day, currentMonth, currentYear);
    const isSelected = selectedDate === day;
    const hasEvents = hasEvent(day);
    calendarCells.push(
      <td
        key={day}
        onClick={() => handleDateClick(day)}
        style={{
          cursor: "pointer",
          background: isCurrent
            ? "#cce5ff"
            : isSelected
            ? "#ffe5b4"
            : hasEvents
            ? "#d4edda"
            : "",
          border: isCurrent
            ? "2px solid #007bff"
            : isSelected
            ? "2px solid #ff9800"
            : hasEvents
            ? "2px solid #28a745"
            : "1px solid #ddd",
          borderRadius: "6px",
          padding: "8px",
          minWidth: "36px",
          minHeight: "36px",
          fontWeight: isCurrent ? "bold" : "normal",
        }}
      >
        {day}
        {hasEvents && (
          <span style={{ display: "block", fontSize: 10, color: "#28a745" }}>
            •
          </span>
        )}
      </td>
    );
  }
  // Fill trailing empty cells
  while (calendarCells.length % 7 !== 0) {
    calendarCells.push(<td key={`trailing-${calendarCells.length}`}></td>);
  }
  // Split into weeks
  const weeks = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(<tr key={i}>{calendarCells.slice(i, i + 7)}</tr>);
  }

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "32px auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 12px #0001",
        padding: 24,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 16 }}>Event Planner</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <button onClick={handlePrevYear}>&laquo;</button>
        <button onClick={handlePrevMonth}>&lsaquo;</button>
        <span
          style={{
            fontWeight: 600,
            fontSize: 18,
            minWidth: 120,
            textAlign: "center",
          }}
        >
          {monthNames[currentMonth]} {currentYear}
        </span>
        <button onClick={handleNextMonth}>&rsaquo;</button>
        <button onClick={handleNextYear}>&raquo;</button>
      </div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}
      >
        <thead>
          <tr>
            {weekDays.map((d) => (
              <th
                key={d}
                style={{ padding: 4, color: "#888", fontWeight: 500 }}
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{weeks}</tbody>
      </table>
      {selectedDate && (
        <div
          style={{
            marginTop: 12,
            background: "#f9f9f9",
            borderRadius: 8,
            padding: 12,
          }}
        >
          <div style={{ marginBottom: 8, fontWeight: 500 }}>
            Events for {monthNames[currentMonth]} {selectedDate}, {currentYear}
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {getEventsForDate(selectedDate).map((ev, idx) => (
              <li key={idx} style={{ marginBottom: 4, fontSize: 15 }}>
                • {ev}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <input
              type="text"
              value={eventInput}
              onChange={(e) => setEventInput(e.target.value)}
              placeholder="Add event..."
              style={{
                flex: 1,
                padding: 6,
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleAddEvent}
              style={{
                padding: "6px 12px",
                borderRadius: 4,
                background: "#007bff",
                color: "#fff",
                border: "none",
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventPlanner;
