import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { IconSVG, RoundIcon, SquareIcon } from './icons';
import StandardHeader, { StandardHeaderSVG } from './header';
import { Roundel } from '../Types/Roundel';

export default function BigStopping(
  {
    LineColour,
    LineCode,
    FinalStop,
    ViaStop,
    NextStop,
    Roundels,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    ViaStop: string,
    NextStop: string,
    Roundels: Roundel[],
  }
) {
  return (
    <div className="aspect-video h-[480px] bg-background border">

      <StandardHeader LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />

      <div className="flex" style={{height: 480-75-75}}>

        <div className="flex basis-1/2" style={{height: 480-75}}>

          {/* Via */}
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
              <p className="text-2xl text-nowrap">Now Stopping</p>
              <p className="text-5xl text-nowrap">{NextStop}</p>
            </div>
          </div>

        </div>

        <div className="basis-1/2 px-[32px] py-[16px] pr-0 pb-0" style={{height: 480-75-75}}>
          {Roundels.length > 0 ? <p className="text-2xl">Change For</p> : <></>}
          <div className='flex gap-[12] items-center flex-wrap mb-[12]'>
            {
              Roundels.filter(r => r.row === 0).map((r, i) => (
                r.type === "square" ?
                <SquareIcon key={`${i}_${r.lineCode}_${r.lineColour}_${r.row}`} LineCode={r.lineCode} LineColour={r.lineColour} /> :
                <RoundIcon key={`${i}_${r.lineCode}_${r.lineColour}_${r.row}`} LineCode={r.lineCode} LineColour={r.lineColour} />
              ))
            }
          </div>
          <div className='flex gap-[12] items-center flex-wrap mb-[12]'>
            {
              Roundels.filter(r => r.row === 1).map((r, i) => (
                r.type === "square" ?
                <SquareIcon key={`${i}_${r.lineCode}_${r.lineColour}_${r.row}`} LineCode={r.lineCode} LineColour={r.lineColour} /> :
                <RoundIcon key={`${i}_${r.lineCode}_${r.lineColour}_${r.row}`} LineCode={r.lineCode} LineColour={r.lineColour} />
              ))
            }
          </div>
          <div className='flex gap-[12] items-center flex-wrap mb-[12]'>
            {
              Roundels.filter(r => r.row === 2).map((r, i) => (
                r.type === "square" ?
                <SquareIcon key={`${i}_${r.lineCode}_${r.lineColour}_${r.row}`} LineCode={r.lineCode} LineColour={r.lineColour} /> :
                <RoundIcon key={`${i}_${r.lineCode}_${r.lineColour}_${r.row}`} LineCode={r.lineCode} LineColour={r.lineColour} />
              ))
            }
          </div>
          <div className='flex gap-[12] items-center flex-wrap mb-[12]'>
            {
              Roundels.filter(r => r.row === 3).map((r, i) => (
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

export function BigStoppingSVG(
  {
    LineColour,
    LineCode,
    FinalStop,
    ViaStop,
    NextStop,
    Roundels,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    ViaStop: string,
    NextStop: string,
    Roundels: Roundel[],
  }
) {
  return (
    <svg width="100%" viewBox='0 0 854 480' className='inline-block align-top border' xmlns="http://www.w3.org/2000/svg">
      <rect fill='white' width={854} height={480}></rect>
      
      {/* Header */}
      <StandardHeaderSVG LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />
      
      {/* Left Side */}
      <g>
        <text className='text-3xl' dominantBaseline='text-before-edge' x={28+32+40+8} y={75}>via {ViaStop}</text>
        
        {/* Line and Dot */}
        <rect width={18} height={480-75} x={32+28-9} y={75} fill={LineColour}></rect>
        <circle r={20} cx={32+28} cy={75+182} fill='white' stroke={LineColour} strokeWidth={6}></circle>

        <text className='text-2xl' x={102} y={75+146}>Now Stopping</text>
        <text className='text-5xl' x={102} y={75+182} dominantBaseline='central'>{NextStop}</text>
      </g>

      {/* Right Side */}
      <g transform='translate(427, 75)'>
        {Roundels.length > 0 ? <text className="text-2xl" x={32} y={16} dominantBaseline='text-before-edge'>Change For</text> : <></>}
        <g transform='translate(32, 72)'>
          {
            Roundels.filter(r => r.row === 0).map((r, i) => (
              <IconSVG key={r.id} type={r.type} LineColour={r.lineColour} LineCode={r.lineCode} i={i} />
            ))
          }
        </g>
        {/* +64 */}
        <g transform='translate(32, 136)'>
          {
            Roundels.filter(r => r.row === 1).map((r, i) => (
              <IconSVG key={r.id} type={r.type} LineColour={r.lineColour} LineCode={r.lineCode} i={i} />
            ))
          }
        </g>
        <g transform='translate(32, 200)'>
          {
            Roundels.filter(r => r.row === 2).map((r, i) => (
              <IconSVG key={r.id} type={r.type} LineColour={r.lineColour} LineCode={r.lineCode} i={i} />
            ))
          }
        </g>
        <g transform='translate(32, 264)'>
          {
            Roundels.filter(r => r.row === 3).map((r, i) => (
              <IconSVG key={r.id} type={r.type} LineColour={r.lineColour} LineCode={r.lineCode} i={i} />
            ))
          }
        </g>
      </g>
      
      {/* 405 + half 75 */}
      <g transform='translate(0, 442)'>
          <text className='text-5xl' x="50%" textAnchor='middle' dominantBaseline='central'>Doors Open</text>
          <g transform='translate(410, -16)'> 
            <FaChevronLeft className='text-4xl' x={-172}/>
            <FaChevronRight className='text-4xl' x={172}/>
          </g>
      </g>
      
    </svg>
  );
}
