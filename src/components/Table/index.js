import React, {useEffect, useState} from 'react'
import { BigDropdown } from 'components/Forms/Dropdown.jsx'
import { useHistory } from 'react-router-dom'
import Tooltip from 'components/Others/Tooltip'



const DataTable = ({data, headers, isSort, headerButtons, noDataCard, size, rowClick, selectionOptions, downloadable, searchPlaceholder, rowSelection, ...rest}) => {

    const [finalData, setFinalData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState({key: '', asc: true});
    const [totalPages, setTotalPages] = useState();
    const [searchInput, setSearchInput] = useState('');
    const rowsPerPage = 10;
    const [initalizing, setInitalizing] = useState(true);
    const [selected, setSelected] = useState([]);
    
    useEffect(() => {
        if(rest.totalPages){
            setTotalPages(rest.totalPages);
        } else{
            setTotalPages(Math.ceil(data.length / rowsPerPage));
        }
        formatData(data);
        setInitalizing(false)
    }, [data, headers]);

    useEffect(() => {
        if(!initalizing) formatData(data);
    }, [searchInput])
    
    useEffect(() => {
        if(sortBy.key && headers.filter(item => item.value === sortBy.key).length > 0){
            formatData(data);
        }
    }, [sortBy])
  
    useEffect(() => {
        if(!initalizing) formatData(data);
    }, [currentPage])

    
    const formatData = (data) => {
        let newData = [...data];
        if(searchInput){
            newData = newData.filter((item) => {
                const stringToBeSearched = JSON.stringify(headers.map(header => item[header.value] ? (item[header.value].value ? item[header.value].value : '') : ''));
                return stringToBeSearched.toLowerCase().includes(searchInput.toLowerCase())
            })
        }
        if(sortBy.key && headers.filter(item => item.value === sortBy.key).length > 0){
            newData.sort((a, b) => {
                let value1 = a[sortBy.key].value ? a[sortBy.key].value : a[sortBy].key;
                let value2 = b[sortBy.key] ? b[sortBy.key].value : b[sortBy].key;
                if(typeof value1 === 'string'){
                    value1 = value1.toLowerCase();
                    value2 = value2.toLowerCase();
                }
                if(value1 > value2){
                    return sortBy.asc ? 1 : -1;
                }
                if(value1 < value2){
                    return sortBy.asc ? -1 : 1;
                }
            })
        }
        if(rest.totalPages){
            setTotalPages(rest.totalPages);
        } else{
            setTotalPages(Math.ceil(newData.length / rowsPerPage));
        }
        newData = newData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
        setFinalData(newData)
    }

    const applySelection = (selection) => {
        if(selection === 'ALL'){
            setSelected(finalData.map(item => item._id))
        }
    }
    return (
        <>
        <SearchHeader 
            searchInput = {searchInput}
            setSearchInput = {setSearchInput}
            headerButtons = {headerButtons}
            searchPlaceholder = {searchPlaceholder}
            downloadable = {downloadable}
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
            size = {size}
            rowClick = {rowClick}
            isSort = {isSort}
            noDataCard = {noDataCard}
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

export default DataTable






export const Table = ({headers, data, loading, sortBy, size, noDataCard, isSort, rowClick, setSortBy, rowSelection, applySelection, selected, setSelected}) => {

    return (
    <>
        <div class = 'table-responsive datatable-custom' >
            <table class={`table table-borderless  table-striped table-thead-bordered table-nowrap card-table dataTable ${size && 'table-'+size} table-align-middle no-footer`}>
                <TableHeader 
                    headers = {headers}
                    setSortBy = {setSortBy} 
                    sortBy = {sortBy}   
                    rowSelection = {rowSelection}
                    selected = {selected}
                    setSelected = {setSelected}
                    data = {data} 
                    isSort = {isSort}
                />
                <TableBody 
                    data = {data} 
                    headers = {headers} 
                    rowSelection = {rowSelection}
                    selected = {selected}
                    setSelected = {setSelected}
                    applySelection = {applySelection}
                    loading = {loading}
                    rowClick = {rowClick}
                    noDataCard = {noDataCard}
                />
            </table>
        </div> 
    </>
    )
}


const TableHeader = ({headers, sortBy, setSortBy, rowSelection, data, selected, setSelected, isSort}) => {

    const history = useHistory()
    return (
        <thead class="thead bg-soft-dark">
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
                {headers.map((item) => (
                    <th 
                        class={item.value === sortBy?.key ? (!sortBy?.asc ? 'sorting_asc' : 'sorting_desc') : (isSort ? 'sorting' : '')} 
                        key = {item.value} 
                        onClick = {() => {
                            if(setSortBy) setSortBy(prev => ({key: item.value, asc: prev.key === item.value ? !sortBy.asc : true}))
                        }}
                    >{item.label}
                        {item.tooltip && <Tooltip tooltip = {item.tooltip} />}
                    </th>
                ))}
            </tr>
        </thead>
    )
}


const TableBody = ({data, headers, rowClick, loading, rowSelection, selected, setSelected, noDataCard}) => {
    return (
        <tbody>
            {(data && data.length > 0 && !loading) && data.map((row, index) => <tr class={`${index%2 ? 'odd' : 'even'} ${rowClick ? 'pointer' : ''}`} key = {index} onClick = {() => {
                if(rowClick) rowClick(row._id)
            }}>
                {rowSelection && <RowSelectorCheckbox 
                    value = {selected.includes(row._id)} 
                    setValue = {() => setSelected(prev => {
                        if(prev.includes(row._id)){
                            return prev.filter(item => item !== row._id)
                        } else{
                            return [...prev, row._id]
                        }
                    })}
                    />}
                {headers.map((header) => <td key = {header.value}>
                    {row[header.value] ? row[header.value].label ? row[header.value].label : row[header.value] : ''}
                </td>)}
            </tr>)}
            {((data && data.length == 0 && !loading)) && <tr>
                <td colspan = {(headers.length + (rowSelection ? 1: 0))} class='text-center' style = {{paddingTop: '50px', paddingBottom: '50px'}}>
                    {noDataCard ? noDataCard : <div class=''>
                        <img src = "/assets/img/no-data.png" class='img-fluid mb-0' style ={{maxHeight: '240px'}}/>
                        <div class='h4 bold text-uppercase mt-n5'>No data</div>
                    </div>}
                </td>
            </tr>}
            {(loading) && <tr>
                <td colspan = {(headers.length + (rowSelection ? 1: 0))} class='text-center' style = {{paddingTop: '50px', paddingBottom: '50px'}}>
                    <span class='spinner-border spinner-border-lg'></span>
                </td>
            </tr>}
        </tbody>
    )
}



const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
    return (
        <div class="card-footer bg-soft-dark">
            <div class="d-flex justify-content-center justify-content-sm-end">
                <nav>
                <div>
                        <ul class="pagination datatable-custom-pagination">
                            <li class={`paginate_item page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <span class="paginate_button previous page-link" onClick={() => setCurrentPage(prev => prev-1)}>
                                    <span>Prev</span>
                                </span>
                            </li>
                            {totalPages <=3 && Array(totalPages).fill().map((item, index) => (
                            <li class={`paginate_item page-item ${currentPage === index+1 ? 'active' : ''}`} key = {index} onClick = {() => setCurrentPage(index+1)}>
                                <span class="paginate_button page-link">{index+1}</span>
                            </li>))}
                            {totalPages >3 && Array(3).fill().map((item, index) => {

                                const value = currentPage === 1 ? index+1 : (currentPage === totalPages ? totalPages-2+index : (currentPage-1+index))

                                return <li class={`paginate_item page-item ${currentPage === value ? 'active' : ''}`} onClick = {() => {
                                    if(currentPage !== value) setCurrentPage(value)
                                }}>
                                    <span class="paginate_button page-link">{value}</span>
                                </li>
                            })}
                            <li class={`paginate_item page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <span class="paginate_button next page-link" onClick={() => setCurrentPage(prev => prev+1)}>
                                    <span aria-hidden="true">Next</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}



export const SearchHeader = ({searchInput, setSearchInput, headerButtons, searchPlaceholder, downloadable}) => {
    return (
        <div class="card-header">
            <div class="row justify-content-between align-items-center no-gutters flex-grow-1">
                <div class="col-sm-6 col-md-3 mb-3 mb-sm-0">
                    <Search 
                        searchInput = {searchInput}
                        setSearchInput = {setSearchInput}
                        searchPlaceholder ={searchPlaceholder}
                    />
                </div>
                <div class='col'>
                    {headerButtons && headerButtons}
                </div>
                {downloadable && <div class="col-auto">
                    <div class="d-sm-flex justify-content-sm-end align-items-sm-center">
                        <Download />
                    </div>
                </div>}
            </div>
        </div>
    )
}


const Search = ({searchInput, setSearchInput, searchPlaceholder}) => {
    return (
        <div>
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
        </div>
    )
}


const Download = () => {
    return (
        <>
         <BigDropdown
            wrapperClassName = "btn-sm btn-white dropdown-toggle mr-2" 
            popoverClassName = "navbar-dropdown-account"
            popover = {<>
                <div class="">
                    <span class="dropdown-header">Download options</span>
                    <a id="export-excel" class="dropdown-item" href="javascript:;">
                        <img class="avatar avatar-xss avatar-4by3 mr-2" src="/assets/svg/brands/excel.svg" alt="" />
                        Excel
                    </a>
                    <a id="export-csv" class="dropdown-item" href="javascript:;">
                        <img class="avatar avatar-xss avatar-4by3 mr-2" src="/assets/svg/components/placeholder-csv-format.svg" alt="" />
                        .CSV
                    </a>
                    <a id="export-pdf" class="dropdown-item" href="javascript:;">
                        <img class="avatar avatar-xss avatar-4by3 mr-2" src="/assets/svg/brands/pdf.svg" alt="" />
                        PDF
                    </a>
                </div>
            </>}
            style = {{width: '16rem'}}
        >
            <i class="tio-download-to mr-1"></i> Export
        </BigDropdown>
        </>
    )
}



const RowSelectorCheckbox = ({value, setValue}) => {
    return(
        <td class="table-column-pr-0">
            <div class="custom-control custom-checkbox" onClick = {() => setValue()}>
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