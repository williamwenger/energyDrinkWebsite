import React from 'react';

class AdminActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityForm: {
                activityName: '',
                activityDates: '',
                activityDescriptions: ''
            },
        }
    }

    formOnChange = (e) => {
        return this.setState({ activityForm : {
            ...this.state.activityForm,
            [e.target.name]: e.target.value
        }})
    }

    onDelete = (i) => {
        i.preventDefault();
        const upActivities = this.props.events.filter(evt => evt.name !== i.target.id);
        
        return this.props.deleteEvent(upActivities);
    }

    onAdd = (e) => {
        e.preventDefault();
        const cleanForm = {
            name: this.state.activityForm.activityName,
            dates: [this.state.activityForm.activityDates],
            descriptions: this.state.activityForm.activityDescriptions
        }

        return this.props.addEvent(cleanForm);
    }

    render() {
        const deleteEvent = () => {
            return this.onDelete
        }

        let rows = this.props.events.map(function(u){
            return <tr key = {u.name}>
                <td><button onClick = {deleteEvent()} id = {u.name}>Delete</button></td>
                <td>{u.name}</td>
                <td>{u.dates}</td>
                <td>{u.descriptions}</td>
                </tr>;
        });

        let eventTable = <table className = "clubEvents">
        <thead><tr><th></th><th>Names</th><th>Upcoming Date(s)</th><th>Descriptions</th></tr></thead>
        <tbody>{rows}</tbody>
        </table>;

        return(
            <div>
                <main className = "AdminActivity">
                    <h1>Activity Management</h1>
                    <h2>Add Activity</h2>
                    <form id = "Activity">
                        <section className = "nameDatesDescriptions">
                            <section className = "ndd" >
                                <label>Name</label>
                                <input id="activity" name="activityName" required
                                minLength = "1" maxLength = "36" placeholder="Ex: Energy Drink Chugging Mondays" 
                                onChange={this.formOnChange} value={this.state.activityForm.activityName}/>
                            </section>
                            <section className = "ndd">
                                <label>Dates</label>
                                <input id="dates" name='activityDates' required
                                minLength = "4" placeholder ="Ex: Every Tuesday" 
                                onChange={this.formOnChange} value={this.state.activityForm.activityDates}/>
                            </section>
                            <section className = "ndd">
                                <label>Descriptions</label>
                                <input id="descriptions" name='activityDescriptions' required
                                minLength = "10" placeholder ="Ex: The event will start out with...." 
                                onChange={this.formOnChange} value={this.state.activityForm.activityDescriptions}/>
                            </section>
                        </section>
                        <button onClick = {this.onAdd} id = "AddButton" >Add</button>
                    </form>
                    <h2>Activities</h2>
                    {eventTable}
                </main>
            </div>
            
        );
    }
};

export default AdminActivity;