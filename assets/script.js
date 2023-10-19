var abhay = document.getElementById('myaudiopalyer');



var isPlaying = false;

function togglePlayPause(){
    
    if(isPlaying){

        abhay.pause();
        isPlaying = false;

    }
    else{
        
        abhay.play();
        isPlaying = true;

    }
}