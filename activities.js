import React from 'react';

function Activities(props){
    let rows = props.events.map(function(u){
        return <tr key = {u.name}><td>{u.name}</td><td>{u.dates}</td><td>{u.descriptions}</td></tr>;
    });
    let eventTable = <table className = "clubEvents">
        <thead><tr><th>Names</th><th>Upcoming Date(s)</th><th>Descriptions</th></tr></thead>
        <tbody>{rows}</tbody>
    </table>;
    return(
<div>
<main>
   
    <h1>Club Activities</h1>
    <h1 id ="Sessions">Types of Sessions</h1>
    <ul id = "sessionList">
        <li><b>Total Not Monday Mondays:</b> Morning Sessions on the first and last Monday of every month.</li>
        <li><b>Search and Recruit Wednesdays:</b> Afternoon Sessions every Wednesday of the month.</li>
        <li><b>Caffeinated Fridays:</b> Evening Sessions every Friday of the month</li>
    </ul>
    <h2>Activity Schedule</h2>
    {eventTable}
    
    
</main>
</div>

    );
};

export default Activities;
