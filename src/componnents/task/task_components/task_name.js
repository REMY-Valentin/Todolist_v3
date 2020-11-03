import React from 'react';
import task from '../task';

class name extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="task__content__name">
                <input class="input" type="text" value="" placeholder="Nom de la tâche" name="name" />
                <p> {this.props.value} </p>
            </div>
        );
    }
}

export default name;