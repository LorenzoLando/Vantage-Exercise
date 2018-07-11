
var url = "https://api.vantage.online/application/loginsingle";
var username = "bd58f46c-80bd-4626-ad8c-24368d231895";
var password = "2a2e85f14147eb544e5319cc70ecc436";
var token;
var myObject;

function renderHTML(data) {
   var htmlString  = "";
    for(i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].AltName+ " telephone number is: "; ;
    htmlString += data[i].PhoneNumber + " is located in ";
    htmlString +=  data[i].Town + " and the Postcode is ";
    htmlString +=  data[i].PostCode + ".</p>";

  }

  $("#info").append(htmlString);

}




$.ajax
({
  type: "POST",
  url: url,
  dataType: 'json',
  async: false,
  headers: {
    "Authorization": "Basic " + btoa(username + ":" + password)
  },
  data: '{ "comment" }',
  success: function (data){
    token = data.Token; 
  }
});

$.ajax
({
  type: "GET",
  url: "https://api.vantage.online/customer",
  dataType: 'json',
  async: false,
  headers: {
    "Authorization": "Bearer " + token
  },
  data: '{ "comment" }',
  success: function (data){
    
   
   myObject = data.value;
  }
});


//il risultato sembra essere un oggetto guarda come fare ad accedere a tutte le propieta`

$("#btn").on("click", function(){
    renderHTML(myObject);
    $(this).addClass("hide-me");
    

  });



















