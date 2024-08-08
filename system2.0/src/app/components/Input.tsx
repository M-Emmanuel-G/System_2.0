import { ChangeEvent, ChangeEventHandler, FC } from "react";

interface InputProps{
    placeholder?:string
    value:string
    onChange :ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputProps> = ({placeholder, value, onChange})=> {
 return (
  <input
    className="my-4 w-80 h-8 text-center text-sm outline-none rounded-xl text-black p-4"
    placeholder= {placeholder}
    value={value}
    onChange={onChange}
  />
 );
}

export default Input