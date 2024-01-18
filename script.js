// //alert, confirm e prompt
// function gerarNumeroAleatorio(){
//     return Math.floor(Math.random() * 10 ) + 1;
// }

// var numeroUsuario = prompt("Digite um número de 1 a 10:");

// numeroUsuario = parseInt(numeroUsuario);

// var numeroAleatorio = gerarNumeroAleatorio();

// if(numeroUsuario === numeroAleatorio){
//     alert("Parabens! Você acertou!");
// }else{
//     alert("Você errou. O número aleatório era " + numeroAleatorio + ".");
// }

// import swal from 'sweetalert';
// function gerarNumeroAleatorio(){
//      return Math.floor(Math.random() * 10 ) + 1;
// }

// swal("Digite um número de 1 a 10:",{
//     content:{
//         element:"input",
//         attributes:{
//             type: "number",
//         }
//     }
// }).then((value)=>{

//     var numeroUsuario = parseInt(value);

//     var numeroAleatorio = gerarNumeroAleatorio();

//     if(numeroUsuario === numeroAleatorio){
//         swal("Parabens", "Você acertou!", "sucess");
//     }else{
//         swal("Você errou!", "O número correto era " + numeroAleatorio + ".", "error");
//     }
// });