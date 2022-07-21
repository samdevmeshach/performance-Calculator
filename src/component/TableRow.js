import React from 'react'

const TableRow = ({data}) => {
  return (
    <>
        <tr>
            <td>{data.formfactor}</td>
            <td className='url'>{data.url}</td>
            <td style={{backgroundColor:`${data.lcpPreviousColor}`}}>{data.plcp}</td>  
            <td style={{backgroundColor:`${data.lcpCurrentColor}`}}>{data.clcp}</td>
            <td style={{backgroundColor:`${data.clsPreviousColor}`}}>{data.pcls}</td>  
            <td style={{backgroundColor:`${data.clsCurrentColor}`}}>{data.ccls}</td>
            <td>{data.pperformance}</td>
            <td style={{backgroundColor:`${data.performanceColor}`}}>{data.cperformance}</td>  
            <td>{data.pseo}</td>
            <td style={{backgroundColor:`${data.seoColour}`}}>{data.cseo}</td>    
            <td>{data.paccessibility}</td>  
            <td style={{backgroundColor:`${data.accessibilityColor}`}}>{data.caccessibility}</td>
            <td>{data.pbestPractices}</td>  
            <td style={{backgroundColor:`${data.bestPracticesColor}`}}>{data.cbestPractices}</td>
        </tr>
    </>
  )
}

export default TableRow