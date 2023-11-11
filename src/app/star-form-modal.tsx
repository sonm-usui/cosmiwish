'use client';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Select,
  Option,
  Textarea,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import { Source_Code_Pro } from 'next/font/google'

// Use a custom domain as the supabase URL
const supabase = createClient('https://wuuynceixebcfprueyil.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXluY2VpeGViY2ZwcnVleWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NjU5NjIsImV4cCI6MjAxNTE0MTk2Mn0.xX3pxsezWqnIQEF66rHlMBY5VzQ0CpGAuQNGotRFqz4')

const sourceCodePro = Source_Code_Pro({ 
  weight: '700',
  subsets: ['latin'] 
})

export default function StarWishBoard({
  open,
  setOpen,
  x,
  y,
  setNextPage
}: any) {
    const [name, setName] = useState('');
    const [wish, setWish] = useState('');
    const [dropDownTest, setDropDownTest] = useState('Select Your star')

    const addWish = async () => {
      const { data, error } = await supabase
        .from('wishes')
        .insert([{ wisher: 'zchoeda101+3@gmail.com', wish: wish, visited_count: 1, client_x: x, client_y: y, name: name }])
        .select();
        setOpen(false)
    };

  return (
      <Dialog
      size={'sm'}
      open={open}
      handler={(res) => {
        setOpen(res);
      }}
      className='relative flex flex-col justify-center items-center w-screen h-screen bg-transparent'
    >
      <DialogBody className='w-screen flex flex-col justify-center items-center'>
      <form onSubmit={addWish} className="relative flex flex-col justify-start items-start pt-[72px] bg-[#1E1E1E] px-10 w-[601px] h-[559px] flex-shrink-0 rounded-[11px]">
        <div className='flex justify-end w-full -pt-10'><span className=' cursor-pointer' onClick={() => { setOpen(false), setNextPage(false)}}>X</span></div>
        <img src='magic_wand.svg' alt='magic wand pic' className='absolute top-[-95px] left-[35%] w-[150px]'/>
      <DialogHeader className='flex flex-col'>
        <p className={`${sourceCodePro.className} text-center text-4xl mb-6 font-[700]`}>Select Your <br /><span className=' text-[#BCFE50]'>Celestial Body</span></p>
        <p className=' text-xs font-light text-left mb-8'>
        // Embark on a Celestial Odyssey: Unveil Your Cosmic Identity as You Select Your Celestial Body and Illuminate Your Journey Through the Cosmos.
        </p>
      </DialogHeader>
        <input
          type="text"
          id="name"
          name="name"
          value={name || 'star name'}
          onChange={(e) => setName(e.target.value)}
          style={{ color: '#1E1E1E78' }} 
          className="border h-[45px] border-gray-300 rounded-md p-2 w-full mb-8 focus:outline-[#BCFE50]"
          required
        />

        <div className='relative w-full h-[45px] bg-white rounded-md text-black'>
          <div className='absolute top-0 left-0 p-2 flex'>
            <p className='text-[#1E1E1E78] mr-1'>{dropDownTest}</p>
            <img src="expand_more.svg" alt="expand more" />
          </div>
        
          <Select className='border-none w-full h-[45px] text-transparent'>
            <Option value='star_x1' className='p-2' onClick={() => setDropDownTest('Star X1')}>Star X1</Option>
            <Option value='star_x2' className='p-2' onClick={() => setDropDownTest('Star X2')}>Star X2</Option>
            <Option value='star_x3' className='p-2' onClick={() => setDropDownTest('Star X3')}>Star X3</Option>
            <Option value='moon' className='p-2' onClick={() => setDropDownTest('Moon')}>Moon</Option>
            <Option value='planet' className='p-2' onClick={() => setDropDownTest('Planet')}>Planet</Option>
            <Option value='ringed_planet' className='p-2' onClick={() => setDropDownTest('Ringed Planet')}>Ringed Planet</Option>
          </Select>
        </div>

        <button
          type="submit"
          className="w-full h-[45px] mt-8 bg-[#BCFE50] hover:bg-transparent hover:border-[#BCFE50] hover:border-[2px] hover:text-white transition-all duration-[0.4s]  text-black font-bold py-2 px-4 rounded"
        >
          Buy your star
        </button>
    </form>
      </DialogBody>
    </Dialog>
  );
}