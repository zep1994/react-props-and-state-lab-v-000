import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    this.setState({
      ...this.state.filters,
        type: event.target.value
    })
  }

  findPets = () => {
    let endPoint = '/api/pets'
    let petsData = this.state.filters.type

    if (petsData !== 'all') {
      endPoint += `?type=${petsData}`
    }

    fetch(endPoint)
    .then(res => res.json())
    .then(pets => this.setState({ pets }))
  }

  onAdoptPet = (petId) => {
    this.state.pets.forEach(pet => {
      if (pet.id === petId) {
        pet.isAdopted = true
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.state.filters.type}
                onFindPetsClick={this.findPets}
                value={this.state.value}
               />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
