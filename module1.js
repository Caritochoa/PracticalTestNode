
//Exporting myFunction
//en este modulo se encuentran la organizacion de los 
//callbaks en promesas. 

/*Realice  una validacion para validar que la promesa se haya cumplido */

function amorCallback(valor, amorCallback){
    console.log("inicia ejecucion con el valor", valor);    
    setTimeout(function(){callback(valor, valor * valor)})
    num_c = valor * valor;//para validar que se haya ejecutado.
}


const amor0 = new Promise((resolve, reject) => {
   
    if (num_c === 0){ //ya que 0*0 da 
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});


const amor1 = new Promise((resolve, reject) => {
   
    if (num_c === 1){ //ya que 1*1 da  1
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});

const amor2 = new Promise((resolve, reject) => {
   
    if (num_c === 4){ //ya que 2*2 da 4
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});


const amor3 = new Promise((resolve, reject) => {
   
    if (num_c === 9){ //ya que 3*3 da 9
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});


const amor4 = new Promise((resolve, reject) => {
   
    if (num_c === 16){ //ya que 4*4 da 16
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});


const amor5 = new Promise((resolve, reject) => {
   
    if (num_c === 25){ //ya que 5*5 da 25
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});

const amor6 = new Promise((resolve, reject) => {
   
    if (num_c === 36){ //ya que 6*6 da 36
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});

const amor7 = new Promise((resolve, reject) => {
   
    if (num_c === 49){ //ya que 7*7  da 49
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});

const amor8 = new Promise((resolve, reject) => {
   
    if (num_c === 64){ //ya que 8*8 da  64
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});

const amor9 = new Promise((resolve, reject) => {
   
    if (num_c === 81){ //ya que 9*9 da  81
        let amor1_ejecutado = true;
    }
   
    let error = function reject(){
        new Error('No se ejecuto la promesa 1')
    }
           
    if(amor1_ejecutado){
        resolve()
    }else{
        reject()
    }
});





//Poniendo juntas todas las promesas de amor

    amor0.then(result => amor1(result)
    ).then(result => amor2(result)
    ).then(result => amor3(result)
    ).then(result => amor4(result)
    ).then(result => amor5(result)
    ).then(result => amor6(result)
    ).then(result => amor7(result)
    ).then(result => amor8(result).then(result => amor9(result)
    ).catch(err => {
		console.log(err.message)
	})



  
 
 
 
  module.exports.myFunction = myFunction; //it doesn't take brakets we
  module.exports.myString = myString; //don't want to execute heren