

window.onload=getAllData;
// showAll.addEventListener('click',function(){

  

//     getAllData();

   
function allet(vdtitle,vdurl) {

    // alert(vdtitle)

    localStorage.setItem("vdurl",vdurl)

    localStorage.setItem("vdtitle",vdtitle)

   
    window.location.href = "videoplay.html";
}

// })
function getAllData(){

 
    var allData = "";
    var xmlhttp =   new XMLHttpRequest();

    var url = 'https://mctvteam.github.io/Coder/Data/V10/movies.json';

    // var url = "https://dummy.restapiexample.com/api/v1/employees";
    xmlhttp.open('GET',url,true);


   
    xmlhttp.onload = function(){
        var allData;
    if (this.readyState == 4 && this.status == 200) {

          allData = JSON.parse(this.responseText);
         

  
    }
    var dataStore = "";

   
    for(single in allData.Movies_Database){

        var vtitle =allData.Movies_Database[single].movietitle;
        var link =allData.Movies_Database[single].link;
        dataStore += `<div class="col-3">
        <div class="card text-white bg-primary mb-3  height="250" width="120" >
            <div class="card-body" >
                <p class="card_preview-title">${allData.Movies_Database[single].movietitle}</p>
               
               
                <p><img class="image_style" src="${allData.Movies_Database[single].movie_img}" alt="${allData.Movies_Database[single].movietitle}"  height="250" width="150"></p>
          
               

                <span class="card_preview-text"> ${allData.Movies_Database[single].description}</span>

                <br>
               
                <button onclick="allet('${vtitle}','${link}')" class="show-modal"> Watch Video...</button>
                
 
                
                </div>
        </div>
    </div>`
    }

    

    alllist.innerHTML = dataStore;
    
       
    }

    xmlhttp.send();

 
}

