import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Other() {
  return (
    <div>
      <h2 style={{padding: '16px'}}>Other</h2>
      <Outlet />
    </div>
  )
}
