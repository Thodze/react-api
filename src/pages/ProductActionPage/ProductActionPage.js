import React, {Component} from "react";

class ProductActionPage extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-header bg-primary">Add Products</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label className="col-sm-1-12 col-form-label">Name</label>
                                <div className="col-sm-1-12">
                                    <input type="text" className="form-control" name="inputName" id="inputName"
                                           placeholder="Name"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-1-12 col-form-label">Price</label>
                                <div className="col-sm-1-12">
                                    <input type="number" className="form-control" name="inputName" id="inputName"
                                           placeholder="Price"/>
                                </div>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Exist</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mt-2">Action</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductActionPage;
