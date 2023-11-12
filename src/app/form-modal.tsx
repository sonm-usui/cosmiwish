'use client';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
} from '@material-tailwind/react';
import { useState } from 'react';
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({ 
  weight: '700',
  subsets: ['latin'] 
})

export default function WishBoard({
  open,
  setOpen,
  x,
  y,
  setNextPage
}: any) {
    const [name, setName] = useState('star name');
    const [wish, setWish] = useState("Type your wish here, and let the universe know what you're reaching for 🌌✨");

  return (
      <Dialog
      size={'sm'}
      open={open}
      handler={(res) => {
        setOpen(res);
      }}
      className='relative flex flex-col justify-center items-center w-screen h-screen bg-transparent'
    >
      <DialogBody className=' w-screen flex flex-col justify-center items-center'>
      
      <form onSubmit={() => { setNextPage(true)}} className="relative flex flex-col justify-start items-start pt-[72px] bg-[#1E1E1E] px-10 w-[601px] h-[559px] flex-shrink-0 rounded-[11px]">
      <img src='magic_wand.svg' alt='magic wand pic' className='absolute top-[-95px] left-[35%] w-[150px]'/>
      <div className='flex justify-end w-full -pt-10'><span className=' cursor-pointer' onClick={() => { setOpen(false), setNextPage(false)}}>
      <img src='x.svg' alt='x'/>
        </span></div>
        <img src='magic_wand.svg' alt='magic wand pic' className='absolute top-[-95px] left-[35%] w-[150px]'/>
      <DialogHeader className='flex flex-col '>
        <p className={`${sourceCodePro.className} text-white text-center text-4xl mb-6 font-[700]`}>Make a <span className=' text-[#BCFE50]'>wish!</span></p>
        <p className='text-white text-xs font-light text-left mb-8'>
          // Granting dreams with a touch of stardust, where wishes take flight and miracles ignite – because in every heart, there's a galaxy waiting to be wished upon.
        </p>
      </DialogHeader>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ color: '#1E1E1E78' }} 
          className="border h-[45px] border-gray-300 rounded-md p-2 w-full mb-8 focus:outline-[#BCFE50]"
          required
        />

        <textarea
          id="wish"
          name="wish"
          value={wish}
          style={{ color: '#1E1E1E78' }} 
          onChange={(e) => setWish(e.target.value)}
          rows={4}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-[#BCFE50]"
          required
        />

        <button
          type="submit"
          className="w-full h-[45px] mt-8 bg-[#BCFE50] hover:bg-transparent hover:border-[#BCFE50] hover:border-[2px] hover:text-white transition-all duration-[0.4s]  text-black font-bold py-2 px-4 rounded"
        >
          Pick Your Star
        </button>
    </form>
      </DialogBody>
    </Dialog>
  );
}