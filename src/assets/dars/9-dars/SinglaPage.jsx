import React from 'react'
import { useParams } from 'react-router-dom'

const SinglaPage = () => {
    let params = useParams
    console.log(params)
  return (
    <h1>
      SinglePage {params.id}
    </h1>
  )
}

export default SinglaPage
