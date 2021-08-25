export const formatDate = (date) => {
  return new Date(date).toLocaleString("en-AU", {
    weekday: "short",
    day: "numeric",
    year: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

export const getFiveWords = (str) => {
  return str.split(/\s+/).slice(0, 7).join(" ") + " ...";
};
