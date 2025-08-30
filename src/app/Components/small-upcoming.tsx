'use client'
import { CSSProperties, useEffect, useRef, useState } from "react";
import Upcoming from "./upcoming";
import StandardHeader from "./header";

export default function SmallUpcoming(
  {
    LineColour,
    LineCode,
    FinalStop,
    NextStop,
    UpcomingStops,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    NextStop: string,
    UpcomingStops: string[],
  }
) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, []);

  const ScrollStyleB = {
    "--speed": `${UpcomingStops.length * 2}s`,
    "--height": `-${height + 24}px`,
  }

  return (
    <div className="aspect-32/9 h-[240px] bg-background border">

      <StandardHeader LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />

      <div className="flex" style={{height: 240-75}}>
        <div className="flex basis-1/2" style={{height: 240-75}}>

          {/* Line */}
          <div className="h-0 w-0 overflow-visible">
            <div className="w-[18]" style={{backgroundColor: LineColour, marginLeft: 32+28-9, height: 480-75}}>
            </div>
          </div>

          {/* Dot */}
          <div className="h-0 w-0 overflow-visible">
            <div className="bg-white border-[6] aspect-square w-[40] rounded-full ml-[11] mt-[46]" style={{borderColor: LineColour, marginLeft: 32+28-20}}>
            </div>
          </div>

          <div className="h-0 w-0 overflow-visible">
            <div className='h-[100] ml-[102] mt-[12]'>
              <p className="text-2xl text-nowrap">Next Stop</p>
              <p className="text-5xl text-nowrap">{NextStop}</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex basis-1/2 h-[240px]">

          {/* Line */}
          <div className="h-0 w-0 overflow-visible">
            <div className="w-[12]" style={{backgroundColor: LineColour, marginLeft: 72, height: 240-75}}>
            </div>
          </div>
          

          {/* Next stop: */}
          <div className="h-0 w-0 overflow-visible">
            <p className="text-2xl text-secondary text-nowrap ml-[64] mt-[-32]">Stopping At</p>
          </div>

          <div className="h-[165] overflow-visible">
            <div className="h-[165] ml-[64] overflow-y-hidden">
              <div className="animate-scrollB" style={ScrollStyleB as CSSProperties} ref={ref}>
                {UpcomingStops.map((s, i) => (
                  <Upcoming key={i} name={s} colour={LineColour} marginY={12} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
