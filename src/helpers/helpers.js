const getCurrentCurrency = (res) => {
    const arr = [];
    const showCurrencyArr = ['USD', 'EUR'];

    for (let i = 0; i < res.length; i += 1) {
        for (let j = 0; j < showCurrencyArr.length; j += 1) {
            if (showCurrencyArr[j] === res[i].cc) {
                arr.push(res[i]);
            }
        }
    }
    return arr;
};


export default getCurrentCurrency;