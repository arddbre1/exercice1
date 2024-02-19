interface DateObject {
  startDate: string;
  endDate: string;
}

function extractDates(customer: {
  ListOfPeriods?: string;
}): DateObject[] | string[] {
  const listOfPeriods = customer.ListOfPeriods?.trim();

  if (!listOfPeriods || listOfPeriods === 'NUlL') {
    return [];
  }

  const periods = listOfPeriods.split('|').map((period) => period.trim());

  const dates: DateObject[] = [];

  for (const period of periods) {
    const [startDate, endDate] = period.split('-').map((date) => date.trim());
    if (startDate.length !== 10 || endDate.length !== 10) {
      return ['string length is invalid'];
    }
    dates.push({ startDate, endDate });
  }

  return dates;
}

export default extractDates;
