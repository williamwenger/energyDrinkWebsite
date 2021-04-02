import React from "react";

function Membership(){
    return(
        <div>
        <main>
            <h1 id = "Sessions">Sign up</h1>
            <form>
                <label>Name</label>
                <input id = "name" name = "name" required 
                minLength = "4" maxLength = "40" placeholder="Ex: Elon Musk"/>
                <label>Email</label>
                <input id = "email" name = "email" required
                minLength = "7" maxLength = "36" placeholder="Ex: gg@hooliMail.com"/>
                <label>Password</label>
                <input type="password" required
                minLength = "6" maxLength = "18" placeholder ="Ex: asd123"/>
                <label>How ready are you?</label>
                <select id = "options">
                    <option value = "0"></option>
                    <option value = "Definitely not ready">Definitely not ready</option>
                    <option value = "A little ready">A little ready</option>
                    <option value = "Partially ready">Partially ready</option>
                    <option value = "Almost ready">Almost ready</option>
                    <option value = "About to be ready">About to be ready</option>
                    <option value = "Absolutely ready">Absolutely ready</option>
                </select>
                <button id = "signUpButton">Sign up!</button>
            </form>
            <section id = "ThanksDialog">
                <h2 className ='thankYouH'>Thanks for Signing Up!</h2>
                <p id='thankYouMessage' className ='thankYouP'></p>
                <button id='offButton'>Close</button>
            </section>
        </main>
        </div>
    );
};

export default Membership;