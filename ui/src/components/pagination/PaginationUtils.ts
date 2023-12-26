export const PAGINATION_PAGE_SIZE = 5;
export const MAX_PAGES_TO_SHOW = 5;

export const getPagesCount = (totalAmount:number) => {
    return Math.ceil(totalAmount / PAGINATION_PAGE_SIZE);
}

export const getPages = (
    totalItems: number,
    currentPage: number,
    pageSize: number = PAGINATION_PAGE_SIZE,
    maxPages: number = MAX_PAGES_TO_SHOW
) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= maxPages) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    return Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
}