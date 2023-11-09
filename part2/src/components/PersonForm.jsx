const PersonForm = (props) => {

    return(
        <div>
            <h2>add a new</h2>
            <form onSubmit={props.handleAddPerson}>
            <div>name: <input value={props.newName} onChange={props.handlePersonChange}/></div>
            <div>number: <input value={props.newNumber} onChange={props.handleNumberChange} /></div>
            <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default PersonForm