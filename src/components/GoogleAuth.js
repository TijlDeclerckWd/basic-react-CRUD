import React from 'react';
import {connect} from "react-redux";
import { signIn, signOut } from "../actions/action-creators/auth";

const mapStateToProps = (state) => ({
    isSignedIn: state.auth.isSignedIn
});

class GoogleAuth extends React.Component {
    auth;

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '155093110871-va6e9m32eeqhnu11hb3vt4rao7jl5gsa.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            }).catch((err) => {
                console.log('ERRRRROR', err);
            });
        });
    }

    onAuthChange = () => {
        if (this.auth.isSignedIn.get()) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
      this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <div><button className="btn btn-danger">I don't know if we're signed in</button></div>
        } else if (this.props.isSignedIn) {
            return <div><button onClick={this.onSignOut} className="ui red google button">Sign Out</button></div>
        } else {
            return <div><button onClick={this.onSignIn} className="ui red google button">Sign In</button></div>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
