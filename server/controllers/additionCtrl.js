function sum(num1, num2) {
  return Number(num1) + Number(num2);
}

const toAdd = (req, res) => {
  const { number1, number2 } = req.body.params;
  // console.log(req.body.params.number1, req.body.params.number2);
  res.json(sum(number1, number2));
};

module.exports = {
  toAdd,
  sum,
};
