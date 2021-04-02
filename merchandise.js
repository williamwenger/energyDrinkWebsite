import React from 'react';

import blackBomber from "./images/blackBomberJacket.jpg";
import blackHoodie from "./images/blackHoodie.jpg";
import blackShirt from "./images/blackShirt.jpg";
import blackWindbreaker from "./images/blackWindbreaker.jpg";

let bomberImage = <img id = "bomberJacket" src = {blackBomber} alt = "BomberJacketss"></img>;
let hoodieImage = <img id = "hoodie" src = {blackHoodie} alt = "Hoodies"></img>;
let shirtImage = <img id = "shirt" src = {blackShirt} alt = "Shirts"></img>;
let windbreakerImage = <img id = "windbreaker" src = {blackWindbreaker} alt = "WindBreakers"></img>;

function Merchandise(){
    return(
            <main className = "merchDisplay">
                <h1>Merchandise</h1>
                <h3>These are our current items for sale.</h3>
                <div id = 'merchItems'>
                    <figure>
                        {shirtImage}
                        <figcaption>Energy Drink Club Shirt - Black($30)</figcaption> 
                    </figure>
                    <figure>
                        {hoodieImage}
                        <figcaption>Energy Drink Club Hoodie - Black($60)</figcaption> 
                    </figure>
                    <figure>
                        {bomberImage}
                        <figcaption>Energy Drink Club Bomber - Black($70)</figcaption> 
                    </figure>
                    <figure>
                        {windbreakerImage}
                        <figcaption>Energy Drink Club Windbreaker - Black($80)</figcaption> 
                    </figure>
                </div>
                <h2> Email us at EnergyDrinkClub@energy.io for inquiries</h2>
            </main>
    );
};

export default Merchandise;