import React from 'react'
import Pet from './Pet'

const PetBrowser = (props) => {

  const renderPets = () => {
      let pets = props.pets

  const petsList = pets.map(pet =>
    <Pet
      key={pet.id}
      pet={pet}
      onAdoptPet={props.onAdoptPet}/>
    )
    return petsList
  }

  return(
    <div className="ui cards">
      {renderPets()}
    </div>
  )
}

export default PetBrowser
