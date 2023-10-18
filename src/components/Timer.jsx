import React from "react";
import Countdown from "react-countdown";

const Timer = () => {
  const targetDate = new Date("2024-01-01T00:00:00");
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Happy New Year 2024!</span>;
    } else {
      const countdownItems = [
        { label: "Days", value: days },
        { label: "Hrs", value: hours },
        { label: "Min", value: minutes },
        { label: "Sec", value: seconds },
      ];
      return (
        <div className="flex align-items-center justify-content-start mb-4 gap-5 text-center">
          {countdownItems.map((item, index) => (
            <div key={index} className=" flex flex-column align-items-center">
              <div className="text-5xl font-bold">{item.value}</div>
              <div className="text-xs">{item.label}</div>
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <>
      <Countdown date={targetDate} renderer={renderer} />
    </>
  );
};

export default Timer;
