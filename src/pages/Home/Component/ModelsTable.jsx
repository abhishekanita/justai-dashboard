import DataTable from 'components/Table/'
import React from 'react'

const ModelsTable = () => {
  return (
    <div class='mt-4'>
        <div class='card'>
            <div class="table-responsive datatable-custom" style = {{borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem'}}>
                <div id="datatable_wrapper" class="dataTables_wrapper no-footer">
                    <table id="datatable" class="table table-borderless table-striped table-thead-bordered card-table dataTable no-footer" data-hs-datatables-options="" role="grid" aria-describedby="datatable_info">
                        <thead class="thead-light " >
                            <tr role= "row">
                                <th scope="col" class="table-column-pe-0 sorting_disabled" rowspan="1" colspan="1" ></th>
                                <th scope="col" class="table-column-ps-0 sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Team: activate to sort column ascending">Team</th>
                                <th scope="col" style={{minWidth: "20rem", width: "35%"}} class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Description: activate to sort column ascending">Description</th>
                                <th scope="col" class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Industry: activate to sort column ascending">Industry</th>
                                <th scope="col" class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Rated: activate to sort column ascending">Rated</th>
                                <th scope="col" class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Members: activate to sort column ascending">Members</th>
                                <th scope="col" class="sorting_disabled" rowspan="1" colspan="1" aria-label=""></th>
                            </tr>
                        </thead>
                        <tbody class='border-top border-white-10  border-opacity-75 border-2'>
                            {Array(10).fill().map(item => <tr role="row" class="even">
                                <td class="table-column-pe-0"></td>
                                <td class="table-column-ps-0">
                                    <a href="#">#softwaretester</a>
                                </td>
                                <td>Software testers play a critical role in application development. They are quality assurance experts who put applications</td>
                                <td>
                                    <a class="badge bg-soft-danger text-danger p-2" href="#">Software</a>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn btn-white btn-sm" id="teamsDropdown8" data-bs-toggle="dropdown" aria-expanded="false">
                                    More <i class="bi-chevron-down ms-1">

                                    </i>
                                    </button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModelsTable


const headers = [{
    value: 'name',
    label: 'Name'
}]