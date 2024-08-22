/*esse é o que ta funcionando*/
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const formatarTempo = (tempo)=>{
        if (tempo < 10){
            return `0${tempo}`
        } else {
            return tempo
        } 
}
/* para pegar um elemento pelo id usar esse comando acima*/
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
/* pega a variavel da data e substitui pelo valor atual*/

    horas.textContent = formatarTempo(hr);
    minutos.textContent = formatarTempo(min);
    segundos.textContent = formatarTempo(sec);
})
