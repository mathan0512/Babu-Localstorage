import React, { Component } from "react";
import { Button, table } from 'react-bootstrap';
import { Table } from 'reactstrap';
import CityMasterList from './CityMasterList';

export default class CityMaster extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            CountryCode: '',
            CityName: '',
            Active: false,
            CityData: JSON.parse(localStorage.getItem('document')),
            CityList: []
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    AllData = () => {
        debugger;
        var res = [];
        var List = [];
        res = JSON.parse(localStorage.getItem('document'));
        this.setState({ CityData: res });
    }
    Active = () => {

        var res = [];
        res = this.state.CityData.filter(s => s.Active == true);
        this.setState({ CityData: res });
    }
    InActive = () => {

        var res = [];
        res = this.state.CityData.filter(s => s.Active == false);
        this.setState({ CityData: res });
    }

    complete = (e) => {
        if (this.state.Active == false) {
            this.state.Active = true;
        }
    }


    // on form submit...
    handleFormSubmit(e) {
        debugger;
        e.preventDefault()
        var List = JSON.parse(localStorage.getItem('document'));
        if (!localStorage.getItem('document')) {
            List = [];
        }
        List.push(this.state);
        localStorage.setItem('document', JSON.stringify(List));
        var res = [];
        res = JSON.parse(localStorage.getItem('document'));
        this.setState({ CityData: res });
        // localStorage.setItem('document', JSON.stringify(this.state));
    }

    // React Life Cycle
    componentDidMount() {
        this.CityData = JSON.parse(localStorage.getItem('document'));


    }

    render() {
        return (
            <div>
                <h3>Category Master Page</h3>
                <form onSubmit={this.handleFormSubmit} >

                    <div className="form-group">
                        <label>Category Code</label>
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="Country Code" name="CountryCode" />

                    </div>

                    <div className="form-group">
                        <label>Category Name</label>
                        <input type="text" onChange={this.handleChange} className="form-control" placeholder="City Name" name="CityName" />
                    </div>
                    <div className="form-group">
                        <label>Active</label>
                        <input type="checkbox" id="complete" name="complete" onChange={this.complete} />
                    </div>


                    <button type="submit" style={{ margin: 10 }} className="btn btn-primary btn-block">Save</button>
                    <button type="button" style={{ margin: 10 }} className="btn btn-primary btn-block" onClick={this.AllData}>ALL</button>
                    <button type="button" style={{ margin: 10 }} className="btn btn-primary btn-block" onClick={this.Active}>Active</button>
                    <button type="button" style={{ margin: 10 }} className="btn btn-primary btn-block" onClick={this.InActive}>In Active</button>
                </form>
                <div>
                    <fieldset>
                        {/* <table class="table table-bordered" align="center">
                            <thead>
                                <tr>
                                    <th>CountryCode</th>
                                    <th>CityName</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.CityData ? this.state.CityData.map((s) =>
                                    <tr>
                                        <td>{s.CountryCode}</td>
                                        <td>{s.CityName}</td>
                                        <td>{s.Active ? 'true' : 'false'}</td>
                                    </tr>
                                ) : ""}

                            </tbody>
                        </table> */}

                        <Table dark>
                            <thead>
                                <tr>
                                <th>CountryCode</th>
                                    <th>CityName</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.CityData ? this.state.CityData.map((s) =>
                                    <tr>
                                        <td>{s.CountryCode}</td>
                                        <td>{s.CityName}</td>
                                        <td>{s.Active ? 'true' : 'false'}</td>
                                    </tr>
                                ) : ""}
                            </tbody>
                        </Table>

                    </fieldset>
                </div>
            </div>

        );
    }
}