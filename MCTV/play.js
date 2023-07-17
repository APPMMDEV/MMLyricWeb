window.onload = playMovie;

function playMovie(){

    var url = localStorage.getItem("vdurl");
    var doctitle = localStorage.getItem("vdtitle");
        document.title = doctitle;

    const video = document.getElementById("video");
    if(Hls.isSupported()){
        var hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);

    }else if(video.canPlayType("application/vnd.apple.mpegurl")){
        video.src = url;
        video.addEventListener("loadedmetadata",()=>{

            video.play();

        })
    }

}