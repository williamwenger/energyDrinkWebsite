import React from 'react';

// onClick={() => 
// props.setShow({show: 'home'})
// }
function Menu(props) {
    function checkRole(role) {
        switch(role) {
            case "guest":
                return (
                    <ul className = "menu">
                        <li onClick={() => props.setShow('home')}><a className = {props.show === 'home' ? 'active' : ''}>Home</a></li>
                        <li onClick={() => props.setShow('activities')}><a className={props.show === 'activities' ? 'active' : ''}>Activities</a></li>
                        <li onClick={() => props.setShow({show: 'login'})}><a className = {props.show === 'login' ? 'active' : ''}>Login</a></li>
                        <li onClick={() => props.setShow({show: 'membership'})}><a className = {props.show === 'membership' ? 'active' : ''}>Membership</a></li>
                        <li onClick={() => props.setShow('merchandise')}><a className = {props.show === 'merchandise' ? 'active' : ''}>Merchandise</a></li>
                        <li onClick={() => props.setShow({show: 'subscriptions'})}><a className = {props.show === 'subscriptions' ? 'active' : ''}>Subscriptions</a></li>
                    </ul>
                )
            case "user":
                return (
                    <ul className = "menu">
                        <li onClick={() => props.setShow('home')}><a className = {props.show === 'home' ? 'active' : ''}>Home</a></li>
                        <li onClick={() => props.setShow('activities')}><a className={props.show === 'activities' ? 'active' : ''}>Activities</a></li>
                        <li onClick={() => props.setShow({show: 'adminActivity'})}><a className={props.show === 'adminActivity' ? 'active' : ''}>Manage Activities</a></li>
                        <li onClick={() => props.setShow({show: 'logout'})}><a className = {props.show === 'logout' ? 'active' : ''}>Logout</a></li>
                        <li onClick={() => props.setShow('merchandise')}><a className = {props.show === 'merchandise' ? 'active' : ''}>Merchandise</a></li>
                        <li onClick={() => props.setShow({show: 'subscriptions'})}><a className = {props.show === 'subscriptions' ? 'active' : ''}>Subscriptions</a></li>
                    </ul>)
            case "admin":
                return (
                    <ul className = "menu">
                        <li onClick={() => props.setShow({show: 'home'})}><a className = {props.show === 'home' ? 'active' : ''}>Home</a></li>
                        <li onClick={() => props.setShow({show: 'activities'})}><a className={props.show === 'activities' ? 'active' : ''}>Activities</a></li>
                        <li onClick={() => props.setShow({show: 'adminActivity'})}><a className={props.show === 'adminActivity' ? 'active' : ''}>Manage Activities</a></li>
                        <li onClick={() => props.setShow({show: 'logout'})}><a className = {props.show === 'logout' ? 'active' : ''}>Logout</a></li>
                        <li onClick={() => props.setShow({show: 'members'})}><a className = {props.show === 'members' ? 'active' : ''}>Members</a></li>
                        <li onClick={() => props.setShow({show: 'merchandise'})}><a className = {props.show === 'merchandise' ? 'active' : ''}>Merchandise</a></li>
                        <li onClick={() => props.setShow({show: 'subscriptions'})}><a className = {props.show === 'subscriptions' ? 'active' : ''}>Subscriptions</a></li>
                    </ul>
                )
            default:
                return (
                    <ul className = "menu">
                        <li onClick={() => props.setShow({show: 'home'})}><a className = {props.show === 'home' ? 'active' : ''}>Home</a></li>
                        <li onClick={() => props.setShow({show: 'activities'})}><a className={props.show === 'activities' ? 'active' : ''}>Activities</a></li>
                        <li onClick={() => props.setShow({show: 'login'})}><a className = {props.show === 'login' ? 'active' : ''}>Login</a></li>
                        <li onClick={() => props.setShow({show: 'membership'})}><a className = {props.show === 'membership' ? 'active' : ''}>Membership</a></li>
                        <li onClick={() => props.setShow({show: 'merchandise'})}><a className = {props.show === 'merchandise' ? 'active' : ''}>Merchandise</a></li>
                        <li onClick={() => props.setShow({show: 'subscriptions'})}><a className = {props.show === 'subscriptions' ? 'active' : ''}>Subscriptions</a></li>
                    </ul>
                )
        }
    }
    return(
<header>
    <nav>
        {checkRole(props.role)}
    </nav>
</header>
    );
};

export default Menu;