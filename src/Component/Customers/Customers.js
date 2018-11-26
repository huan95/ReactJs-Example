// import React, {Component} from 'react';
//
// class Customers extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             customers: {
//                 1: {
//                     id: 1,
//                     name: "Văn Cường",
//                     phone: "02151320",
//                     email: "theart@mail.com"
//                 },
//
//                 2: {
//                     id: 2,
//                     name: "Quốc Tuấn",
//                     phone: "232135102",
//                     email: "quoctuan@mail.com"
//                 },
//
//                 3: {
//                     id: 3,
//                     name: "Trọng Dũng",
//                     phone: "1321654651",
//                     email: "thehalft@mail.com"
//                 },
//
//                 4: {
//                     id: 4,
//                     name: "Ngọc Hải",
//                     phone: "0212132",
//                     email: "thehalftheart9999999@mail.com"
//                 }
//             },
//         };
//
//     }
//
//
//     Delete = (id) => {
//         let arrCustomer = this.state.customers;
//         delete arrCustomer[id];
//         this.setState({customers: arrCustomer})
//     };
//
//
//     Edit = (id) => {
//         let arrCustomer = this.state.customers;
//         this.setState({
//             edit: id
//         })
//
//     };
//
//     render() {
//
//         const {customers, edit} = this.state;
//         const listCustomer = [];
//         for (let i in customers) {
//             listCustomer.push(
//                 <tr key={customers[i].id}>
//                     <th>{customers[i].id}</th>
//                     <th>{customers[i].name}</th>
//                     <th>{customers[i].phone}</th>
//                     <th>{customers[i].email}</th>
//                     <th>
//                         <button type="submit" onClick={(e) => this.props.showForm(e)}>Edit</button>
//                         <button type="submit" onClick={() => this.Delete(i)}>Delete</button>
//                         <button type="submit" onClick={(e) => this.props.formAdd(e)}>Add</button>
//                     </th>
//                 </tr>
//             )
//         }
//
//         return (
//             <div className="col-md-8">
//                 <table className="table table-striped">
//                     <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Manipulation</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {listCustomer}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }
//
// export default Customers;


import React, {Component} from 'react';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: {
                1: {
                    id: 1,
                    name: "Văn Cường",
                    phone: "2315",
                    email: "theart@mail.com"
                },

                2: {
                    id: 2,
                    name: "Quốc Tuấn",
                    phone: "132165",
                    email: "quoctuan@mail.com"
                },

                3: {
                    id: 3,
                    name: "Trọng Dũng",
                    phone: "4651",
                    email: "thehalft@mail.com"
                },

                4: {
                    id: 4,
                    name: "Ngọc Hải",
                    phone: "3215465",
                    email: "thehalftheart9999999@mail.com"
                }

            },
            edit: 1,

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, edit) {
        let name = event.target.name;
        let value = event.target.value;
        let customers = this.state.customers;
        customers[edit][name] = value;
        this.setState({
            customers
        })
    }


    Delete = (id) => {
        let arrCustomer = this.state.customers;
        delete arrCustomer[id];
        this.setState({customers: arrCustomer})
    };

    Edit = (id) => {
        let arrCustomer = this.state.customers;
        this.setState({
            edit: id
        })

    };

    render() {
        const {customers, edit} = this.state;
        const listCustomer = [];
        for (let i in customers) {
            listCustomer.push(
                <tr key={customers[i].id}>
                    <th>{customers[i].id}</th>
                    <th>{customers[i].name}</th>
                    <th>{customers[i].phone}</th>
                    <th>{customers[i].email}</th>
                    <th>
                        <button onClick={() => this.Edit(i)} type="submit" className="btn btn-primary"
                                style={{marginLeft: 10}}>Sửa
                        </button>
                        <button onClick={() => this.Delete(i)} type="submit" className="btn btn-primary"
                                style={{marginLeft: 10}}>Xóa
                        </button>
                        <button type="submit" onClick={(e) => this.props.formAdd(e)} style={{marginLeft: 10}}
                                className="btn btn-primary">Add
                        </button>
                    </th>
                </tr>
            )
        }
        return (
            <div className="col-md-9">
                <div className='form-edit'>
                    <div>
                        Edit:
                        <input type="text" name='name' value={customers[edit].name}
                               onChange={(e) => this.handleChange(e, edit)}
                               style={{marginLeft: 10, marginBottom: 10}}/>
                        <input type="text" name='phone' value={customers[edit].phone}
                               onChange={(e) => this.handleChange(e, edit)}
                               style={{marginLeft: 10, marginBottom: 10}}/>
                        <input type="text" name='email' value={customers[edit].email}
                               onChange={(e) => this.handleChange(e, edit)}
                               style={{marginLeft: 10, marginBottom: 10}}/>
                    </div>

                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Manipulation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listCustomer}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Customers;




