import React, {Component} from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: {
                1: {
                    id: 1,
                    name: "Văn Cường",
                    phone: "02151320",
                    email: "theart@mail.com"
                },

                2: {
                    id: 2,
                    name: "Quốc Tuấn",
                    phone: "232135102",
                    email: "quoctuan@mail.com"
                },

                3: {
                    id: 3,
                    name: "Trọng Dũng",
                    phone: "1321654651",
                    email: "thehalft@mail.com"
                },

                4: {
                    id: 4,
                    name: "Ngọc Hải",
                    phone: "0212132",
                    email: "thehalftheart9999999@mail.com"
                }

            },
            edit: 1
        };

        this.handleChange = this.handleChange.bind(this);
    }

    Edit = (id) => {
        let arrCustomer = this.state.customers;
        this.setState({
            edit: id
        })

    };

    handleChange(event, edit) {
        let name = event.target.name;
        let value = event.target.value;
        let customers = this.state.customers;
        customers[edit][name] = value;
        this.setState({
            customers
        })
    }

    render() {

        const {customers, edit} = this.state;

        return (

            <div className="col-md-3">
                <form className="form-edit">
                    <h1>Edit</h1>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' value={customers[edit].name}
                               onChange={(e) => this.handleChange(e, edit)} style={{marginBottom: 10, marginLeft: 10}}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" name='phone' value={customers[edit].phone}
                               onChange={(e) => this.handleChange(e, edit)} style={{marginBottom: 10, marginLeft: 8}}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name='email' value={customers[edit].email}
                               onChange={(e) => this.handleChange(e, edit)} style={{marginBottom: 10, marginLeft: 12}}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Input;