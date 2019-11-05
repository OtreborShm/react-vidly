import React, { Component } from "react";
import Table from "./common/table";

class BoticasTable extends Component {
  columns = [
    { path: "Nombre", label: "Nombre" },
    { path: "Clave", label: "Clave" },
    { path: "FechaApertura", label: "FechaApertura" },
    { path: "Asesor.Nombre", label: "Asesor" }
  ];

  render() {
    const { boticas, onSort, sortColumn } = this.props;

    return (
      <Table
        data={boticas}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default BoticasTable;
