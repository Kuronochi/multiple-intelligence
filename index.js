let odp = [];
let i = 1;
let j = 1;
let m;
let radios;
let radio_value = [];

let rbs = [];
function odpow(){
  for (i = 0; i <24; i++){
    j = i + 1
    radios = document.getElementsByName("pyt"+j );
    for (var m = 0; m < radios.length; m++) {
      if (radios[m].checked) {
          odp[i] =+ radios[m].value;
          break;
          
      }
  }
  //  rbs[0] = +document.querySelector('input[name="pyt1"]:checked').value;
    
 //   rbs[1] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[2] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[3] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[4] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[5] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[6] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[7] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[8] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[9] = +document.querySelector('input[name="pyt1"]:checked').value; 
 //   rbs[10] = +document.querySelector('input[name="pyt1"]:checked').value; 
      
     
}    

console.log(odp);
}

function myFunction() {
    odpow();
    let odpCh = ['','','','','','','','','','','','','','','','','','','','','','','',''];
    const odpwr = ['','','','','','','','','','','','','','','','','','','','','','','',''];
    let k = 1;
    let opdzwr = false;

    
    for (i = 0; i < 24; i++){
       
    }
    for(i = 0; i< 24; i++) {
        if(odp[i] == null){
            odpCh[i] = true;
            opdzwr = true;
        }else odpCh[i]= false;
        
    }
    
    
    if (opdzwr == true){
        if(odpCh[0]==true){
            odpwr[0] = '1';
        }else odpwr[0] = '';
        
        for(i = 1; i< 24; i++){
            if(odpCh[i] ==true){
                for (j = i-1 ; j > -1; j--){
                     k = i+ 1
                    if(odpCh[j]==true){
                        odpwr[i] =', '+ k;
                        {break;}
                    }else odpwr[i] = k;
                }
            }
            
        }
        
        if(opdzwr == true){
        document.getElementById('demo').innerHTML = 'Nie odpowiedziałeś na pytanie nr: ' + odpwr[0]  +odpwr[1] +odpwr[2] +odpwr[3] +odpwr[4] +odpwr[5] + odpwr[6] + odpwr[7] + odpwr[8] + odpwr[9] + odpwr[10] + odpwr[11] + odpwr[12] + odpwr[13] + odpwr[14] + odpwr[15] + odpwr[16] + odpwr[17] + odpwr[18] + odpwr[19] + odpwr[20] + odpwr[21] + odpwr[22] + odpwr[23];
        }else document.getElementById('demo').innerHTML = '';
    }
    let wynik = [];
    let wynikt = [];
    // dane do wykresu
    if(opdzwr != true){
      document.getElementById('demo').innerHTML = '';  
    // wynik A
    wynik[0] = odp[9] + odp[10] + odp[20];
    // wynik B
    wynik[1] = odp[13] + odp[16] + odp[21];
    wynik[2] = odp[1] + odp[12] + odp[23];
    wynik[3] = odp[0] + odp[6] + odp[14];
    wynik[4] = odp[3] + odp[5] + odp[18];
    wynik[5] = odp[11] + odp[15] + odp[17];
    wynik[6] = odp[4] + odp[7] + odp[19];
    wynik[7] = odp[2] + odp[8] + odp[22];
   
    wynikt[2] = odp[9] + odp[10] + odp[20];
    wynikt[1] = odp[13] + odp[16] + odp[21];
    wynikt[0] = odp[1] + odp[12] + odp[23];
    wynikt[7] = odp[0] + odp[6] + odp[14];
    wynikt[6] = odp[3] + odp[5] + odp[18];
    wynikt[5] = odp[11] + odp[15] + odp[17];
    wynikt[4] = odp[4] + odp[7] + odp[19];
    wynikt[3] = odp[2] + odp[8] + odp[22];

    y = wynikt; 
    chart.data.datasets[0].data = y;
    chart.update();



    strony = document.querySelectorAll('.strony');

  for (i = 0; i < strony.length; i++) {
    if (strony[i].style.display === 'none') {
        strony[i].style.display = 'block';
    } else {
        strony[i].style.display = "none";
    }
  }
  
  wynik = document.querySelectorAll('.wynik');

  for (i = 0; i < wynik.length; i++) {
    if (wynik[i].style.display === 'block') {
        wynik[i].style.display = 'none';
    } else {
        wynik[i].style.display = "block";
    }
  }
}

  }
  var strona_1 = '';
  var strona_2 = '';
  
  var x = '';
