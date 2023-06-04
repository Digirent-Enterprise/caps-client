import React from "react";

import { Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { IconEye, IconEdit, IconTrash } from "@tabler/icons-react";

import BaseAdminTable from "@/components/admin-management/base-admin-table";
import {
  StyledBadge,
  IconButton,
} from "@/components/admin-management/base-admin-table/utils";
import { usersData } from "@/components/admin-management/user-table/constant";
import { IUserType } from "@/components/admin-management/user-table/type";

const Component: React.FC = () => {
  const renderCell = (user: IUserType, columnKey: keyof IUserType) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user?.avatar} name={cellValue} css={{ p: 0 }}>
            {user?.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user?.status}>{cellValue}</StyledBadge>;
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user?.id)}>
                  <IconEye size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton>
                  <IconEdit size={20} fill="#979797" />
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
                  <IconTrash size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  return <BaseAdminTable items={usersData} renderCell={renderCell} />;
};

Component.displayName = "UserTable";
export default Component;
