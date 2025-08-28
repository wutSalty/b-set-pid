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
    <div className="aspect-32/9 h-[240px] scale-100 bg-background border inline-block">

      <StandardHeader LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />

      <div className="flex h-[calc(240px-75px-75px)]">
        <div className="flex basis-1/2 h-[calc(240px-75px)]">

          <div className="relative w-[18] left-[calc(28px-9px+32px)]" style={{backgroundColor: LineColour}}>
            <div className="bg-white border-[6] aspect-square w-[40px] rounded-full relative right-[11] top-[46]" style={{borderColor: LineColour}}>
            </div>
          </div>

          <div className='relative h-[100] left-[78] top-[12]'>
            <p className="text-2xl">Now Stopping</p>
            <p className="text-5xl">{NextStop}</p>
          </div>
          
        </div>

        <div className="basis-1/2 h-[calc(240px-75px-75px)] px-[32px] py-[8px] pr-0 pb-0">
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

      <div className="h-[75px] flex items-center justify-center relative">
        <FaChevronLeft className='text-4xl absolute mr-[320]'/>
        <p className="text-5xl relative">Doors Open</p>
        <FaChevronRight className='text-4xl absolute ml-[320]'/>
      </div>
    </div>
  );
}
