import React from 'react';
import TableHeaderItem from '../tableHeaderItem/TableHeaderItem';
import { TableHeaderProps } from './TablerderHeaderTypes';


const TableHeaders = ({ cells, onHeaderClick } : TableHeaderProps) => {



    return (
        <div className="w-full flex flex-col flex-nowrap rounded-md overflow-hidden flex-fixed-size font- mt-4 mb-4">
            <div className="flex flex-nowrap justify-start align-baseline bg-primary-300 px-5 py-2 text-sm">
                { cells
                    .map(
                        (cell, index) => (
                            <TableHeaderItem key={'header'+index} title={cell.title} onHeaderClick={onHeaderClick(cell.sort)} />
                        )
                    )}
            </div>
        </div>
    );
};

export default TableHeaders;
