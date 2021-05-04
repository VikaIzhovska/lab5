$(document).ready(function(){
    function getUsers(){
        $.get('/getusers',function(data){
            createTable('#table',data)
        })
    }  
    function createTable(element,arr){
        $(element).empty();
        console.log(arr);
        $('<table>')
        .appendTo(element)
        .addClass("tr");
        var ourtable = JSON.parse(arr); 
        //.addClass("table table-bordered table-primary col-6")
        for(var i=0; i < ourtable.length; i++){
            $('<tr>').appendTo('table');
            for(var key in ourtable[i]){
                $('<td>').appendTo('tr:last').text(ourtable[i][key]).addClass("td");
            }
        }
    }   
    getUsers();
})

/*window.onload =() =>{
    async function getUsers(){
        const response = await fetch('/getusers');
        if (response.ok){
            const users = await response.json();
            createTable('#table',users);
        }
        else{
            console.log(response.status);
        }
    }
    function createTable(element,arr){
        $(element).empty();
        console.log(arr);
        $('<table>').appendTo(element)
        .addClass(".tr");
        var ourtable = JSON.parse(arr); 
        //.addClass("table table-bordered table-primary col-6")
        for(var i=0; i < ourtable.length; i++){
            $('<tr>').appendTo('table');
            for(var key in ourtable[i]){
                $('<td>').appendTo('tr:last').text(ourtable[i][key]);
            }
        }
    }
    getUsers();
}*/

    /*function createTable(container,arr){
        const div = document.getElementById(container);
        const table = document.createElement('table');
        div.append(table);
        for (let i = 0; i<arr.length; i++){
            const tr = document.createElement('tr');
            table.append(tr);
            for (let key in arr[i]){
                const td = document.createElement('td');
                tr.append(td);
                td.innerHTML = arr[i][key];
            }
        }
    }*/