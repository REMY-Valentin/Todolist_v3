import React from 'react';



function header() {
    return (
        <div class="header">
            <div class="logo">
                <a href="./">
                    <h1 class="title is-1">TodoList</h1>
                </a>
            </div>
            <div class="filters-bar">
                <div class="filters-bar__element buttons are-small has-addons">
                    <button class="button is-info is-selected">Toutes</button>
                    <button class="button">Complètes</button>
                    <button class="button">Incomplètes</button>
                </div>
                <div class="filters-bar__element task__content__category select is-small">
                    <select>
                        <option>Toutes les catégories</option>
                    </select>
                </div>
                <div class="filters-bar__element view-archives">
                    <a href="./">Voir les archives</a>
                </div>
            </div>
        </div>
    );
}



export default header;