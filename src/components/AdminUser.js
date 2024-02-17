import React, { Component } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';
import { Link, useParams } from 'react-router-dom';

export default class UsersContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  deleteUser = (id) => {
    request('DELETE', `/User/${id}`)
      .then((response) => {
        // Handle the response as needed
        console.log("User deleted successfully:", response.data);
        window.location.reload();

        // Optionally, you may want to fetch the updated user list after deletion
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access
        } else {
          console.error("Error deleting user:", error);
        }
      });
  };
  UpdateRole = (id) => {

    request('PUT', `/UserRole/${id}`)
      .then((response) => {
        console.log("updating role to admin for user with id :",id);
        window.location.reload();


        // Handle the response as needed
        // Optionally, you may want to fetch the updated user list after deletion
       
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access
        } else {
        }
      });
  };

  fetchUserList = () => {
    request('GET', '/GetUser')
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access
        } else {
          console.error("Error fetching user list:", error);
          this.setState({ data: [] });
        }
      });
  };

  componentDidMount() {
    // Retrieve 'role' from local storage
    const role = localStorage.getItem('role');


    // Check if 'role' exists before making the request
    if (!role) {
      return;
    }

    // Fetch the user list
    this.fetchUserList();
  }

  render() {
    const role = localStorage.getItem('role');
  

    return (
      <div className="row justify-content-md-center pt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              {role === "1" && (
                <table className="table table-hover">
                  <thead>
                    <tr >
                      <th >User ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Login</th>
                      <th>CIN</th>
                      <th>Telephone</th>
                      <th>Address</th>
                      <th>Role</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data &&
                      this.state.data.map((user) => (
                        
                        <tr key={user.id} className={user.role === 1 ? "table-success" : ""}>
                          <td >{user.id}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.login}</td>
                          <td>{user.cin}</td>
                          <td>{user.tel}</td>
                          <td>{user.adresse}</td>
                          <td>{user.role}</td>
                          <td>
                            <button className="btn btn-outline-danger mx-2"onClick={() => this.deleteUser(user.id)}>Delete
                            </button>
                            <button className="btn btn-outline-danger mx-2" onClick={() => this.UpdateRole(user.id)}>
                              update Role </button>
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
