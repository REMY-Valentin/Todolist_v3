import React from 'react';

class button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.value === "idk") {
            return(
                <div class="task__content__buttons">
                    <button class="task__content__button__incomplete button is-success is-small">
                    <span class="icon is-small">
                        <i class="fa fa-step-backward"></i>
                    </span>
                    </button>
                    <button class="task__content__button__desarchive button is-success is-small">
                    <span class="icon is-small">
                        <i class="fa fa-undo"></i>
                    </span>
                    </button>
                    <button class="task__content__button__validate button is-success is-small">
                    <span class="icon is-small">
                        <i class="fa fa-check-square-o"></i>
                    </span>
                    </button>
                </div>
            );
        } else {
            return(
                <div>
                    
                </div>
            )
        }
        
    }
}

export default button;

/*
return (
            <div class="task__content__buttons">
                <button class="task__content__button__incomplete button is-success is-small">
                <span class="icon is-small">
                    <i class="fa fa-step-backward"></i>
                </span>
                </button>
                <button class="task__content__button__desarchive button is-success is-small">
                <span class="icon is-small">
                    <i class="fa fa-undo"></i>
                </span>
                </button>
                <button class="task__content__button__validate button is-success is-small">
                <span class="icon is-small">
                    <i class="fa fa-check-square-o"></i>
                </span>
                </button>
                <button class="task__content__button__modify button is-warning is-small">
                <span class="icon is-small">
                    <i class="fa fa-pencil-square-o"></i>
                </span>
                </button>
                <button class="task__content__button__archive button is-danger is-small">
                <span class="icon is-small">
                    <i class="fa fa-archive"></i>
                </span>
                </button>
                <button class="task__content__button__delete button is-danger is-small">
                <span class="icon is-small">
                    <i class="fa fa-trash"></i>
                </span>
                </button>
            </div>
        );
*/