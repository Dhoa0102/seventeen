let song=document.getElementById("song");
let ctr=document.getElementById("ctr").classList;
const controlButton = document.getElementById('playerControl');
// song.onloadedmetadata = function() 
// {
//     lin.max=song.duration;
//     lin.value=song.currentTime;
// }

function playPause()
{
    if(ctr.contains("fa-pause"))
    {
        song.pause();
        ctr.remove("fa-pause");
        ctr.add("fa-play");
    }
    else
    {
        song.play();
        ctr.remove("fa-play");
        ctr.add("fa-pause");
    }
}

controlButton.addEventListener('click', () => playPause());