import React from 'react'
import {growth_plans as plans} from '../data/growth-plans';
function GrowthPlans() {
    return (
        <section className="growth-plans" id="growth-plans">
            <h1>growth plans</h1>
            <h4>take your business to the next level</h4>
            <div className="growth-plans-container">
                {plans.map((plan,i)=> (
                    <div key={i} style={{height:((i+1)*10+40)+'%'}} className="single-growth-plan">
                        <div className="top">
                            <h2>$ {plan.price}</h2>
                            <h3>{plan.hours} + hours</h3>
                        </div>
                        <div className="bottom">
                            <span>{plan.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GrowthPlans
