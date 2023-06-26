import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFilter, setCurrentPage } from '../redux/slices/filterSlice';

const Pagination: React.FC = () => {
    const dispatsch = useDispatch();
    const { currentPage } = useSelector(selectFilter);
  return (
    <div>
      <ul>
        <li>
            <button 
            disabled={currentPage===1}
            onClick={
                ()=>dispatsch(setCurrentPage(-1))}>
                &lt;
            </button>
        </li>
        <li>
            <button onClick={()=>dispatsch(setCurrentPage(1))}>
                1
            </button>
        </li>
        <li>
            <button onClick={()=>dispatsch(setCurrentPage(2))}>
                2
            </button>
        </li>
        <li>
            <button 
            disabled={currentPage=== 2}
            onClick={()=>dispatsch(setCurrentPage(+1))}>
                &gt;
            </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination;
