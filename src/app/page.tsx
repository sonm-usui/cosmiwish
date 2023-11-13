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
  const [detail, setDetail] = useState<any>(false);
  const [nextPage, setNextPage] = useState<any>(false)
  const [email, setEmail] = useState('Email');
  const [wish, setWish] = useState("Type your wish here, and let the universe know what you're reaching for 🌌✨");


  useEffect( ()=>{
     getData();
  }, [showForm])

  const getData = async() => {
      let { data: wishes, error } = await supabase
      .from('wishes')
      .select('*');
      setWishes(wishes);
  }
  
  const handleOnClick = (e: any) => {
      const newStar = { x: e.clientX - 100, y: e.clientY - 100 };
      setX(e.clientX - 100);
      setY(e.clientY - 100);
      setStars([...stars, newStar] as any);
      setShowForm(true)
   
  };

  const viewDetail = (e: any, star: any) => {
    setX(e.clientX - 100);
    setY(e.clientY - 100);
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
    <main className="flex max-h-screen w-screen flex-col items-center justify-center" onContextMenu={ (e) => e.preventDefault()}>
      <div
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
      className=''
      onClick={handleOnClick}
    >
      {wishes?.map((star: any, index: any) => (
        <div onMouseOver={ (e) => viewDetail(e, star)}>
          <Star key={index} x={star.client_x} y={star.client_y} star={star}/>
          </div>
      ))}
    </div>

    { !nextPage ? (
      <WishBoard
      open={showForm}
      setOpen={setShowForm}
      email={email}
      setEmail={setEmail}
      wish={wish}
      setWish={setWish}
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
        email={email}
        wish={wish}
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
