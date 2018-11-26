import React, {Component} from 'react';

class Add extends Component {

    constructor(props) {
        super(props);

        this.setState({
            name: '',
            phone: '',
            email: ''

        })

    };

    changeInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    };

    submitForm = (event) => {
        event.preventDefault();
        const {name, phone, email} = this.state;
        const item = {};
        item.name = name;
        item.phone = phone;
        item.email = email;
        this.props.add(item);
    };

    render() {
        return (
            <div className="col-md-3">
                <form className="form-group" method="Post" onSubmit={(e) => this.submitForm(e)}>
                    <h1>Add</h1>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" onChange={(e) => this.changeInput(e)}
                               style={{marginBottom: 10, marginLeft: 10}}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" name="phone" onChange={(e) => this.changeInput(e)}
                               style={{marginBottom: 10, marginLeft: 8}}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" onChange={(e) => this.changeInput(e)}
                               style={{marginBottom: 10, marginLeft: 12}}/>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default Add;