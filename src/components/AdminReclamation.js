import React, { Component } from 'react';
import { request } from '../helpers/axios_helper';

export default class AdminReclamationContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Retrieve 'role' from local storage
    const role = localStorage.getItem('role');

    // Check if 'role' exists before making the request
    if (!role) {
      return;
    }

    request('GET', '/GetReclamation')
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access
        } else {
          this.setState({ data: [] }); // Set an empty array or handle error appropriately
        }
      });
  }

  handleEtatChange = (index, selectedEtat) => {
    // Clone the data array to avoid directly modifying the state
    const newData = [...this.state.data];
    // Update the etat property of the selected reclamation
    newData[index].etat = selectedEtat;

    // Update the state with the modified data
    this.setState({ data: newData });

    // Send a request to update the etat value in the backend
    // You need to implement the backend endpoint for updating the etat value
    const { numReclamation } = newData[index];
    request('PUT', `/UpdateReclamationEtat/${numReclamation}`, { etat: selectedEtat })
      .then((response) => {
        // Handle the response as needed
      })
      .catch((error) => {
        // Handle error
      });
  };

  render() {
    const role = localStorage.getItem('role');

    return (
      <div className="row justify-content-md-center pt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reclamations</h5>
              {role === "1" && (
                <table className="table">
                  <thead>
                    <tr>
                    <th>Num Reclamation</th>
     <th>cin</th>
     <th>Num Facture</th>
     <th>Num Police</th>
     <th>Date facture</th>
     <th>type</th>
     <th>Consommation</th>
     <th>Description</th>
     <th>Etat</th>
     <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data &&
                      this.state.data.map((reclamation, index) => (
                        <tr key={reclamation.numReclamation } className={
                            reclamation.etat === 'nonTraité' ? 'table-danger'
                              : reclamation.etat === 'enCours' ? 'table-warning'
                              : reclamation.etat === 'Traité'? 'table-success'
                              : ''
                          }>
<td>{reclamation.numReclamation}</td>
         <td>{reclamation.cin}</td>
         <td>{reclamation.numFacture}</td>
         <td>{reclamation.numPolice}</td>
         <td>{reclamation.dateFacture}</td>
         <td>{reclamation.Type}</td>
         <td>{reclamation.consommation}</td>
         <td>{reclamation.description}</td>
         <td>{reclamation.etat}</td>                          <td>
                            <select
                              value={reclamation.etat}
                              onChange={(e) => this.handleEtatChange(index, e.target.value)}
                            >
                              <option value="nonTraité">Non traité</option>
                              <option value="enCours">En cours</option>
                              <option value="Traité">Trait&eacute;</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
              {role !== "1" && <h1>You're not an admin. Stop!</h1>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
