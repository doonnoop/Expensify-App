import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expense-total";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visableExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visableExpenses.length,
    expensesTotal: getExpensesTotal(visableExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);