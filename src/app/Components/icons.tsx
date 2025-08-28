
export function RoundIcon(
  {
    LineColour,
    LineCode,
  }:
  {
    LineColour: string,
    LineCode: string,
  }
) {
  return (
    <div className="aspect-square w-[52] rounded-full flex items-center justify-center" style={{backgroundColor: LineColour}}>
      <p className="text-4xl font-semibold text-white">{LineCode}</p>
    </div>
  );
}

export function SquareIcon(
  {
    LineColour,
    LineCode,
  }:
  {
    LineColour: string,
    LineCode: string,
  }
) {
  return (
    <div className="aspect-square w-[52] rounded-[8] flex items-center justify-center" style={{backgroundColor: LineColour}}>
      <p className="text-2xl font-semibold text-white">{LineCode}</p>
    </div>
  );
}
