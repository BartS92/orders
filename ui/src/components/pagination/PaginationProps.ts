

export type PaginationProps = {
    ordersCount: number,
    onPageChanged: (currentPage: number) => void,
    currentPage: number
}