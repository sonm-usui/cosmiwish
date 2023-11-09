'use client'

import { useEffect, useState } from 'react';
import Star from './star';
import WishBoard from './form-modal';
import { Yomogi } from 'next/font/google';

import { createClient } from '@supabase/supabase-js'
import StarDetail from './star-detail';

// Use a custom domain as the supabase URL
const supabase = createClient('https://wuuynceixebcfprueyil.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXluY2VpeGViY2ZwcnVleWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NjU5NjIsImV4cCI6MjAxNTE0MTk2Mn0.xX3pxsezWqnIQEF66rHlMBY5VzQ0CpGAuQNGotRFqz4')

export default function Home() {
  const [stars, setStars] = useState([]);
  const [showForm, setShowForm] = useState<any>(false);
  const [ x, setX] = useState<any>(0)
  const [ y, setY] = useState<any>(0)
  const [wishes, setWishes] = useState<any>([]);
  const [star, setStar] = useState<any>(null);
  const [detail, setDetail] = useState<any>(null);
  useEffect( ()=>{
     getData();
  }, [])

  const getData = async() => {
      let { data: wishes, error } = await supabase
      .from('wishes')
      .select('*');
      setWishes(wishes);
  }
  
  const handleOnClick = (e: any) => {
    console.log(e.button);
    if(e?.button === 2){
      const newStar = { x: e.clientX, y: e.clientY - 100 };
      setX(e.clientX);
      setY(e.clientY - 100);
      setStars([...stars, newStar] as any);
      setShowForm(true)
    }
  };

  const viewDetail = (e: any, star: any) => {
    setX(e.clientX);
    setY(e.clientY - 10);
    setDetail(true);
    setStar(star);
  }
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24" onContextMenu={ (e) => e.preventDefault()}>
      <div
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
      className=''
      onContextMenu={handleOnClick}
    >
      {wishes?.map((star: any, index: any) => (
        <div onClick={ (e) => viewDetail(e, star)}>
          <Star key={index} x={star.client_x} y={star.client_y}/>
          </div>
      ))}

      {stars.map((star: any, index: any) => (
        <Star key={index} x={star.x} y={star.y} />
      ))}
    </div>
    <WishBoard
        open={showForm}
        setOpen={setShowForm}
        x={x}
        y={y}
      />
      <StarDetail
        open={detail}
        setOpen={setDetail}
        star={star}
        x={x}
        y={y}
      />
    </main>
  )
}
