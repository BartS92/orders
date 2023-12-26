import { getPages } from './PaginationUtils';
import { PaginationProps } from './PaginationProps';
import cx from 'classnames';

const Pagination = ({ordersCount, onPageChanged, currentPage}: PaginationProps) => {

    const handleClick = (event: React.SyntheticEvent, pageNum: number) => {
        event.preventDefault();
        onPageChanged(pageNum);
    }

    const generatePagesButtons = () => {
        const pages: JSX.Element[] = [];
        const arrayOfPages = getPages(ordersCount, currentPage);
        arrayOfPages.forEach((i) => {
            pages.push(
                <a href='#'
                   onClick={(event) => handleClick(event, i)}
                   key={i}
                   className={cx(
                       'w-10 h-10 rounded-md flex font-semibold justify-center items-center hover:bg-cyan-950 hover:text-white',
                       i === currentPage && 'bg-cyan-950  text-white hover:bg-cyan-850'
                   )}
                >
                    { i }
                </a>)
        })

        return pages;
    }

    return (
        <div className='flex justify-center gap-2'>
            { generatePagesButtons().map(button => button) }
        </div>
    )

}

export default  Pagination;