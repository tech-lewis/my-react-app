import React from 'react'
import { useLocation } from 'react-router-dom'

/*
Link to state={{传对象}}
state参数使用useLocation读取的
*/
export default function StateDetil() {
  const stateObject = useLocation()
  console.log(stateObject)
  return (
    <div>StateDetil</div>
  )
}
