
function beds(x)
{
    var r = document.getElementsByClassName('card');

    for (var i = 0; i < r.length; i ++) {
        r[i].style.display = 'block';
    }
    if(x==1)
    {
        var p = document.getElementsByClassName('beds2');

        for (var i = 0; i < p.length; i ++) {
            p[i].style.display = 'none';
        }
        var q = document.getElementsByClassName('beds3');

        for (var i = 0; i < q.length; i ++) {
            q[i].style.display = 'none';
        }
    }
    if(x==2)
    {
        var p = document.getElementsByClassName('beds1');

        for (var i = 0; i < p.length; i ++) {
            p[i].style.display = 'none';
        }
        var q = document.getElementsByClassName('beds3');

        for (var i = 0; i < q.length; i ++) {
            q[i].style.display = 'none';
        }
    }
    if(x==3)
    {
        var p = document.getElementsByClassName('beds1');

        for (var i = 0; i < p.length; i ++) {
            p[i].style.display = 'none';
        }
        var q = document.getElementsByClassName('beds2');

        for (var i = 0; i < q.length; i ++) {
            q[i].style.display = 'none';
        }
    }
}
function price(x)
{
    var r = document.getElementsByClassName('card');

    for (var i = 0; i < r.length; i ++) {
        r[i].style.display = 'block';
    }
    if(x==1)
    {
        var p = document.getElementsByClassName('filter2');

        for (var i = 0; i < p.length; i ++) {
            p[i].style.display = 'none';
        }
        var q = document.getElementsByClassName('filter3');

        for (var i = 0; i < q.length; i ++) {
            q[i].style.display = 'none';
        }
    }
    if(x==2)
    {
        var p = document.getElementsByClassName('filter1');

        for (var i = 0; i < p.length; i ++) {
            p[i].style.display = 'none';
        }
        var q = document.getElementsByClassName('filter3');

        for (var i = 0; i < q.length; i ++) {
            q[i].style.display = 'none';
        }
    }
    if(x==3)
    {
        var p = document.getElementsByClassName('filter1');

        for (var i = 0; i < p.length; i ++) {
            p[i].style.display = 'none';
        }
        var q = document.getElementsByClassName('filter2');

        for (var i = 0; i < q.length; i ++) {
            q[i].style.display = 'none';
        }
    }
}