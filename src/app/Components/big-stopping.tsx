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
