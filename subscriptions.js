import React from "react";

function Subscriptions(){
    return(
        <main>
            <h1>Subscriptions</h1>
            <h3>These Subscriptions will provide you with different packages at different monthly rates.</h3>
            <table id = "clubEvents">
                <tr>
                    <th>Type</th>
                    <th>Price Per Month</th>
                    <th>Description</th>
                </tr>
                <tr id = "row">
                    <td>Plastic</td>
                    <td>$10/month</td>
                    <td>10 Assorted Energy Drinks are delivered to your house every month</td>
                </tr>
                <tr id = "row">
                    <td>Bronze</td>
                    <td>$20/month</td>
                    <td>25 Assorted Energy Drinks are delivered to your house every month</td>
                </tr>
                <tr id = "row">
                    <td>Silver</td>
                    <td>$30/month</td>
                    <td>40 Assorted Energy Drinks are delivered to your house every month</td>
                </tr>
                <tr id = "row">
                    <td>Gold</td>
                    <td>$40/month</td>
                    <td>60 Assorted Energy Drinks are delivered to your house every month</td>
                </tr>
                <tr id = "row">
                    <td>Platinum</td>
                    <td>$50/month</td>
                    <td>80 Assorted Energy Drinks are delivered to your house every month</td>
                </tr>
            </table>
            <h2> Email us at EnergyDrinkClub@energy.io for plans</h2>
        </main>
    );
};

export default Subscriptions;