


const radios = document.getElementsByClassName("radioBtn");
const boxes = document.querySelectorAll("#mode3 tr td")
let myBoxes = [
    [boxes[0], boxes[1], boxes[2]],
    [boxes[3], boxes[4], boxes[5]],
    [boxes[6], boxes[7], boxes[8]]
]
let isSolved = false




let symbol = "O"

boxes.forEach(function (box) {

    box.addEventListener("click", function () {
        //  box.classList.toggle("bg-primary", "text-danger")
        if (box.innerHTML == "") {
            box.innerHTML = symbol

            if (symbol === "O") {
                symbol = "X"
            } else {
                symbol = "O"
            }
            check3()
        }
    });
});









for (let i = 0; i < radios.length; i++) {

    radios[i].addEventListener("click", function () {
        alert(`${radios[i].value}`)
    })

}




function check3() {
    // hroziontal check


    for (let i = 0; i < 3; i++) {

        if (myBoxes[i][0].innerHTML != "" && myBoxes[i][0].innerHTML == myBoxes[i][1].innerHTML && myBoxes[i][0].innerHTML == myBoxes[i][2].innerHTML) {

            isSolved == true
            myBoxes[i][0].classList.toggle("bg-primary")
            myBoxes[i][1].classList.toggle("bg-primary")
            myBoxes[i][2].classList.toggle("bg-primary")


        }



        // vertical check

        else if (myBoxes[0][i].innerHTML != "" && myBoxes[0][i].innerHTML == myBoxes[1][i].innerHTML && myBoxes[0][i].innerHTML == myBoxes[2][i].innerHTML) {

            isSolved == true
            myBoxes[0][i].classList.toggle("bg-primary")
            myBoxes[1][i].classList.toggle("bg-primary")
            myBoxes[2][i].classList.toggle("bg-primary")


        }




    }



    // diagonal check

    if (myBoxes[0][0].innerHTML != "" && myBoxes[0][0].innerHTML == myBoxes[1][1].innerHTML && myBoxes[0][0].innerHTML == myBoxes[2][2].innerHTML) {

        isSolved == true
        myBoxes[0][0].classList.toggle("bg-primary")
        myBoxes[1][1].classList.toggle("bg-primary")
        myBoxes[2][2].classList.toggle("bg-primary")


    }

    else if (myBoxes[2][0].innerHTML != "" && myBoxes[2][0].innerHTML == myBoxes[1][1].innerHTML && myBoxes[0][0].innerHTML == myBoxes[0][2].innerHTML) {

        isSolved == true
        myBoxes[2][0].classList.toggle("bg-primary")
        myBoxes[1][1].classList.toggle("bg-primary")
        myBoxes[0][2].classList.toggle("bg-primary")


    }
}
