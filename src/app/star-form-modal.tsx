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
  email,
  wish,
  x,
  y,
  setNextPage
}: any) {
    const [name, setName] = useState('star name');
    const [dropDownTest, setDropDownTest] = useState('Select Your star')

    const addWish = async () => {
        if(valid()){
          const payload = JSON.stringify([{wish: wish, visited_count: 1, client_x: x, client_y: y, name: name, email: email, star_type:  dropDownTest}]);
          if(dropDownTest === 'Star X1'){
            window.location.href = 'https://usui.lemonsqueezy.com/checkout/buy/ba9f4a8d-4548-4b7a-b7c1-66658174eae9?embed=1&checkout[custom][data]=' + payload;
          } else if(dropDownTest === 'Star X2'){
            window.location.href = 'https://usui.lemonsqueezy.com/checkout/buy/1d15096c-096a-4169-bc5e-7b4ccec16cca?embed=1&checkout[custom][data]=' + payload;
          } else if(dropDownTest === 'Star X3'){
            window.location.href = 'https://usui.lemonsqueezy.com/checkout/buy/7a00937b-a1d1-4cce-aafc-d6638ef7a10c?embed=1&checkout[custom][data]=' + payload;
          } else {
            window.location.href = 'https://usui.lemonsqueezy.com/checkout/buy/7a00937b-a1d1-4cce-aafc-d6638ef7a10c?embed=1&checkout[custom][data]=' + payload;
          }
        //   const { data, error } = await supabase
        //   .from('wishes')
        //   .insert([{wish: wish, visited_count: 1, client_x: x, client_y: y, name: name, email: email, star_type:  dropDownTest}])
        //   .select()
        //   setOpen(false)
        // } else {   
          
        }
    };

    const valid = (): boolean => {
      if(name === 'star name' || dropDownTest === 'Select Your star' || name === '' || dropDownTest === ''){
        return false
      }
      return true
    }

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
      <div className="relative flex flex-col justify-start items-start pt-[72px] bg-[#1E1E1E] px-10 w-[601px] h-[559px] flex-shrink-0 rounded-[11px] max-md:w-[501px] max-sm:w-[90%] max-sm:px-5">
        <div className='flex justify-end w-full -pt-10'>
          <span className=' cursor-pointer' onClick={() => { setOpen(false), setNextPage(false)}}>
            <img src='x.svg' alt='x'/>
          </span>
        </div>
        <img src='magic_wand.svg' alt='magic wand pic' className='absolute top-[-95px] left-[35%] w-[150px]'/>
      <DialogHeader className='flex flex-col'>
        <p className={`${sourceCodePro.className} text-white text-center text-4xl mb-6 font-[700] max-sm:text-2xl`}>Select Your <br /><span className=' text-[#BCFE50]'>Celestial Body</span></p>
        <p className=' text-xs font-light text-left mb-8 text-white'>
        // Embark on a Celestial Odyssey: Unveil Your Cosmic Identity as You Select Your Celestial Body and Illuminate Your Journey Through the Cosmos.
        </p>
      </DialogHeader>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ color: '#1E1E1E78' }} 
          className="border h-[45px] border-gray-300 rounded-md p-2 w-full mb-8 focus:outline-[#BCFE50]"
          required
        />

        <div className='relative w-full h-[45px] bg-[white] rounded-md text-black'>
          <div className='absolute top-0 left-0 p-2 flex'>
            <p className='text-[#1E1E1E78] mr-1'>{dropDownTest}</p>
            <img src="expand_more.svg" alt="expand more" />
          </div>
        
          <Select value={dropDownTest} className='text-sm border-none w-full h-[45px] text-transparent'>
            <Option value='star_x1' onClick={() => setDropDownTest('Star X1')}>
              <div className='text-[#BCFE50] w-full h-full bg-[#191919] flex justify-between px-5 items-center hover:bg-[#0b0b0b] transition-all'>
                <img src='star.svg' className='w-[80px] h-[40px]' />
                <p>Star X1</p>
                <p>0.99$</p>
              </div>
            </Option>
            <Option value='star_x2' onClick={() => setDropDownTest('Star X2')}>
              <div className='hover:bg-[#0b0b0b] transition-all text-[#BCFE50] w-full h-full bg-[#191919] flex justify-between px-5 items-center'>
                  <img src='star_x2.svg' className='w-[80px] h-[40px]' />
                  <p>Star X2</p>
                  <p>1.99$</p>
              </div>
            </Option>
            <Option value='star_x3' onClick={() => setDropDownTest('Star X3')}>
              <div className='hover:bg-[#0b0b0b] transition-all text-[#BCFE50] w-full h-full bg-[#191919] flex justify-between px-5 items-center'>
                  <img src='star_x3.svg' className='w-[80px] h-[40px]' />
                  <p>Star X3</p>
                  <p>2.99$</p>
              </div>
            </Option>
            <Option value='moon'  onClick={() => setDropDownTest('Moon')}>
              <div className='hover:bg-[#0b0b0b] transition-all text-[#BCFE50] w-full h-full bg-[#191919] flex justify-between px-5 items-center'>
                  <img src='moon.svg' className='w-[80px] h-[40px]' />
                  <p>Moon</p>
                  <p>4.99$</p>
              </div>
            </Option>
            <Option value='planet' onClick={() => setDropDownTest('Planet')}>
              <div className='hover:bg-[#0b0b0b] transition-all text-[#BCFE50] text-right w-full h-full bg-[#191919] flex justify-between px-5 items-center'>
                  <img src='planet.svg' className='w-[80px] h-[40px]' />
                  <p>Planet</p>
                  <p>9.99$</p>
              </div>
            </Option>
            <Option value='ringed_planet' onClick={() => setDropDownTest('Ringed Planet')}>
            <div className='hover:bg-[#0b0b0b] transition-all text-[#BCFE50] w-full h-full bg-[#191919] flex justify-between px-5 items-center'>
                  <img src='ringed_planet.svg' className='w-[80px] h-[40px]' />
                  <p>Ringed Planet</p>
                  <p>14.99$</p>
              </div>
            </Option>
          </Select>
        </div>

        <button
          onClick={addWish}
          className="w-full h-[45px] mt-8 bg-[#BCFE50] hover:bg-transparent hover:border-[#BCFE50] hover:border-[2px] hover:text-white transition-all duration-[0.4s]  text-black font-bold py-2 px-4 rounded"
        >
          Buy your star
        </button>
    </div>
      </DialogBody>
    </Dialog>
  );
}