const axios = require('axios');
const express = require('express')
const abi = require("../Abi")

const router = express.Router()
const Web3 = require("web3")

// define the about route
router.get('/:id', (req, res) => {
  if(req.params.id === process.env.CONTRACT) {
    const web3 = new Web3(process.env.INFURA)
    const contract = new web3.eth.Contract(abi, process.env.CONTRACT)
    const getTokenOwner = async(token) => await contract.methods.ownerOf(token).call((err, result) => result)
    const getTokenURI = async (tokenUri) => await contract.methods.tokenURI(tokenUri).call((err, result) => result)
    const getTokenImageUrl = (tokenJson) => axios.get(tokenJson)
      .then(({data}) => data.image)
      .catch(err => console.error(err))
    const getTokens = async (numberOfToken = 10) => {
      const arr = []
      for (let i = 1; i < numberOfToken+1; i++) {
        const tokenOwner = await getTokenOwner(i).then(res)
        const tokenImageUrl = await getTokenURI(i)
          .then(result => getTokenImageUrl(result))
          .catch(err => console.error(err))
        arr.push({
          id: i,
          tokenOwner,
          tokenImageUrl
        })
      }
      return arr
    }
    getTokens().then(resp => res.json(resp))
  } else {
    res.status(400).json({msg: `No contract with id of ${req.params.id}`})
  }
})

module.exports = router