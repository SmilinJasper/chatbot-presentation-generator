if (!"speechSynthesis" in window) {
    alert("Sorry, your browser doesn't support text to speech!");
}

const botText = document.getElementById('botText');
botText.children[0].children[0].className = 'bot-text-content';
const botTextContent = document.getElementById('bot-text-content');
const synth = window.speechSynthesis;
const voices = synth.getVoices();

botTextContent.addEventListener("click", () => {

    const readResult = setTimeout(() => {
        if (synth.paused === true) {
            synth.resume();
            return;
        }

        const result = document.getElementById('result');
        textToSpeech(result.innerText);
    }, 1500)

});

function textToSpeech(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.voice = voices[0];
    msg.lang = voices[0].lang;
    msg.text = text;

    synth.speak(msg);
}