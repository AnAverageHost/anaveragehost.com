import Link from 'next/link'
import React from 'react'

function Navbar() {
    const navs = [
        {
            id: 'home',
            label: 'Home',
            link: '/'
        }
    ]
  return (
    <div style={{height: '100%', backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
        {navs.map((nav, index)=>{
            return (<Link style={{textDecoration: 'none'}} key={`${nav.label}${index}`} href={nav.link}>{nav.label}</Link>)
        })}
    </div>
  )
}

export default Navbar