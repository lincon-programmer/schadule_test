const moment = require('moment');
const schaduleAction = require('./schadule');

var year = moment().format('YYYY');
var month = moment().format('MM');
var day = moment().format('DD');

year = Number(year);
month = Number(month);
month = month - 1;
day = Number(day);

var dt;
var obj = {
    dia: 'HOJE',
    list:[
        'M5;EURGBP;CALL;02:10',
        'M5;EURGBP;CALL;02:11',
        'M5;EURGBP;CALL;02:15',
    ]
}

var { list, dia } = obj;



if(dia == 'HOJE'){
    var quant_sinais = list.length;
    for (let index = 0; index < quant_sinais; index++) {
        schaduleAction(list, index, year, month, day);
    }
}