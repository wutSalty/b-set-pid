import { ImAirplane } from 'react-icons/im'

const AirportStations = [
  "Domestic",
  "International",
];

export default function Upcoming({name, colour, marginY}: {name: string, colour: string, marginY: number}) {
  return (
    <>
      <div className="w-[350]" style={{margin: `${marginY}px 0`}}>
        <div className="bg-white border-[3] aspect-square w-[28] mr-[12] rounded-full relative inline-block" style={{borderColor: colour}}></div>
        <div className='inline-flex items-center gap-3'>
          <p className="text-4xl inline-block">{name}</p>
          {AirportStations.indexOf(name) >= 0 ? <ImAirplane className='text-2xl -scale-x-100'/> : <></>}
        </div>
      </div>
    </>
  );
};
