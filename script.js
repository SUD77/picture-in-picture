//Using scree capture API


const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try{

        /*  in this we are assiging media stream to a const and asking user 
        to play a media and then we are assigning it to a srcobject and when that video has
        loaaded its meta deta, its gonna play
         */

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        //Catch error here  
        console.log('whoops, error here:',error);      
    } 
}



button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled=false;
});


//On load
selectMediaStream();
