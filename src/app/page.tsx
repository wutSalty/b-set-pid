'use client'
import React, { useRef, useState } from 'react';
import { BigUpcomingSVG } from './Components/big-upcoming';
import { SmallUpcomingSVG } from './Components/small-upcoming';
import { BigStoppingSVG } from './Components/big-stopping';
import { SmallStoppingSVG } from './Components/small-stopping';
import { RoundIcon, SquareIcon } from './Components/icons';
import { MdClose } from 'react-icons/md';
import { InputColour } from './Components/CustomInputs';
import { Roundel } from './Types/Roundel';
import { FaCheck } from 'react-icons/fa';

const DefaultLineColour = "#029747";
const DefaultLineCode = "T8";
const DefaultFinalStop = "Revesby";
const DefaultViaStop = "Airport";
const DefaultNextStop = "Central";
const DefaultUpcomingStops = [
  "Green Square",
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

function ColourSwatch({colour}:{colour: string}) {
  const ref = useRef<HTMLDivElement>(null);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    if (!ref.current) return;
    ref.current.style.display = "block";

    setTimeout(() => {
      if(!ref.current) return;
      ref.current.style.display = "none";
    }, 1000);
  }

  return (
    <div 
      className='w-[48] h-[48] rounded-md flex items-center justify-center hover:cursor-pointer' 
      style={{backgroundColor: colour}}
      onClick={() => copyToClipboard(colour.slice(1))}>
      <div ref={ref} style={{display: "none"}}>
        <FaCheck className='text-white' />
      </div>
    </div>
  );
}

