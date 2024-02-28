import { useState } from 'react';
import Time from './components/Time';

function App() {
  const [count, setCount] = useState({
    c:0,
    bool:false
  });

  return (
    <div className='flex justify-center'>
      <div>
      <div><p className='text-[20px] font-bold py-2'>Set the Time</p></div>
        <div className='flex justify-around my-2 gap-4 rounded p-2 border-[1px] '>
          <div onClick={()=>(setCount((count)=>({...count,c:count.c+1})))} className='cursor-pointer border-[1px] rounded-full p-2'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          </div>
          <div className='text-[20px] '><p>{count.c}</p></div>
          <div onClick={()=>(setCount((count)=>({...count,c:count.c-1})))} className='cursor-pointer border-[1px] rounded-full p-2'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
          </div>
        </div>
        <div onClick={()=>(setCount((count)=>({...count,bool:true})))} className='bg-black rounded text-center text-white font-normal py-2 cursor-pointer '><p>Set</p></div>
       {count.bool && <Time bool={count.bool} mins={count.c} />}
      </div>
    </div>
  );
}

export default App;
