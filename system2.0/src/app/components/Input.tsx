import { ChangeEvent, ChangeEventHandler, FC } from "react";

interface InputProps{
    placeholder:string
    value:string
    onChange :ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputProps> = ({placeholder, value, onChange})=> {
 return (
  <input
    className="my-2 w-80 h-8 text-center outline-none rounded-xl text-black"
    placeholder= {placeholder}
    value={value}
    onChange={onChange}
  />
 );
}

export default Input