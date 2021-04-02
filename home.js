import React from 'react';

import assortedDrinks from "./images/assortedEnergyDrinks.jpg";
import givingDrinks from "./images/givingAwayDrinks.jpg";
let assortImage = <img id = "energy1" src = {assortedDrinks} alt = "Energy Drinks"/>;
let giveImage = <img id = "energy2" src = {givingDrinks} alt = "Giving away energy drinks"/>;


function Home(){
    return(
    <div>
        <main>
            <h1>Energy Drink Club</h1>
            <figure>
                {assortImage}
                <figcaption>Figure 1: These are energy drinks</figcaption> 
            </figure>
            <h2>What is Energy Drink Club?</h2>
            <p> We are a club that give free energy drinks 
                to people of our community. Anywhere from daily
                workers to gamers. 
            </p>
            <figure>
                {giveImage}
                <figcaption>Figure 2: Handing out Energy drinks at one of our
                    community functions.
                </figcaption> 
            </figure>
            <h2>What is our purpose?</h2>
            <p> Our average person goes around their day 
                either overworked, stressed or just plain ol' 
                snoozing around. But with Energy Drink Club, these
                people will have no limitations. That is our purpose.
            </p>
            <h2>How do we do it?</h2>
            <p>
                We steal energy drinks from SafeWay.
            </p>
           
        </main>
    </div>
    );
};

export default Home;