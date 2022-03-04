import React, { useEffect } from 'react'
import PriceBox from 'components/dashboard/PriceBox';
import ReviewTable from 'components/table/ReviewTable';
import { isMobile } from 'react-device-detect';

const Dashboard = ({menuCollapse}) => {
  
  const priceList = [
    {pending:26, approved:26, denied:26, canceled:26},
    {pending:26, replied:26},
    {pending:26, replied:26},
  ];

  const tableData = [
    {id:1, user: "Angel harvey1", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Approved" },
    {id:2, user: "Angel harvey2", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Check" },
    {id:3, user: "Angel harvey3", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:4, user: "Angel harvey4", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:5, user: "Angel harvey5", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:6, user: "Angel harvey6", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:7, user: "Angel harvey7", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:8, user: "Angel harvey8", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:9, user: "Angel harvey9", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:10, user: "Angel harvey10", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:11, user: "Angel harvey11", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:12, user: "Angel harvey12", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:13, user: "Angel harvey13", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:14, user: "Angel harvey14", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:15, user: "Angel harvey15", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:16, user: "Angel harvey16", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:17, user: "Angel harvey17", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:18, user: "Angel harvey18", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:19, user: "Angel harvey19", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
    {id:20, user: "Angel harvey20", phone: "601-609-9876", invoice_number: "4545454", amount: "$5600.00", supplier: "Jackson", customer: "Melvin D Diaz", created_at: "2/18/2022 2:00:29 PM", status: "Cancel" },
  ];

  useEffect(() => {
    if (isMobile) console.log("mobile");
  }, [isMobile]);

  return (
    <div className="main-dashboard" style={{paddingLeft:((menuCollapse || isMobile) ? "80px" : "220px")}}>
      <div className='price-box-group'>
        <PriceBox priceValue={priceList[0]} title="Invoice Approvals" />
        <PriceBox priceValue={priceList[1]} title="Enrollment Request" />
        <PriceBox priceValue={priceList[2]} title="Payment Request" />
      </div>
      <div className='contents'>
        <ReviewTable tableData={tableData} />
      </div>
    </div>
  )
}

export default Dashboard;