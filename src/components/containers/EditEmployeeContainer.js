import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk } from '../../store/thunks';


class EditEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          first: "", 
          last: "", 
          department: "", 
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    componentDidMount() {
        //getting employee ID from url
        this.props.fetchEmployee(this.props.match.params.id);
        this.setState({
            first: this.props.employee.first,
            last: this.props.employee.last,
            department: this.props.employee.department,
        });
      }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }); 
    }

    // handleSelectChange = event => {
    //   if (event.target.value === "employee") {
    //     this.setState({employeeId:null});
    //   } else {
    //     this.setState({employeeId: event.target.value})
    //   }
    // }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for employee from form input
        if (this.state.first === "") {
          this.setState({error: "Error: First name cannot be empty"});
          return;
        }

        let employee = {
            id: this.props.employee.id,
            first: this.state.first,
            last: this.state.last,
            department: this.state.department,
        };
        console.log(employee)
        this.props.editEmployee(employee);

        this.setState({
          redirect: true, 
          redirectId: this.props.employee.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        let { employee, allTasks, editEmployee, fetchEmployee } = this.props;

        //go to single employee view of the edited employee
        if(this.state.redirect) {
          return (<Redirect to={`/employee/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First: </label>
            <input type="text" name="first" value={this.state.first} placeholder={employee.first} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last: </label>
            <input type="text" name="last" value={this.state.last || ""} placeholder={employee.last} onChange={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
            <input type="text" name="department" value={this.state.department || ""} placeholder={employee.department} onChange={(e) => this.handleChange(e)}/>
            <br/>
  
            <button type="submit">
              Submit
            </button>

          </form>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      employee: state.employee,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    })
}

export default connect(mapState, mapDispatch)(EditEmployeeContainer);