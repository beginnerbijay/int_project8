import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Screeing() {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)

  const getfetch = async()=>{
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all").then((response)=>response.json())
    setdata(response)
    setloading(false)
}

useEffect(()=>{
  getfetch()
},[])

console.log(data)
  return (
    <div className="py-5">
      {loading? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-lg-5 g-md-3">
        {data?.map((val,ind)=>{
          return(
            <div className="col" key={ind}>
          <div className="card shadow-sm">
            <img src={val.show.image.original} alt='tittle_image'/>
            <div className="card-body">
              <strong className='ms-1'>{val.show.name}</strong>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="btn-group gap-lg-2 gap-3 gap-md-0">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#43ceff" d="M15.58 16.8L12 14.5l-3.58 2.3l1.08-4.12L6.21 10l4.25-.26L12 5.8l1.54 3.94l4.25.26l-3.29 2.68M20 12a2 2 0 0 1 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2a2 2 0 0 1-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2Z"/></svg>{val.score.toFixed(2)}
                  </div>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#43ceff" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>{val.show.rating.average || 0}
                  </div>
                </div>
                <Link to={`/show/${val.show.id}`}><button className='view-btn btn btn-outline-info'>View</button></Link>
              </div>
            </div>
          </div>
        </div>
          )
        })}
        
      </div>
    </div>}
    
  </div>
  )
}

export default Screeing