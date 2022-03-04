import React from 'react'

const PriceBox = ({priceValue, title}) => {
  
  return (
      <div className='price-box'>
        <div className='icon-img'>
          {title == "Invoice Approvals" && 
            <img src='/image/priceBox/InvoiceApprovals.png'></img>
          }
          {title == "Enrollment Request" && 
            <img src='/image/priceBox/EnrollmentRequest.png'></img>
          }
          {title == "Payment Request" && 
            <img src='/image/priceBox/PaymentRequest.png'></img>
          }
        </div>
        <div>
          <div className='compare-prev'>
            <span>+55%</span> than last week
          </div>

          <div className='total-price'>
            {title}<br/>
            <span>281</span>
          </div>

        </div>
        <hr/>
        <div className='price-detail'>
          <ul>
            {priceValue.pending && 
              <li>
                <p>Pending</p>
                {priceValue.pending}
              </li>
            }
            {priceValue.approved && 
              <li>
                <p>Approved</p>
                {priceValue.approved}
              </li>
            }
            {priceValue.denied && 
              <li>
                <p>Denied</p>
                {priceValue.denied}
              </li>
            }
            {priceValue.canceled && 
              <li>
                <p>Canceled</p>
                {priceValue.canceled}
              </li>
            }
            {priceValue.replied && 
              <li>
                <p>Replied</p>
                {priceValue.replied}
              </li>
            }
          </ul>
        </div>
      </div>
  )
}

export default PriceBox;