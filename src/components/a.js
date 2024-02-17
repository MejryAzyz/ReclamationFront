import React, { Component } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';
import { Link } from 'react-router-dom';

export default class AdminReclamationContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      
    };
    
  }

  componentDidMount() {
    // Retrieve 'cin' from local storage
    const role = localStorage.getItem('role');

    console.log("this is the role", role);

    // Check if 'role' exists before making the request
    if (!role) {
      return;
    }

    request('GET', '/GetReclamation')
      .then((response) => {
        this.setState({ data: response.data });
        console.log("data:", response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access
        } else {
          this.setState({ data: [] }); // Set an empty array or handle error appropriately
        }
      });
  }

  render() {    const role = localStorage.getItem('role');

    return (
      
      <div className="row justify-content-md-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
                {role ==="1" && (
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
     this.state.data.map((reclamation) => (
       <tr key={reclamation.numReclamation}>
         <td>{reclamation.numReclamation}</td>
         <td>{reclamation.cin}</td>
         <td>{reclamation.numFacture}</td>
         <td>{reclamation.numPolice}</td>
         <td>{reclamation.dateFacture}</td>
         <td>{reclamation.Type}</td>
         <td>{reclamation.consommation}</td>
         <td>{reclamation.description}</td>
         <td>{reclamation.etat}</td>
         <td>
         <select value={reclamation.etat}
           onChange={(e) => {
                                // Handle the change event and update the etat property in the state or perform any necessary action
}}>
          <option value="nonTraite">Non traité</option>
          <option value="enCours">En cours</option>
          <option value="traite">Trait&eacute;</option>
          </select>
          </td>
          </tr>
     ))}
 </tbody>
</table>
              )}
{role !=="1" && (
              <h1>Your not admin Stop!</h1>
)}
            </div>
          </div>
        </div>
      </div>
    );
    }
}
