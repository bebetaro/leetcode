function reformatDate(date: string): string {
  const arr = date.split(" ");
  let day = arr[0].replace(/[^0-9]/g, "");
  if (day.length === 1) {
    day = "0" + day;
  }
  const month = getMonth(arr[1]);
  const year = arr[2];
  return `${year}-${month}-${day}`;
}

const getMonth = (month: string) => {
  switch (month) {
    case "Jan":
      return "01";
    case "Feb":
      return "02";
    case "Mar":
      return "03";
    case "Apr":
      return "04";
    case "May":
      return "05";
    case "Jun":
      return "06";
    case "Jul":
      return "07";
    case "Aug":
      return "08";
    case "Sep":
      return "09";
    case "Oct":
      return "10";
    case "Nov":
      return "11";
    case "Dec":
      return "12";
    default:
      return "00";
  }
};
