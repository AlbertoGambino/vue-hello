// GOAL: stampare a schermo il contenuto di una variabile dentro un h1
// BONUS: utilizzare un data come nome del file immagine in un tag img


function exVue (){

  new Vue({

        el: '#app',
        data:{'goal' : 'Hello world!!!'}

  })


}


function init() {

    console.log('hello');

    exVue()
}
$(init);
