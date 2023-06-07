import React, { useState } from 'react'

function Form({data}) {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')

    const handler=(e)=>{
        e.preventDefault();
        const user={
            "name":name,
            "phone":phone,
            "movie":data?.name,
            "day":data?.schedule?.days[0] || '',
            "time":data?.schedule.time,
            "language":data?.language
        }
        localStorage.setItem("user",JSON.stringify(user));
        setname('')
        setphone('')
    }
  return (
   <div className='mt-5 form-data'>
    <span className='h3'>Fill Booking Details</span>
    <form className='mt-2' onSubmit={handler}>
  <div className="row mb-3 ">
    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputName3" value={name} onChange={(e)=>setname(e.target.value)}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputNumber3" className="col-sm-2 col-form-label">Number</label>
    <div className="col-sm-10">
      <input type="Number" className="form-control" id="inputNumber3" value={phone} onChange={(e)=>setphone(e.target.value)}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputMovie3" className="col-sm-2 col-form-label">Movie</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputMovie3" defaultValue={data?.name}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputDay3" className="col-sm-2 col-form-label">Day</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputDay3" defaultValue={data?.schedule?.days[0] || ''}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputTime3" className="col-sm-2 col-form-label">Time</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputTime3" defaultValue={data?.schedule?.time || ''}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputLanguage3" className="col-sm-2 col-form-label">Language</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputLanguage3" defaultValue={data?.language}/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
   </div>
    
  )
}

export default Form