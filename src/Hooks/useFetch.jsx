import {useState,useEffect} from 'react'

export function useFetch(url){
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(()=>{
        async function fetchData(){

            setLoading(true)

            try{
                const res = await fetch(url)
                const json = await res.json(res)
                setData(json)
                if(json.erro){
                    setError(json.erro)
                }

            }catch(error){
                console.log("Deu um erro")
                setError(error.message)
            }
          
            setLoading(false)
        }
        fetchData()
    },[url])

    return {data,loading,error}
}