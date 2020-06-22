import './styles.css';
import { Simon } from './simon';

$(document).ready(function(){
  let newGame = new Simon();
  $(".start").submit(function(event){
    event.preventDefault();

  });
});