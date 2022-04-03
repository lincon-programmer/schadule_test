const nodeSchedule = require('node-schedule');

function schaduleAction(list, index, year, month, day){
    var sinais = list[index];
    sinais = sinais.split(';')
    var tempo = sinais[3];
    tempo = tempo.split(':');
    var hora = tempo[0];
    hora = Number(hora);
    var minuto = tempo[1];
    minuto = Number(minuto);
    var dt = new Date(year, month, day, hora, minuto);
    const job = nodeSchedule.scheduleJob(dt, ()=> {
        console.log('olá mundo')
    });
    
    console.log(job.nextInvocation());
}

module.exports = schaduleAction;