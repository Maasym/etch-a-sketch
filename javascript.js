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