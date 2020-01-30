import React from 'react';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => { 
        fetch('https://itsbenduncan-face-recognition.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render(){
        const { onRouteChange } = this.props;
        return (
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white-10">
                    <main className="pa4 black-80 white">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 white">
                                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" 
                                        type="email" 
                                        name="email-address"  
                                        id="email-address" 
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" 
                                        type="password" 
                                        name="password"  
                                        id="password" 
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div className="white">
                                <input 
                                    onClick={ this.onSubmitSignIn } 
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white" 
                                    type="submit" 
                                    value="Sign in" 
                                />
                            </div>
                            <div className="lh-copy mt3 white pointer">
                                <p 
                                    onClick={() => onRouteChange('register') } 
                                    className="f6 link dim black db white" >
                                        Register
                                </p>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        )

    };
};
export default SignIn;