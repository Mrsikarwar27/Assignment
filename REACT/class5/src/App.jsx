import React ,{ useState} from 'react'
import axios from 'axios'


const App = () => {
  const [allData, setallData] = useState([])
  async function getData(){
const res = await axios.get('https://jsonplaceholder.typicode.com/users')
 console.log(res.data);
   setallData(res.data)
  }



  return (
    <div>
     <button onClick={getData}> Get Data</button>
     

     {allData.map((elem,idx)=>{
      return <h1 key={idx}> {elem.name} </h1>

     })}     
    </div>

  )
}

export default App