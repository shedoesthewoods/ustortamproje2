function validateForm() {

  var kontrol=0;

  var name = document.querySelector("#name").value;
  if(name==""){
    document.getElementById("uyari1").innerHTML="*İsim sahasi boş olmamali!";
    kontrol=1;
  }else{
    document.getElementById("uyari1").innerHTML="";
  }

  var email = document.querySelector("#email").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){
    if(email==""){
      document.getElementById("uyari2").innerHTML="*E-mail bos olmamali!";
    }else
      document.getElementById("uyari2").innerHTML="*E-mail kurallara uygun girilmeli!";
  kontrol=1;
  }else{
    document.getElementById("uyari2").innerHTML="";
  }
  var sayisal = document.querySelector("#sayisal").value;
  if(isNaN(sayisal)|| sayisal==""){
    if(sayisal==""){
      document.getElementById("uyari3").innerHTML="*Sayısal değer sahası boş olmamalı!";
    }else
      document.getElementById("uyari3").innerHTML="*Sadece sayısal değer girilmeli!";
  kontrol=1;
  } else{
    document.getElementById("uyari3").innerHTML="";
  }

  var basamakli = document.querySelector("#basamakli").value;
  if(isNaN(basamakli) || basamakli.length!=12 ){
    if(basamakli==""){
      document.getElementById("uyari4").innerHTML="*12 basamaklı sayısal değer sahası boş olmamalı!";
    }else
    document.getElementById("uyari4").innerHTML="*12 basamak uzunluğunda sayısal deger girilmeli!";

  kontrol=1;
  } else{
    document.getElementById("uyari4").innerHTML="";
  }
  var alfa = document.querySelector("#alfa").value;
  var letters =  /^[a-z]*$/i;
  if(letters.test(alfa)==false || alfa==""){
    if(alfa==""){
     document.getElementById("uyari5").innerHTML="*Sadece harf girilecek saha boş bırakılmamalı!!";
    }else
     document.getElementById("uyari5").innerHTML="*Sadece harf girilmeli!";
     kontrol=1;
  } else{
    document.getElementById("uyari5").innerHTML="";
  }
  var max30 = document.querySelector("#max30").value;
  if(letters.test(max30)==false || max30.length>3 || max30==""){
    if(max30==""){
      document.getElementById("uyari6").innerHTML="*Maksimum 30 karakterli kelime girilecek saha boş olmamalı!";
    }else
    document.getElementById("uyari6").innerHTML="*Maksimum 30 karakterli kelime girilmeli!";
    kontrol=1;
  } else{
    document.getElementById("uyari6").innerHTML="";
  }
  var uckelime = document.querySelector("#uckelime").value;
  kelimeler = uckelime.split(' ');
  if(kelimeler.length!=3 || uckelime==""){
    if(uckelime==""){
      document.getElementById("uyari7").innerHTML="*3 kelimeden oluşan metin girilecek saha boş olmamalı!";
    }else
      document.getElementById("uyari7").innerHTML="*3 kelimeden oluşan metin girilmeli!";
  kontrol=1;
  } else{
    document.getElementById("uyari7").innerHTML="";
  }
  var password = document.querySelector("#password").value;
  var buyukharfler= /[A-Z]/g;
  var kucukharfler=/[a-z]/g;
  var rakamlar=/[0-9]/g;
  var noktalama= /[@#$&*^%!+=\/\\[\]|?.,<>)(;:'"~`]/;

  if(password==""){
      document.getElementById("uyari8").innerHTML="*Şifre boş olamaz!";
      document.getElementById("uyari9").innerHTML="";
      document.getElementById("uyari10").innerHTML="";
      document.getElementById("uyari11").innerHTML="";
      document.getElementById("uyari12").innerHTML="";
      kontrol=1;
  }
  else {
        if(password.length<8 ){
           document.getElementById("uyari8").innerHTML="*Şifre en az 8 karakterli olmali!";
           kontrol=1;
        } else{
        document.getElementById("uyari8").innerHTML="";
        }
        if( rakamlar.test(password)==false  ){

            document.getElementById("uyari9").innerHTML="*Şifre en az 1 rakam  icermeli!";
            kontrol=1;
        } else{
            document.getElementById("uyari9").innerHTML="";
        }
        if( noktalama.test(password)==false ){
            document.getElementById("uyari10").innerHTML="*Şifre en az 1 noktalama isareti icermeli!";
            kontrol=1;
        } else{
            document.getElementById("uyari10").innerHTML="";
        }
        if(kucukharfler.test(password)==false  ){
            document.getElementById("uyari11").innerHTML="*Şifre en az 1 bir kucuk harf icermeli!";
        kontrol=1;

        } else{
            document.getElementById("uyari11").innerHTML="";
        }
        if( buyukharfler.test(password)==false)  {

            document.getElementById("uyari12").innerHTML="*Şifre en az 1 buyuk harf icermeli!";
        kontrol=1;
        } else{
            document.getElementById("uyari12").innerHTML="";
        }
  }

  if(kontrol==1){
    return false;
  }

  return (true);

}