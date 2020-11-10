const getShortTitleString = (date, locales, componentDate) => {
  let options = {};
  options[componentDate] = "short";

  let title = date.toLocaleDateString(locales, options);

  return title;
};

export const initCalendar = (currentYear, currentMonth) => {
  const numberMonths = 12;
  const locales = "en-GB";
  let calendar = { currentYear, currentMonth, months: [] };

  for (let i = 1; i <= numberMonths; i++) {
    const date = new Date(currentYear, i, 0);
    const daysMonth = date.getDate();
    const days = [];

    for (let j = 1; j <= daysMonth; j++) {
      const date = new Date(currentYear, i - 1, j);
      const day = {
        weekday: getShortTitleString(date, locales, "weekday"),
      };
      days.push(day);
    }

    const month = {
      titleMonth: getShortTitleString(date, locales, "month"),
      isCurrent: false,
      days: days,
    };

    if (currentMonth + 1 === i) {
      month.isCurrent = true;
    }

    calendar.months.push(month);
  }
  return calendar;
};