//                                                 Strona główna przejście
  function startTs() {
    start = document.querySelectorAll('.start');

  for (i = 0; i < start.length; i++) {
    if (start[i].style.display === 'none') {
        start[i].style.display = 'block';
    } else {
        start[i].style.display = "none";
    }
  }
  
  strony = document.querySelectorAll('.strony');

  for (i = 0; i < strony.length; i++) {
    if (strony[i].style.display === 'block') {
        strony[i].style.display = 'none';
    } else {
        strony[i].style.display = "block";
    }
  }
  }

// wynik
  function sTwynik() {
    strony = document.querySelectorAll('.strony');

  for (i = 0; i < strony.length; i++) {
    if (strony[i].style.display === 'none') {
        strony[i].style.display = 'block';
    } else {
        strony[i].style.display = "none";
    }
  }
  
  wynik = document.querySelectorAll('.wynik');

  for (i = 0; i < wynik.length; i++) {
    if (wynik[i].style.display === 'block') {
        wynik[i].style.display = 'none';
    } else {
        wynik[i].style.display = "block";
    }
  }
  }



function save(data, filename, type){
  odpow();
  var d = new Date();
  var n = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  filename = 'wynik ' + n + '-' + m+ '-' + s ;


  data = odp;
     
      var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob)
      window.navigator.msSaveOrOpenBlob(file, filename);
  else {
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
  
}

  







  // przejście do strony 1 do 2 
  function strona1t2() {
    strona_1 = document.querySelectorAll('.strona1');

  for (i = 0; i < strona_1.length; i++) {
    if (strona_1[i].style.display === 'none') {
        strona_1[i].style.display = 'block';
    } else {
        strona_1[i].style.display = "none";
    }
  }
  
  strona_2 = document.querySelectorAll('.strona2');

  for (i = 0; i < strona_2.length; i++) {
    if (strona_2[i].style.display === 'block') {
        strona_2[i].style.display = 'none';
    } else {
        strona_2[i].style.display = "block";
    }
  }
  }
  // przejście do strony 2 na 1
  function strona2t1() {
    strona_2 = document.querySelectorAll('.strona2');

  for (i = 0; i < strona_2.length; i++) {
    if (strona_2[i].style.display === 'none') {
        strona_2[i].style.display = 'block';
    } else {
        strona_2[i].style.display = "none";
    }
  }
  
  strona_1 = document.querySelectorAll('.strona1');

  for (i = 0; i < strona_1.length; i++) {
    if (strona_1[i].style.display === 'block') {
        strona_1[i].style.display = 'none';
    } else {
        strona_1[i].style.display = "block";
    }
  }
  }

  // przejscie do 2 na 3
  function strona2t3() {
    strona_2 = document.querySelectorAll('.strona2');

  for (i = 0; i < strona_2.length; i++) {
    if (strona_2[i].style.display === 'none') {
        strona_2[i].style.display = 'block';
    } else {
        strona_2[i].style.display = "none";
    }
  }
  
  strona_3 = document.querySelectorAll('.strona3');

  for (i = 0; i < strona_3.length; i++) {
    if (strona_3[i].style.display === 'block') {
        strona_3[i].style.display = 'none';
    } else {
        strona_3[i].style.display = "block";
    }
  }
  }


  // przejscie z 3 do 2 
  function strona3t2() {
    strona_3 = document.querySelectorAll('.strona3');
  for (i = 0; i < strona_3.length; i++) {
    if (strona_3[i].style.display === 'none') {
        strona_3[i].style.display = 'block';
    } else {
        strona_3[i].style.display = "none";
    }
  }
  strona_2 = document.querySelectorAll('.strona2');
  for (i = 0; i < strona_2.length; i++) {
    if (strona_2[i].style.display === 'block') {
        strona_2[i].style.display = 'none';
    } else {
        strona_2[i].style.display = "block";
    }
  }
  }


  // przejscie z 3 na 4
  function strona3t4() {
    strona_3 = document.querySelectorAll('.strona3');

  for (i = 0; i < strona_3.length; i++) {
    if (strona_3[i].style.display === 'none') {
        strona_3[i].style.display = 'block';
    } else {
        strona_3[i].style.display = "none";
    }
  }
  
  strona_4 = document.querySelectorAll('.strona4');

  for (i = 0; i < strona_4.length; i++) {
    if (strona_4[i].style.display === 'block') {
        strona_4[i].style.display = 'none';
    } else {
        strona_4[i].style.display = "block";
    }
  }
  }


 // przejscie z 4 na 3
  function strona4t3() {
    strona_4 = document.querySelectorAll('.strona4');

  for (i = 0; i < strona_4.length; i++) {
    if (strona_4[i].style.display === 'none') {
        strona_4[i].style.display = 'block';
    } else {
        strona_4[i].style.display = "none";
    }
  }
  
  strona_3 = document.querySelectorAll('.strona3');

  for (i = 0; i < strona_3.length; i++) {
    if (strona_3[i].style.display === 'block') {
        strona_3[i].style.display = 'none';
    } else {
        strona_3[i].style.display = "block";
    }
  }
  }


