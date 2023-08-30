import React, { memo, useEffect } from "react";

import { IUserDiscussionBasicInfo } from "@/components/discussion-user-basic-info/type";
import useUser from "@/hooks/user/useUser";

const Component = memo((props: IUserDiscussionBasicInfo) => {
  const { userId } = props;
  const { getUserById } = useUser();
  useEffect(() => {
    console.log("user id", userId);
    getUserById(userId);
  }, [userId]);
  return (
    <div className="flex flex-col gap-1">
      <div className="text-md font-semibold">2. User Basic Information</div>
      <div className="text-sm font-semibold text-gray-500">
        Cannot find data for this session right now
      </div>
    </div>
  );
});
Component.displayName = "DiscussionUserBasicInfo";
export default Component;
