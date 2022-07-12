import React from 'react'

const Table = ({data,filter}) => {
    return ( 
    <div>
    {    data.length ? (
                <table className="table table-bordered m-5">
                    <thead>
                        <tr>
                            <th colSpan="2"></th> 
                            <th colSpan="2">LCP</th> 
                            <th colSpan="2">CLS</th> 
                            <th colSpan="2">Performance</th> 
                            <th colSpan="2">SEO</th> 
                            <th colSpan="2">Accessibility</th> 
                            <th colSpan="2">BestPractices</th> 
                        </tr>
                        <tr>
                            <th scope="col">FormFactor</th>
                            <th scope="col">URL</th>
                            <th scope="col">Previous</th>
                            <th scope="col">Current</th>
                            <th scope="col">Previous</th>
                            <th scope="col">Current</th>
                            <th scope="col">Previous</th>
                            <th scope="col">Current</th>
                            <th scope="col">Previous</th>
                            <th scope="col">Current</th>
                            <th scope="col">Previous</th>
                            <th scope="col">Current</th>
                            <th scope="col">Previous</th>
                            <th scope="col">Current</th>
                        </tr>
                    </thead>
                    <tbody> 
                        { data.map((e,i) => { 
                            if(filter){
                                if(filter.length == 0 || filter.length == 2){
                                    return(
                                        <tr key={i}>
                                            <td>{e.formfactor}</td>
                                            <td className='url'>{e.url}</td>
                                            <td style={{backgroundColor:`${e.lcpPreviousColor}`}}>{e.plcp}</td>  
                                            <td style={{backgroundColor:`${e.lcpCurrentColor}`}}>{e.clcp}</td>  
                                            <td style={{backgroundColor:`${e.clsPreviousColor}`}}>{e.pcls}</td>  
                                            <td style={{backgroundColor:`${e.clsCurrentColor}`}}>{e.ccls}</td>
                                            <td>{e.pperformance}</td>
                                            <td style={{backgroundColor:`${e.performanceColor}`}}>{e.cperformance}</td>  
                                            <td>{e.pseo}</td>
                                            <td style={{backgroundColor:`${e.seoColour}`}}>{e.cseo}</td>    
                                            <td>{e.paccessibility}</td>  
                                            <td style={{backgroundColor:`${e.accessibilityColor}`}}>{e.caccessibility}</td>
                                            <td>{e.pbestPractices}</td>  
                                            <td style={{backgroundColor:`${e.bestPracticesColor}`}}>{e.cbestPractices}</td>
                                        </tr>
                                    )
                                }else if(filter.includes(e.formfactor)){
                                    return(
                                        <tr key={i}>
                                        <td>{e.formfactor}</td>
                                        <td className='url'>{e.url}</td>
                                        <td style={{backgroundColor:`${e.lcpPreviousColor}`}}>{e.plcp}</td>  
                                        <td style={{backgroundColor:`${e.lcpCurrentColor}`}}>{e.clcp}</td>
                                        <td style={{backgroundColor:`${e.clsPreviousColor}`}}>{e.pcls}</td>  
                                        <td style={{backgroundColor:`${e.clsCurrentColor}`}}>{e.ccls}</td>
                                        <td>{e.pperformance}</td>
                                        <td style={{backgroundColor:`${e.performanceColor}`}}>{e.cperformance}</td>  
                                        <td>{e.pseo}</td>
                                        <td style={{backgroundColor:`${e.seoColour}`}}>{e.cseo}</td>    
                                        <td>{e.paccessibility}</td>  
                                        <td style={{backgroundColor:`${e.accessibilityColor}`}}>{e.caccessibility}</td>
                                        <td>{e.pbestPractices}</td>  
                                        <td style={{backgroundColor:`${e.bestPracticesColor}`}}>{e.cbestPractices}</td>
                                    </tr>
                                    )
                                }
                            }
                        })}
                    </tbody>
                </table>
        ) : 
        (
            <table className="table table-bordered nodata">
                <thead>
                    <tr>
                        <th colSpan="2"></th> 
                        <th colSpan="2">LCP</th> 
                        <th colSpan="2">CLS</th> 
                        <th colSpan="2">Performance</th> 
                        <th colSpan="2">SEO</th> 
                        <th colSpan="2">Accessibility</th> 
                        <th colSpan="2">BestPractices</th> 
                    </tr>
                    <tr>
                        <th scope="col">FormFactor</th>
                        <th scope="col">URL</th>
                        <th scope="col">Previous</th>
                        <th scope="col">Current</th>
                        <th scope="col">Previous</th>
                        <th scope="col">Current</th>
                        <th scope="col">Previous</th>
                        <th scope="col">Current</th>
                        <th scope="col">Previous</th>
                        <th scope="col">Current</th>
                        <th scope="col">Previous</th>
                        <th scope="col">Current</th>
                        <th scope="col">Previous</th>
                        <th scope="col">Current</th>
                    </tr>
                </thead>
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