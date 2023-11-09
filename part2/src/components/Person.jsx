const Persons = (props) => {
    
    const personsToShow = props.persons.filter(person => person.name.toLowerCase().includes(props.newFilter.toLowerCase()))

    return (
        <div>
        {personsToShow?.map(person =>
        <p key={person.name}>{person.name} {person.number}</p>  
        )}
        </div>
    )
}

export default Persons