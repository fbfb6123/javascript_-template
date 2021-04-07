// %を求める関数

const percentage = () => {
  if (incomeTotal >= 1) {
    return `${Math.round((expenseTotal / incomeTotal) * 100)} %`;
  } else {
    return '---';
  }
};

<div className="totalPercentage">{percentage()}</div>