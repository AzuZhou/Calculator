
document.addEventListener('DOMContentLoaded', function () {
    var operations = "";

    [].forEach.call(document.querySelectorAll('button'), function (el) {
        el.addEventListener('click', function () {
            var content = this.innerHTML;

            var signs = ["+", "-", "*", "/"]

            document.getElementById("entry").innerHTML = content;
            document.getElementById("operations").innerHTML += content;

            // var isDecimal = false;

            if (content == "=") {
                var result = eval(operations);
                document.getElementById("entry").innerHTML = result;
                document.getElementById("operations").innerHTML += result;
            } else if (content == "AC") {
                operations = "";
                content = "";
                document.getElementById("entry").innerHTML = 0;
                document.getElementById("operations").innerHTML = "";
            } else if (content == "x") {
                operations += "*";
            } else if (content == "CE") {
                operations;
            } else {
                operations += content;
            }


            // if (content == ".") {
            //    isDecimal = false;
            //}
        })
    })
})
