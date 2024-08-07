import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0)
const handleCounter = () => setCount(count+1)
const handleCounter3 = () => {
    setCount(currentcount => currentcount + 1)
    setCount(currentcount => currentcount + 1)
    setCount(currentcount => currentcount + 1)
}
return(
    <div>
        <p>The Count : {count}</p>
        <button onClick={handleCounter}>+1</button>
        <button onClick={handleCounter3}>+3</button>
    </div>
)

}
export default Counter;