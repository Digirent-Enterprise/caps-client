import { Col, Row, Table, Tooltip, User } from "@nextui-org/react";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";

import {
  columns,
  IconButton,
  StyledBadge,
} from "@/components/admin-management/user-table/constant";
import useUser from "@/hooks/user/useUser";
import { IUser } from "@/types/context/with-auth-context";

const Component = () => {
  const { allUsers } = useUser();

  const renderCell = (user: IUser, columnKey: React.Key) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user?.avatar} name={cellValue} css={{ p: 0 }}>
            {user?.email}
          </User>
        );
      case "role":
        return <StyledBadge role={user?.role}>{cellValue}</StyledBadge>;
      case "status":
        return <StyledBadge status={user?.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user?.id)}>
                  <IconEye size={20} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user?.id)}>
                  <IconPencil size={20} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user?.id)}
              >
                <IconButton>
                  <IconTrash size={20} />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="User Table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="single"
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
      <Table.Body items={allUsers}>
        {(item: IUser) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

Component.displayName = "UserTable";
export default Component;
