import React from "react";
import Table from "./Table.js";
import { connect } from "react-redux";
import { tableAC,userAC,getDataTC,getBlockTC,getUnblockTC,getDeleteTC } from "../../redux/TableReducer";
import { compose } from "redux";
import { withAuthNavigate } from "../AuthNavigate.js";


class TableContainer extends React.Component {
  componentDidMount() {this.props.getDataTC();}
  componentDidUpdate(prevProps,prevState){
    debugger;
    if(prevProps.table!==this.props.table){this.setState(this.props.table)}}
    render() {return(<>
    <Table tableAC={this.props.tableAC}{...this.props} userAC={this.props.userAC}
     getBlockTC={this.props.getBlockTC} getUnblockTC={this.props.getUnblockTC}
     getDeleteTC={this.props.getDeleteTC}
     /></>)}
}
const mapStateToProps=(state)=>{return{table:state.table}}
export default compose(
  connect(mapStateToProps,{tableAC,userAC,getDataTC,getBlockTC,getUnblockTC,getDeleteTC}),
  withAuthNavigate)
  (TableContainer) ;

