import React from 'react';
import Task from './task/task';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            status: "",
            numberOfTask : 0
        };

        this.handleName = this.handleName.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.add = this.add.bind(this);
    }

    add(event) {
        event.preventDefault();
        this.setState({
            status: 'idk',
            numberOfTask: this.state.numberOfTask + 1 
        });
        
        
    }

    handleName(event) {
        this.setState({name: event.target.value});
    }

    handleCategory(event) {
        this.setState({category: event.target.value});
    }

 
    render() {
        
        const task = []
        for (let i = 0; i < this.state.numberOfTask; i++) {
            if(!this.state.numberOfTask !== 0) {
                task.push(<li> <Task 
                    name= {this.state.name}
                    category={this.state.category}
                    status={this.state.status}
                /> </li>)
            }
        }

        return (
            <div>
                <ul>
                    {task}
                </ul>
                <div class="task task--add">
                    <form onSubmit={this.add}>
                        <div class="task__content">
                        <div class="task__content__name">
                            <input class="input" type="text" placeholder="Nom de la tâche" name="name" value={this.state.name} onChange={this.handleName} />
                        </div>
                        <div class="task__content__category">
                            <div class="select is-small">
                            <select value={this.state.category} onChange={this.handleCategory}>
                                <option>Choisir une catégorie</option>
                                <option value = "categorie 1">Categorie 1</option>
                                <option value = "categorie 2">categorie 2</option>
                            </select>
                            </div>
                        </div>
                        <div class="task__content__buttons">
                            <button type="submit" class="task__content__button__add button is-info">
                            <span class="icon is-small">
                                <i class="fa fa-plus"></i>
                            </span>
                            <span>Ajouter</span>
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>   
        );
    }
}





export default Main;

/*
handleClick(e) {
        //let newNumber = this.state.number_of_task + 1
        //console.log(newNumber)
        //let data = this.state.data
        //let newData = data.push(e)
        console.log(e);
        this.setState((state, props) => ({
            number_of_task: state.number_of_task +1
        }));
        console.log(this.state);
        
    }
*/