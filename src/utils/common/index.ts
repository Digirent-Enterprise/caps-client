import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Etc/UTC");

export const formatDateTime = (dateTimeStr: string) => {
  try {
    const dateTime = new Date(dateTimeStr);
    const day = dateTime.getUTCDate().toString().padStart(2, "0");
    const month = (dateTime.getUTCMonth() + 1).toString().padStart(2, "0");
    const hour = dateTime.getUTCHours().toString().padStart(2, "0");
    const minute = dateTime.getUTCMinutes().toString().padStart(2, "0");

    return `${day}/${month} ${hour}:${minute}`;
  } catch (error) {
    // If the input string is not in the expected format, return null
    return "";
  }
};

export const formatDateAndMonth = (dateTimeStr: string) => {
  try {
    const dateTime = new Date(dateTimeStr);
    const day = dateTime.getUTCDate().toString().padStart(2, "0");
    const month = (dateTime.getUTCMonth() + 1).toString().padStart(2, "0");

    return `${day}/${month} `;
  } catch (error) {
    // If the input string is not in the expected format, return null
    return "";
  }
};

export const formatDate = (dateString: string) => {
  return dayjs(dateString).format("MMMM D, YYYY");
};

export const convertUrlToTitle = (url: string) => {
  const trimmedUrl = url.replace(/^\//, "");

  const segments = trimmedUrl.split("/");

  const lastSegment = segments[segments.length - 1];
  return lastSegment.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
};
