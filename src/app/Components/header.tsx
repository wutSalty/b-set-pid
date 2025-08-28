'use client'

import { format } from "date-fns";
import React from "react";


const useDate = () => {
  const [today, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 15 * 1000);

    return () => {clearInterval(timer)};
  }, []);

  return format(today, "HH:mm");
}

export default function StandardHeader(
  {
    LineColour,
    LineCode,
    FinalStop,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
  }
) {
  return (
    <div className="w-full h-[75] bg-header flex items-center justify-between px-[32]">
      <div className="flex items-center">
        <div className="aspect-square w-[56] mr-[16] rounded-[8] flex items-center justify-center" style={{backgroundColor: LineColour}}>
          <p className="text-2xl font-semibold text-secondary">{LineCode}</p>
        </div>
        <div className="">
          <p className="text-4xl text-secondary leading-12">to {FinalStop}</p>
        </div>
      </div>
      <p className="text-xl text-secondary">Time Now {useDate()}</p>
    </div>
  );
}
