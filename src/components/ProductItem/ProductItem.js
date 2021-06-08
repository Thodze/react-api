import React, {Component} from "react";


class ProductItem extends Component {
    onDelete = (id) => {
        if (confirm('Are You sure?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    };
    render() {
        let { product, index } = this.props;
        let statusName = product.status ? 'Exist' : 'Empty';
        let statusClass = product.status ? 'success' : 'danger';
        return (
            <tr>
                {/* eslint-disable-next-line jsx-a11y/scope */}
                <td scope="row">{ index + 1}</td>
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>{ statusName }</span>
                </td>
                <td>
                    <button type="button" className="btn btn-primary mr-1">Edit</button>
                    <button type="button" className="btn btn-danger" onClick={ () => this.onDelete(product.id) }>Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
