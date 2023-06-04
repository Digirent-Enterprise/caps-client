import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Etc/UTC");

export const formatDate = (dateString: string) => {
  return dayjs(dateString).format("MMMM D, YYYY");
};
