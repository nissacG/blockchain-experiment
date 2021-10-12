export default function useCards() {
  // make API call
  const getPunks = () => {
    
    const data = fetch("http://localhost:5000/health")
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(err => (err))
    return data
  }

  getPunks()
  const data = [
    { id: "1", owner: "123", imageUrl: "https://gateway.pinata.cloud/ipfs/QmdgUE1FeuBhHk2jPyHShdcgwhG1ReSCE4gCSycNxj98JM" },
    { id: "2", owner: "1234", imageUrl: "https://gateway.pinata.cloud/ipfs/QmdgUE1FeuBhHk2jPyHShdcgwhG1ReSCE4gCSycNxj98JM" },
    { id: "3", owner: "12345", imageUrl: "https://gateway.pinata.cloud/ipfs/QmdgUE1FeuBhHk2jPyHShdcgwhG1ReSCE4gCSycNxj98JM" },
    { id: "4", owner: "123456", imageUrl: "https://gateway.pinata.cloud/ipfs/QmdgUE1FeuBhHk2jPyHShdcgwhG1ReSCE4gCSycNxj98JM" }
  ]
  const loading = false
  const error = undefined


  return {
    data,
    error,
    loading
  }
}
