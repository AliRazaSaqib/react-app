import dayjs from "dayjs";

export const formatTimestamp = (timestamp: string): string => {
  return dayjs(timestamp).format("dddd DD MMMM, YYYY");
};
