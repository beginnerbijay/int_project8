import React from 'react'
import logo from '/vite.svg'

function Navbar() {
  return (
    <div className="flex-shrink-0 p-3 sidebar d-none d-lg-block" >
    <a href="/" className="d-flex align-items-center pb-3 mb-5 link-body-emphasis text-decoration-none border-bottom">
      <img className="bi pe-none me-2" src={logo} width="30" height="24"></img>
      <span className="fs-5 fw-semibold">ViCinema</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-4">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true" >
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><mask id="ipSDownOne0"><path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="4" d="M36 19L24 31L12 19h24Z"/></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDownOne0)"/></svg>
          Home
        </button>
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-4">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><mask id="ipSDownOne0"><path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="4" d="M36 19L24 31L12 19h24Z"/></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDownOne0)"/></svg>
          <span>Catogory</span>
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-4">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><mask id="ipSDownOne0"><path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="4" d="M36 19L24 31L12 19h24Z"/></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDownOne0)"/></svg>
          Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Navbar