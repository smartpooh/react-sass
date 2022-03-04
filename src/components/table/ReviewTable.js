import React, {useState } from 'react'
import PageNation from './PageNation';

const ReviewTable = ({tableData}) => {
  
  const [totalCount, setTotalPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewCount, setViewCount] = useState(5);
  
  return (
    <div>
      <h2>My Reviews</h2>
      <div className='table-actions'>
        <div className='filter'>
          <form className='filter-form'>
            <PageNation 
              totalCount={totalCount} 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              viewCount={viewCount}
              setViewCount={setViewCount}
            />
          </form>
        </div>

      </div>
      <div className="responsive-table">
        <table style={{width:"100%"}} id="table-to-xls">
          <thead>
            <tr className="border_bottom">
              <th>#</th>
              <th>User</th>
              <th>Phone</th>
              <th>Invoice Number</th>
              <th>Amount($)</th>
              <th>Supplier</th>
              <th>Customer</th>
              <th>Date Created</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.filter((el, index) => ((index + 1 > (currentPage-1) * viewCount) && (index + 1 <= currentPage * viewCount)) ).map((record, index)=>(
              <tr key={record.id}>
                <td>{index+1 + (currentPage - 1)*viewCount }</td>
                <td>{record.user}</td>
                <td>{record.phone}</td>
                <td>{record.invoice_number}</td>
                <td>{record.amount}</td>
                <td>{record.supplier}</td>
                <td>{record.customer}</td>
                <td>{record.created_at}</td>
                <td><span className={`status status-${  record.status}`}>{record.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default ReviewTable;