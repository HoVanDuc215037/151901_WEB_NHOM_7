import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectTo: null,
        };
    }
    
    handleLoginClick = () =>{
        this.setState({redirectTo:'/login'});
    }
    render() {
        const { isLoggedIn } = this.props;
        const { redirectTo } = this.state;
        if(isLoggedIn){
            return <Redirect to = '/system/user-manage' />;
        }
        if(redirectTo === '/login'){
            return <Redirect to = '/login'/>;
        }

        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={this.handleLoginClick}>Đăng nhập</button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
