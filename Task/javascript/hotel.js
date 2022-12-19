
function myExpenses() 
{
    var days = document.getElementById('days').value;
    var person = document.getElementById('person').value;
    var typ = document.getElementById('typ').value;

    console.log(days,person,typ);


    if (days == "" || person == "" || typ == "") 
    {
        var msg = "Please Pass all Value"
        document.getElementById('msg').innerHTML = msg;
    }
    else 
    {       
            var amount,economy,business,delux;
            var discount;
            var expenses;
   
            if(typ=="economy")
            {
                amount=500;
                expenses= amount*days*person;
                document.getElementById('final').innerHTML=expenses;

                var name1="Economy";
                document.getElementById('name').innerHTML=name1;
            }

            else if(typ=="business")
            {
                amount=1000;

                if(days>3)
                {
                    discount=person*100;
                }
                else
                {
                    discount=0;
                }
                expenses=amount*days*person-discount;
                document.getElementById('final').innerHTML=expenses;

                var name1="Business";
                document.getElementById('name').innerHTML=name1;
            }

            else if(typ=="delux")
            {
                amount=2000;

                if(days>5)
                {
                    discount=person*250;
                }
                else
                {
                    discount=0;

                }
                expenses=amount*days*person-discount;
                document.getElementById('final').innerHTML=expenses;

                var name1="Delux";
                document.getElementById('name').innerHTML=name1;
            }
    
    }
}

