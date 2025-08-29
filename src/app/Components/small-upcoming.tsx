import { CSSProperties } from "react";
import Upcoming from "./upcoming";
import StandardHeader from "./header";

export default function SmallUpcoming(
  {
    LineColour,
    LineCode,
    FinalStop,
    NextStop,
    UpcomingStops,
    ScrollStyle,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    NextStop: string,
    UpcomingStops: string[],
    ScrollStyle: CSSProperties,
  }
) {
  return (
    <div className="aspect-32/9 h-[240px] bg-background border inline-block">

      <StandardHeader LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />

      <div className="flex h-[calc(240px-75px)]">
        <div className="basis-1/2 h-[calc(240px-75px)]">
          <div className="flex h-[calc(240px-75px)]">

            <div className="relative w-[18] left-[calc(28px-9px+32px)]" style={{backgroundColor: LineColour}}>
              <div className="bg-white border-[6] aspect-square w-[40px] rounded-full relative right-[11] top-[46]" style={{borderColor: LineColour}}>
              </div>
            </div>

            <div className='relative h-[100] left-[78] top-[12]'>
              <p className="text-2xl">Now Stopping</p>
              <p className="text-5xl">{NextStop}</p>
            </div>

          </div>
        </div>

        {/* right side */}
        <div className="basis-1/2">
          <div className="flex relative h-[calc(240px-75px)]">
            {/* Line and dot */}
            <div className="relative w-[12] left-[72]" style={{backgroundColor: LineColour}}>
            </div>

            {/* Next stop: */}
            <div className="relative h-[32] left-[64] bottom-[calc(32px+8px)]">
              <p className="text-2xl text-secondary">Stopping At</p>
            </div>

            <div className="absolute h-[calc(240px-75px)] left-[64] overflow-y-hidden">
              <div className={UpcomingStops.length > 3 ? "animate-scrollB" : ""} style={ScrollStyle}>
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
