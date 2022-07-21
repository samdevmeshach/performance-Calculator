import React from 'react'

const TableHead = () => {
  return (
    <>
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
    </>
  )
}

export default TableHead