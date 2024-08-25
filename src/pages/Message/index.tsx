import React from 'react'
import { Link, Outlet, useOutlet, useNavigationType } from 'react-router-dom'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './index.css'
// import Detail from './Detail';
export default function Message() {

  /*
  POP类型是刷新进来的， 可以做成路由导航守卫吗
  */
  console.log('useNavigationType=', useNavigationType()); 
  console.log('useOutletContext=', useOutlet());
  interface MessageModel {
    id: string,
    title: string
  }
  const messageArr: MessageModel[] = [
    { id: '01', title: '消息1' },
    { id: '02', title: '消息2' },
    { id: '03', title: '消息3' },
  ]

  const onChange = (key: string) => {
    console.log(key)
  }
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'useParams传参',
      children: <div>{
        messageArr.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/* 向路由组件传递params参数 */}
              <Link replace to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
            </li>
          )
        })
      }
      <hr />
      <Outlet />
      </div>,
    },
    {
      key: '2',
      label: 'useSearchParams',
      children:  <div>{
        messageArr.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/* 向路由组件传递params参数 */}
              <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
            </li>
          )
        })
      }
      <hr />
      <Outlet />
      </div>,
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    }
  ]
  return (
    <div>
      <div className="message-container">
        <h2>react router 6 demo</h2>
        <p>Message组件</p>  
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
