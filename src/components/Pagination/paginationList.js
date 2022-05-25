import { useTransition } from "react";
import ReactPaginate from "react-paginate";
/* Styles */
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import "./paginationList.css";

export const PaginationList = ({ setPageOffset, count, offset }) => {
  const [isPending, startTransition] = useTransition();

  const handleNext = (event) => {
    startTransition(() => {
      setPageOffset(event.selected);
      window.scrollTo(0, 0);
    });
  };

  return (
    <div className="paginate-wrap">
      <ReactPaginate
        previousLabel={<ArrowBackIosRounded />}
        nextLabel={<ArrowForwardIosRounded />}
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
