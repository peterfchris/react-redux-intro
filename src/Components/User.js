import React, { Component } from 'react'
import {getUser} from '../redux/userReducer'
import {connect} from 'react-redux'

export class User extends Component {

    componentDidMount(){
        this.props.getUser()
    }

    render() {
        console.log(this.props)
        return (
            <>
                <h1>User</h1>
                {!this.props.loading && this.props.user.name ? 
                <div>
                    <h3>{this.props.user.name.first}</h3>
                    <img src={this.props.user.picture.large}/>
                </div>    
                : (
                 <div>Loading...</div>
                )
            }
            </>
        )()
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(
    mapStateToProps, 
    {getUser}
)(User)