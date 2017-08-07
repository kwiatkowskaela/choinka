// scripts.js


function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = ' ';
        for (var j = 1; j <= i; j++) {
            star += '*';
        }
        console.log(' ' + star);
    }
}
h = prompt('Podaj wysokość choinki');
drawTree(h);
