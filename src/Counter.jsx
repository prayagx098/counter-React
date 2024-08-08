import React, { useState } from 'react'

function Counter() {

    const[counter,setCounter] = useState(0)

    function increment(){
        setCounter(counter+1)
    }

    function decrement(){
        if(counter!=0){
            setCounter(counter-1)
        }
    }

    function reset(){
        setCounter(0)
    }

  return (
    <>
        <div className="container mt-5">
            <h1 className='text-center text-primary'>Counter</h1>
            <h2 className='text-center text-secondary'> { counter } </h2>

            <div className="text-center">
                <button className='btn btn-success m-3' onClick={increment}>INCREMENT</button>
                <button className='btn btn-danger m-3' onClick={reset}>RESET</button>
                <button className='btn btn-warning m-3' onClick={decrement}>DECREMENT</button>
            </div>
        </div>
    </>
  )
}

export default Counter
