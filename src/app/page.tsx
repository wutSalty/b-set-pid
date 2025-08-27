'use client'
import { CSSProperties } from 'react';
import { ImAirplane } from 'react-icons/im'

function Upcoming({name, colour}: {name: string, colour: string}) {
  // TODO: Airplane icon for airport stations
  return (
    <>
      <div className="w-[350] my-[24]">
        <div className="bg-white border-[3] aspect-square w-[28] mr-[12] rounded-full relative inline-block" style={{borderColor: colour}}></div>
        <p className="text-4xl inline-block">{name}</p>
      </div>
    </>
  );
};

export default function Home() {
  const LineColour = "#029747";
  const LineCode = "T8";
  const FinalStop = "Revesby";
  const ViaStop = "Airport";
  const UpcomingStops = [
    "Mascot",
    "Domestic",
    "International",
    "Wolli Creek",
    "Turella",
    "Bardwell Park",
    "Bexley North",
    "Kingsgrove",
    "Beverly Hills",
    "Narwee",
    "Riverwood",
    "Padstow",
    "Revesby",
  ];

  const ScrollStyle = {
    "--speed": `${UpcomingStops.length * 2}s`,
    "--items": `${UpcomingStops.length}`,
  }

  return (
    <>
      <div className="aspect-video h-[480px] scale-100 bg-white border">

        {/* clock */}
        <div className="w-full h-[75] bg-[#354d5e] flex items-center justify-end">
          <p className="text-2xl text-white mr-[24]">Time Now: 10:34</p>
        </div>
        
        <div className="flex h-[405]">
          {/* left side */}
          <div className="basis-1/2 h-[405]">
            <div className="flex items-center">
              <div className="aspect-square w-[102] mt-[16] ml-[32] mr-[16] rounded-[16] flex items-center justify-center" style={{backgroundColor: LineColour}}>
                <p className="text-6xl font-semibold text-white">{LineCode}</p>
              </div>
              <div className="mt-[16]">
                <p className="text-4xl leading-12">{FinalStop}<br/>via {ViaStop}</p>
              </div>
            </div>
            <div className="flex h-[calc(405px-118px)]">
              {/* Line and dot */}
              <div className="relative w-[18] left-[76]" style={{backgroundColor: LineColour}}>
                <div className="bg-white border-[6] aspect-square w-[40] rounded-full relative right-[11] top-[102]" style={{borderColor: LineColour}}>
                </div>
              </div>

              {/* Next stop: */}
              <div className="relative h-[100] left-[102] top-[64]">
                <p className="text-2xl">Next Stop</p>
                <p className="text-5xl">Green Square</p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="basis-1/2">
            <div className="flex relative h-[405px]">
              {/* Line and dot */}
              <div className="relative w-[12] left-[72]" style={{backgroundColor: LineColour}}>
              </div>

              {/* Next stop: */}
              <div className="relative h-[32] left-[90] top-[16]">
                <p className="text-2xl">Stopping At</p>
              </div>

              <div className="absolute h-[calc(405px-64px)] top-[64] left-[64] overflow-y-hidden">
                <div className="animate-scroll" style={ScrollStyle as CSSProperties}>
                  {UpcomingStops.map((s) => (
                    <Upcoming key={s} name={s} colour={LineColour} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
