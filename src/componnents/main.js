import React from 'react';
import Task from './task/task';

class main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number_of_task: 1,
        };
    }
 
    render() {
        return(
            
            <Task 
            name = ""
            category = ""
            status = ""
            />
            
        );
    }
}



export default main;

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

/*
const task = []
        for (let i = 0; i < this.state.number_of_task; i++) {
            if(!this.state.data) {
                task.push(<li> <Task 
                    name= {this.state.data[i][0]}
                    category={this.state.data[i][1]}
                    status={this.state.data[i][2]}
                /> </li>)
            }
        }

        return (
            <ul>
                {task}
            </ul>
        );
*/