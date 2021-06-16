import React from 'react'
import {growth_plans as plans} from '../data/growth-plans';
function GrowthPlans() {
    return (
        <section>
            <h1>growth plans</h1>
            <h4>take your business to the next level</h4>
            <div className="growth-plans-section">
                {plans.map((plan,i)=> (
                    <div key={i}>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GrowthPlans
