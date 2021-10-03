function check() {
    let cardname = document.getElementById("Cardname").value;
    let cardcvv = document.getElementById("Cardcvv").value;
    let cardnumbers = document.getElementById("Cardnumber").value;

    if (cardname == "" || cardname == null) {
        alert("Please Enter Your Name")
    }
    else if (cardcvv == "" || cardcvv == null) {
        alert("Please Enter CVV")
    }
    else if (cardcvv.length !== 3) {
        alert("Enter valid 3 digit cvv number");
    }

    else if (cardnumbers == "" || cardnumbers == null) {
        alert("Please enter your card number")
    }
    else if (cardnumbers.length !== 16) {
        alert("Enter valid 16 digit card number");
    }
    else {
        let btnval = document.getElementById("btn");
        btnval.onclick = function () {
            let text = document.getElementById("message");
            let ptext = document.createElement('p');
            ptext.innerText = "Please wait your request is in progress"
            text.append(ptext);
            setTimeout(function () {
                alert("Thank you for ordering with us")
                window.location.href = "/order"
            }, 1000);
        }
    }


}