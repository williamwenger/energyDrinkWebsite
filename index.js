// index.js file
import React from "react";
import ReactDOM from "react-dom";


import Menu from "./menu";
import Home from "./home";
import Activities from "./activities";
import AdminActivity from "./adminActivity"
import Login from "./login";
import Membership from "./membership";
import Merchandise from "./merchandise";
import Subscriptions from "./subscriptions";

import events from "./eventData.json";

class App extends React.Component {
    constructor(props) {
        super(props);
        // Application state variables:
        // *role* is for RBAC == "role based access control"
        // we have "guest", "user", and "admin"
        //
        this.state = { role: "user", show: "home", activities: events};
        this.handleClick = this.handleClick.bind(this); 
        this.changeRole = this.changeRole.bind(this);
    }

    handleClick(view){
        this.setState({ show: view });
        console.log(view);
    }
    changeRole(roku){
        this.setState({role: roku});
    }

    render() {
         let contents = <Home />;
        // statements/logic to set the content variable based on state
        switch (this.state.show){
            case "home":
                contents = <Home show = {this.state.show}/>;
                break;
            case "activities":
                contents = <Activities show = {this.state.show} events = {events}/>;
                break;
            case "adminActivity":
                contents = <AdminActivity show = {this.state.show} events = {this.state.activities} 
                addEvent = {(newEvt) => this.setState({ activities: [...this.state.activities, newEvt] })}
                deleteEvent = {(evt) => this.setState({ activities: evt })}
                />; 
                break;
            case "login":
                contents = <Login show = {this.state.show}/>;
                break;
            case "membership":
                contents = <Membership show = {this.state.show}/>;
                break;
            case "merchandise":
                contents = <Merchandise show = {this.state.show}/>;
                break;
            case "subscriptions":
                contents = <Subscriptions show = {this.state.show}/>;
                break;
            default:
                contents = <h2> Something went wrong!!! </h2>;
                break; 
        }
        return (
            <>
                <Menu role={this.state.role} show={this.state.show} setShow={this.handleClick}/>
                {contents}
            </>
        );
    }
}

// let contents = (<> 
// <Menu/>
// {/* <Activities events = {events} /> */}
// {/* <Login /> */}
// <Membership />
// </>
// );
ReactDOM.render(<App />, document.getElementById("root"));