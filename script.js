var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send()

request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

    for (var i=0;i < res.length;i++){
        console.log(res[i].name.common,res[i].population,res[i].continents[0]);
        }


        var cnme = Data.map((ele)=>ele.name.common);
        console.log(cname);
}



