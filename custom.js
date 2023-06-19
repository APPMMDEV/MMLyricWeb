

window.onload=getAllData;
// showAll.addEventListener('click',function(){

  

//     getAllData();
// })
function getAllData(){

 
    var allData = "";
    var xmlhttp =   new XMLHttpRequest();

    var url = 'https://appmmdev.github.io/MMLyric/Data/lyrics.json';

    // var url = "https://dummy.restapiexample.com/api/v1/employees";
    xmlhttp.open('GET',url,true);


   
    xmlhttp.onload = function(){
        var allData;
    if (this.readyState == 4 && this.status == 200) {

          allData = JSON.parse(this.responseText);
         

  
    }
    var dataStore = "";
    for(single in allData.Lyrics_Database){
        dataStore += `<div class="col-3">
        <div class="card text-white bg-primary mb-3">
            <div class="card-body">
                <p><strong>Title</strong> ${allData.Lyrics_Database[single].title}</p>
                <span><strong>Singer Name:</strong> ${allData.Lyrics_Database[single].singername}</span>
            </div>
        </div>
    </div>`
    }
    alllist.innerHTML = dataStore;
    console.log(allData);
    
       
    }

    xmlhttp.send();

}