const pianoKey = document.querySelectorAll(".piano-key .key")

let audio = new Audio("Audio/a.ogg");  // By default a is playing

const playmusic = (key)=>{    
    audio.src = `Audio/${key}.ogg`;   // Passing in the src according the key is pressed.
    audio.play();                     // Play the audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active")
    }, 150)
}


pianoKey.forEach((key)=>{
   key.addEventListener("click", ()=> playmusic(key.dataset.key))            
})

const pressedkey = (e)=>{
    console.log(e)
    playmusic(e.key);

}

document.addEventListener("keydown", pressedkey)



