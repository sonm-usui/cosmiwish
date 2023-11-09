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

export default function WishBoard({
  open,
  setOpen,
  x,
  y
}: any) {
    const [name, setName] = useState('');
    const [wish, setWish] = useState('');

    const addWish = async () => {
        debugger
      const { data, error } = await supabase
        .from('wishes')
        .insert([{ wisher: 'zchoeda101+3@gmail.com', wish: wish, visited_count: 1, client_x: x, client_y: y, name: name }])
        .select();
        setOpen(false)
    };

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
          <div className="text-t_primary font-bold">Make a wish</div>
        </div>
      </DialogHeader>
      <DialogBody>
        <form onSubmit={addWish} className="my-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ color: 'black' }} 
        className="border border-gray-300 rounded-md p-2 w-full"
        required
      />

      <label htmlFor="wish" className="block mt-4 text-gray-700 text-sm font-bold mb-2">
        Make a wish:
      </label>
      <textarea
        id="wish"
        name="wish"
        value={wish}
        style={{ color: 'black' }} 
        onChange={(e) => setWish(e.target.value)}
        rows={4}
        className="border border-gray-300 rounded-md p-2 w-full"
        required
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Wish
      </button>
    </form>
      </DialogBody>
    </Dialog>
  );
}
