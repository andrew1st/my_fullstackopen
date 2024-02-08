import { useState, useEffect } from 'react'

import axios from 'axios'

import Filter from "./components/Filter"
import Persons from "./components/Person"
import PersonForm from "./components/PersonForm" 

import personService from "./services/persons"

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')

  const [persons, setPersons] = useState([])
  // load data from db.json file
  useEffect(() => {
    personService.getAll()
    .then(response => {
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

  // TODO! --> ex. 2.16 improved message/notification - person changed success
  const handlePersonChange = (event) => {
      console.log("handlePersonChange" + event.target.value)
      setNewName(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    console.log("handleAddPerson:")

    let addPersonBool = true
    persons.forEach(p => { // forEach loop checks if name already exists in the phonebook, sets boolean accordingly
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
          personService
            .create(personObject)
            .then(response => {
              console.log(response)
              setPersons(persons.concat(response.data)) 
              setNewName('')
              setNewNumber('') 
            })    
        }
        else {
          if (window.confirm(`${newName} is already added to the PhoneBook, replace the old number with the new one?`)) {
            const personObject = {
              name: newName,
              number: newNumber,
              id: newName
            }
            const person_obj = persons.find(p => p.id === newName)
            const changedPerson = { ...person_obj, number: newNumber }
            personService
              .update(newName, personObject)
              .then(response => {
                console.log(`person updated with PUT | id: ${newName}`)
                setNewName('')
                setNewNumber('')
                setPersons(persons.map(person => person.id !== newName ? person : response.data))
                setNotificationMessage(`Added ${newName}`)})  //ex. 2.16 improved message/notification - person added
              .catch(error => {
                console.error(`ERROR`)
              })
          }
          else {
            window.alert(`${newName} was NOT added to the PhoneBook`)
          }
          
        }
    }
  
  // ex. 2.14 | deletePerson functionality
  // ex. 2.16 | deletePerson Notification
  const handleDeletePerson = (id) => {
    if (window.confirm(`Do you really want to delete "${id}"?`)) {
    personService
      .ax_delete(id)
      .then(response => {
        console.log(`Deleted person with id: ${id}`)
        const newPersons = persons.filter((person) => person.id !== id) //array.filter() - remove person from persons array
        console.log("newPersons: " + newPersons)
        setPersons(newPersons)
      })
      .catch((error) => {
        console.error(error)
      })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification notificationMessage={notificationMessage}/>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <h3>Add a new</h3>

      <PersonForm newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} handlePersonChange={handlePersonChange} handleAddPerson={handleAddPerson}/>

      <h3>Numbers</h3>

      <Persons newFilter={newFilter} persons={persons} handleDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App