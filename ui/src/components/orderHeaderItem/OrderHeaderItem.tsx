import React, { useEffect, useState } from 'react';
import { OrderHeaderItemProps, Sort } from './OrderHeaderItemTypes';


const OrderHeaderItem = ({ title, key, onHeaderClick } : OrderHeaderItemProps) => {

    const [sort, setSort] = useState<Sort|undefined>(undefined);

    const getSortIcon = (sort?: Sort) => {
        switch (sort) {
            case Sort.Ascending:
                return <i className="fa fa-sort-up"/>
            case Sort.Descending:
                return <i className="fa fa-sort-down"/>
            default:
                return <i className="fa fa-sort"/>
        }
    }

    return (
        <div
            key={ key }
            className="px-2.5 flex-fixed-size flex-1 hover:cursor-pointer" onClick={ () => {
                let updSort;
            if (sort === Sort.Descending) {
                updSort = Sort.Ascending;
            }
            else if (sort === Sort.Ascending) {
                updSort = Sort.Descending;
            }
            else {
                updSort = Sort.Descending;
            }

            setSort(updSort);
            onHeaderClick(updSort);
        } }
        >{title}&#160;&#160;{getSortIcon(sort)}</div>
    );
};

export default OrderHeaderItem;
