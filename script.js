function validateForm() 
{
    let name = document.forms["signupForm"]['name'].value;
    let surname = document.forms["signupForm"]["surname"].value;
    let age = document.forms["signupForm"]["age"].value;
    let gender = document.forms["signupForm"]["gender"].value;
    let agree = document.forms["signupForm"]["agree"].checked;
    let email = document.forms["signupForm"]["email"].value;
    let password = document.forms["signupForm"]["password"].value;
         
    if(name == "" || surname == "") 
    {
        alert ("Ad ve Soyad bos olmamalidir.");
    return false;
    }
     
    if(age < 14)
    {
      alert ("Yasiniz 14den boyuk olmalidir.");
     return false ;
    }
    let age = document.forms["signupForm"]["age"].value;

  if (!terms) 
  {
    alert("Please agree to the Terms & Conditions.");

    return false;
   }
   let email = document.forms["signupForm"]["email"].value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) 
  {
    alert("Zehmet olmasa duzgun email adressi qeyd edin");
    return false;
  }
  let password = document.forms["signupForm"]["password"].value;
  if (password.length < 8)
  {
    alert("Parol 8 karakterden daha cox olmalidir");
    return false;
  }
}
