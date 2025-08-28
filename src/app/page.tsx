'use client'
import React, { CSSProperties } from 'react';
import BigUpcoming from './Components/big-upcoming';
import SmallUpcoming from './Components/small-upcoming';
import BigStopping from './Components/big-stopping';
import SmallStopping from './Components/small-stopping';

export default function Home() {
  const [LineColour, setLineColour] = React.useState('#d11f2f');
  const [LineCode, setLineCode] = React.useState('CCN');
  const [FinalStop, setFinalStop] = React.useState('Wondabyne');
  const [ViaStop, setViaStop] = React.useState('Wondabyne');
  const [NextStop, setNextStop] = React.useState('Wondabyne');

  // const LineColour = "#d11f2f";
  // const LineCode = "CCN";
  // const FinalStop = "Wondabyne";
  // const ViaStop = "Wondabyne";
  // const NextStop = "Wondabyne";
  const UpcomingStops = [
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
    "Wondabyne",
  ];

  // const LineColour = "#029747";
  // const LineCode = "T8";
  // const FinalStop = "Revesby";
  // const ViaStop = "Airport";
  // const NextStop = "Green Square";
  // const UpcomingStops = [
  //   "Mascot",
  //   "Domestic",
  //   "International",
  //   "Wolli Creek",
  //   "Turella",
  //   "Bardwell Park",
  //   "Bexley North",
  //   "Kingsgrove",
  //   "Beverly Hills",
  //   "Narwee",
  //   "Riverwood",
  //   "Padstow",
  //   "Revesby",
  // ];
  
  const ScrollStyle = {
    "--speed": `${UpcomingStops.length * 2}s`,
  }

  return (
    <div>
      <div className='m-2'>
        <p>Edit values</p>
        <div>
          <label htmlFor="LineCode">Line Code (max 3 char)</label>
          <input type='text' id='LineCode' name='LineCode' minLength={1} maxLength={3} onChange={(e) => setLineCode(e.target.value)} required className='border invalid:border-red-500' />
        </div>
        <div>
          {/* Need to check valid colour */}
          <label htmlFor="LineCode">Line Colour (HEX including #)</label>
          <input type='text' id='LineColour' name='LineColour' minLength={7} maxLength={7} onChange={(e) => setLineColour(e.target.value)} required className='border invalid:border-red-500' />
        </div>
        <div>
          <label htmlFor="FinalStop">Final Stop</label>
          <input type='text' id='FinalStop' name='FinalStop' onChange={(e) => setFinalStop(e.target.value)} required className='border invalid:border-red-500' />
        </div>
        <div>
          <label htmlFor="ViaStop">Via Station</label>
          <input type='text' id='ViaStop' name='ViaStop' onChange={(e) => setViaStop(e.target.value)} className='border invalid:border-red-500' />
        </div>
        <div>
          <label htmlFor="NextStop">Next Stop</label>
          <input type='text' id='NextStop' name='NextStop' onChange={(e) => setNextStop(e.target.value)} required className='border invalid:border-red-500' />
        </div>
        <div>
          {/* Need to split into array */}
          <label htmlFor='UpcomingStops' className='align-middle'>Upcoming Stops (separate with new line)</label>
          <textarea id='UpcomingStops' name='UpcomingStops' className='border align-middle'></textarea>
        </div>
      </div>

      <div>
        <BigUpcoming
          LineColour={LineColour} 
          LineCode={LineCode} 
          FinalStop={FinalStop} 
          ViaStop={ViaStop} 
          NextStop={NextStop} 
          UpcomingStops={UpcomingStops} 
          ScrollStyle={ScrollStyle as CSSProperties}
        />
        <SmallUpcoming
          LineColour={LineColour} 
          LineCode={LineCode} 
          FinalStop={FinalStop} 
          NextStop={NextStop} 
          UpcomingStops={UpcomingStops} 
          ScrollStyle={ScrollStyle as CSSProperties}  
        />
      </div>

      <div>
        <BigStopping
          LineColour={LineColour} 
          LineCode={LineCode} 
          FinalStop={FinalStop}
          ViaStop={ViaStop}
          NextStop={NextStop}
        />
        <SmallStopping
          LineColour={LineColour} 
          LineCode={LineCode} 
          FinalStop={FinalStop}
          NextStop={NextStop}
        />
      </div>
    </div>
  );
}
