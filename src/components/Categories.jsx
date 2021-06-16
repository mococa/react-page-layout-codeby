import React from 'react'
import {categories} from '../data/categories.js';
function Categories() {
    return (
        <section className="categories" id="categories">
            <h1>categories</h1>
            <h4>discover new possibilities to help you today</h4>
            <div className="categories-container">
                {categories.map((category,i) => (
                    <div style={{
                        flex:`${category.flex} 0 ${category.flex===3?"100%":"auto"}`, 
                        backgroundImage:`url(${process.env.PUBLIC_URL+category.bg})`
                        }} key={i}>
                        <h1>{category.title}</h1>
                        <h3>{category.description}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Categories
