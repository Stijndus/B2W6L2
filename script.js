var names = [];
var quest = prompt('');

for(i = 0;i<quest;i++){
    let namesQuest = prompt('');
    names[names.length] = namesQuest;
}

for(i=0;i<names.length;i++){
    document.getElementById('normal').innerHTML += names[i] + ' ';
}

for(i=names.length - 1;i>=0;i--){
    document.getElementById('reverse').innerHTML += names[i] + ' ';
}