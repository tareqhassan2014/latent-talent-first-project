export const lineChartData = {
  day: {
    categories: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
    series: [
      {
        name: "Revenue",
        data: [
          14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25, 14, 15, 10, 15, 17,
          19, 25, 27, 10, 19, 20, 25,
        ],
      },
      {
        name: "Sales",
        data: [
          34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35, 34, 25, 30, 25, 37,
          29, 35, 47, 40, 32, 29, 35,
        ],
      },
    ],
  },
  week: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
    series: [
      { name: "Revenue", data: [15, 10, 15, 17, 19, 25, 27] },
      { name: "Sales", data: [34, 25, 30, 25, 37, 29, 35] },
    ],
  },
  month: {
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    series: [
      {
        name: "Revenue",
        data: [14, 15, 10, 15, 17, 19, 25, 27, 10, 19, 20, 25],
      },
      {
        name: "Sales",
        data: [34, 25, 30, 25, 37, 29, 35, 47, 40, 32, 29, 35],
      },
    ],
  },
};
