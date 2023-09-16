import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { HttpResponse } from "@/types/enum/http-response";

export default async function protectedRoute(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });

  if (!session) {
    return res
      .status(HttpResponse.UNAUTHORIZED)
      .json({ error: "Unauthorized" });
  }

  res.status(HttpResponse.OK).json({ message: "This is a protected route" });
}
