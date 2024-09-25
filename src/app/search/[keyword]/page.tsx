import React from 'react'

type Params = {
  params: {
    keyword: string
  }
}

const Page = ({ params }: Params) => {
  console.log(params)
  return (
    <>
        <h1>Search Page</h1>
        <p>ini adalah search page</p>
    </>
  )
}

export default Page