import React from 'react'
import Landing from '../Component/Landing/Landing'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollection from '../Component/NewCollections/NewCollection'

const Shop = () => {
  return (
    <div>
      <Landing/>
      <Popular/>
      <Offers/>
      <NewCollection/>
    </div>
  )
}

export default Shop
