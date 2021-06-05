import React, {Component} from "react";


class ProductList extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-info">List Products</div>
                <div className="card-body">
                    <table className="table table-response table-bordered">
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
                        { this.props.children }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;
