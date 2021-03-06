import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createAt: moment(0).valueOf(),
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 19500,
    createAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createAt: moment(0).add(4, "days").valueOf(),
  },
];

export default expenses;
