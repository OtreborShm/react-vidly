import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount: count, currentPage, pageSize, onPageChange } = props;
  const pagesNumber = Math.ceil(count / pageSize);

  if (pagesNumber === 1) return null;

  const pages = _.range(1, pagesNumber + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
