import { Sort } from '../tableHeaders/TablerderHeaderTypes';

export type TableHeaderItemProps = {
    title: string,
    key: any,
    onHeaderClick: (sort: Sort) => void
}