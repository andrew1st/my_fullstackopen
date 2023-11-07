import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log("addPerson:")
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
        id: addPerson.name
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
  
  const handlePersonChange = (event) => {
    console.log("handlePersonChange")
    console.log(event.target.value)
    setNewName(event.target.value)
  }

    const handleNumberChange = (event) => {
    console.log("handleNumberChange")
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handlePersonChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons?.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>  
        )}
      </div>
    </div>
  )
}

export default App