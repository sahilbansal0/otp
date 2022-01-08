function otpgen() {
    let a = Math.floor((Math.random() * 10));

    let b = Math.floor((Math.random() * 10));

    let c = Math.floor((Math.random() * 10));

    let d = Math.floor((Math.random() * 10));

    let e = Math.floor((Math.random() * 10));

    let f = Math.floor((Math.random() * 10));

    let a1 = a.toString();
    let b1 = b.toString();
    let c1 = c.toString();
    let d1 = d.toString();
    let e1 = e.toString();
    let f1 = f.toString();


    window.value = a1 + b1 + c1 + d1 + e1 + f1;
    x = document.getElementById("op");
    x.innerHTML = window.value;


}


function send() {

    let l = document.getElementById("ot").value;


    if (window.value == l) {
        // console.log("true")
        document.getElementById("submission").innerHTML = "The otp entered by you is correct,you can proceed further"
    } else if (l == "") {
        document.getElementById("submission").innerHTML = "Please,Enter your otp"


    } else {
        // console.log("false")
        document.getElementById("submission").innerHTML = "The otp entered by you is incorrect!"
    }
    l = " ";

}