import { useState } from 'react'

import Filter from "./components/Filter"
import Persons from "./components/Person"
import PersonForm from "./components/PersonForm" 

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

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
    event.preventDefault()
    console.log("handleAddPerson:")

    let addPersonBool = true
    persons.forEach(p => {
        if (JSON.stringify(p.name) == JSON.stringify(newName)){
            addPersonBool = false
          }
        });
        if (addPersonBool){
            const personObject = {
              name: newName,
              number: newNumber,
              id: newName
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
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