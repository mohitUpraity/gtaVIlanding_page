import React from 'react'

const App = () => {
  return (
    <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black ">
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
            <defs>
                <mask id='viMask'>
                    <rect width="100%" height="100%" fill='black'/>
                    <g className='vi-mask-group'>
                        <text x="50%" y="50%"  textAnchor="middle" fill='white' dominantBaseline="middle" fontFamily='black ' fontSize='250'>
                        VI
                        </text>
                    </g>

                </mask>

            </defs>
            {/* <rect width="100%" height="100%" fill="white" mask="url(#viMask)" /> */}
            <image href='./bg.png' width='100%' height='100%' preserveAspectRatio='xMidYMid slice' mask='url(#viMask)'/>
        </svg>
    </div>
  )
}

export default App