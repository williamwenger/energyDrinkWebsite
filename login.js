import React from "react";


function Login(){
    return (
        <div>
        <main className = "loginBody">
            <h1 className = "loginH1">Login</h1>
            <h1 id = "beforeMessage"></h1>
            <form>
                <label>Email</label>
                <input id="email" name="email" required
                minLength = "7" maxLength = "36" placeholder="Ex: gg@hooliMail.com"/>
                <label>Password</label>
                <input id="password" type="password" required
                minLength = "6" maxLength = "18" placeholder ="Ex: asd123"/>
                <button id = "loginButton">Login</button>
            </form>
        </main>
        </div>
    );
};
export default Login;