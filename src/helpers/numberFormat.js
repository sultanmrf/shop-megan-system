/*
 * work: خروجی دادن اعداد با رقم اعشار 3
 */
export function numberFormat(value){
    return new Intl.NumberFormat('en-US').format(value);
}