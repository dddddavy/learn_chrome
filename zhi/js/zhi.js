function clearZhihu()
{
    p = document.getElementsByClassName("Card TopstoryItem");

    for (i = 0; i < p.length; ++i)
    {
        p[i].innerHTML = '';
    }
}

console.log("fucsdfds");


var t1 = window.setTimeout(clearZhihu, 1000);

console.log("fucku");



// q = document.getElementsByClassName("Card TopstoryItem");

// for (i = 0; i < q.length; ++i)
// {
//     q[i].onmouseover = clearZhihu;
// }





// $(".Card TopstoryItem").hide();

