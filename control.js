
//---------------quat-----------------------------------------------------------------------
/*var q01_on = document.getElementById("q01_on");
var q01_off = document.getElementById("q01_off");

q01_on.onclick = function(){
    console.log("ON");
    document.getElementById("q01_img").src = "https://bom.so/dUHQ3J";
}

q01_off.onclick = function(){
    document.getElementById("q01_img").src = "./Img/fanoff.png";
}
*/
const firebaseConfig = {
apiKey: "AIzaSyCCFfUBOBkt3ObNYnsmvkKTQ0fA2TTJLM8",
authDomain: "web-layout-ce056.firebaseapp.com",
projectId: "web-layout-ce056",
storageBucket: "web-layout-ce056.appspot.com",
messagingSenderId: "261688894850",
appId: "1:261688894850:web:87b62bf2c81036e5699b9b",
measurementId: "G-XB98LBKSE2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*---------------radio----------------------------------------------------------------------------------------------
//dieu khien radio qua button va cap nhat trang thai len firebase
var r01_on = document.getElementById("r01_on");
var r01_off = document.getElementById("r01_off");
r01_on.onclick = function(){
    document.getElementById("r01_img").src = "https://bom.so/RjOrg9"
    firebase.database().ref("/TT_IoT").update({
    "RADIO": "ON"
  })
}
r01_off.onclick = function(){
	document.getElementById("r01_img").src = "./img/radio_off.png"
	
  firebase.database().ref("/TT_IoT").update({
		"RADIO": "OFF"
	})
}
//tai du lieu len firebase khi reload lai webite -----------    
firebase.database().ref("/web layout").get().then((snapshot) => {
    //neu ton tai gia tri firebase thi no se in ra
  if(snapshot.exists())
  {
    console.log(snapshot.val())

    var radio_01_status = snapshot.val()
    if (radio_01_status == "ON"){
      document.getElementById("r01_img").src = "https://bom.so/RjOrg9"
    }
    else
      document.getElementById("r01_img").src = "./img/radio_off.png"
  }
  else
  {
    console.log("No data available!")
    firebase.database().ref("/TT_IoT").update({
		"RADIO": "OFF"});
  }
})

// Load RADIO STATE FROM FIREBASE-------------------------
firebase.database().ref("/TT_IoT/RADIO").on("value",function(snapshot){
   var radio_01_status = snapshot.val()
    if (radio_01_status == "ON") //Luu y khong ghi bulb_01_status ["LED"] vi 
                                //bien bulb_01_status da chua gia tri cua LED tu duong dan ref
    {
      console.log("Radio is " + radio_01_status)
      document.getElementById("r01_img").src = "https://bom.so/RjOrg9"
    }  
    else
    {
      console.log("Radio is " + radio_01_status)
      document.getElementById("r01_img").src = "./img/radio_off.png"
    }
});
*/
//------------den truot ngang----------------------------------------------------------------------------------------------
var den_val_web = document.getElementById("SliderNgangId"); //sliderngang co gia tri tu 0 den 10
var den_img = document.getElementById("den");
    den_val_web.oninput=function(){                         //thuoc tinh oninput se kich hoat ham khi gia tri trong the input bi thay doi
                                                            // vi du khi keo cuc tron tai 7 thi sliderngang co gia tri la 7 thong qua id SliderNgangId
                                                            //ham document.getElementById co tac dung dua toan bo thuoc tinh cua id do vao 1 bien nao do nhung ko the thay doi thuoc tinh von co
    document.getElementById("SliderNgangValue").innerHTML= den_val_web.value; //de thay doi gia tri hoac thuoc tinh cua 1 the ta su dung lenh innerHTML
                                                                              //  neu ko co innerHTML thi SliderNgangValue van giu gia tri la 5
                                                                              //bang cach nay SliderNgangValue se co gia tri giong SliderNgangId thong qua bien sliderngang
    
    den_img.style.opacity = den_val_web.value/10;
    firebase.database().ref("/TT_IoT").update({             //update gia tri cua den tu website len firebase
    "DEN":den_val_web.value})
    console.log("Độ sáng của đèn là: " + den_val_web.value)
}

//update gia tri cua den tu firebase ve website 
firebase.database().ref("/TT_IoT/DEN").on("value",function(snapshot){
  var den_val_fbase = snapshot.val();    //den_val_web lay id cua SliderNgangId
  document.getElementById("SliderNgangValue").innerHTML = den_val_fbase;
  den_val_web.value=den_val_fbase; //dieu khien thanh truot tu gia tri nhap tren firebase
  den_img.style.opacity = den_val_web.value/10; //dieu khien do mo cua den tu gia tri nhap tren firebase
});


                 
//---------------may lanh------------------------------------------------------------------------------------------
var ml01_on = document.getElementById("ml01_on");
var ml01_off = document.getElementById("ml01_off");

ml01_on.onclick = function(){
    document.getElementById("ml01_img").src = "https://bom.so/kBfjSB"
    firebase.database().ref("/TT_IoT").update({
    "MAY_LANH": "ON"
  })
}
ml01_off.onclick = function(){
	document.getElementById("ml01_img").src = "./img/ml_off.png"
	
  firebase.database().ref("/TT_IoT").update({
		"MAY_LANH": "OFF"
	})
}

firebase.database().ref("/web layout").get().then((snapshot) => {
    //neu ton tai gia tri firebase thi no se in ra
  if(snapshot.exists())
  {
    console.log(snapshot.val())

    var maylanh_01_status = snapshot.val()
    if (maylanh_01_status == "ON"){
      document.getElementById("ml01_img").src = "https://bom.so/kBfjSB"
    }
    else
      document.getElementById("ml01_img").src = "./img/ml_off.png"
  }
  else
  {
    console.log("No data available!")
    firebase.database().ref("/TT_IoT").update({
		"MAY_LANH": "OFF"});
  }
})

// Load MAY LANH STATE FROM FIREBASE-------------------------
firebase.database().ref("/TT_IoT/MAY_LANH").on("value",function(snapshot){
   var maylanh_01_status = snapshot.val()
    if (maylanh_01_status == "ON") //Luu y khong ghi bulb_01_status ["LED"] vi 
                                //bien bulb_01_status da chua gia tri cua LED tu duong dan ref
    {
      console.log("May lanh is " + maylanh_01_status)
      document.getElementById("ml01_img").src = "https://bom.so/kBfjSB"
    }  
    else
    {
      console.log("May lanh is " + maylanh_01_status)
      document.getElementById("ml01_img").src = "./img/ml_off.png"
    }
});



//---------------den ngu-------------------------------------------------------------------------------------------
var d01_on = document.getElementById("d01_on");
var d01_off = document.getElementById("d01_off");

d01_on.onclick = function(){
    document.getElementById("d01_img").src = "./img/lamp_on.png"
    firebase.database().ref("/TT_IoT").update({
    "DEN_NGU": "ON"
  })
}
d01_off.onclick = function(){
	document.getElementById("d01_img").src = "./img/lamp_off.png"
	
  firebase.database().ref("/TT_IoT").update({
		"DEN_NGU": "OFF"
	})
}
firebase.database().ref("/web layout").get().then((snapshot) => {
    //neu ton tai gia tri firebase thi no se in ra
  if(snapshot.exists())
  {
    console.log(snapshot.val())

    var denngu_01_status = snapshot.val()
    if (denngu_01_status == "ON"){
      document.getElementById("d01_img").src = "./img/lamp_on.png"
    }
    else
      document.getElementById("d01_img").src = "./img/lamp_off.png"
  }
  else
  {
    console.log("No data available!")
    firebase.database().ref("/TT_IoT").update({
		"DEN_NGU": "OFF"});
  }
})

// Load DEN NGU STATE FROM FIREBASE-------------------------
firebase.database().ref("/TT_IoT/DEN_NGU").on("value",function(snapshot){
   var denngu_01_status = snapshot.val()
    if (denngu_01_status == "ON") //Luu y khong ghi bulb_01_status ["LED"] vi 
                                //bien bulb_01_status da chua gia tri cua LED tu duong dan ref
    {
      console.log("Den ngu is " + denngu_01_status)
      document.getElementById("d01_img").src = "./Img/lamp_on.png"
    }  
    else
    {
      console.log("Den ngu is " + denngu_01_status)
      document.getElementById("d01_img").src = "./img/lamp_off.png"
    }
});

//---------------loa-------------------------------------------------------------------------------------------------
// var l01_on = document.getElementById("l01_on");
// var l01_off = document.getElementById("l01_off");

// l01_on.onclick = function(){
//     document.getElementById("l01_img").src = "https://bom.so/PkqNv2"
//     firebase.database().ref("/TT_IoT").update({
//     "LOA": "ON"
//   })
// }
// l01_off.onclick = function(){
// 	document.getElementById("l01_img").src = "./img/loa_off.png"
	
//   firebase.database().ref("/TT_IoT").update({
// 		"LOA": "OFF"
// 	})
// }

var l01_img = document.getElementById('l01_img')
l01_img.onclick = function changeImage (){
    let displayImage = document.getElementById ('l01_img')
    if (displayImage.src.match ('./Img/loa_off.png')){
        displayImage.src = 'https://bom.so/PkqNv2'
        firebase.database().ref("/TT_IoT").update({
        "LOA": "ON"
    })
    }
    else{
        displayImage.src = './Img/loa_off.png'
        firebase.database().ref("/TT_IoT").update({
       "LOA": "OFF"
    })
    }}

firebase.database().ref("/web layout").get().then((snapshot) => {
    //neu ton tai gia tri firebase thi no se in ra
  if(snapshot.exists())
  {
    console.log(snapshot.val())

    var loa_01_status = snapshot.val()
    if (loa_01_status == "ON"){
      
    }
    else
      document.getElementById("l01_img").src = "./img/loa_off.png"
  }
  else
  {
    console.log("No data available!")
    firebase.database().ref("/TT_IoT").update({
		"LOA": "OFF"});
  }
})

// Load LOA STATE FROM FIREBASE-------------------------
firebase.database().ref("/TT_IoT/LOA").on("value",function(snapshot){
   var loa_01_status = snapshot.val()
    if (loa_01_status == "ON") 
    {
      console.log("Loa is " + loa_01_status)
      document.getElementById("l01_img").src = "https://bom.so/PkqNv2"
    }  
    else
    {
      console.log("Loa is " + loa_01_status)
      document.getElementById("l01_img").src = "./img/loa_off.png"
    }
});

//---------------may nuong banh mi---------------------------------------------------------------------------------
var t01_on = document.getElementById("t01_on");
var t01_off = document.getElementById("t01_off");


t01_on.onclick = function(){
    document.getElementById("t01_img").src = "./img/toaster_on.png"
    firebase.database().ref("/TT_IoT").update({
    "TOASTER": "ON"
  })
}
t01_off.onclick = function(){
	document.getElementById("t01_img").src = "./img/toaster_off.png"
	
  firebase.database().ref("/TT_IoT").update({
		"TOASTER": "OFF"
	})
}
firebase.database().ref("/web layout").get().then((snapshot) => {
    //neu ton tai gia tri firebase thi no se in ra
  if(snapshot.exists())
  {
    console.log(snapshot.val())

    var toaster_01_status = snapshot.val()
    if (toaster_01_status == "ON"){
      document.getElementById("t01_img").src = "./img/toaster_on.png"
    }
    else
      document.getElementById("t01_img").src = "./img/toaster_off.png"
  }
  else
  {
    console.log("No data available!")
    firebase.database().ref("/TT_IoT").update({
		"TOASTER": "OFF"});
  }
})

// Load TOASTER STATE FROM FIREBASE-------------------------
firebase.database().ref("/TT_IoT/TOASTER").on("value",function(snapshot){
   var toaster_01_status = snapshot.val()
    if (toaster_01_status == "ON") //Luu y khong ghi bulb_01_status ["LED"] vi 
                                //bien bulb_01_status da chua gia tri cua LED tu duong dan ref
    {
      console.log("May nuong banh mi is " + toaster_01_status)
      document.getElementById("t01_img").src = "./Img/toaster_on.png"
    }  
    else
    {
      console.log("May nuong banh mi is " + toaster_01_status)
      document.getElementById("t01_img").src = "./img/toaster_off.png"
    }
});

//LOAD NHIET DO TU FIREBASE XUONG WEB--------------------------------------------------------------------------------------------------
firebase.database().ref("/TT_IoT/NHIET_DO").on("value",function(snapshot){
var nd = snapshot.val();  
document.getElementById("nhietdo").innerHTML = nd;
console.log(nd);
});   

//LOAD DO AM TU FIREBASE XUONG WEB--------------------------------------------------------------------------------------------------
firebase.database().ref("/TT_IoT/DO_AM").on("value",function(snapshot){
var da = snapshot.val();  
document.getElementById("doam").innerHTML = da;
console.log(da);
});   

//LOAD GAS TU FIREBASE XUONG WEB--------------------------------------------------------------------------------------------------
firebase.database().ref("/TT_IoT/GAS").on("value",function(snapshot){
var g = snapshot.val();  
document.getElementById("gas").innerHTML = g;
console.log(g);
}); 

//LOAD THOI TIET TU FIREBASE XUONG WEB--------------------------------------------------------------------------------------------------
firebase.database().ref("/TT_IoT/THOI_TIET").on("value",function(snapshot){
var tt = snapshot.val();  
document.getElementById("thoitiet").innerHTML = tt;
console.log(tt);
});

//CONTROL SWITCH---------------------------------------------------------------------------------------------------------------------------
document.getElementById('light-dark').onclick = function(e){
  if (this.checked){
    document.getElementById("hinhanh").src = "https://bom.so/RjOrg9"
    firebase.database().ref("/TT_IoT").update({
    "RADIO": "ON"})
  }
                                
  else{
    document.getElementById("hinhanh").src = "./img/radio_off.png"
    firebase.database().ref("/TT_IoT").update({
		"RADIO": "OFF"})
  }
}

//tai du lieu len firebase khi reload lai webite -----------    
firebase.database().ref("/web layout").get().then((snapshot) => {
    //neu ton tai gia tri firebase thi no se in ra
  if(snapshot.exists())
  {
    console.log(snapshot.val())

    var radio_01_status = snapshot.val()
    if (radio_01_status == "ON"){
      document.getElementById("hinhanh").src = "https://bom.so/RjOrg9"
    }
    else
      document.getElementById("hinhanh").src = "./img/radio_off.png"
  }
  else
  {
    console.log("No data available!")
    firebase.database().ref("/TT_IoT").update({
		"RADIO": "OFF"});
  }
})

// Load RADIO STATE FROM FIREBASE-------------------------
firebase.database().ref("/TT_IoT/RADIO").on("value",function(snapshot){
   var radio_01_status = snapshot.val()
    if (radio_01_status == "ON") //Luu y khong ghi bulb_01_status ["LED"] vi 
                                //bien bulb_01_status da chua gia tri cua LED tu duong dan ref
    {
      console.log("Radio is " + radio_01_status)
      document.getElementById("hinhanh").src = "https://bom.so/RjOrg9"
    }  
    else
    {
      console.log("Radio is " + radio_01_status)
      document.getElementById("hinhanh").src = "./img/radio_off.png"
    }
});
