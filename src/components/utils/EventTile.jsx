import React from 'react'

function EventTile({date, time, name, location}) {
  return (
    <div className='flex flex-row bg-slate-400 p-4 m-4 rounded-2xl justify-between items-center'>
        <div className="flex flex-col items-center w-[120px] p-2 rounded-xl bg-slate-300">
            <div className="text-xl font-semibold ">{time}</div>
            <div className="">{date}</div>
        </div>
        <hr className='border-2 h-[60px]'/>
        <div className="flex flex-col items-center mx-[30px] ">
            <div className="text-lg">{name}</div>
            <div className="text-lg">{location}</div>
        </div>
        <hr className='border-2 mx-[2px] h-[60px]'/>
        <div className="flex w-[60px] h-[60px] text-sm justify-center items-center font-semibold cursor-pointer bg-green-500 rounded-xl text-white text-center">
            View <br/> Details
        </div>
    </div>
  )
}

export default EventTile