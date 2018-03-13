export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else {
        return expenses.reduce(function(x, y) {return x + y.amount}, 0);
    }
};