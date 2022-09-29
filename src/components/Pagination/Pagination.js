//React
import { useState } from 'react'

//CSS
import './Pagination.css'

export default function Pagination(props) {
    const {totalOffer, offersPerPage, paginate,currentPage} = props
    const pageNumber = []
    const [isActive,setIsActive] = useState(false)

    //create the right number of pages in relation to the number of offers
    for(let i = 1; i <= Math.ceil(totalOffer / offersPerPage);i++){
        pageNumber.push(i)
    }

    const toggleClass = (number) => {
        
    };
    

    

    return (
        <div className="pagination">
            {pageNumber.map(number=>(
                <p onClick={()=> {paginate(number)}} 
                className={`${currentPage === number ? "active" : ""}`}
                                key={number}>
                                {number}
                                </p>
            ))}            
        </div>
    )
}
