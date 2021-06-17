import React, {useState, useEffect} from 'react'
import {growth_plans as plans} from '../data/growth-plans';
function GrowthPlans() {
    const [show, setShow] = useState(false)
    const initStyle = (i) => {
        return {
            height: (i+1)*10+40+'%'
        }
    }

    useEffect(()=>{
        window.onscroll = () => handleScroll()
    }, [])
    function handleScroll() { 
        if (document.documentElement.scrollTop > 1800 && window.screen.width > 1000) {
           setShow(true)
         } 
       }
    return (
        <section className="growth-plans" id="growth-plans">
            <h1>growth plans</h1>
            <h4>take your business to the next level</h4>
            <div className="growth-plans-container">
                {plans.map((plan,i)=> (
                    <div key={i} style={ show ? initStyle(i) : {} } className={`single-growth-plan${show ? " growing":""}`}>
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
