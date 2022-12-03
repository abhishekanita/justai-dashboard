import React, {useEffect, useState} from 'react'
import { BigDropdown } from 'components/Forms/Dropdown'
import { useHistory } from 'react-router-dom'
import { SwitchButton } from 'components/Forms/Switches'
import Tooltip1 from 'components/Others/Tooltip'

const config = {
    isResponsive: '',
    isShopPaging: '',
    order: '',
    pagination: ''
}



const PaginatedTable = ({
    data, 
    headers: headers_,
    headerButtons, 
    rowClick, 
    selectionOptions, 
    searchPlaceholder, 
    rowSelection, 
    currentPage,
    setCurrentPage,
    sortBy,
    setSortBy, 
    totalPages, 
    setTotalPages, 
    searchInput, 
    setSearchInput, 
    selected, 
    setSelected, 
    rowsPerPage,
    downloadData,
    loadingOnEmpty,
    ...rest
}) => {

    const [headers, setHeaders] = useState(headers_.map(item => ({...item, active: true})))
    const [finalData, setFinalData] = useState(data);

    useEffect(() => {
        setFinalData(data)
    }, [data])

    useEffect(() => {
        setHeaders(headers_.map(item => ({...item, active: true})))
    }, [headers_])


    const applySelection = (selection) => {
        if(selection === 'ALL'){
            setSelected(finalData.map(item => item._id))
        }
    }

    return (
        <>
        <CardHeader 
            searchInput = {searchInput}
            setSearchInput = {setSearchInput}
            headerButtons = {headerButtons}
            searchPlaceholder = {searchPlaceholder}
            downloadData = {downloadData}
            headers = {headers}
            setHeaders=  {setHeaders}
        />
        <Table 
            data = {finalData} 
            headers = {headers} 
            setSortBy = {setSortBy} 
            sortBy = {sortBy}
            rowSelection = {rowSelection}
            selected = {selected}
            setSelected = {setSelected}
            applySelection = {applySelection}
            rowClick = {rowClick}
            loadingOnEmpty = {loadingOnEmpty}
        /> 
        <Pagination 
            totalPages = {totalPages}
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}
        />
        {(rowSelection && selected.length > 0) && <OptionsForSelectedRows 
            selectionOptions ={selectionOptions} 
            selected = {selected}
            setSelected = {setSelected}
        />}
    </> 
    )
}

export default PaginatedTable






export const Table = ({headers, data, sortBy, rowClick, setSortBy, rowSelection, applySelection, selected, setSelected, loadingOnEmpty}) => {

    return (
    <>
        <div class = 'table-responsive datatable-custom'>
            <table class="table table-borderless table-striped table-thead-bordered  table-nowrap table-align-middle card-table dataTable no-footer">
                <TableHeader 
                    headers = {headers}
                    setSortBy = {setSortBy} 
                    sortBy = {sortBy}   
                    rowSelection = {rowSelection}
                    selected = {selected}
                    setSelected = {setSelected}
                    data = {data} 
                />
                <TableBody 
                    data = {data} 
                    headers = {headers} 
                    rowSelection = {rowSelection}
                    selected = {selected}
                    setSelected = {setSelected}
                    applySelection = {applySelection}
                    rowClick = {rowClick}
                    loadingOnEmpty = {loadingOnEmpty}
                />
            </table>
        </div> 
    </>
    )
}


const TableHeader = ({headers, sortBy, setSortBy, rowSelection, data, selected, setSelected}) => {

    const history = useHistory()

    return (
        <thead class="thead-light">
            <tr>
                {rowSelection && <th class="table-column-pr-0 sorting_disabled">
                    <div class="custom-control custom-checkbox" onClick={() => {
                        if(selected.length === 0) setSelected(data.map(item => item._id))
                        else setSelected([]) 
                    }}>
                        <input type="checkbox" class="custom-control-input" checked = {selected.length === 0 ? false : true}/>
                        <label class="custom-control-label" ></label>
                    </div>
                </th>}
                {headers.filter(item => item.active).map((item) => (
                    <th 
                        class={item.noSort ? '' : item.value === sortBy?.key ? (!sortBy?.asc ? 'sorting_asc' : 'sorting_desc') : 'sorting'} 
                        key = {item.value} 
                        onClick = {() => {
                            if(item.noSort) return;
                            if(setSortBy) setSortBy(prev => ({key: item.value, asc: prev.key === item.value ? !sortBy.asc : true}))
                        }}
                    >{item.label}
                    {item.tooltip && <Tooltip1 tooltip = {item.tooltip} />}
                    
                    </th>
                ))}
            </tr>
        </thead>
    )
}


