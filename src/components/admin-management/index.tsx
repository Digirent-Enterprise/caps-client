import InquiryTable from "@/components/admin-management/inquiry-table";
import UserTable from "@/components/admin-management/user-table";

const Component = () => {
  return (
    <>
      <UserTable />
      <InquiryTable />
    </>
  );
};

Component.displayName = "AdminManagement";
export default Component;
