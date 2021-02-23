document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#ticket-container').style.display = 'none';
    
    

});
function showTicket(ticket){
    document.querySelector('#ticket-container').style.display = 'block';
    //const url = window.location.href;
    /*fetch(`${url}/show_tickets/${ticket}`)
    .then(resp => resp.text())
    .then(result => {
        //console.log(text);
        console.log(result[3]);
    */    
    document.querySelector('#ticket-container').style.display = 'block';
    //document.querySelector('#ticket-container').innerHTML=result
    
}
    
    //find ticket from sever
    //console.log('show tickets function')