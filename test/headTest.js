// ../ goes back two directories. ./ goes back one
// This file imports from assertEqual and Head

const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Bye"); 
