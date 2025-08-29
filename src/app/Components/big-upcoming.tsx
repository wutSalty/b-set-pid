import { CSSProperties } from "react";
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
    ScrollStyle,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    ViaStop: string,
    NextStop: string,
    UpcomingStops: string[],
    ScrollStyle: CSSProperties,
  }
) {
  return (
    <div className="aspect-video h-[480px] bg-background border inline-block align-top">
    
      <StandardHeader LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />
      
      <div className="flex h-[calc(480px-75px)]">
        <div className="flex relative basis-1/2 h-[calc(480px-75px)]">

          <div className="absolute left-[calc(28px+32px+40px+8px)]">
            {ViaStop ? <p className="text-3xl">via {ViaStop}</p>: <></>}
          </div>

          {/* Line and dot */}
          <div className="relative w-[18] left-[calc(32px+28px-9px)]" style={{backgroundColor: LineColour}}>
            <div className="bg-white border-[6] aspect-square w-[40] rounded-full relative right-[11] top-[182]" style={{borderColor: LineColour}}>
            </div>
          </div>

          {/* Next stop: */}
          <div className="relative h-[100] left-[78] top-[148]">
            <p className="text-2xl">Next Stop</p>
            <p className="text-5xl">{NextStop}</p>
          </div>

        </div>

        {/* right side */}
        <div className="basis-1/2">
          <div className="flex relative h-[405px]">
            {/* Line and dot */}
            <div className="relative w-[12] left-[72]" style={{backgroundColor: LineColour}}>
            </div>

            {/* Next stop: */}
            <div className="relative h-[32] left-[64] bottom-[calc(32px+8px)]">
              <p className="text-2xl text-secondary">Stopping At</p>
            </div>

            <div className="absolute h-[calc(405px)] left-[64] overflow-y-hidden">
              <div className={UpcomingStops.length > 6 ? "animate-scrollA" : ""} style={ScrollStyle}>
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
