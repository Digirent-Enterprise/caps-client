import React, { useMemo } from "react";

import { IMessageProps } from "@/components/message/type";

const Component = React.memo((props: IMessageProps) => {
  const { message, sender } = props;
  const containerBySender = useMemo(() => {
    return sender === "next" ? "flex justify-end" : "flex justify-start";
  }, [sender]);

  const classBySender = useMemo(() => {
    return sender === "next"
      ? "relative max-w-xl px-4 py-2 text-gray-700 rounded shadow"
      : "relative max-w-xl px-4 py-2 text-gray-700 rounded shadow";
  }, [sender]);

  return (
    <li className={containerBySender}>
      <div className={classBySender}>
        <span className="block">{message}</span>
      </div>
    </li>
  );
});

export default Component;
