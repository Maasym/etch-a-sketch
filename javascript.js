function createBoard(size){

    switch(size){
        case "s":

            var remove = document.getElementById("board");
            while (remove.firstChild) remove.removeChild(remove.firstChild);

            for(let i=0; i<=48; i++) {
                const div = document.createElement("div");
                div.setAttribute('class', "divboard");
                const newdiv = document.getElementById("board");
                newdiv.appendChild(div)
            }

            var elements = document.getElementsByClassName('divboard');
            for (var i in elements) {

                elements[i].style.width = '98px';
                elements[i].style.height = '98px';
            }

            break;
        case "m":

            var remove = document.getElementById("board");
            while (remove.firstChild) remove.removeChild(remove.firstChild);

            for(let i=0; i<=195; i++) {
                const div = document.createElement("div");
                div.setAttribute('class', "divboard");
                const newdiv = document.getElementById("board");
                newdiv.appendChild(div)
            }

            var elements = document.getElementsByClassName('divboard');
            for (var i in elements) {

                    elements[i].style.width = '48px';
                    elements[i].style.height = '48px';
            }

            break;
        case "l":

            var remove = document.getElementById("board");
            while (remove.firstChild) remove.removeChild(remove.firstChild);

            for(let i=0; i<=624; i++) {
                const div = document.createElement("div");
                div.setAttribute('class', "divboard");
                const newdiv = document.getElementById("board");
                newdiv.appendChild(div)
            }

            var elements = document.getElementsByClassName('divboard');
            for (var i in elements) {

                elements[i].style.width = '26px';
                elements[i].style.height = '26px';
            }

            break;
    }

}

function mouseoverblack(){

    let squares = document.querySelectorAll('.divboard');
    squares.forEach(div => div.removeEventListener('mouseover', colorTrailrandom,  {
    }));
    squares.forEach(div => div.addEventListener('mouseover', colorTrailblack, {
    }));
}

function colorTrailblack(){


        this.style.backgroundColor = "black";

}

function mouseoverrandom(){

    let squares = document.querySelectorAll('.divboard');
    squares.forEach(div => div.removeEventListener('mouseover', colorTrailblack,  {
    }));
    squares.forEach(div => div.addEventListener('mouseover', colorTrailrandom, {
    }));
}

function colorTrailrandom(){

        this.style.backgroundColor = randomcolor();

}

function randomcolor(){

    const values = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7,8, 9];
    let hex = "";

    for(let i = 0; i < 6; i++)
    {
        const index = Math.floor(Math.random() * values.length);
        hex += values[index];
    }

    return "#" + hex;
}





function clear(){

    let squares = document.querySelectorAll('.divboard');
    squares.forEach(div => div.style.backgroundColor="");
}

