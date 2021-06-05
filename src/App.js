import React, {Component} from "react";
import './App.css';

class App extends Component {
    render() {
        return (
            <div>

                {/*Start Navbar*/}
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="nav-link" href="#">Products</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/*End Navbar*/}

                {/*Start Container*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" className="btn btn-success mt-3 mb-3">Add Product</button>
                            <div className="card">
                                <div className="card-header bg-info">List Products</div>
                                <div className="card-body">
                                    <table className="table table-response">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            {/* eslint-disable-next-line jsx-a11y/scope */}
                                            <td scope="row">1</td>
                                            <td>1</td>
                                            <td>Samsung A21s</td>
                                            <td>4000</td>
                                            <td>
                                                <span className="badge badge-danger">Label</span>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-primary mr-1">Edit</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Container*/
                }
            </div>

        );
    }
}

export default App;
