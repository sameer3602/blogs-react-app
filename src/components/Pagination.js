import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import "./Button.css"
const Pagination = () => {
  const {page,handlepage,totalPages}=useContext(Appcontext);
  return (
    <div className='PaginationDiv'>
        <div className='prevnextDiv'>
          { page >1 &&
            (<button onClick={()=>handlepage(page-1)} className='prevbtn button-30'> 
              Previous
            </button>)
          }
          { page<totalPages &&
            (<button onClick={()=>handlepage(page+1)} className='nextbtn button-30' >
              Next
            </button>)
          }
          <p className='PageCount'>
            Page {page} of {totalPages}
          </p>
        </div>
    </div>
  )
}

export default Pagination