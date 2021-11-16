import $ from 'jquery';
import './css/styles.css';
import {DinoService} from './dinoService.js';

const paragraphs = 3;
const words = 10;

$(document).ready(function() {
  let promise = DinoService.getDinoInfo(paragraphs, words);
  promise.then(function(response) {
    $('body').html(response);
  });
});