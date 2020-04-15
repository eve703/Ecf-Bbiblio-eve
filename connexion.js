function Login()
{
    var done=0;
    var username=document.login.username.value;
    var password=document.login.password.value;

    var monForm=document.getElementById("login");

    if (username=="user1" && password=="user1") 
        {
        monForm.setAttribute("action", "user1.html");
        done=1;
        }
    
    if (username=="user2" && password=="user2") 
        {
       
       monForm.setAttribute("action", "user2.html");
       done=1;
        }
    
    if (username=="user3" && password=="user3")
        {
       
       monForm.setAttribute("action", "user3.html");
       done=1;
        }
    
    if (username=="user4" && password=="user4") 
        {
    
       monForm.setAttribute("action", "user4.html");
       done=1;
        }
    
    
    if (done==1) 
        {
      monForm.submit();
        } 
};