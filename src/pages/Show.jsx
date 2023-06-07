import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/Form'

function Show() {
  const {id} = useParams()
  const [data, setdata] = useState([])
  const [open, setopen] = useState(false)

  const getfetch = async()=>{
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`).then((response)=>response.json())
    setdata(response)
  }

function stripHTML(myString) {
  if(myString)
   return myString.replace( /(<([^>]+)>)/ig, '');
}

  useEffect(()=>{
    getfetch()
    setopen(false)
  },[])

  return (
    <div className='home gradient1 single-show d-flex justify-content-center align-items-center flex-column'>
      <div className='container single-box d-flex '>
        <div className='img-box '>
        <img className='object-fit-cover border rounded' src={data?.image?.original} />
        </div>
        <div className='summary mt-5'>
            <span className='lg-h1 h3'>{data?.name}</span>
            <p className='mt-3'>{stripHTML(data?.summary)}</p>
            {data?.genres?.map((vals,ind)=>{
              return (
                <span key={ind} className='btn btn-g me-2'>{vals}</span>
              )
            })}
            
            <br/>
            <button className='btn btn-outline-info mt-3' onClick={()=>setopen((prev)=>!prev)}>Book</button>
        </div>
      </div>
      <div className={`${open?'d-block':'d-none'}`}>
        <Form data={data}/>
        </div>
      
    </div>
  )
}

export default Show