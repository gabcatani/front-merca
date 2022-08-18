import axios from "axios"
import { useEffect, useState } from "react"


export function useData<T = unknown>(url : string) {

  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data)
        })
    } , [])
    console.log(data)
    return { data }
}
