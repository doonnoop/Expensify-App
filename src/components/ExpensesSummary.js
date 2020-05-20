import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expense-total";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span>
          {expenseWord} totalling <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
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
