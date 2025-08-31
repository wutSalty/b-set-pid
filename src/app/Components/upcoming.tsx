import { BiSolidPlaneAlt } from 'react-icons/bi';

const AirportStations = [
  "Domestic",
  "International",
];

export default function Upcoming({name, colour, marginY}: {name: string, colour: string, marginY: number}) {
  if (!name) {
    return <></>
  }
  
  return (
    <>
      <div className="w-[350] overflow-visible" style={{margin: `${marginY}px 0`}}>
        <div className="bg-white border-[3] aspect-square w-[28] mr-[12] rounded-full inline-block overflow-visible" style={{borderColor: colour}}></div>
        <div className='inline-flex items-center gap-3 overflow-visible'>
          <p className="text-4xl inline-block overflow-visible text-nowrap">{name}</p>
          {AirportStations.indexOf(name) >= 0 ? <BiSolidPlaneAlt className='text-4xl'/> : <></>}
        </div>
      </div>
    </>
  );
};

const first = 48;
// margin for big = 64
export function UpcomingSVG(
  {name, colour, margin, i}:
  {name: string, colour: string, margin: number, i: number}
) {
  const gap = first + margin * i;

  return (
    <g transform={`translate(0, ${gap})`}>
      <circle r={14} fill='white' stroke={colour} strokeWidth={4}></circle>
      <text className='text-4xl' x={16+14} dominantBaseline='central'>{name}</text>
    </g>
  );
}
