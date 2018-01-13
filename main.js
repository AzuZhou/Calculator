
document.addEventListener('DOMContentLoaded', function () {
    var operations = "";

    [].forEach.call(document.querySelectorAll('button'), function (el) {
        el.addEventListener('click', function () {
            var content = this.innerHTML;

            var signs = ["+", "-", "*", "/"]
            var lastOperation;

            document.getElementById("entry").innerHTML = content;
            document.getElementById("operations").innerHTML += content;

            if (!signs.indexOf(content)) {

                lastOperation = content;
            }

            if (content == "=") {

                try {

                    eval(operations);

                } catch (err) {

                    document.getElementById("entry").innerHTML = "Syntax ERROR";
                    document.getElementById("operations").innerHTML = "";

                } finally {
                    var result = eval(operations);
                }

                if (typeof (result) == "number") {

                    if (result == "Infinity" || result == "NaN") {

                        document.getElementById("entry").innerHTML = "Math ERROR";
                        document.getElementById("operations").innerHTML = "";

                    } else {

                        var decimals;

                        if (result % 1 != 0) {

                            result = result.toFixed(3);
                        }

                        document.getElementById("entry").innerHTML = result;
                        document.getElementById("operations").innerHTML += result;
                    }
                }

            } else if (content == "AC") {

                operations = "";
                content = "";
                document.getElementById("entry").innerHTML = 0;
                document.getElementById("operations").innerHTML = "";

            } else if (content == "x") {

                operations += "*";

            } else if (content == "CE") {

                var NewOp = operations.slice(0, operations.indexOf(lastOperation));
                operations = NewOp;
                document.getElementById("entry").innerHTML = 0;
                document.getElementById("operations").innerHTML = operations;

            } else {

                operations += content;

            }

        })
    })
})
