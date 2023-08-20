
import React, { useEffect, useState } from "react";
import { deleteSVG,unblockSVG,blockSVG,deleteAllSVG, checkBlock } from "../CommonFunc";
import { useNavigate } from "react-router";
import Checkbox from "./Checkbox";


const Table = (props) => {
  const navigate=useNavigate();
  let data = (props===undefined?null:props.table.table);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isChecked, setChecked] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setChecked(list.map(li => li.id));
    if (isCheckAll) {
      setChecked([]);
    }
  };

  const handlecheckbox = (e) => {
    const { id, checked } = e.target;
    setChecked([...isChecked, id]);
    if (!checked) {
      setChecked(isChecked.filter(item => item !== id));
     }
  };

  console.log(isChecked);
const block=()=>{
  let auth=props.table.auth.name;
  props.getBlockTC(isChecked)
  if(checkBlock(isChecked,data,auth,props.userAC)===true){
    debugger;
    props.userAC({name:null,password:null,status:'Blocked'})
    navigate('/')
  }
}


  function tD (el,status){let x;(status!='Active'?x='bg-warning':x='bg-success');return (<td className={x}>{el}</td>)};
  return (
    <div className="table-responsive mt-5">
      <div className="d-flex justify-content-evenly ">
      <button className="mt-10 btn btn-danger mx-auto " onClick={()=>{props.getDeleteTC(isChecked)}}>{deleteSVG}</button>
      <button className="mt-10 btn btn-success mx-auto" onClick={()=>{ props.getUnblockTC(isChecked)}}>{unblockSVG}</button>
      <button className="mt-10 btn btn-warning mx-auto" onClick={block}>{blockSVG}</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> 
            <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
            </th>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Last login time</th>
            <th scope="col">Time of regestration</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody >

        {data.map((el, index) => (
            <tr key={index} >
              <td className={(el.status!='Active'?'bg-warning':'bg-success')}>
                <input
                  type="checkbox"
                  id={el.id}
                  value={el.id}
                  name={el.name}
                  checked={el.isChecked}
                  onChange={(e) => handlecheckbox(e)}
                />
              </td>
              {tD(el.id,el.status)}
              {tD(el.name,el.status)}
              {tD(el.email,el.status)}
              {tD(el.tLog,el.status)}
              {tD(el.tReg,el.status)}
              {tD(el.status,el.status)}
            </tr>
          ))}
    {/*       {data.map((el, index) => (
            <tr key={index} >
              <td className={(el.status!='Active'?'bg-warning':'bg-success')}>
                <input
                  type="checkbox"
                  id={el.id}
                  value={el.id}
                  name={el.name}
                  checked={el.isChecked}
                  onChange={(e) => handlecheckbox(e)}
                />
              </td>
              {tD(el.id,el.status)}
              {tD(el.name,el.status)}
              {tD(el.email,el.status)}
              {tD(el.tLog,el.status)}
              {tD(el.tReg,el.status)}
              {tD(el.status,el.status)}
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
