const getShortTitleString = (date, locales, componentDate) => {
  let options = {};
  options[componentDate] = "short";

  let title = date.toLocaleDateString(locales, options);

  return title;
};

export const initCalendar = (year) => {
  const numberMonths = 12;
  const locales = "en-GB";

  const calendar = { year, months: [] };

  for (let i = 1; i <= numberMonths; i++) {
    const date = new Date(year, i, 0);
    const daysMonth = date.getDate();
    const days = [];

    for (let j = 1; j <= daysMonth; j++) {
      const date = new Date(year, i - 1, j);
      const day = getShortTitleString(date, locales, "weekday");
      days.push(day);
    }

    const month = {
      titleMonth: getShortTitleString(date, locales, "month"),
      isSelected: false,
      days: days,
    };

    if (new Date().getMonth() + 1 === i && new Date().getFullYear() === year) {
      month.isSelected = true;
    }

    calendar.months.push(month);
  }
  return calendar;
};

export const deepCopy = (array) => {
  return JSON.parse(JSON.stringify(array));
};
