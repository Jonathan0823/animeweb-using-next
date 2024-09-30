"use client"
import React from 'react'


const Pagination = ({page, lastpage, setPage}: {page: number, lastpage: number, setPage: React.Dispatch<React.SetStateAction<number>>}) => {

  const [isLoading, setIsLoading] = React.useState(false)
    const handleNextPage = () => {
        if (page === lastpage) return
        setIsLoading(true)
        setPage((prevState: number) => prevState + 1)
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
    }

    const handlePrevPage = () => {
        if (page === 1) return
        setIsLoading(true)
        setPage((prevState: number) => prevState - 1)
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
    }


  return (
    <div className="flex justify-center gap-16 p-9 md:text-3xl sm:2xl items-center">
        <button className='transition-all hover:scale-110 hover:text-blue-600' onClick={handlePrevPage} disabled={isLoading}>Prev</button>
        <p>{page} of {lastpage}</p>
        <button className='transition-all hover:scale-110 hover:text-blue-600' onClick={handleNextPage} disabled={isLoading}>Next</button>
    </div>
  )
}

export default Pagination