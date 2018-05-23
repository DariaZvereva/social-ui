import React, { Component } from 'react';
import "./styles.css";
const apiUrl = 'https://social-webapi.azurewebsites.net/api/';

class SignUpPage extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
            birthday: ''
        };
        
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    submit(event) {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            birthday: new Date(this.state.birthday).toISOString()
        };
        fetch(apiUrl + 'identity/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            const status = response.status;
            if (status >= 200 && status <= 299) {
                return response.json();
            }
            else {
                return Promise.reject(response.statusText);
            }
        })
        .catch(function (error) {
            alert(error);
        });
    }

    render() {
        return (
            <main className="main_form">
                <form id="singing-up form" onSubmit={this.submit}>
                    <div className="login_form">
                        <h3>Регистрация</h3>
                        <div className="input_row">
                            <label>Email:</label>
                            <input name="email" type="text"
                            style={{margin: "10px", border: "none", backgroundColor: "white"}} onChange={this.change}/>
                        </div>
                        <div className="input_row">
                            <label>Пароль:</label>
                            <input name="password" type="password" 
                            style={{margin: "10px", border: "none", backgroundColor: "white"}} onChange={this.change} />
                        </div>
                        <div className="input_row">
                            <label>Имя:</label>
                            <input name="name" type="text"
                            style={{margin: "10px", border: "none", backgroundColor: "white"}} onChange={this.change}/>
                        </div>
                        <div className="input_row">
                            <label>Дата рождения:</label>
                            <input name="birthday" type="date" 
                            style={{margin: "10px", border: "none", backgroundColor: "white"}} onChange={this.change}/>
                        </div>
                        <div className="submit">
                            <input type="submit" value="Зарегистрироваться" style={{margin: "10px"}} onChange={this.change}/>
                        </div>
                    </div>
                </form>
            </main>
        );
    }
}

export default SignUpPage;