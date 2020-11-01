import React from 'react';
import task from './task/task';


class footer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div class="task task--add">
                <div class="task__content">
                <div class="task__content__name">
                    <input class="input" type="text" placeholder="Nom de la tâche" name="name" />
                </div>
                <div class="task__content__category">
                    <div class="select is-small">
                    <select>
                        <option>Choisir une catégorie</option>
                    </select>
                    </div>
                </div>
                <div class="task__content__buttons">
                    <button onClick={() => new task({name : 'truc', category : 'test', status : 'idk'})} class="task__content__button__add button is-info">
                    <span class="icon is-small">
                        <i class="fa fa-plus"></i>
                    </span>
                    <span>Ajouter</span>
                    </button>
                </div>
                </div>
            </div>    
        );
    }
}



export default footer;