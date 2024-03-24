import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Pagination = () => {
  const {page,handlepage,totalPages}=useContext(Appcontext);
  return (
    <div>
        <div>
          { page >1 &&
            (<button onClick={()=>handlepage(page-1)}> 
              Previous
            </button>)
          }
          { page<totalPages &&
            (<button onClick={()=>handlepage(page+1)} >
              Next
            </button>)
          }
          <p>
            Page {page} of {totalPages}
          </p>
        </div>
    </div>
  )
}

export default Pagination