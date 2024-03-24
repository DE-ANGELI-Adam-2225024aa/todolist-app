import React from "react";
import TodoApp from "./TodoApp";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleAddTask() {
        const taskTitle = prompt("Entrez le nom de la tâche");
        if (taskTitle) {
            this.props.addTask(taskTitle);
            this.setState({ inputValue: '' });
        }
    }

    handleSearch(event) {
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Recherche..."
                    value={this.props.searchText}
                    onChange={this.handleSearch}
                />
                <br/>
                <button onClick={this.handleAddTask}>Ajouter une tâche</button>
            </div>
        );
    }
}

export default Footer