'use client'
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Upcoming from "./upcoming";
import StandardHeader from "./header";

export default function BigUpcoming(
  {
    LineColour,
    LineCode,
    FinalStop,
    ViaStop,
    NextStop,
    UpcomingStops,
    ScrollClass,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    ViaStop: string,
    NextStop: string,
    UpcomingStops: string[],
    ScrollClass?: string,
  }
) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeight(ref.current ? ref.current.clientHeight : 0);
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);

  const ScrollStyleA = {
    "--speed": `${UpcomingStops.length * 2}s`,
    "--height": `-${height + 48}px`,
  }

  if (!ScrollClass) ScrollClass = UpcomingStops.length > 6 ? "animate-scrollA" : "";
  // const ScrollClass = UpcomingStops.length > 6 ? "animate-scrollA" : "";

  // 405 = 0%
  // height + 48 = 100%

  return (
    <div className="aspect-video h-[480px] bg-background border">
    
      <StandardHeader LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />
      
      <div className="flex" style={{height: 480-75}}>
        {/* Left side */}
        <div className="flex basis-1/2" style={{height: 480-75}}>

          {/* Via Stop */}
          <div className="h-0 w-0 overflow-visible">
            {ViaStop ? <p className="text-3xl text-nowrap" style={{marginLeft: 28+32+40+8}}>via {ViaStop}</p>: <></>}
          </div>

          {/* Line */}
          <div className="h-0 w-0 overflow-visible">
            <div className="w-[18]" style={{backgroundColor: LineColour, marginLeft: 32+28-9, height: 480-75}}>
            </div>
          </div>

          {/* Dot */}
          <div className="h-0 w-0 overflow-visible">
            <div className="bg-white border-[6] aspect-square w-[40] rounded-full ml-[11] mt-[182]" style={{borderColor: LineColour, marginLeft: 32+28-20}}>
            </div>
          </div>
          
          {/* Next stop: */}
          <div className="h-0 w-0 overflow-visible">
            <div className="h-[100] ml-[102] mt-[146]">
              <p className="text-2xl text-nowrap">Next Stop</p>
              <p className="text-5xl text-nowrap">{NextStop}</p>
            </div>
          </div>

        </div>

        {/* Right side */}
        <div className="flex basis-1/2 h-[405px]">

          {/* Line */}
          <div className="h-0 w-0 overflow-visible">
            <div className="w-[12]" style={{backgroundColor: LineColour, marginLeft: 72, height: 480-75}}>
            </div>
          </div>

          {/* Next stop: */}
          <div className="h-0 w-0 overflow-visible">
            <p className="text-2xl text-secondary text-nowrap ml-[64] mt-[-40]">Stopping At</p>
          </div>

          {/* Scrolling */}
          <div className="h-[405] overflow-visible">
            <div className="h-[405] ml-[64] overflow-y-hidden">
              <div className={ScrollClass} style={ScrollStyleA as CSSProperties} ref={ref}>
                {UpcomingStops.map((s, i) => (
                  <Upcoming key={i} name={s} colour={LineColour} marginY={24} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
