import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

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
        id: addPerson.name
      }
      setPersons(persons.concat(personObject))
      setNewName('')
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons?.map(person =>
          <p key={person.name}>{person.name}</p>  
        )}
      </div>
    </div>
  )
}

export default App