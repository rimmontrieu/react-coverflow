import { useState } from 'react'
import Coverflow from './Coverflow'
import SearchInput from "./SearchInput"

function App() {

  const [data, setData] = useState<{imageData:string[]}>({imageData:[]})

  const setImageData = (data:string[]) => {
    setData({imageData:data})
  }

  return (
    <div className="w-screen h-screen p-2 flex flex-col items-center overflow-hidden">
      <h1 className='text-center font-bold text-2xl m-2'>React Coverflow</h1>
      <SearchInput setImageData={setImageData}/>
      <Coverflow imageData={data.imageData}></Coverflow>
    </div>
  )
}

export default App
