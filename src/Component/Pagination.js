import React from 'react'

const Pagination = ({ currentListLength, totalChar, paginate, lastIndex }) => {

    const pageNumber = [];
    const limitPage = Math.ceil(totalChar / currentListLength)
    for (let i = 1; i <= limitPage; i++) {
        pageNumber.push(i);
        
    }

    return (
        <div>
            {
                pageNumber.map((pageNo) => {
                    return (
                        <button
                            key={pageNo}
                            className="btn btn-primary m-2"
                            onClick={() => paginate(pageNo)}
                        >{pageNo}</button>
                    )
                })
            }
        </div>
    )
}

export default Pagination
