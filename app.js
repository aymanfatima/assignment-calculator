function getvalue (val){
    var main = document.getElementById("main");
    main.value+= val;
}
       
function clearfunction()
{
    var main = document.getElementById("main")
    main.value = ""
}

function result()
{
    var main = document.getElementById("main");
    main.value = eval(main.value)
}
