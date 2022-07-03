function autenthefication(){
    get_password = document.getElementById("idf3").value;
    E_mail = document.getElementById("email").value;
    if(get_password == "islam2002" && E_mail == "islam2002@Usthb.DZ" || get_password == "Halimi2003" && E_mail == "Halimi2002@messagerie.Dz"){
        document.write("Bienvenu sur la Page D'acceuil");
    }
    if(get_password == "" || E_mail == ""){
        return  0;
    }
    else{
        document.write("Connexion erronee ");
    }
}
function show_password(){
    L = document.getElementById("idf3").value;
    document.getElementById("show").value = L;
    if(L == ""){
        document.getElementById("show").value = "Tapez un mot de passe";
    }
}
L = document.querySelector("nav");
L.addEventListener("click",() =>{
    document.location.href = "page2.html";


})






















