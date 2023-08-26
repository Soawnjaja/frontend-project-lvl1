const randomMathOperator = () => {
    const operatorArr = ["+", "-", "*"];
    const randomIndex = Math.floor(Math.random(1) * operatorArr.length);
    return operatorArr[randomIndex];
}
export default randomMathOperator;