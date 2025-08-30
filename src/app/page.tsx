'use client'
import React, { useState } from 'react';
import BigUpcoming from './Components/big-upcoming';
import SmallUpcoming from './Components/small-upcoming';
import BigStopping from './Components/big-stopping';
import SmallStopping from './Components/small-stopping';

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

export default function Home() {
  const [LineColour, setLineColour] = useState(DefaultLineColour);
  const [LineCode, setLineCode] = useState(DefaultLineCode);
  const [FinalStop, setFinalStop] = useState(DefaultFinalStop);
  const [ViaStop, setViaStop] = useState(DefaultViaStop);
  const [NextStop, setNextStop] = useState(DefaultNextStop);
  const [UpcomingStops, setUpcomingStops] = useState(DefaultUpcomingStops);

  const formatUpcomingStops = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpcomingStops(e.target.value.split('\n'))
  }

  return (
    <div>
      <p className='text-xl p-2 inline-block'>{"Mockup B-Set PID Simulator"}</p>
      <p className='text-sm p-2 inline-block'>{"Made by Salty"}</p>
      <a className='text-sm m-2 inline-block underline' href='https://github.com/wutSalty/b-set-pid' target="_blank" rel="noopener noreferrer">{"GitHub Repo"}</a>
      <p className='text-sm m-2'>{"Note: Page may be slightly broken on mobile or older browsers. Please use a modern desktop browser."}</p>
      <div className='basis-1/5 p-2'>
        <div className='my-2'>
          <label htmlFor="LineCode" className='inline-block w-sm'>Line Code (max 3 char)</label>
          <input 
            type='text' 
            id='LineCode' 
            name='LineCode' 
            minLength={1} 
            maxLength={3} 
            defaultValue={DefaultLineCode}
            onChange={(e) => setLineCode(e.target.value)} 
            required 
            className='border invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor="LineCode" className='inline-block w-sm'>Line Colour (HEX including #)</label>
          <input 
            type='text' 
            id='LineColour' 
            name='LineColour' 
            minLength={7} 
            maxLength={7} 
            defaultValue={DefaultLineColour}
            onChange={(e) => setLineColour(e.target.value)} 
            required 
            className='border invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor="FinalStop" className='inline-block w-sm'>Final Stop</label>
          <input 
            type='text' 
            id='FinalStop' 
            name='FinalStop' 
            defaultValue={DefaultFinalStop}
            onChange={(e) => setFinalStop(e.target.value)} 
            required 
            className='border invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor="ViaStop" className='inline-block w-sm'>Via Station</label>
          <input 
            type='text' 
            id='ViaStop' 
            name='ViaStop' 
            defaultValue={DefaultViaStop}
            onChange={(e) => setViaStop(e.target.value)} 
            className='border invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor="NextStop" className='inline-block w-sm'>Next Stop</label>
          <input 
            type='text' 
            id='NextStop' 
            name='NextStop' 
            defaultValue={DefaultNextStop}
            onChange={(e) => setNextStop(e.target.value)} 
            required 
            className='border invalid:border-red-500' />
        </div>
        <div className='my-2'>
          <label htmlFor='UpcomingStops' className='inline-block w-sm align-top'>Upcoming Stops (separate with new line)</label>
          <textarea 
            id='UpcomingStops' 
            name='UpcomingStops' 
            rows={5}
            defaultValue={DefaultUpcomingStops.join('\n')}
            onChange={(e) => formatUpcomingStops(e)} 
            className='border align-middle'
          >
          </textarea>
        </div>
      </div>
      <div className='flex p-2'>

        <div className='basis-1/2'>
          <svg width="100%" viewBox='0 0 854 481' className='inline-block align-top'>
            {/* https://stackoverflow.com/questions/51313873/svg-foreignobject-not-working-properly-on-safari */}
            <foreignObject x="0" y="0" width={854} height={480}>
              <BigUpcoming
                LineColour={LineColour} 
                LineCode={LineCode} 
                FinalStop={FinalStop} 
                ViaStop={ViaStop} 
                NextStop={NextStop} 
                UpcomingStops={UpcomingStops} 
              />
            </foreignObject>
          </svg>

          <svg width="100%" viewBox='0 0 854 241' className='inline-block'>
            <foreignObject x="0" y="0" width={854} height={240}>
              <SmallUpcoming
                LineColour={LineColour} 
                LineCode={LineCode} 
                FinalStop={FinalStop} 
                NextStop={NextStop} 
                UpcomingStops={UpcomingStops}  
              />
            </foreignObject>
          </svg>
        </div>

        <div className='basis-1/2'>
          <svg width="100%" viewBox='0 0 854 481' className='inline-block align-top'>
            <foreignObject x="0" y="0" width={854} height={480}>
              <BigStopping
                LineColour={LineColour} 
                LineCode={LineCode} 
                FinalStop={FinalStop}
                ViaStop={ViaStop}
                NextStop={NextStop}
              />
            </foreignObject>
          </svg>

          <svg width="100%" viewBox='0 0 854 241' className='inline-block'>
            <foreignObject x="0" y="0" width={854} height={240}>
              <SmallStopping
                LineColour={LineColour} 
                LineCode={LineCode} 
                FinalStop={FinalStop}
                NextStop={NextStop}
              />
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
}
