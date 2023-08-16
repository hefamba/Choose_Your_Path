const panels = document.querySelectorAll('.panel');

const urlAudio = {
    panel1: 'audio/Obi-Wan.mp3',
    panel2: 'audio/DarthVader.mp3',
    panel3: 'audio/Luke.mp3'
};

let audio;
let activePanel = null;

const removeActive = () => {
    panels.forEach(panel => panel.classList.remove('active'));
};

const playAudio = (panelId) => {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;

    }
    audio = new Audio(urlAudio[panelId]);
    audio.play();

};

const pauseAudio = () => {
    if (audio || !audio.pause) {
        audio.pause();
    }
};

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if (activePanel !== panel.id) {
            removeActive();
            panel.classList.add('active');
            activePanel = panel.id;
            playAudio(panel.id);
        }
        else {
            removeActive();
            pauseAudio();
            activePanel = null;
        }
    });
});