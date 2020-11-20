import React from 'react';




class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            filter: "Toutes"
        }
    }
    
    status(evt) {
        console.log(evt.target.outerText)
        console.log(evt.target.className)
        let allButton = document.querySelector(".filters-bar__element")
        let currentSelected = allButton.querySelector(".is-selected")
        
        currentSelected.className = "button"

        evt.target.className = "button is-info is-selected"

        
    }
    
    render() {

        const category = []
        for (let i = 0; i < this.state.category.length; i++) {
            category.push(
                <option value = {this.state.category[i]}> {this.state.category[i]} </option>
            )
        }

        return (
            <div className="header">
                <div className="logo">
                    <a href="./">
                        <h1 className="title is-1">TodoList</h1>
                    </a>
                </div>
                <div className="filters-bar">
                    <div className="filters-bar__element buttons are-small has-addons">
                        <button onClick={this.status} className="button is-info is-selected">Toutes</button>
                        <button onClick={this.status} className="button">Complètes</button>
                        <button onClick={this.status} className="button">Incomplètes</button>
                    </div>
                    <div className="filters-bar__element task__content__category select is-small">
                        <select>
                            <option>Toutes les catégories</option>
                            {category}
                        </select>
                    </div>
                    <div className="filters-bar__element view-archives">
                        <a href="./">Voir les archives</a>
                    </div>
                </div>
            </div>
        );
    }
}



export default header;