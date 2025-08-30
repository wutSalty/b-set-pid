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
