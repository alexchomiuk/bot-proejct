/**
 * jesli string "data" jest poprawny, zwraca koordynaty jako obiekt z x i y jako liczby float. Jesli jest niepoprawny
 * string zwraca null, wiec trzeba to sprawdzac ifem
 * @param data
 * @returns {null|{x: number, y: number}}
 */
function getCoordinates(data) {
    data = data.replace(/\s/g, '');
    const resp = /(\d{2})\.(\d{2}),(\d{2})\.(\d{2})/.exec(data);
    if (null != resp) {
        return {
            x: parseFloat(resp[1] + '.' + resp[2]),
            y: parseFloat(resp[3] + '.' + resp[4])
        };
    } else {
        return null;
    }
}
//przyklady:
//const getCoordinates = require('./helper').getCoordinates;
// console.log(getCoordinates('  10.00, 20.00  '));
// console.log(getCoordinates('45.54,12.34'));
// console.log(getCoordinates('  302g3 '));

module.exports = {getCoordinates};