export default function Home() {
  const [LineColour, setLineColour] = useState(DefaultLineColour);
  const [LineCode, setLineCode] = useState(DefaultLineCode);
  const [FinalStop, setFinalStop] = useState(DefaultFinalStop);
  const [ViaStop, setViaStop] = useState(DefaultViaStop);
  const [NextStop, setNextStop] = useState(DefaultNextStop);
  const [UpcomingStops, setUpcomingStops] = useState(DefaultUpcomingStops);
  const [ScrollClass, setScrollClass] = useState<string>("");

  const [Roundels, setRoundels] = useState<Roundel[]>([]);
  const [RoundelCode, setRoundelCode] = useState("");
  const [RoundelColour, setRoundelColour] = useState("");
  const [RoundelType, setRoundelType] = useState("round");
  const [RoundelRow, setRoundelRow] = useState(0);

  const formatUpcomingStops = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpcomingStops(e.target.value.split('\n'))
  }

  const addToRow = () => {
    let tempColour = RoundelColour.trim();
    if (tempColour === "" || tempColour === "#") {
      tempColour = "#000000";
    }

    const adding: Roundel = {type: RoundelType, lineCode: RoundelCode, lineColour: tempColour, row: RoundelRow, id: crypto.randomUUID()};
    setRoundels([...Roundels, adding])
  }

  const removeFromRow = (roundel: Roundel) => {
    setRoundels(Roundels.filter((r) => r.id !== roundel.id));
  }

  const restartScroll = () => {
    setScrollClass("hidden");
    setTimeout(() => setScrollClass(""), 1);
  }

  const RoundelCard = ({roundel}:{roundel: Roundel}) => {
    return (
      <div className='flex items-center bg-slate-200 rounded-md p-2 gap-2 scale-80'>
        {
          roundel.type === "square" ?
          <SquareIcon LineCode={roundel.lineCode} LineColour={roundel.lineColour} /> :
          <RoundIcon LineCode={roundel.lineCode} LineColour={roundel.lineColour} />
        }
        <button className='rounded-full hover:cursor-pointer hover:bg-gray-100' onClick={() => removeFromRow(roundel)}>
          <MdClose className='inline-block text-3xl' />
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className='text-xl p-2 inline-block'>{"Mockup B-Set PID Simulator"}</p>
      <p className='text-sm p-2 inline-block'>{"Made by Salty"}</p>
      <a className='text-sm m-2 inline-block underline' href='https://github.com/wutSalty/b-set-pid' target="_blank" rel="noopener noreferrer">{"GitHub Repo"}</a>
      <p className='text-sm m-2'>{"Note: Page may be slightly broken on mobile or older browsers. Please use a modern desktop browser."}</p>
      <div className='p-2'>

        {/* Panels */}
        <div className='my-2'>
          <label htmlFor="LineCode" className='inline-block w-1/2'>Line Code (1-3 char)</label>
          <input 
            type='text' 
            id='LineCode' 
            name='LineCode' 
            minLength={1} 
            maxLength={3} 
            defaultValue={DefaultLineCode}
            onChange={(e) => setLineCode(e.target.value)} 
            required 
            className='w-[250] border rounded-md p-1 invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor="LineColour" className='inline-block w-1/2'>Line Colour (HEX)</label>
          <InputColour 
            onChange={(e) => setLineColour(`#${e.target.value}`)} 
            previewColour={LineColour} 
            defaultColour={DefaultLineColour} 
            required
          />
        </div>
        <div className='my-2'>
          <label htmlFor="FinalStop" className='inline-block w-1/2'>Final Stop</label>
          <input 
            type='text' 
            id='FinalStop' 
            name='FinalStop' 
            defaultValue={DefaultFinalStop}
            onChange={(e) => setFinalStop(e.target.value)} 
            required 
            className='w-[250] border rounded-md p-1 invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor="ViaStop" className='inline-block w-1/2'>Via Station</label>
          <input 
            type='text' 
            id='ViaStop' 
            name='ViaStop' 
            defaultValue={DefaultViaStop}
            onChange={(e) => setViaStop(e.target.value)} 
            className='w-[250] border rounded-md p-1 invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor="NextStop" className='inline-block w-1/2'>Next Stop</label>
          <input 
            type='text' 
            id='NextStop' 
            name='NextStop' 
            defaultValue={DefaultNextStop}
            onChange={(e) => setNextStop(e.target.value)} 
            required 
            className='w-[250] border rounded-md p-1 invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor='UpcomingStops' className='inline-block w-1/2 align-top'>Upcoming Stops (separate with new line)</label>
          <textarea 
            id='UpcomingStops' 
            name='UpcomingStops' 
            rows={5}
            defaultValue={DefaultUpcomingStops.join('\n')}
            onChange={(e) => formatUpcomingStops(e)} 
            className='w-[250] border rounded-md p-1 align-middle'
          ></textarea>
        </div>

        {/* Colour Template */}
        <div className='my-2'>
          <p className=''>{"Colour Templates (click to copy)"}</p>
          <div className='flex items-center gap-8 p-1'>
            {/* T1-9 */}
            <ColourSwatch colour='#f99d1c' />
            <ColourSwatch colour='#0098cd' />
            <ColourSwatch colour='#f37021' />
            <ColourSwatch colour='#005aa3' />
            <ColourSwatch colour='#c4258f' />
            <ColourSwatch colour='#7c3e21' />
            <ColourSwatch colour='#6f818e' />
            <ColourSwatch colour='#029747' />
            <ColourSwatch colour='#d11f2f' />
          </div>
          <div className='flex items-center gap-8 p-1'>
            {/* M1 */}
            <ColourSwatch colour='#168388' />
          </div>
          <div className='flex items-center gap-8 p-1'>
            {/* L1-4 */}
            <ColourSwatch colour='#be1622' />
            <ColourSwatch colour='#dd1e25' />
            <ColourSwatch colour='#781140' />
            <ColourSwatch colour='#bb2043' />
          </div>
          <div className='flex items-center gap-8 p-1'>
            {/* Regional + Bus + Ferry */}
            <ColourSwatch colour='#ed6601' />
            <ColourSwatch colour='#e56e0f' />
            <ColourSwatch colour='#742283' />
            <ColourSwatch colour='#00b6f1' />
            <ColourSwatch colour='#5aaf31' />
          </div>
        </div>

        {/* Interchange Selectors */}
        <div className='my-2'>
          <p className=''>Interchange Lines</p>
          <div className='border rounded-md p-1 text-center'>
            <input 
              type='text' 
              className='w-[250] border rounded-md p-1 mr-1 invalid:border-red-500' 
              placeholder='Line Code (T, T1, BMT)'
              minLength={1}
              maxLength={3}
              onChange={(e) => setRoundelCode(e.target.value)}
            ></input>
            <InputColour 
              onChange={(e) => setRoundelColour(`#${e.target.value}`)} 
              previewColour={RoundelColour} 
              defaultColour=''
              placeholder='Line Colour (123456)'
            />
            <select 
              className='border rounded-md p-1 m-1 invalid:border-red-500'
              onChange={(e) => setRoundelType(e.target.value)}
            >
              <option value="round">Round</option>
              <option value="square">Square</option>
            </select>
            <select
              className='border rounded-md p-1 m-1 invalid:border-red-500'
              onChange={(e) => setRoundelRow(Number(e.target.value))}
            >
              <option value={0}>Row 1</option>
              <option value={1}>Row 2</option>
              <option value={2}>Row 3</option>
              <option value={3}>Row 4</option>
              <option value={4}>Small Screen</option>
            </select>
            <button 
              className='border rounded-md p-1 px-2 m-1 hover:cursor-pointer hover:bg-gray-100'
              onClick={() => addToRow()}
            >Add</button>
            <p className='text-left'>Row 1</p>
            <div className='flex'>
              {Roundels.filter((r) => r.row === 0).map((roundel, i) => (
                <RoundelCard key={`${i}_${roundel.lineCode}_${roundel.lineColour}_${roundel.row}`} roundel={roundel} />
              ))}
            </div>
            <hr className='text-gray-400 my-1' />
            <p className='text-left'>Row 2</p>
            <div className='flex'>
              {Roundels.filter((r) => r.row === 1).map((roundel, i) => (
                <RoundelCard key={`${i}_${roundel.lineCode}_${roundel.lineColour}_${roundel.row}`} roundel={roundel} />
              ))}
            </div>
            <hr className='text-gray-400 my-1' />
            <p className='text-left'>Row 3</p>
            <div className='flex'>
              {Roundels.filter((r) => r.row === 2).map((roundel, i) => (
                <RoundelCard key={`${i}_${roundel.lineCode}_${roundel.lineColour}_${roundel.row}`} roundel={roundel} />
              ))}
            </div>
            <hr className='text-gray-400 my-1' />
            <p className='text-left'>Row 4</p>
            <div className='flex'>
              {Roundels.filter((r) => r.row === 3).map((roundel, i) => (
                <RoundelCard key={`${i}_${roundel.lineCode}_${roundel.lineColour}_${roundel.row}`} roundel={roundel} />
              ))}
            </div>
            <hr className='text-gray-400 my-1' />
            <p className='text-left'>Small Screen</p>
            <div className='flex'>
              {Roundels.filter((r) => r.row === 4).map((roundel, i) => (
                <RoundelCard key={`${i}_${roundel.lineCode}_${roundel.lineColour}_${roundel.row}`} roundel={roundel} />
              ))}
            </div>
          </div>
        </div>
        <button className='border rounded-md p-1 mx-1 hover:cursor-pointer hover:bg-gray-100' onClick={() => restartScroll()}>{"Restart Scrolling"}</button>
      </div>
      <div className='flex p-2'>

        <div className='basis-1/2'>
          <BigUpcomingSVG
            LineColour={LineColour} 
            LineCode={LineCode} 
            FinalStop={FinalStop} 
            ViaStop={ViaStop} 
            NextStop={NextStop} 
            UpcomingStops={UpcomingStops}
            ScrollClass={ScrollClass}
          />

          <SmallUpcomingSVG
            LineColour={LineColour} 
            LineCode={LineCode} 
            FinalStop={FinalStop} 
            NextStop={NextStop} 
            UpcomingStops={UpcomingStops}
            ScrollClass={ScrollClass}
          />
        </div>

        <div className='basis-1/2'>
          <BigStoppingSVG 
            LineColour={LineColour} 
            LineCode={LineCode} 
            FinalStop={FinalStop}
            ViaStop={ViaStop}
            NextStop={NextStop}
            Roundels={Roundels}
          />
          <SmallStoppingSVG
            LineColour={LineColour} 
            LineCode={LineCode} 
            FinalStop={FinalStop}
            NextStop={NextStop}
            Roundels={Roundels}
          />
        </div>
      </div>
    </div>
  );
}