// Języki
function eng() {
    lang_PL = document.querySelectorAll('.langPL');

    
  for (i = 0; i < lang_PL.length; i++) {
    if (lang_PL[i].style.display === 'none') {
        lang_PL[i].style.display = 'block';
        chart.data.labels = ['Lingwistyczna','Matematyczno-logiczna','Przyrodnicza','Instrapersonalna','Interpersonalna','kinestetyczna','Wizualna','Muzyczna'];
        chart.update();
        
    } else { 
        lang_PL[i].style.display = "none";
        chart.data.labels = ['Linguistic-Verbal','Logical-Mathematical','Naturalistic','Intrapersonal','Interpersonal','Bodily-Kinesthetic','Visual-Spatial','Musical'];
        chart.update();
    }
  }
  
  lang_EN = document.querySelectorAll('.langEN');

  for (i = 0; i < lang_EN.length; i++) {
    if (lang_EN[i].style.display === 'block') {
        lang_EN[i].style.display = 'none';
    } else {
        lang_EN[i].style.display = "block";
    }
  }
  }

  function back() {
    wynik = document.querySelectorAll('.wynik');

  for (i = 0; i < wynik.length; i++) {
    if (wynik[i].style.display === 'none') {
      wynik[i].style.display = 'block';
    } else {
      wynik[i].style.display = "none";
    }
  }
  
  start = document.querySelectorAll('.start');

  for (i = 0; i < start.length; i++) {
    if (start[i].style.display === 'block') {
      start[i].style.display = 'none';
    } else {
      start[i].style.display = "block";
    }
  }


  }



function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 53))
        return false;
    return true;
}



  
    let myChart = document.getElementById('myChart').getContext('2d');

    let chart = new Chart(myChart, {
        type:'radar',
        data:{
            labels:['Lingwistyczna','Matematyczno-logiczna','Przyrodnicza','Instrapersonalna','Interpersonalna','kinestetyczna','Wizualna','Muzyczna'],
            datasets:[{
                label:'Wartość',
                data:[],
                
            }]
            
        },
        options: {
          scale: {
            r: {
                suggestedMin: 0,
                
                stepSize: 1
            }
        }
        }
    });
 

    function addData() {
        myFunction();
        y = wynikt; 

        chart.data.datasets[0].data = y;
        
        chart.update();
    };