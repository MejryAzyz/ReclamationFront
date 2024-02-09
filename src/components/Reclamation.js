import React, { Component } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';
import { Link } from 'react-router-dom';

export default class ReclamationContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  

  componentDidMount() {
    // Retrieve 'cin' from local storage
    const cinFromLocalStorage = localStorage.getItem('cin');

    if (!cinFromLocalStorage) {
      // Handle the case when 'cin' is not available in local storage
      console.error("CIN not found in local storage");
      return;
    }

    // Fetch Reclamation using 'cin' from local storage
    request('GET', `/Reclamation/${cinFromLocalStorage}`, {}).then(
      (response) => {
        this.setState({ data: response.data });
        console.log("data:",response.data)

      }
    ).catch(
      (error) => {
        if (error.response.status === 401) {
        } else {
          this.setState({ data: error.response.code });
        }
      }
    );
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reclamations</h5>
              
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
                      </tr>
                    ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
