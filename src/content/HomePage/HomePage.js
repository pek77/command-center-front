import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRole} from '../../Ducks/Reducer';
import axios from 'axios';

const roleName = ["NULL","Architect","Operation Specialist","Engagement Lead","IT Specialist"]

class HomePage extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        console.log(props)
        this.state = {
            list : []
        }
        this.findList(this.props.role)
    }

    findList(roleId){
        let that = this;
        axios
            .post('./api/findListByRoleId', {
                "id": roleId,
            })
            .then(function (res) {
                that.setState({list:JSON.stringify(res.data)})
            })
            .catch(function (error) { // 请求失败处理
                that.setState({list:[]})
            });
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.findList(newProps.role)
        console.log('Component WILL RECEIVE PROPS!')
    }
    // shouldComponentUpdate(newProps, newState) {
    //     console.log(newProps, newState)
    //     console.log('Component ShouldUpdate')
    //     return true;
    // }
    // componentWillUpdate(nextProps, nextState) {
    //     console.log(nextProps, nextState)
    //     console.log('Component WILL UPDATE!');
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps, prevState)
    //     console.log('Component DID UPDATE!')
    // }
    // componentWillUnmount() {
    //     console.log('Component WILL UNMOUNT!')
    // }


    render() {
        return (
            <div>
                <p>
                    Role:{roleName[this.props.role]}
                </p>
                <p>
                    List:{this.state.list}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("Homepage mapStateToProps")
    console.log(state,ownProps)
    return {
        role: state.role
    }
}

export default connect(mapStateToProps, null)(HomePage)
