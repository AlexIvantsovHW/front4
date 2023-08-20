import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { getDataTC,getLogTC,userAC} from '../../redux/TableReducer';


class LoginContainer extends React.Component{
    componentDidMount() {this.props.getDataTC()}
    render(){ return(<Login table={this.props.table} getLogTC={this.props.getLogTC} userAC={this.props.userAC}/>)         
    }
}
const mapStateToProps=(state)=>{return{table:state.table}}
export default connect(mapStateToProps,{getDataTC,getLogTC,userAC}) (LoginContainer);