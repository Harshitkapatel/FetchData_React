import { useEffect, useState } from "react"



export const useFetch = (url) => {
    const[data, setData] = useState(null)
    const[isLodding, setLodding] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => {
        const FetchData = async () => {
            try {
                const res = await fetch(url);
                console.log(res)
                if(!res.ok){
                    setError(error)
                    setLodding(false)
                    return
                }

                const info = await res.json()
                setData(info)

            } catch (error) {
                setError(true)
                
            }finally {
                setLodding(false)
            }

        }
        FetchData()
    }, [url])
    return{data,isLodding,error}
}

export default useFetch