// import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "February 25th",
      description:
        "Registration Deadline, no applications will be accepted after 23:59",
    },
    {
      date: "February 28th",
      description:
        "Link to the qualification contest will be sent to those who are eligible to participate",
    },
    {
      date: "March 3rd",
      description: "Deadline to complete qualification contest",
    },
    {
      date: "March 5th",
      description:
        "Confirmation of participation with track based on qualification contest will be sent",
    },
  ];

  return (
    <div id="timeline" className="relative min-h-screen bg-gradient-to-b from-[#0a062e] via-[#18083d] to-[#0a062e] flex flex-col gap-20 md:gap-40 p-15 lg:p-30 items-center justify-center text-white">
    {/* SVG positioned for responsiveness */}
    <img src="/Group.svg" alt="Star" className="absolute top-15 left-5 w-20 h-20 md:top-40 md:left-20 lg:top-40 lg:left-25 md:w-45 md:h-45" />
  
    {/* Title with responsive text size */}
    <p className="text-3xl md:text-7xl font-bold text-center">
      <span className="text-pink-500">codeW</span> <span className="hidden md:inline"> 2025</span> Timeline
    </p>
  
    {/* Responsive grid layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-15">
      {events.map((event, index) => (
        <div
          key={index}
          className="h-[250px] md:h-[550px] bg-white/5 montserrat rounded-[40px] md:rounded-[70px] py-10 md:py-22 px-6 lg:px-13 shadow-lg"
        >
          <h2 className="text-2xl lg:text-4xl font-semibold mb-6 md:mb-15 text-center">
            {event.date}
          </h2>
          <p className="text-lg sm:text-2xl text-left m-2 lg:m-0">{event.description}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Timeline;