import React, { Component } from "react";

class NewVacationForm extends Component {
  state = {
    formValue: "",
    vacationsList: this.props.vacationsList
  };

  nameRef = React.createRef();
  idRef = React.createRef();

  handleChange = e => {
      this.setState({
          formValue: e.target.value
        });
  }

  handleSave = e => {
    e.preventDefault();

    const vacation = {
        name: this.nameRef.value,
        id: this.idRef.value
    }

    this.props.addVacation(vacation);
    // this.setState({
    //   vacationsList: { ...vacationsList, formValue },
    //   formValue: ''
    // });

    // postData = data => {
    //   fetch(`/vacations`, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(response => console.log("Success:", JSON.stringify(response)))
    //     .catch(error => console.error("Error:", error));
    // };
  };

  render() {
    const { formValue } = this.state;
    return (
      <form onSubmit={this.handleSave}>
        <input type="text" ref={this.nameRef} onChange={this.handleChange} placeholder="Name"/>
        <input type="text" ref={this.idRef} onChange={this.handleChange} placeholder="ID"/>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NewVacationForm;
