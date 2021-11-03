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

    let z = a1 + b1 + c1 + d1 + e1 + f1;
    x = document.getElementById("op");
    x.innerHTML = z;




}
otpgen();