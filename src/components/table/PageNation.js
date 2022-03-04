import React from 'react';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PageNation = ({totalCount, currentPage, setCurrentPage, viewCount, setViewCount}) => {

  const onClick = (value) => {

    let nextPage = currentPage + value;
    
    if(value === 2) {
      setCurrentPage(Math.floor((totalCount-1)/viewCount) + 1);
      return ;
    }
    if(value === -2) {
      setCurrentPage(1);
      return ;
    }

    if(nextPage < 1) nextPage = 1;
    if(nextPage > (Math.floor((totalCount-1)/viewCount)) + 1) 
      nextPage = Math.floor((totalCount-1)/viewCount) + 1;
    setCurrentPage(nextPage);
  }

  const onViewSelectEvent = (evt) => {
    if(viewCount !== evt.target.value) setCurrentPage(1);
    setViewCount(evt.target.value);
  }

  return (
    <>
      <div className='pagination'>
        <div className='filter-group filter-group1'>
          <div className='filter-search'>
            <select name="search">
              <option value="-1">All</option>
            </select>
          </div>
          <div className='view-number'>
            <span className='label'>Showing Results</span>
            <select name="search" onChange={onViewSelectEvent}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="1000000">All</option>
            </select>
          </div>
        </div>

        <div className='filter-group filter-group2'>
          <div className='paging-btns'>
            <button className='action-btn' type='button' onClick={()=> onClick(-2)}><BsChevronDoubleLeft /></button>
            <button className='action-btn' type='button' onClick={()=> onClick(-1)}><BsChevronLeft /></button>

            <span className='page-numbers'>
              {(currentPage-1) * viewCount + 1}
              -
              {totalCount < currentPage * viewCount ? totalCount : currentPage * viewCount}
              {' '}
              of
              {' '}
              {totalCount}
            </span>

            <button className='action-btn' type='button' onClick={()=> onClick(1)}><BsChevronRight /></button>
            <button className='action-btn' type='button' onClick={()=> onClick(2)}><BsChevronDoubleRight /></button>

          </div>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-btn download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Export"
          />
        </div>
      </div>
    </>
  )
}


export default PageNation;