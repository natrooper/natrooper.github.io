var numchat = 0;
var numfeed = 0;
var started = false;
var full = false;

function feedback(rating) 
{

if(full == false)
{    
if (numchat == 1)
{
    if(rating == 0)
    {
        document.getElementById('feedback1').innerHTML = "I don't understand";
    }
    else if(rating == 1)
    {
        document.getElementById('feedback1').innerHTML = "I understand";
    }
}

if (numchat == 2)
{
    if(rating == 0)
    {
        document.getElementById('feedback2').innerHTML = "I don't understand";
    }
    else if(rating == 1)
    {
        document.getElementById('feedback2').innerHTML = "I understand";
    }
}

if (numchat == 3)
{
    if(rating == 0)
    {
        document.getElementById('feedback3').innerHTML = "I don't understand";
    }
    else if(rating == 1)
    {
        document.getElementById('feedback3').innerHTML = "I understand";
    }
}

if (numchat == 4)
{
    if(rating == 0)
    {
        document.getElementById('feedback4').innerHTML = "I don't understand";
    }
    else if(rating == 1)
    {
        document.getElementById('feedback4').innerHTML = "I understand";
    }
}

if (numchat == 5)
{
    if(rating == 0)
    {
        document.getElementById('feedback5').innerHTML = "I don't understand";
    }
    else if(rating == 1)
    {
        document.getElementById('feedback5').innerHTML = "I understand";
    }
}

if (numchat == 0 && started == true)
{
    if(rating == 0)
    {
        document.getElementById('feedback6').innerHTML = "I don't understand";
    }
    else if(rating == 1)
    {
        document.getElementById('feedback6').innerHTML = "I understand";
    }

}
}
else
{
   
   
    if(rating == 0)
    {
        document.getElementById('feedback6').innerHTML = "I don't understand";
    }
    else if(rating == 1)
    {
        document.getElementById('feedback6').innerHTML = "I understand";
    }
    ++numfeed;
    console.log("numfeed " + numfeed);
    if(numfeed > 5)
    {
        numfeed = 0;
    }
}
}

function othername() {
if(full == false)
{
    if(numchat == 0)
    {
    var input = document.getElementById("city").value;
    document.getElementById('chat1').innerHTML = input;
    document.getElementById('feedback1').innerHTML = ' ';
    console.log(numchat);
    ++numchat;
    started = true;
        return;
    }

    if(numchat == 1)
    {
    var input = document.getElementById("city").value;
    document.getElementById('chat2').innerHTML = input;
    //alert(input);
    console.log(numchat);
    ++numchat;
    return;
    }

    if(numchat == 2)
    {
    var input = document.getElementById("city").value;
    document.getElementById('chat3').innerHTML = input;
    //alert(input);
    console.log(numchat);
    ++numchat;
    return;
    }

    if(numchat == 3)
    {
    var input = document.getElementById("city").value;
    document.getElementById('chat4').innerHTML = input;
    //alert(input);
    console.log(numchat);
    ++numchat;
    return;
    }

    if(numchat == 4)
    {
    var input = document.getElementById("city").value;
    document.getElementById('chat5').innerHTML = input;
    //alert(input);
    console.log(numchat);
    ++numchat;
    return;
    }

    if(numchat == 5)
    {
    var input = document.getElementById("city").value;
    document.getElementById('chat6').innerHTML = input;
    //alert(input);
    console.log(numchat);
    numchat = 0;
    full = true;
    return;
    }
}
    else
    {
      var input = document.getElementById("city").value;

        document.getElementById('chat1').innerHTML = document.getElementById('chat2').innerHTML;
        document.getElementById('chat2').innerHTML =document.getElementById('chat3').innerHTML;
        document.getElementById('chat3').innerHTML = document.getElementById('chat4').innerHTML;
        document.getElementById('chat4').innerHTML = document.getElementById('chat5').innerHTML;
        document.getElementById('chat5').innerHTML = document.getElementById('chat6').innerHTML;
        document.getElementById('chat6').innerHTML = input;

        document.getElementById('feedback1').innerHTML = document.getElementById('feedback2').innerHTML;
        document.getElementById('feedback2').innerHTML = document.getElementById('feedback3').innerHTML;
        document.getElementById('feedback3').innerHTML = document.getElementById('feedback4').innerHTML;
        document.getElementById('feedback4').innerHTML = document.getElementById('feedback5').innerHTML;
        document.getElementById('feedback5').innerHTML = document.getElementById('feedback6').innerHTML;
        document.getElementById('feedback6').innerHTML = ' ';


        console.log(numchat);
        ++numchat;
        if(numchat > 5)
        {
            numchat = 0;
        }
       
    }

    startApp()
    {
        window.alert("Hello! I don't speak English very well, but I would like to ask you for directions and am using this app to chat with you.  This app will translate our messages so we can understand each other");
    }


}