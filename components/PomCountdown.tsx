import moment, { Duration } from "moment";
import React, { useState } from "react";

const PomCountdown = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [countdownRef, setCountdownRef] = useState<NodeJS.Timer>();

  const onStart: () => void = () => {
    var duration: Duration = moment.duration({
      minutes: minutes,
      seconds: seconds,
    });

    let timestamp: Date = new Date(0, 0, 0, 2, 10, 30);
    const interval: number = 1;

    const countdown: NodeJS.Timer = setInterval(function () {
      timestamp = new Date(timestamp.getTime() + interval * 1000);

      duration = moment.duration(duration.asSeconds() - interval, "seconds");
      let min: number = duration.minutes();
      let sec: number = duration.seconds();

      sec -= 1;
      if (min < 0) return clearInterval(countdown);
      if (sec < 0 && min != 0) {
        min -= 1;
        sec = 59;
      }

      if (min == 0 && sec == 0) clearInterval(countdown);
      setMinutes(min);
      setSeconds(sec);
    }, 1000);
    setCountdownRef(countdown);
  };

  const onFinish: () => void = () => {
    if (countdownRef !== undefined) clearInterval(countdownRef);
    setMinutes(25);
    setSeconds(0);
  };

  const twoDigitFormatting: Intl.NumberFormatOptions = {
    minimumIntegerDigits: 2,
    useGrouping: false,
  };

  return (
    <div className="flex flex-col">
      <div>
        <h2 className="text-4xl text-soft-dark-caption-text dark:text-soft-white-caption-text">
          {minutes.toLocaleString("en-GB", twoDigitFormatting)}:
          {seconds.toLocaleString("en-GB", twoDigitFormatting)}
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div>
          <button onClick={onStart}>Start</button>
        </div>
        <div>
          <button onClick={onFinish}>Finish</button>
        </div>
      </div>
    </div>
  );
};

export default PomCountdown;
