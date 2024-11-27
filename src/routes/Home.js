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
    handleCategoryClick = () =>{
        this.setState({redirectTo:'/CategoryCard'});
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
        if(redirectTo === '/CategoryCard'){
            return <Redirect to = '/CategoryCard'/>;
        }
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
