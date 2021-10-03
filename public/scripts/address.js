


// function start() {
//     setTimeout(function () {
//         alert("Address Sucsessfully Added Now Please Process For Payments");
//         window.location.href = './payments.html';
//     }, 10000);
// }

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    // overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    // overlay.classList.remove('active')
}
var home1 = document.getElementById('home');
var anc = document.getElementById('home a')
home1.onclick = function () {
    home1.style.backgroundColor = "blue"
    //anc.backgroundColor = "#3F51B5";
    // home1.style.color = "white";

}
var work1 = document.getElementById('work');
var anc1 = document.getElementById('work  a')
work1.onclick = function () {
    work1.style.backgroundColor = "blue"
    anc1.backgroundColor = "#3F51B5";
    acn1.style.color = "white";
    work1.style.color = "white";
    home1.style.backgroundColor = none;

}
var other1 = document.getElementById('others');
var anc2 = document.getElementById('home  a')
other1.onclick = function () {
    other1.style.backgroundColor = "blue"
    anc2.backgroundColor = "#3F51B5";
    other1.style.color = "white";
}

var addressdiv = document.getElementById('addresscontent');
var addbtn = document.getElementById('savebutton');
let arr = [];
addbtn.onclick = function () {
    let hsn = document.getElementById('hsnv').value;
    let lcv = document.getElementById('location').value;
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = "Others";
    p.style.fontWeight = 'bold';
    let p1 = document.createElement("p");
    p1.innerText = hsn + ' ' + lcv;
    let btn = document.createElement("button");
    btn.innerText = "EDIT";
    btn.style.color = "#3F51B5";
    btn.style.border = "none";
    btn.style.marginLeft = "20px"
    btn.fontWeight = "550"

    let btn1 = document.createElement("button");
    btn1.innerText = "DELETE";
    btn1.fontWeight = "550"
    btn1.style.color = "#3F51B5";
    btn1.style.border = "none";
    btn1.style.padding = "20px";
    // bnt1.style.marginLeft = "20px";
    arr.push(hsn, lcv);
    localStorage.setItem("MyAddress", JSON.stringify(arr));
    let myarr = localStorage.getItem("MyAddress");
    let myobj = JSON.parse(myarr);
    //addressdiv.append(p, p1, btn, btn1);
    addressdiv.append(myobj, btn, btn1);
    modal.classList.remove('active')
    btn.onclick = function () {
        modal.classList.add('active');
        let hsn = document.getElementById('hsnv').value = "";
        let lcv = document.getElementById('location').value = "";
        arr = [];
        addressdiv.textContent = "";
    }
    btn1.onclick = function () {
        let hsn = document.getElementById('hsnv').value = "";
        let lcv = document.getElementById('location').value = "";
        modal.classList.remove('active');
        localStorage.removeItem('MyAddress');
        addressdiv.textContent = "";
    }
}