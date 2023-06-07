import React, { useEffect } from 'react'
import { useState } from 'react'
import Screeing from '../components/Screeing'

function Home() {
    const [time, settime] = useState('')

    useEffect(()=>{
        let date = Date()
        date = new Date(date).toDateString()
        settime(date)
    },[])

  return (
    <div className='home gradient1 '>
        <section className='tittle d-flex justify-content-between'>
            <div className='d-flex gap-lg-5 gap-2 '>
        <div className='date'>
        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
        {time}
        </div>
        <div className='place'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/></svg>
        Chandigarh
        </div>
        </div>   
        </section>
        <Screeing/>
        
    </div>
  )
}

export default Home