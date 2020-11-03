import React from 'react';
import task from '../task';

class categrory extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="task__content__category">
                <p> {this.props.value} </p>
            </div>
        );
    }
}

export default categrory;