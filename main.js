const videoPlay = document.getElementById('playvideo');
document.getElementById('containervideo').style.display="none";


videoPlay.addEventListener("click", (e) => {
    document.getElementById('containervideo').style.display="block";
    document.getElementById('videoconfig').style.display="none";

})