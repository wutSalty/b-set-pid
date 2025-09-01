import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { IconSVG, RoundIcon, SquareIcon } from './icons';
import StandardHeader, { StandardHeaderSVG } from './header';
import { Roundel } from '../Types/Roundel';

export default function SmallStopping(
  {
    LineColour,
    LineCode,
    FinalStop,
    NextStop,
    Roundels,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    NextStop: string,
    Roundels: Roundel[],
  }
) {
  return (
    <div className="aspect-32/9 h-[240px] bg-background border">

      <StandardHeader LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />

      <div className="flex" style={{height: 240-75-75}}>

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
              <p className="text-2xl text-nowrap">Now Stopping</p>
              <p className="text-5xl text-nowrap">{NextStop}</p>
            </div>
          </div>
          
        </div>

        <div className="basis-1/2 px-[32px] py-[8px] pr-0 pb-0" style={{height: 240-75-75}}>
          {Roundels.length > 0 ? <p className="text-2xl">Change For</p> : <></>}
          <div className='flex gap-[12] items-center flex-wrap'>
            {
              Roundels.filter(r => r.row === 4).map((r, i) => (
                r.type === "square" ?
                <SquareIcon key={`${i}_${r.lineCode}_${r.lineColour}_${r.row}`} LineCode={r.lineCode} LineColour={r.lineColour} /> :
                <RoundIcon key={`${i}_${r.lineCode}_${r.lineColour}_${r.row}`} LineCode={r.lineCode} LineColour={r.lineColour} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="h-[75px] flex items-center justify-center">
        <div className="w-0 overflow-visible">
          <FaChevronLeft className='text-4xl ml-[-56]'/>
        </div>
        <p className="text-5xl text-nowrap ml-[0]">Doors Open</p>
        <div className="w-0 overflow-visible">
          <FaChevronRight className='text-4xl ml-[16]'/>
        </div>
      </div>
    </div>
  );
}

export function SmallStoppingSVG(
  {
    LineColour,
    LineCode,
    FinalStop,
    NextStop,
    Roundels,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    NextStop: string,
    Roundels: Roundel[],
  }
) {
  return (
    <svg width="100%" viewBox='0 0 854 240' className='inline-block align-top border' xmlns="http://www.w3.org/2000/svg">
      <rect fill='white' width={854} height={240}></rect>
      
      {/* Header */}
      <StandardHeaderSVG LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />
      
      {/* Left Side */}
      <g>
        
        {/* Line and Dot */}
        <rect width={18} height={854-75} x={32+28-9} y={75} fill={LineColour}></rect>
        <circle r={20} cx={32+28} cy={75+46+20} fill='white' stroke={LineColour} strokeWidth={6}></circle>

        <text className='text-2xl' x={102} y={75+46+20-28}>Now Stopping</text>
        <text className='text-5xl' x={102} y={75+46+20} dominantBaseline='central'>{NextStop}</text>
      </g>

      {/* Right Side */}
      <g transform='translate(427, 75)'>
        {Roundels.length > 0 ? <text className="text-2xl" x={32} y={16} dominantBaseline='text-before-edge'>Change For</text> : <></>}
        <g transform='translate(32, 72)'>
          {
            Roundels.filter(r => r.row === 4).map((r, i) => (
              <IconSVG key={r.id} type={r.type} LineColour={r.lineColour} LineCode={r.lineCode} i={i} />
            ))
          }
        </g>
      </g>
      
      {/* 165 + half 75 */}
      <g transform='translate(0, 202)'>
          <text className='text-5xl' x="50%" textAnchor='middle' dominantBaseline='central'>Doors Open</text>
          <g transform='translate(410, -16)'> 
            <FaChevronLeft className='text-4xl' x={-172}/>
            <FaChevronRight className='text-4xl' x={172}/>
          </g>
      </g>
      
    </svg>
  );
}

