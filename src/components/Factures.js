import React, { Component } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';
import { Link } from 'react-router-dom';

export default class FacturesContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  

  componentDidMount() {
    // Retrieve 'cin' from local storage
    const cinFromLocalStorage = localStorage.getItem('cin');
    const role =localStorage.getItem('role');

    console.log("this is the role",role);

    if (!cinFromLocalStorage) {
      // Handle the case when 'cin' is not available in local storage
      console.error("CIN not found in local storage");
      return;
    }

    // Fetch factures using 'cin' from local storage
    request('GET', `/facture/${cinFromLocalStorage}`, {}).then(
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
      
      <div className="row justify-content-md-center pt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Factures</h5>
              
              <table className="table">
                <thead>
                  <tr>
                    <th>Num Facture</th>
                    <th>Num Police</th>
                    <th>Date Facture</th>
                    <th>Ancien Index</th>
                    <th>Nouveau Index</th>
                    <th>Prorata</th>
                    <th>Consommation</th>
                    <th>Montant</th>
                    <th>Date Unite Montant</th>
                    <th>Etat</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data &&
                    this.state.data.map((facture) => (
                      <tr key={facture.numFacture}>
                        <td>{facture.numFacture}</td>
                        <td>{facture.numPolice}</td>
                        <td>{facture.dateFacture}</td>
                        <td>{facture.ancienIndex}</td>
                        <td>{facture.noveauIndex}</td>
                        <td>{facture.prorata}</td>
                        <td>{facture.consommation}</td>
                        <td>{facture.montant}</td>
                        <td>{facture.dateUniteMontant}</td>
                        <td>{facture.etat}</td>
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
