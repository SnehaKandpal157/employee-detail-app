import React from 'react'

const Table = ({ dataArray }) => {
  return (
    <div className="table-outer-wrap">
    <div className="table-inner-wrap">
      <table>
        <thead>
        <tr>
          <th>S No.</th>
          <th>Employee Name</th>
          <th>Salary</th>
          <th>Age</th>
          <th>Image</th>

        </tr>
        </thead>
        <tbody>
        {dataArray && dataArray.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data.employee_name}</td>
              <td>{data.salary}</td>
              <td>{data.age}</td>
              <td><img className="employee-img" src={data.image} alt="emp-img"/></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Table
