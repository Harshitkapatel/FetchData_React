import React from 'react'
import useFetch from './useFetch'

const url = 'https://api.escuelajs.co/api/v1/products';

function Home() {

  const { data, isLodding, error } = useFetch(url)

  console.log(data)
 

  if (isLodding) {
    return (
    <div className='w-full h-screen flex items-center justify-center text-white   bg-black'>
      Lodding...
    </div>
  )

  }
  
  if (error) {
    return (
       <div className='w-full h-screen flex items-center justify-center text-white   bg-black'>
      Error: Fetch Error
    </div>
    ) 
  }
  
  
  
  return (
    <div className='w-full h-full bg-black'>
      <div className='text-white text-2xl text-center py-8 font-bold'>
        <h1>Photos</h1>
      </div>

      <div className='flex flex-wrap mx-10'>
        {
          data.map((item) => (

            <div className=' mx-3 my-3 w-50 h-50 border border-white' key={item.id}>

              <div>
                <img 
                  src={item.images[0]}
                  className='pl-10 pt-5 items-center w-40 h-auto '
                  />
                <p className='mt-3 text-sm text-center text-white'>{item.title}</p>

              </div>
            </div>
          ))
        }
      </div> 
    </div>
  )
}

export default Home