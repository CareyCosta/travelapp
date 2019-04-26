import React, {Component, Fragment} from 'react';

class Vacation extends Component {
    state = {
      name: this.props.name,
      destinations: []
    }

    componentDidMount() {
      this.getData()
    }
    
    getData() {
      fetch(`/destinations?vacation_id=${this.props.vacationID}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          destinations: response
          })
        })
    }
  
    render() {
      const { name, destinations } = this.state;
  
      return (
        <Fragment>
            <h3>{name}</h3>
            {destinations.map(destination => (
              <p key={destination.id}>{destination.address}</p>
            ))}
        </Fragment>
      );
    }
  }
  
  export default Vacation;
  