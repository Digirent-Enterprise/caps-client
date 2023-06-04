import React from "react";

export interface IBaseAdminTableProps<T> {
  items: T[];
  renderCell: (item: T, columnKey: any) => any;
}
