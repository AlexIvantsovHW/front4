import React from "react";
import Registation from './Registation';
import { connect } from "react-redux";
import { getRegistrationTC,getDataTC} from "../../redux/TableReducer";


class RegistationContainer extends React.Component{
    componentDidMount() {this.props.getDataTC();}
    componentDidUpdate(prevProps,prevState){
      if(prevProps.table!==this.props.table){this.setState(this.props.table)}}

    render(){return(<><Registation getRegistrationTC={this.props.getRegistrationTC}/></>)}
}

const mapStateToProps=(state)=>{return{table:state.table}}
export default connect(mapStateToProps,{getRegistrationTC,getDataTC})(RegistationContainer) ;