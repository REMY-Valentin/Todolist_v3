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
        this.handler = this.handler.bind(this);
    }

    handler(state) {
        this.setState({
            status: state
        })
    }
    
    render() {
        var handler = this.handler;
        return(
            <div className="task" data-category="">
                <div className="task__content">
                    <Name value={this.state.name} />
                    <Category value={this.state.category} />
                    <Button handler={handler.bind(this)} />
                </div>
                <div className="progress-bar">
                    <div className="progress-bar__level" style={{width:"0%"}}></div>
                </div>
            </div>
        );
    }
}

export default task;