import React, { Component } from "react";
import Vacation from "./Vacation";
import NewVacationForm from "./NewVacationForm";

class VacationsList extends Component {
  state = {
    vacationsList: [],
    showForm: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(`/vacations`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          vacationsList: response
        });
      });
  };

  update = () => {
    fetch(`/vacations/`, {
      method: 'POST',
      body: JSON.stringify
    })
    
  }

  handleClick = e => {
    e.preventDefault();

    this.setState({
      showForm: !this.state.showForm
    });
  };

  addVacation = vacation => {
    const { vacationsList } = this.state.vacationsList;
    this.setState({
      vacationsList: [vacationsList, vacation]
    }, console.log(vacation));
  };

  render() {
    const { vacationsList, showForm } = this.state;

    return (
      <div className="App">
        <h1>Upcoming Vacations</h1>
        <ul>
          {vacationsList.map(vacation => (
            <li key={vacation.id}>
              <Vacation name={vacation.name} vacationID={vacation.id} />
            </li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Add New Vacation</button>
        {showForm && (
          <NewVacationForm
            vacationsList={vacationsList}
            addVacation={this.addVacation}
          />
        )}
      </div>
    );
  }
}

export default VacationsList;