const TableBody = ({data, headers, rowClick, rowSelection, selected, setSelected, loadingOnEmpty}) => {
    
    const selectRow = (e, row) => {
        e.stopPropagation()
        setSelected(prev => {
            if(prev.includes(row._id)){
                return prev.filter(item => item !== row._id)
            } else{
                return [...prev, row._id]
            }
        })

    }
    return (
        <tbody>
            {(data && data.length > 0) && data.map((row, index) => <tr class={`${index%2 ? 'odd' : 'even'} ${rowClick ? 'pointer' : ''}`} key = {index} onClick = {() => {
                if(rowClick) rowClick(row._id)
            }}>
                {rowSelection && <RowSelectorCheckbox 
                    value = {selected.includes(row._id)} 
                    setValue = {(e) => selectRow(e, row)}
                    row = {row}
                />}
                {headers.filter(item => item.active).map((header) => <td key = {header.value}>
                    {row[header.value] ? row[header.value].label ? row[header.value].label : row[header.value] : ''}
                </td>)}
            </tr>)}
            {(!data && loadingOnEmpty) && <tr>
                <td colspan = {(headers.length + (rowSelection ? 1: 0))} class='text-center' style = {{paddingTop: '140px', paddingBottom: '140px'}}>
                    <span class='spinner-border spinner-border-lg' ></span>
                </td>
            </tr>}
            {((data && data.length == 0) && loadingOnEmpty) && <tr>
                <td colspan = {(headers.length + (rowSelection ? 1: 0))} class='text-center' style = {{paddingTop: '100px', paddingBottom: '100px'}}>
                    <div class=''>
                        <img src = "/assets/img/no-data.png" class='img-fluid mb-0' style ={{maxHeight: '240px'}}/>
                        <div class='h4 bold text-uppercase mt-n5'>No data</div>
                    </div>
                </td>
            </tr>}
        </tbody>
    )
}



