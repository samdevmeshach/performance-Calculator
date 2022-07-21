import React from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'


const Table = ({data,filter}) => {


    const tableData = () => {
        return(
            data.map((e,i) => {
                if(filter){
                    if(filter.length === 0 || filter.length === 2){
                        return(
                            <TableRow data={e} key={i} />
                        )
                    }else if(filter.includes(e.formfactor)){
                        return(
                            <TableRow data={e} key={i} />
                        )
                    }
                }
            })
        )
    }



    return ( 
        <div>
        {    
            data.length ? 
            (
                <table className="table table-bordered m-5">
                    <TableHead />
                    <tbody> 
                        {tableData()}
                    </tbody>
                </table>
            ) : 
            (
                <table className="table table-bordered nodata">
                    <TableHead />
                    <tbody> 
                        <tr>
                            <td colSpan="14" style={{color:"red"}}>No Data</td>     
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Table