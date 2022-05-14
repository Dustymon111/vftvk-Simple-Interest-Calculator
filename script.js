function compute()
{
    var amountIpt = document.getElementById("amount");
    var amount = amountIpt.value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("year").value;
    var interest = amount * year * rate/100;
    var years = new Date().getFullYear() + parseInt(year);
    var rslt = document.getElementById("rslt");
    var main = document.getElementById("main");
    var footer = document.getElementById("footer");

    if (amount < 1)
    {
        alert("enter a positive number");
        amountIpt.focus()
    }
    else 
    {
        var result = `<br>If you deposit <mark>${amount}</mark>,<br>
        at an interest rate of <mark>${rate}%</mark>.<br>
        You will receive an amount of <mark>${interest}</mark>,<br>
        in the year <mark>${years}</mark><br>`;
        rslt.innerHTML = result
        main.style.height = "370px";
        footer.style.marginTop = "15px";
    }
}





