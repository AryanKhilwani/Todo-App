export function CreateTodo() {
    return <div>
        <input style={{margin: 10, padding: 10}} type= "text" placeholder="Title"></input><br />
        <input style={{margin: 10, padding: 10}} type= "text" placeholder="Description"></input><br/>
        <button style={{margin: 10, padding: 10}}>Add todo</button>
    </div>
};