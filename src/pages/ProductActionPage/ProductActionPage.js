import React, {Component} from "react";
import {connect} from "react-redux";
import {actionAddProductRequest, actionGetProductRequest, actionUpdateProductRequest} from "../../actions";
// import { createBrowserHistory } from 'history';
// let history = createBrowserHistory();

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

    componentDidMount() {
        let {match} = this.props;
        if (match) {
            let id = match.params.id;
            this.props.editProduct(id);
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps && nextProps.itemEditing) {
            let {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                name: itemEditing.name,
                price: itemEditing.price,
                status: itemEditing.status
            })
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };

    onBack = (e) => {
        e.preventDefault();
        let {history} = this.props;
        history.goBack();
    };

    onSave = (e) => {
        e.preventDefault();
        let {history} = this.props;
        let {id, name, price, status} = this.state;
        let product = {
            id: id,
            name: name,
            price: price,
            status: status
        };

        if (id) {
            this.props.updateProduct(product);
            history.goBack();
        } else {
            this.props.addProduct(product);
            history.goBack();
        }
    };

    render() {

        let {id, name, price, status} = this.state;
        let actionName = id ? 'Edit' : 'Add';
        return (
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-header bg-success">{actionName} Products</div>
                    <div className="card-body">
                        <form onSubmit={this.onSave}>
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
                                    checked={status}
                                />
                                <label className="form-check-label">Exist</label>
                            </div>
                            <div className="form-group mt-2">
                                <button type="button" onClick={this.onBack} className="btn btn-danger mr-2">Back
                                </button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(actionAddProductRequest(product));
        },
        editProduct: (id) => {
            dispatch(actionGetProductRequest(id));
        },
        updateProduct: (product) => {
            dispatch(actionUpdateProductRequest(product));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
