<input type="text" placeholder="username" id="inp1">
    <span id="res1"></span><br><br>
    <input type="text" placeholder="phone" id="inp2">
    <span id="res2"></span><br><br>
    <input type="text" placeholder="email" id="inp3">
    <span id="res3"></span><br><br>
    <input type="text" placeholder="password" id="inp4">
    <span id="res4"></span><br><br>
    <input type="text" placeholder=" conform password" id="inp5">
    <span id="res5"></span><br><br>
    <button onclick="submit()">submit</button>
    <script>
        let pat = /^[a-zA-Z]+$/
        let pat2 = /^[0-9]+$/
        let pat3 = /^[a-z0-9]+@[a-z]+\.[a-z]+$/
        let pat4 = /^[A-Za-z0-9]+$/

        // username

        function submit() {
            let a = document.getElementById("inp1").value;
            if (a == "") {
                document.getElementById("res1").innerHTML = "empty";
                // document.getElementById("res1").style.color="blue"
            }

            else if (!pat.test(a)) {
                document.getElementById("res1").innerHTML = "not valid"
            }
            else {
                document.getElementById("res1").innerHTML = "okay"
            }

            // phone
            let b = document.getElementById("inp2").value
            if (b == "") {
                document.getElementById("res2").innerHTML = "empty"
            }
            else if (!pat1.test(b)) {
                document.getElementById("res2").innerHTML = "not valid"
            }
            else {
                document.getElementById("res2").innerHTML ="valid"
            }

            //    email
            let c = document.getElementById("inp3").value
            if (c == "") {
                document.getElementById("res3").innerText = "empty"
            }
            else if (!pat3.test(c)){
                document.getElementById("res3").innerText = "ASDFG"

            }
            else{
                document.getElementById("res3").innerText = "valid"
            }

        // password
        let d= document.getElementById("inp4").value
        if (d==""){
            document.getElementById("res4").innerText="empty"
        }
    else if(!pat4.test(d)){
        document.getElementById("res4").innerText="invalid"
        }
    else{
        document.getElementById("res4").innerText="okay"
    }
    let e=document.getElementById("inp5").value;
    if(e==d){
        document.getElementById("res5").innerText="okay"
    }
    else{
        document.getElementById("res5").innerHTML="not correct"
    }
    
    }
