import React from 'react';
import Name from './task_components/task_name';
import Category from './task_components/task_category';
import Button from './task_components/task_button';
import ProgressBar from './task_components/progress_bar';


class task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.name,
            category : this.props.category,
            status : this.props.status,
        };
        this.handler = this.handler.bind(this);
        this.progress = this.progress.bind(this);
    }

    handler(state) {
        this.setState({
            status: state
        })
    }

    progress() {
        if(this.state.status === "complete") {
            return "100%";
        } else {
            return "0";
        }
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
                    <ProgressBar completion={this.progress()}/>
                </div>
            </div>
        );
    }
}

export default task;