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
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import Star from './star';

// Use a custom domain as the supabase URL
const supabase = createClient('https://wuuynceixebcfprueyil.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXluY2VpeGViY2ZwcnVleWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NjU5NjIsImV4cCI6MjAxNTE0MTk2Mn0.xX3pxsezWqnIQEF66rHlMBY5VzQ0CpGAuQNGotRFqz4')

export default function StarDetail({
  open,
  setOpen,
  star,
}: any) {
  return (
      <Dialog
      size={'md'}
      open={open}
      handler={(res) => {
        setOpen(res);
      }}
      className='w-screen h-screen'
    >
      <div className='flex justify-center items-center w-full h-full flex-row max-md:flex-col max-md:justify-center max-md:items-center max-md:p-20'>
          <div className='flex-[0.6] w-full h-full flex justify-end items-center max-md:justify-center max-md:items-center overflow-hidden max-md:pt-0'>
            <Star star={star} displaySize={true}/>
          </div>
          
          <div className='flex-[0.4] w-full h-full flex justify-center items-start flex-col max-md:text-center max-md:items-center'>
            <h2 className="star-name-text mb-5 w-[300px]">{star?.name}</h2>
            <p className='w-[300px]'>{star?.wish}</p>
          </div>
      </div>

      <div className='absolute top-0 left-0 right-0 flex justify-end p-20 transparent items-start w-full h-full max-md:p-10'>
          <span className='cursor-pointer' onClick={() => { setOpen(false)}}>
            <img src='x.svg' alt='x'/>
          </span>
      </div>
    </Dialog>
  );
}
