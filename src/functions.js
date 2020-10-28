export const initCalendar = (year) => {
  const numberOfMonth = 12;
  let calendar = [];

  for (let i = 1; i <= numberOfMonth; i++) {
    const date = new Date(year, i, 0);
    let options = {
      //   weekday: "short",
      //   year: "numeric",
      month: "short",
      //   day: "numeric",
    };
    let days = [];
    const daysOfMonth = date.getDate();

    for (let i = 1; i <= daysOfMonth; i++) {
      const day = i;
      days.push({ day: day, isChecked: false });
    }
    let month = {
      titleOfMonth: date.toLocaleDateString("en-GB", options),
      numeric: i,
      days: days,
    };
    calendar.push(month);
  }
  return calendar;
};
