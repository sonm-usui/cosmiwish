'use client'

import { useEffect, useState } from 'react';
import Star from './star';
import WishBoard from './form-modal';
import { Yomogi } from 'next/font/google';

import { createClient } from '@supabase/supabase-js'
import StarDetail from './star-detail';
import StarWishBoard from './star-form-modal';

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
  const [nextPage, setNextPage] = useState<any>(false)

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
      const newStar = { x: e.clientX, y: e.clientY - 100 };
      setX(e.clientX);
      setY(e.clientY - 100);
      setStars([...stars, newStar] as any);
      setShowForm(true)
   
  };

  const viewDetail = (e: any, star: any) => {
    setX(e.clientX);
    setY(e.clientY);
    setDetail(true);
    setStar(star);
  }

  const handleMouseLeave = (e: any) => {
    if(e.clientX === x && (e.clientY-100) === y){

    } else {
        setDetail(false)
    }
  }
  return (
    <main className="bg-black flex max-h-screen w-screen flex-col items-center justify-center" onContextMenu={ (e) => e.preventDefault()}>
      <div
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
      className=''
      onClick={handleOnClick}
    >
      {wishes?.map((star: any, index: any) => (
        <div onMouseOver={ (e) => viewDetail(e, star)}>
          <Star key={index} x={star.client_x} y={star.client_y}/>
          </div>
      ))}

      {stars.map((star: any, index: any) => (
        <Star key={index} x={star.x} y={star.y} />
      ))}
    </div>

    { !nextPage ? (
      <WishBoard
      open={showForm}
      setOpen={setShowForm}
      x={x}
      y={y}
      setNextPage={setNextPage}
  />
    ) : (
      <StarWishBoard
        open={showForm}
        setOpen={setShowForm}
        x={x}
        y={y}
        setNextPage={setNextPage}
    />
    ) }
    

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
