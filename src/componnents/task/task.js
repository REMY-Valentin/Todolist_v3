import React from 'react';
import Name from './task_components/task_name';
import Category from './task_components/task_category';
import Button from './task_components/task_button';

class task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.name,
            category : this.props.category,
            status : this.props.status
        };
    }
    
    render() {
        console.log('render');
        return(
            <div class="task" data-category="">
                <div class="task__content">
                    <Name value={this.state.name} />
                    <Category value={this.state.category} />
                    <Button value={this.state.status} />
                </div>
                <div class="progress-bar">
                    <div class="progress-bar__level" style={{width:"0%"}}></div>
                </div>
            </div>
        );
    }
}

export default task;