function mySubmit() 
{
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    // console.log(username,password);

    if (username == "" && password == "") 
    {
        var msg = "Enter Username & Password"
        document.getElementById('msg').innerHTML = msg
    }
    else 
    {
        if (username == "Suraj" && password == "sj123") 
        {
            location.replace("index.html")
        }
        else 
        {
            var msg2 = "Wrong Username and Password"
            document.getElementById('msg').innerHTML = msg2
        }
    }
}


// function myReset()
// {   
//     document.getElementById("roll").reset();
//     document.getElementById("name").reset();
//     document.getElementById("age").reset();
//     document.getElementById("course").reset();
// }


student = [];
function myData() 
{
    var roll = document.getElementById('roll').value;
    var name2 = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var course = document.getElementById('course').value;

    if (roll == "" || name2 == "" || mobile == "" || course == "") 
    {
        var msg = "Please Pass all Value"
        document.getElementById('msg').innerHTML = msg;
    }
    else 
    {
        var dataobj = {
            RollNo: roll,
            Name: name2,
            Mobile: mobile,
            Course: course
        };
        student.push(dataobj);
    }
}


function myDisplay() 
{
    document.getElementById('tbl').style.display="inline-table";
    var x = "";

    for (var i = 0; i < student.length; i++) 
    {
        x = x + `
            <tr>
                <td>${i + 1}</td>
                <td>${student[i].RollNo}</td>
                <td>${student[i].Name}</td>
                <td>${student[i].Mobile}</td>
                <td>${student[i].Course}</td>
            </tr>
        `
    }
    // console.log(x);
    document.getElementById("result").innerHTML = x;
}





