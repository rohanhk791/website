import React from "react"
import dept1 from './detailsv1.json'

function Display()
{
  const disp =dept1.map(
    (records) => {
     return (
       <tr>
         <td>{records.NO}</td>
         <td>{records.Name}</td>
         <td>{records.Loan}</td>
         <td>{records.period_of_years}</td>
         <td>{records.interest_rate}</td>
       </tr>

      )
    }
  )
return(
  <div>
    <table class = "table table-striped">
    <thead>
      <tr>
        <th>NO</th>
        <th>Name</th>
        <th>Loan</th>
        <th>Period_of_years</th>
        <th>Interest_rate</th>
      </tr>
    </thead>
    <tbody>
      {disp}
    </tbody>
    </table>
  </div>
)

}

export default Display;