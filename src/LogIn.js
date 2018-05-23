import React, { Component } from 'react';
import './styles.css';
const apiUrl = 'https://social-webapi.azurewebsites.net/api/';

class LogInPage extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            rememberMe: false,
        };

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }


    submit(event) {
        event.preventDefault();
        fetch(apiUrl + 'identity/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(function (response) {
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

    change(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <main className="main_form">
            <form>
                <div className="login_form">
                    <h3>Вход</h3>
                    <div className="input_row">
                        <label>Email:</label>
                        <input name="email" type="text" style={{margin: "10px"}} onChange={this.change}/>
                    </div>
                    <div className="input_row">
                        <label>Пароль:</label>
                        <input name="password" type="password" style={{margin: "10px"}} onChange={this.change}/>
                    </div>
                    <div className="remember_me">
                        <label>Запомнить меня</label>
                        <input name="rememberMe" type="checkbox" style={{margin: "10px"}} onChange={this.change}/>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Вход" style={{margin: '10px'}}/>
                    </div>
                </div>
            </form>
        </main>
        )
    }
}

export default LogInPage;