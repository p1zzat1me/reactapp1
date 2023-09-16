import { Component } from 'react';

import './employers-add-form.css';
class EmployeesAddForm extends Component {
state = {
        name: '',
        salary: '',
        isFormValid: false
    }



  onValueChange = (e) =>{
      this.setState({
         [e.target.name]: e.target.value
      },
      this.validateForm)
  }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    validateForm = () => {
        const { name, salary } = this.state;
        const isFormValid = name.length > 3 && salary.length >= 2;
        this.setState({ isFormValid });
      }

render () {

    const {name,salary, isFormValid} = this.state;
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit = {this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    name='name'
                    value={name}
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    name='salary'
                    value={salary}
                    onChange={this.onValueChange}/>

                <button type="submit" disabled={!isFormValid}
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}
}

export default EmployeesAddForm;