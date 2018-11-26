import React, {Component} from 'react';
import Customers from "../Customers/Customers";
import Input from "../formEdit/Input";
import Add from "../formAdd/Add";
import myData from "../../data";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData:myData,
            statusEdit: false,
            statusAdd: false,
            valueItem: ''
        }
    }

    showFormAdd = () => {
        if (this.state.statusAdd) {
            return <Add/>
        }
    };

    buttonAdd = (event) => {
        event.preventDefault();
        this.setState({statusAdd: !this.state.statusAdd})
    };

    showFormEdit = () => {
        if (this.state.statusEdit) {
            return <Input/>
        }
    };

    buttonEdit = (event) => {
        event.preventDefault();
        this.setState({statusEdit: !this.state.statusEdit})
    };


    addAction = (item) => {
        this.state.customers.push(item);
        this.setState({
            customer: this.state.customers
        })
    };

    render() {
        return (
            <div className="container">
                <h1>Customer List</h1>
                <div className="row">
                    <Customers showForm={(e) => this.buttonEdit(e)} formAdd={(e) => this.buttonAdd(e)}
                               userData={this.state.userData}/>
                    {this.showFormEdit()}
                    {this.showFormAdd()}
                </div>
            </div>
        );
    }
}

export default App;
