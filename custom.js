

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
        <div class="card text-white bg-primary mb-3  height="250" width="120" >
            <div class="card-body" >
                <p class="card_preview-title"><strong>Title</strong> ${allData.Lyrics_Database[single].title}</p>
                <span class="card_preview-title"><strong>Singer Name:</strong> ${allData.Lyrics_Database[single].singername}</span>

                <br><br>
                <p><img class="image_style" src="${allData.Lyrics_Database[single].lyricImg}" alt="${allData.Lyrics_Database[single].title}"  height="250" width="150"></p>
            </div>
        </div>
    </div>`
    }
    alllist.innerHTML = dataStore;
    console.log(allData);
    
       
    }

    xmlhttp.send();

}
