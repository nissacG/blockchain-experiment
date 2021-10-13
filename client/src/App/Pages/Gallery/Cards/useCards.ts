import { useEffect, useState } from "react"
import { Contract } from "./types"

export default function useCards(contractId: string) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Contract[] | null>(null)
  const [error, setError] = useState<unknown>(null)

  const fetchContract = async (contractId: string) => {
    try {
      setLoading(true)
      setError(null)
      const url = `http://localhost:5000/contract/${contractId}`
      const response = await fetch(url)
      const jsonResponse = await response.json()
      setLoading(false)
      return jsonResponse.msg ? setError(jsonResponse) : setData(jsonResponse)
    } catch (err) {
      setLoading(false)
      console.error(err)
    }
  }

  useEffect(() => {
    fetchContract(contractId)
  }, [contractId])

  return {
    data,
    error,
    loading
  }
}
