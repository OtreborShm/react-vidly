import React, { Component } from "react";
import { getBoticas } from "./../services/fakeBoticasService";
import BoticasTable from "./boticasTable";
import Pagination from "./common/pagination";
import { paginate } from "./../utils/paginate";
import _ from "lodash";

class Boticas extends Component {
  state = {
    boticas: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "Nombre", order: "asc" }
  };

  componentDidMount() {
    this.setState({ boticas: getBoticas() });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      boticas: allBoticas
    } = this.state;

    const sorted = _.orderBy(allBoticas, [sortColumn.path], [sortColumn.order]);

    let boticas = paginate(sorted, currentPage, pageSize);

    return { totalCount: sorted.length, data: boticas };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: boticas } = this.getPagedData();

    return (
      <div className="row">
        <BoticasTable
          boticas={boticas}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Boticas;
