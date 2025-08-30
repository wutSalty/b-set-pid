import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { RoundIcon } from './icons';
import StandardHeader from './header';

export default function SmallStopping(
  {
    LineColour,
    LineCode,
    FinalStop,
    NextStop,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    NextStop: string,
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
          <p className="text-2xl">Change For</p>
          <div className='flex gap-[12] items-center flex-wrap'>
            <RoundIcon LineCode='T' LineColour='#f5891f' />
            <RoundIcon LineCode='M' LineColour='#009e90' />
            <RoundIcon LineCode='L' LineColour='#e4032e' />
            <RoundIcon LineCode='T' LineColour='#e56e0f' />
            <RoundIcon LineCode='C' LineColour='#742283' />
            <RoundIcon LineCode='B' LineColour='#00b6f1' />
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
