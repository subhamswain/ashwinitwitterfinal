const dateArray = Array(31)
  .fill(0)
  .map((ele, index) => ele + index);
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "Auguest",
  "September",
  "October",
  "November",
  "December",
];
const yearArray = Array(150)
  .fill(1924)
  .map((year, index) => year + index);

module.exports = {
  dateArray,
  yearArray,
  monthArray,
};
