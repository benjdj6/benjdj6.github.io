$(document).ready(function(){
    var classCycle=[' c1',' c2', ' c3'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    var container = document.getElementById('container');
    container.className += classToAdd;
    console.log(container.className)
});