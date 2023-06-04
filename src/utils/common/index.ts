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
