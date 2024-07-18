import { ChangeEvent } from "react";

interface TextFieldProps{
    title:string;
    placeholder:string;
    onChange :(e:ChangeEvent<HTMLInputElement>)=>void,
    name:string;
}

const TextField = ({title,placeholder,name,onChange}:TextFieldProps) => {
  
    return (
        <div className='flex flex-col gap-2 w-full my-2'>
          <h1 className='font-semibold text-md md:text-xl'>{title}</h1>
          <input placeholder={placeholder} name={name} className='outline-none border-2 rounded-md px-1 py-2 hover:border-blue-500' onChange={onChange} required/>
        </div>
      )
  
}

export default TextField
