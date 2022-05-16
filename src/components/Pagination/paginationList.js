import ReactPaginate from "react-paginate";
/* Styles */
import "./paginationList.css";

export const PaginationList = ({ setPageOffset, count, offset }) => {
  const handleNext = (event) => setPageOffset(event.selected);

  return (
    <div className="paginate-wrap">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={count}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleNext}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={offset}
      />
    </div>
  );
};
