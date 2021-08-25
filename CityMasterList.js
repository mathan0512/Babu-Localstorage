import React from "react";


class CityMasterList extends React.Component {


    render() {
        return ( 
            <div>

                <span> {this.props.employeeDeatils.CountryCode}</span><br></br>

                {/* <fieldset>
                    <table class="table table-bordered" align="center">
                        <thead>
                            <tr>
                                <th>CountryCode</th>
                                <th>CityName</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employeeDeatils ? this.state.employeeDeatils.map((s) =>
                                <tr>
                                    <td>{s.CountryCode}</td>
                                    <td>{s.CityName}</td>

                                </tr>
                            ) : ""}

                        </tbody>
                    </table>
                </fieldset> */}

            </div>


        );
    }
}
export default CityMasterList;