
export function RoundIcon({LineColour, LineCode,}:{LineColour: string, LineCode: string,}) {
  return (
    <div className="aspect-square w-[52] rounded-full inline-flex items-center justify-center" style={{backgroundColor: LineColour}}>
      <p className="text-4xl font-semibold text-white">{LineCode}</p>
    </div>
  );
}

export function SquareIcon({LineColour, LineCode,}:{LineColour: string, LineCode: string,}) {
  return (
    <div className="aspect-square w-[52] rounded-[8] inline-flex items-center justify-center" style={{backgroundColor: LineColour}}>
      <p className="text-2xl font-semibold text-white">{LineCode}</p>
    </div>
  );
}

function RoundIconSVG({LineColour, LineCode, i}:{LineColour: string, LineCode: string, i: number}) {
  const gap = 26 + (64 * i);
  
  return (
    <g transform={`translate(${gap}, 0)`}>
      <circle r={26} fill={LineColour} ></circle>
      <text className="text-4xl font-semibold fill-white" dominantBaseline="central" textAnchor="middle">{LineCode}</text>
    </g>
  );
}

function SquareIconSVG({LineColour, LineCode, i}:{LineColour: string, LineCode: string, i: number}) {
  const gap = 26 + (64 * i);
  
  return (
    <g transform={`translate(${gap}, 0)`}>
      <rect width={52} height={52} x={-26} y={-26} rx={8} ry={8} fill={LineColour} ></rect>
      <text className="text-2xl font-semibold fill-white" dominantBaseline="central" textAnchor="middle">{LineCode}</text>
    </g>
  );
}

export function IconSVG({type, LineColour, LineCode, i}:{type: string, LineColour: string, LineCode: string, i: number}) {
  if (type === "round") return (<RoundIconSVG LineColour={LineColour} LineCode={LineCode} i={i} />);
  if (type === "square") return (<SquareIconSVG LineColour={LineColour} LineCode={LineCode} i={i} />);
  return (<RoundIconSVG LineColour={"#000000"} LineCode={"?"} i={i} />);
}
