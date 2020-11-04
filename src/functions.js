const getShortTitleString = (date, locales, componentDate) => {
  let options = {};
  options[componentDate] = "short";

  let title = date.toLocaleDateString(locales, options);

  return title;
};

export const initCalendar = (year) => {
  const numberMonths = 12;
  const locales = "en-GB";
  let calendar = { year: year, months: [] };

  for (let i = 1; i <= numberMonths; i++) {
    const date = new Date(year, i, 0);
    const daysMonth = date.getDate();

    const days = [];

    for (let j = 1; j <= daysMonth; j++) {
      const date = new Date(year, i - 1, j);
      const day = {
        weekday: getShortTitleString(date, locales, "weekday"),
      };
      days.push(day);
    }

    const month = {
      titleMonth: getShortTitleString(date, locales, "month"),
      days: days,
    };
    calendar.months.push(month);
  }
  return calendar;
};
