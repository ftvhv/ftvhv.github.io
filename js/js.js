const btnBigPlay = document.querySelector('.start__big__play');
const wrapperVideo = document.getElementById('bigVid');
btnBigPlay.addEventListener('click',function(){
  wrapperVideo.play();
});
const btnPlay = document.querySelectorAll('.play');
  btnPlay.forEach(button => {
    button.addEventListener('click', function() {
      const videoId = this.previousElementSibling.id; 
      const video = document.getElementById(videoId);
      video.play();
    });
  });
