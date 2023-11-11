import { useState, useEffect } from 'react'

import axios from 'axios'

import Filter from "./components/Filter"
import Persons from "./components/Person"
import PersonForm from "./components/PersonForm" 

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const [persons, setPersons] = useState([])
  // load data from db.json file
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log("handleFilterChange" + event.target.value)
    setNewFilter(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("handleNumberChange" + event.target.value)
    setNewNumber(event.target.value)
}

  const handlePersonChange = (event) => {
      console.log("handlePersonChange" + event.target.value)
      setNewName(event.target.value)
  }

  const handleAddPerson = (event) => {
    //TODO -> update event handler with axios post
    //axios
    //.post('http://localhost:3001/notes', noteObject)
    //.then(response => {
      //console.log(response)
    //})
    event.preventDefault()
    console.log("handleAddPerson:")

    let addPersonBool = true
    persons.forEach(p => {
        if (JSON.stringify(p.name) === JSON.stringify(newName)){
            addPersonBool = false
          }
        });
        if (addPersonBool){
            const personObject = {
              name: newName,
              number: newNumber,
              id: newName
            }
          axios
            .post('http://localhost:3001/persons', noteObject)
            .then(response => {
              console.log(response)
              setPersons(persons.concat(personObject))
              setNewName('')
              setNewNumber('')
          })
            
        }
        else {
          const alert_str = `${newName} is already added to the PhoneBook.`
          window.alert(alert_str)
        }
    }
  

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <h3>Add a new</h3>

      <PersonForm newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} handlePersonChange={handlePersonChange} handleAddPerson={handleAddPerson}/>

      <h3>Numbers</h3>

      <Persons newFilter={newFilter} persons={persons}/>
    </div>
  )
}

export default App