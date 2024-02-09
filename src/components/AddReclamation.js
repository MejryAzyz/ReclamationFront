import React, { Component } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';

export default class AddReclamation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numReclamation: 0,
      cin: '',
      numFacture: '',
      numPolice: '',
      dateFacture: '',
      type: '',
      consommation: '',
      description: '',
      etat: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Fetch factures using 'cin' from local storage
    request('POST', '/addReclamation', this.state).then(
      (response) => {
        // Handle success (if needed)
        console.log('Reclamation added successfully:', response.data);
      }
    ).catch(
      (error) => {
        // Handle error (if needed)
        console.error('Error adding reclamation:', error);
      }
    );
  };

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Reclamation</h5>
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">CIN</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cin"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Num Facture</label>
                  <input
                    type="text"
                    className="form-control"
                    name="numFacture"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Num Police</label>
                  <input
                    type="text"
                    className="form-control"
                    name="numPolice"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date Facture</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dateFacture"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="type"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Consommation</label>
                  <input
                    type="text"
                    className="form-control"
                    name="consommation"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Etat</label>
                  <input
                    type="text"
                    className="form-control"
                    name="etat"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
