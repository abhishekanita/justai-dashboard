import React from "react";
import {getTitleCase} from 'utilis/sanitisers'
 
const TableCard = ({headers, data, title}) => {

  return (
    <div class="card">
        <div class="card-header">
            <h4 class="card-header-title">{title}</h4>
        </div>
        {data && data.length === 0 && <NoDataCard />}
        {(data && data.length > 0) && <Table headers = {headers} data = {data}/>}
    </div>
  );
};

export default TableCard;



const Table = ({data, headers}) => {

    return(
        <div class="table-responsive">
            <table class="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                <TableHeader headers = {headers}/>
                <tbody>
                    {data.map((item, index) => <TableRow key = {index} data = {item} headers = {headers}/>)}
                    {((data && data.length == 0) && loadingOnEmpty) && <tr>
                        <td colspan = {headers.length} class='text-center' style = {{paddingTop: '100px', paddingBottom: '100px'}}>
                            <div class=''>
                                <img src = "/assets/img/no-data.png" class='img-fluid mb-0' style ={{maxHeight: '240px'}}/>
                                <div class='h4 bold text-uppercase mt-n5'>No data</div>
                            </div>
                        </td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}


const TableHeader = ({headers}) => {
    return(
        <thead class="thead-light">
            <tr>
                {(headers && headers.length > 0) && headers.map((item) => <th key = {item.value}>{item.label}</th>)}
            </tr>
        </thead>
    )
}


const TableRow = ({data, headers}) => {
    return (
        <tr>
            {headers.map((item, index) => <td key = {index}>{data[item.value]}</td>)}
            
        </tr>
    )
}



const NoDataCard = () => {
    return (
        <div class="card-body card-body-height card-body-centered">
            <img class="avatar avatar-xxxl mb-3 mr-8" src="/assets/svg/illustrations/yelling.svg" alt="" />
            <p class="card-text">No data to show</p>
        </div>
    )
}