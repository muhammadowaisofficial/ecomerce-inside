import React from 'react'

const ErrorAlert = ({error}:{error:string}) => {
  return (
    <div className='border border-red-700 bg-red-200 rounded-sm p-4'>
        <p className="text-red-800">{error}</p>
    </div>
  )
}

export default ErrorAlert