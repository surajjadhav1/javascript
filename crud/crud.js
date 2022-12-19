$(function(){   
    $("#btn2").hide();
    var userDetails = [];
  
    $("#btn1").click(function()
    {
        
        var rec1 = $("#txt1").val();
        var rec2 = $("#txt2").val();
        // console.log(rec1,rec2); 

        if(rec1=="")
        {
            $("#txt1").after("<span class='text-danger'>Enter the Name</span>");
        }
        else
        {
            $("txt1").next().value="";
        }

        if(rec2=="")
        {
            $("#txt2").after("<span class='text-danger'>Enter the Location</span>");
        }
        else
        {
            $("#txt2").next().value="";
        }


        // Step 2 : generate array with username and place
        var userObj = {
            name:$("#txt1").val(),
            place:$("#txt2").val()
        }
        console.log(userObj);
        userDetails.push(userObj);
        console.log(userDetails);

        //step 3 : iterate your array having userobject
        if($.isArray(userDetails) && userDetails.length>0){
            var str=``;
            $.each(userDetails , function(i,obj){
                console.log(i,obj);
                str+= `
                
                    <tr>   
                        <td>${obj.name}</td>
                        <td>${obj.place}</td>
                        <td><button class="btn btn-danger btn-delete">X</button></td>
                        <td><button class="btn btn-success btn-edit">Edit</button></td>
                    </tr>
                        `
            });
            console.log(str);
            $("#result").html(str); 
            $("#txt1,#txt2").val(""); 
            $(".err").html('User Added Sucessfully');

            setTimeout(()=>{
                  $(".err").empty();
            },2000);
        }
    })

    $(document).on("click",".btn-delete",function(){
        // console.log("delete working");
        // console.log($(this));
        // console.log($(this).parent());
        // console.log($(this).parent().parent());

        if(confirm('Delete????')){
            $(this).parent().parent().fadeOut();
        }
    })

    //Step5 : Edit
    $(document).on("click",".btn-edit",function(){
        console.log("Edit is working");
        $("#btn1").hide();
        $("#btn2").show();

        var trtag = $(this).parent().parent();
        console.log(trtag);

        indexNo = trtag.index();
        console.log(indexNo, "Index No Of Row");

        var x1= trtag.children("td:eq(0)").text();
        var x2= trtag.children("td:eq(1)").text();

        console.log(x1,x2);

        $('#txt1').val(x1);
        $('#txt2').val(x2);
          
    });

    //step 6 : update
    $("#btn2").click(function(){
        console.log(indexNo, "Update at this row");

        var rec1=$("#txt1").val();
        var rec2=$("#txt2").val();
        console.log(rec1);
        console.log(rec2);

        $("tbody").children(`tr:eq(${indexNo})`).children('td:eq(0)').text(rec1);
        $("tbody").children(`tr:eq(${indexNo})`).children('td:eq(1)').text(rec2);


        $("#txt1,#txt2").val(""); 
        $(".err").html('User Updated Sucessfully');

        setTimeout(()=>{
              $(".err").empty();
        },2000);

        $("#btn2").hide();
        $("#btn1").show();

    })
})