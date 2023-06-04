import React, { Fragment } from "react";

import { Table } from "@nextui-org/react";

import { IBaseAdminTableProps } from "@/components/admin-management/base-admin-table/type";
import { columns } from "@/components/admin-management/base-admin-table/utils";

const Component = <T extends { id?: string | number }>({
  items,
  renderCell,
}: IBaseAdminTableProps<T>) => {
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={items}>
        {(item: T) => (
          <Table.Row key={item.id}>
            {(columnKey) => (
              <Fragment key={columnKey}>
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              </Fragment>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

Component.displayName = "BaseAdminTable";
export default Component;
