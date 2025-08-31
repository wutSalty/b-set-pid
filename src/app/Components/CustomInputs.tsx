import { ChangeEventHandler } from "react";

export function InputColour({
  onChange, 
  previewColour, 
  defaultColour,
  required = false,
  placeholder = "",
}:
{
  onChange: ChangeEventHandler<HTMLInputElement>,
  previewColour: string,
  defaultColour: string,
  required?: boolean,
  placeholder?: string,
}
) {
  return (
    <div className='w-[250] inline-flex items-center border rounded-md has-[input:invalid]:border-red-500'>
      <p className='w-[25] shrink-0 p-1 rounded-l-md bg-gray-200 text-center'>{"#"}</p>
      <input 
        type='text' 
        id='LineColour' 
        name='LineColour' 
        placeholder={placeholder}
        minLength={1} 
        maxLength={6}
        defaultValue={defaultColour.slice(1)}
        onChange={(e) => onChange(e)}
        required={required} 
        className='p-1 grow-1 shrink-1 min-w-0' />
        <div className='w-[25] h-[32] grow-1 shrink-0 rounded-r-md' style={{backgroundColor: previewColour}}></div>
    </div>
  );
}
