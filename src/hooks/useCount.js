import { useCallback, useState } from "react"

export function useCount(score) {
    let [count, setCount] = useState(score)

    const decrement = useCallback(() => {if (count !== 0) {setCount((count) => count - 1)}}, [count]) 
    const increment = useCallback(() => {if (count !== 10) {setCount((count) => count + 1)}}, [count])  

    return {count, decrement, increment}
}