
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
            location.replace("home.html")
        }
        else 
        {
            var msg2 = "Wrong Username and Password"
            document.getElementById('msg').innerHTML = msg2
        }
    }
}



function myFunction() {
  var x = document.getElementById("pass");
  if (x.type == "password") 
  {
    x.type = "text";
  }
  else 
  {
    x.type = "password";
  }
}
