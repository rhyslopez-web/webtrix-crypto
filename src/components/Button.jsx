import React from 'react'

const Button = () => {
  return (
    <button 
    className='px-3  py-1 bg-neutral-900 hover:bg-neutral-700 transition ease-in-out rounded-xl border border-neutral-500 
    flex items-center justify-center gap-2'
    >
        Create account
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--iconoir" width="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8">
            </path>
        </svg>
    </button>
  )
}

export default Button