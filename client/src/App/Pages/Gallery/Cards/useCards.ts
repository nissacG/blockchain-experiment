import { useEffect, useState } from "react"
import { Contract } from "./types"

export default function useCards(contractId: string) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Contract[] | null>()

  const fetchContract = async (contractId: string) => {
    try {
      setLoading(true)
      const url = `http://localhost:5000/contract/${contractId}`
      const response = await fetch(url)
      const jsonResponse = await response.json()
      setLoading(false)
      return setData(jsonResponse)
    } catch (err) {
      setLoading(false)
      console.error(err)
    }
  }

  useEffect(() => {
    fetchContract(contractId)
  }, [contractId])
  const error = undefined

  return {
    data,
    error,
    loading
  }
}
