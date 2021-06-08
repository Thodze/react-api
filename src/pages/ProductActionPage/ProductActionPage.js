import React, {Component} from "react";
import callAPI from "../../utils/apiCaller";
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: false
        };
    }

    /**
     *
     * @param e
     */
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };

    onSave = (e) => {
        e.preventDefault();
        let { name, price, status } = this.state;
        callAPI('products', 'POST', {
            name: name,
            price: price,
            status: status
        }).then(res => {
            history.back();
        });
    };

    render() {

        let {name, price, status} = this.state;

        return (
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-header bg-primary">Add Products</div>
                    <div className="card-body">
                        <form onSubmit={ this.onSave }>
                            <div className="form-group">
                                <label className="col-sm-1-12 col-form-label">Name</label>
                                <div className="col-sm-1-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-1-12 col-form-label">Price</label>
                                <div className="col-sm-1-12">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        placeholder="Price"
                                        value={price}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="status"
                                    value={status}
                                    onChange={this.onChange}
                                />
                                <label className="form-check-label">Exist</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mt-2">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductActionPage;
