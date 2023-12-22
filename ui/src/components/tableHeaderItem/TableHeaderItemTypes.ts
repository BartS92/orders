import { Sort } from '../tableHeaders/TablerderHeaderTypes';

export type TableHeaderItemProps = {
    title: string,
    onHeaderClick: (sort: Sort) => void
}