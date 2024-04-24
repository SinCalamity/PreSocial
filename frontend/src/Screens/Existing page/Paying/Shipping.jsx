import { useState } from "react"
import React from 'react'

function Shipping() {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalcode, setPostalcode] = useState('')
    const [country, setCountry] = useState('')

    const submithandler = (e) => {
        e.preventDefault()
        console.log(address, city, postalcode, country)
    }

  return (
    <div>Shipping</div>
  )
}

export default Shipping