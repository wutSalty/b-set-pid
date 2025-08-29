import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { RoundIcon, SquareIcon } from './icons';
import StandardHeader from './header';

export default function BigStopping(
  {
    LineColour,
    LineCode,
    FinalStop,
    ViaStop,
    NextStop,
  }:
  {
    LineColour: string,
    LineCode: string,
    FinalStop: string,
    ViaStop: string,
    NextStop: string,
  }
) {
  return (
    <div className="aspect-video h-[480px] bg-background border inline-block align-top">

      <StandardHeader LineColour={LineColour} LineCode={LineCode} FinalStop={FinalStop} />

      <div className="flex h-[calc(480px-75px-75px)]">
        <div className="flex relative basis-1/2 h-[calc(480px-75px)]">

          <div className="absolute left-[calc(28px+32px+40px+8px)]">
            {ViaStop ? <p className="text-3xl">via {ViaStop}</p>: <></>}
          </div>

          <div className="relative w-[18] left-[calc(32px+28px-9px)]" style={{backgroundColor: LineColour}}>
            <div className="bg-white border-[6] aspect-square w-[40] rounded-full relative right-[11] top-[182]" style={{borderColor: LineColour}}>
            </div>
          </div>

          <div className='relative h-[100] left-[78] top-[148]'>
            <p className="text-2xl">Now Stopping</p>
            <p className="text-5xl">{NextStop}</p>
          </div>

        </div>

        <div className="basis-1/2 h-[calc(480px-75px-75px)] px-[32px] py-[16px] pr-0 pb-0">
          <p className="text-2xl">Change For</p>
          <div className='flex gap-[12] items-center flex-wrap mb-[12]'>
            <SquareIcon LineCode='T1' LineColour='#f99d1c' />
            <SquareIcon LineCode='T2' LineColour='#0098cd' />
            <SquareIcon LineCode='T3' LineColour='#f37021' />
            <SquareIcon LineCode='T4' LineColour='#005aa3' />
            <SquareIcon LineCode='T8' LineColour='#029747' />
            <SquareIcon LineCode='T9' LineColour='#d11f2f' />
          </div>
          <div className='flex gap-[12] items-center flex-wrap mb-[12]'>
            <SquareIcon LineCode='M1' LineColour='#168388' />
          </div>
          <div className='flex gap-[12] items-center flex-wrap mb-[12]'>
            <SquareIcon LineCode='L1' LineColour='#be1622' />
            <SquareIcon LineCode='L2' LineColour='#dd1e25' />
            <SquareIcon LineCode='L3' LineColour='#781140' />
          </div>
          <div className='flex gap-[12] items-center flex-wrap mb-[12]'>
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