const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
    return (
        <div class="card-footer">
            <div class="d-flex justify-content-center justify-content-sm-end">
                <nav>
                    <div>
                        <ul class="pagination datatable-custom-pagination">
                            <li class={`paginate_item page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <span class="paginate_button previous page-link" onClick={() => setCurrentPage(1)}>
                                <span><i class='tio-first-page'></i></span>
                                </span>
                            </li>
                            <li class={`paginate_item page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <span class="paginate_button previous page-link" onClick={() => setCurrentPage(prev => prev-1)}>
                                    <span><i class='tio-chevron-left'></i></span>
                                </span>
                            </li>
                            {totalPages <=3 && Array(totalPages).fill().map((item, index) => (
                            <li class={`paginate_item page-item ${currentPage === index+1 ? 'active' : ''}`} key = {index} onClick = {() => setCurrentPage(index+1)}>
                                <span class="paginate_button page-link">{index+1}</span>
                            </li>))}
                            {totalPages > 3 && Array(3).fill().map((item, index) => {

                                const value = currentPage === 1 ? index+1 : (currentPage === totalPages ? totalPages-2+index : (currentPage-1+index))

                                return <li class={`paginate_item page-item ${currentPage === value ? 'active' : ''}`} onClick = {() => {
                                    if(currentPage !== value) setCurrentPage(value)
                                }}>
                                    <span class="paginate_button page-link">{value}</span>
                                </li>
                            })}
                            <li class={`paginate_item page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <span class="paginate_button next page-link" onClick={() => setCurrentPage(prev => prev+1)}>
                                    <span aria-hidden="true"><i class='tio-chevron-right'></i></span>
                                </span>
                            </li>
                            <li class={`paginate_item page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <span class="paginate_button next page-link" onClick={() => setCurrentPage(totalPages)}>
                                    <span aria-hidden="true"><i class='tio-last-page'></i></span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}



const CardHeader = ({searchInput, setSearchInput, headerButtons, downloadData, searchPlaceholder, rowSelection, setHeaders, headers}) => {
    return (
        <div class="card-header">
            <div class="row justify-content-between align-items-center no-gutters flex-grow-1">
                <div class="col-sm-6 col mb-3 mb-sm-0">
                    <Search 
                        searchInput = {searchInput}
                        setSearchInput = {setSearchInput}
                        searchPlaceholder ={searchPlaceholder}
                    />
                </div>
                <div class='col-auto'>
                    {headerButtons && headerButtons}
                </div>
            </div>
        </div>
    )
}


const Search = ({searchInput, setSearchInput, searchPlaceholder}) => {
    return (
        <form>
            <div class="input-group input-group-merge input-group-flush">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                    <i class="tio-search"></i>
                    </div>
                </div>
                <input  
                    class="form-control" 
                    placeholder={searchPlaceholder ? searchPlaceholder : 'Search here...'}
                    value = {searchInput}
                    onChange = {e => setSearchInput(e.target.value)}
                />
            </div>
        </form>
    )
}


const Download = ({downloadData}) => {

    const [loading, setLoading] = useState(false);

    const download = async(type) => {
        try{
            setLoading(true)
            await downloadData(type)
            setLoading(false)
            document.getElementById('outside-div').click()
            
        } catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    return (
        <>
         <BigDropdown
            wrapperClassName = "btn-sm btn-white dropdown-toggle mr-2" 
            popoverClassName = "navbar-dropdown-account"
            popover = {<>
                <div class="">
                    <span class="dropdown-header">Download options</span>
                    <span class="dropdown-item" onClick={() => download('csv')}>
                        <img class="avatar avatar-xss avatar-4by3 mr-2" src="/assets/svg/placeholder-csv-format.svg" alt="Csv" />
                        .CSV
                    </span>
                </div>
            </>}
            style = {{width: '16rem'}}
        >
            {loading ? <span class='spinner-border spinner-border-sm mr-2'></span>:
            <i class="tio-download-to mr-1"></i> }Export
        </BigDropdown>
        </>
    )
}



const RowSelectorCheckbox = ({value, setValue, row}) => {
    return(
        <td class="table-column-pr-0">
            <div class="custom-control custom-checkbox" onClick = {(e) => setValue(e, row)}>
                <input type="checkbox" class="custom-control-input" checked = {value ? 'checked' : ''}/>
                <label class="custom-control-label"></label>
            </div>
        </td>
    )
}


const OptionsForSelectedRows = ({selectionOptions, selected, setSelected}) => {
    return (
        <div class='position-relative'>
            <div class="list-alert-1 border bg-dark">
                <div class='row no-gutters align-items-center'>
                    <div class='col'>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" checked />
                            <label class="custom-control-label">{selected.length} selected</label>
                        </div>
                    </div>
                    <div class='col-auto'>
                        {selectionOptions.map(item => <div 
                            class='btn btn-white-20 mr-2 btn-sm'
                            onClick={() => {
                                item.function(selected)
                            }}
                        >{item.label}</div>)}
                    </div>
                    <div class='col-auto pl-2'>
                        <i class='tio-clear pointer' onClick={() => setSelected([])}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}




const EditColumns = ({headers, setHeaders}) => {

    const editHeaders = (headerValue, value) => {
        const newHeaders = [...headers];
        const index = newHeaders.findIndex(item => item.value === headerValue);
        newHeaders[index].active = value;
        console.log(newHeaders)
        setHeaders(newHeaders)
    }

    return (
        <>
         <BigDropdown
            wrapperClassName = "btn-sm btn-white dropdown-toggle mr-2" 
            popoverClassName = "navbar-dropdown-account"
            popover = {<>
                <div class="">
                    <span class="dropdown-header">Edit Columns</span>
                    {headers.map(item => (
                        <div class='dropdown-item'>
                            <SwitchButton
                                label = {item.label}
                                value = {item.active}
                                setValue = {(e) => editHeaders(item.value, e)}
                            />
                        </div>
                    ))}
                </div>
            </>}
            style = {{width: '16rem'}}
        >
            <i class="tio-column-view mr-1"></i>Edit Columns
        </BigDropdown>
        </>
    )
}
