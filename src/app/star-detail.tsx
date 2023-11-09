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

// Use a custom domain as the supabase URL
const supabase = createClient('https://wuuynceixebcfprueyil.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXluY2VpeGViY2ZwcnVleWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NjU5NjIsImV4cCI6MjAxNTE0MTk2Mn0.xX3pxsezWqnIQEF66rHlMBY5VzQ0CpGAuQNGotRFqz4')

export default function StarDetail({
  open,
  setOpen,
  star,
  x,
  y
}: any) {
  return (
    <Dialog
      size={'md'}
      open={open}
      handler={(res) => {
        setOpen(res);
      }}
      className='w-[300px]'
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <DialogHeader>
        <div className="px-2 flex justify-between items-center w-full">
          <div className="text-t_primary font-bold">{star?.name}</div>
        </div>
      </DialogHeader>
      <DialogBody>
        <p>
          {star?.wish}
        </p>
      </DialogBody>
    </Dialog>
  );
}
