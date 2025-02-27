// import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "March 9th",
      description:
        "Registration Deadline, no applications will be accepted after 23:59",
    },
    {
      date: "March 10th",
      description:
        "Link to the qualification contest will be sent to those who are eligible to participate",
    },
    {
      date: "March 12th",
      description: "Deadline to complete qualification contest",
    },
    {
      date: "March 13th",
      description:
        "Confirmation of participation with track based on qualification contest will be sent",
    },
  ];

  return (
    <div id="timeline" className="relative min-h-screen bg-gradient-to-b from-[#0a062e] via-[#18083d] to-[#0a062e] flex flex-col gap-20 md:gap-40 p-8 md:p-16 lg:p-24 items-center justify-center text-white">
    {/* SVG positioned for responsiveness */}
    <img src="/Group.svg" alt="Star" className="absolute top-15 left-5 w-20 h-20 md:top-40 md:left-20 lg:top-40 lg:left-25 md:w-45 md:h-45" />
  
    {/* Title with responsive text size */}
    <p className="text-3xl md:text-7xl font-bold text-center mb-4 md:mb-8">
      <span className="text-pink-500">codeW</span> <span className="hidden md:inline"> 2025</span> Timeline
    </p>
  
    {/* Responsive grid layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl px-4 md:px-8">
      {events.map((event, index) => (
        <div
          key={index}
          className="h-auto min-h-[200px] md:min-h-[300px] bg-white/5 montserrat rounded-[30px] md:rounded-[40px] py-6 md:py-10 px-5 md:px-8 shadow-lg flex flex-col"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-center">
            {event.date}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-left flex-grow">{event.description}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Timeline;