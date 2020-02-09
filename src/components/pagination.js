import React from "react";
import { PaginationWrapper, PageLink } from "../themes/pagination";

const Pagination = props => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(props.total / props.postPerPage); i++) {
    pages.push(i);
  }
  return (
    <PaginationWrapper className="col-10">
      {pages.map(n => (
        <PageLink onClick={() => props.paginate(n)} key={n}>
          {n}
        </PageLink>
      ))}
    </PaginationWrapper>
  );
};
export default Pagination;
