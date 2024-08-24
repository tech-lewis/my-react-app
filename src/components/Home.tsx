import React from 'react'
// import Message from '../pages/Message'
import { Outlet, useNavigate, useInRouterContext, useOutlet } from 'react-router-dom'
export default function Home() {
  const navigator = useNavigate() // Hooks编程路由导航的写法
  //  React如何实现导航守卫功能呢
  console.log('useInRouterContext 我在路由中吗=', useInRouterContext());
  console.log('useOutlet=', useOutlet());
  
  return (
    <div>
      <button onClick={ () => {
        navigator('/home/message', {
          replace: false
        })
      }}>打开消息中心</button>
      <Outlet />
    </div>
  )
}
