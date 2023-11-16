
interface PaginationInterface {
    currentPage: number;
    totalPages: number;
    pagination: any;
}

export const Pagination: React.FC<PaginationInterface> = (props) => {
    // 
    const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    const tmpPage = props.currentPage;

    const displayedPageList = range(tmpPage - 2, tmpPage + 2, 1)
        .filter(num => num > 0 && num <= props.totalPages);
    console.log(displayedPageList);

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={() => props.pagination(1)}>
                    <button className="page-link">First Page</button>
                </li>

                {
                    displayedPageList.map(page => (
                        <li className="page-item" key={page} onClick={() => props.pagination(page)}>
                            <button className={"page-link " + (props.currentPage === page ? "active": "")}>{page}</button>
                        </li>
                    ))
                }

                <li className="page-item disabled"  onClick={() => props.pagination(props.totalPages)}>
                    <button className="page-link">Last Page</button>
                </li>
            </ul>
        </nav>
    )
}