function my_clock(ele) {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);

    ele.innerHTML = "Time:" + h + ":" + m + ":" + s;
    setTimeout(function() {my_clock(ele);}, 1000);
}

var clock_div = document.getElementById("clock")
my_clock(clock_div)
