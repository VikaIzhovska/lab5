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
        .addClass("table table-bordered table-primary col-6")
        .appendTo(element)
        .addClass("td")
        $('<tr>').appendTo('table').addClass("tdt");
        $('<td>').appendTo('tr:last').text("Name").addClass("tdt");
        $('<td>').appendTo('tr:last').text("Age").addClass("tdt");
        $('<td>').appendTo('tr:last').text("Position").addClass("tdt");
        $('<td>').appendTo('tr:last').text("Experience (years)").addClass("tdt");
        $('<td>').appendTo('tr:last').text("").addClass("tdt");
        $('<td>').appendTo('tr:last').text("").addClass("tdt");
        var ourtable = JSON.parse(JSON.stringify(arr)); 
        for(var i=0; i < ourtable.length; i++){
            $('<tr>').appendTo('table').addClass("tr");
            for(var key in ourtable[i]){
                $('<td>').appendTo('tr:last').text(ourtable[i][key]).addClass("td");
            }
            $('tr:last td:first').hide();
            $('<td>').appendTo('tr:last').addClass("td");
            var h =0;
            $('<button>').text('Update').addClass('btn btn-primary')
            .appendTo('td:last').click(function(){
                h++;
                var idt=$(this).parent().parent().find("td:first").text();
                var namet=$(this).parent().parent().find("td:eq(1)").text();
                var aget=$(this).parent().parent().find("td:eq(2)").text();
                var post=$(this).parent().parent().find("td:eq(3)").text();
                var expt=$(this).parent().parent().find("td:eq(4)").text();
                $('.name').val(namet);
                $('.age').val(aget);
                $('.pos').val(post);
                $('.exp').val(expt);
                $("#AddButton").hide();
                if(h===1){
                $('<button>').text('Update').addClass('btn-success update btn-lg btn-block').appendTo('.myform').click(function(){
                    const name=$('.name').val();
                    const age=$('.age').val();
                    const pos=$('.pos').val();
                    const exp=$('.exp').val();
                    $('.name').val("");
                    $('.age').val("");
                    $('.pos').val("");
                    $('.exp').val("");
                    updateUser(idt,name,age,pos,exp);
                    $('.update').hide();
                    $("#AddButton").show();
                });
            }
                console.log(idt);
            });
            $('<td>').appendTo('tr:last').addClass("td");
            $('<button>').text('Delete').addClass('btn btn-danger')
            .appendTo('td:last').click(function(){
                var id=$(this).parent().parent().find('td:first').text();
                console.log(id);
                deleteUser(id);
            });
        }
    }  
    function addUser(name,age,pos,exp){
        if(!name||!age||!pos||!exp) {
            alert('Input all data!');
            return;
        }
        var obj={
            name:name,
            age:age,
            pos:pos,
            exp:exp
        }
        $.post('/adduser',obj,function(data){ 
            console.log(data);
            getUsers();
        })
    }
    function deleteUser(id){
        var obj={id:id};
        $.post('/deleteuser',obj,function(data){
        console.log(data);
        getUsers();})
    }
    function updateUser(id,name,age,pos,exp){
        if(!name||!age||!pos||!exp) {
            alert('Input all data!');
            return;
        }
        var obj={
            id:id,
            name:name,
            age:age,
            pos:pos,
            exp:exp
        }
        $.post('/updateuser',obj,function(data){ 
            console.log(data);
            getUsers();
        })
    }
    $('.add').click(function(){
        const name=$('.name').val();
        const age=$('.age').val();
        const pos=$('.pos').val();
        const exp=$('.exp').val();
        $('.name').val("");
        $('.age').val("");
        $('.pos').val("");
        $('.exp').val("");
        addUser(name,age,pos,exp);
    })
    getUsers();
})
