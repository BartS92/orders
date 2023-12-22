
import { useState } from 'react';
import { FilterProps } from './FilterTypes';

const  Filter = (props: FilterProps) => {
    const [filter, setFilter] = useState<string>();

  return (
    <div className='w-[265px] h-[40px] bg-[#EFEFEF] float-right opacity-1' placeholder='Search'>
      <i className="fa fa-search text-[#8E8E8E] text-l m-3"/>
      <input placeholder='Search' className='w-[200px] bg-[#EFEFEF] border-0 focus:outline-none' onChange={(e) => {props.onFilterChange(e.currentTarget.value)}}/>
    </div>
  );
}

export default Filter;
