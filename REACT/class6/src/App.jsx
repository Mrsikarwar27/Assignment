import React, { useEffect, useState } from 'react'

const App = () => {
  const [number1, setnumber1] = useState(0)
  const [number2, setnumber2] = useState(0)
  const [number3, setnumber3] = useState(0)

useEffect(() => {
  console.log("useEffect running")
},[number1, number2])


  return (
    <div>
<h1>{number1}</h1>
<button onClick={() => setnumber1(Math.floor(Math.random() * 100))}>Change Number1</button>
 <br /><br />
<h1>{number2}</h1>
<button onClick={() => setnumber2(Math.floor(Math.random() * 100))}>Change Number2</button>
 <br /><br />
<h1>{number3}</h1>
<button onClick={() => setnumber3(Math.floor(Math.random() * 100))}>Change Number3</button>



    </div>
  )
}

export default App