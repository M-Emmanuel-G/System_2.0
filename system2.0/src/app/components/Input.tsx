import { ChangeEvent, ChangeEventHandler, FC } from "react";

interface InputProps{
    placeholder?:string
    value:string
    onChange :ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputProps> = ({placeholder, value, onChange})=> {
 return (
  <input
    className="my-4 w-80 h-8 text-center text-sm border-b-black border-2 outline-none border-t-transparent border-l-transparent border-r-transparent text-black p-4"
    placeholder= {placeholder}
    value={value}
    onChange={onChange}
  />
 );
}

export default Input