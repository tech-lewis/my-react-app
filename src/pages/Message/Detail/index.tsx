import React from 'react'
import { useParams, useSearchParams, useMatch} from 'react-router-dom'

export default function Detail() {
  const params = useParams()
  const matchModel = useMatch('/home/message/detail/:id/:title') // 更加的麻烦 match.params
  const [search, setSearch] = useSearchParams()
  console.log(matchModel || setSearch)
  console.log(search.get('id'))

  return (
    // {
    //    <div>详情</div>
    // }
    <div>详情 id: {params.id || search.get('id')} title: {params.title || search.get('title')}</div>
  )
}
