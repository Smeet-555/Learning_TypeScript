import { useState } from "react"

const [count , setCount] = useState<number>(0)

export function Counter(){
    return(
        <div>
            <p>Cups Ordered count : {count}</p>
            <button onClick={()=> setCount((c) => c+1)}>Order one more</button>
        </div>
    )
}


