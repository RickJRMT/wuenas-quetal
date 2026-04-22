// Variables globales
let noButtonClickCount = 0;
let noButtonState = 0;
let imageRotationInterval = null;
let imagesToRotate = [
    'https://i.pinimg.com/originals/e8/93/11/e8931117b8f5ed35702a32d18eca4fb1.gif',
    'https://github.com/Ronald1234-2/musica/blob/main/mocha5final.gif?raw=true',
    'https://github.com/Ronald1234-2/musica/blob/main/mocha6final.gif?raw=true',
    'https://github.com/Ronald1234-2/musica/blob/main/mocha7final.gif?raw=true',
    'https://github.com/Ronald1234-2/musica/blob/main/mocha9final.gif?raw=true'
];
let currentImageIndex = 0;

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

// Iniciar rotación de imágenes
function startImageRotation() {
    if (imageRotationInterval) return; // No iniciar si ya está corriendo
    
    imageRotationInterval = setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % imagesToRotate.length;
        const img = document.getElementById('gifContainerImg');
        if (img) {
            img.style.opacity = '0.7';
            img.src = imagesToRotate[currentImageIndex];
            setTimeout(() => {
                img.style.opacity = '1';
            }, 300);
        }
    }, 3000); // Cambiar imagen cada 3 segundos
}

// Detener rotación de imágenes
function stopImageRotation() {
    if (imageRotationInterval) {
        clearInterval(imageRotationInterval);
        imageRotationInterval = null;
    }
}

// Iniciar rotación cuando carga la página
startImageRotation();

// Botón Sí
document.getElementById('siBtn').addEventListener('click', function() {
    stopImageRotation();
    
    // Ocultar todos los gifs y contenedores
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'none';
    document.getElementById('happyGifContainer2').style.display = 'none';
    document.getElementById('happyGifContainer3').style.display = 'none';
    document.getElementById('happyGifContainer4').style.display = 'none';

    // Mostrar solo el video
    document.getElementById('videoContainer').style.display = 'block';

    // Ocultar los botones y pregunta
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Muxas gracias khalesita por perdonarme, no volvera a pasar, contigo me la paso super bien como para hacerte sentir mal 💖';
});

// Botón No
document.getElementById('noBtn').addEventListener('click', function() {
    // Continuar rotando imágenes
    startImageRotation();

    // Mostrar/ocultar gifs tristes (rotación entre 3)
    const sadGifs = ['sadGifContainer', 'sadGifContainer1', 'sadGifContainer2'];
    sadGifs.forEach(gif => {
        document.getElementById(gif).style.display = 'none';
    });
    
    const currentSadGif = sadGifs[noButtonState % 3];
    document.getElementById(currentSadGif).style.display = 'block';

    // Ocultar gif inicial
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'none';
    document.getElementById('happyGifContainer2').style.display = 'none';
    document.getElementById('happyGifContainer3').style.display = 'none';
    document.getElementById('happyGifContainer4').style.display = 'none';

    // Mensajes progresivos
    const messageTemplates = [
        '¿Segura que no me perdonas?',
        '¿De verdad no puedes perdonarme?',
        '¿Tan grave fue?',
        '¿No hay esperanza para mí?',
        'Por favor, piénsalo otra vez',
        'Me haría muy feliz tu perdón',
        'Si no me perdonas estaré muy tite, gatito tite',
        'Mi corazón está dolido :c',
        'Por favor, dame otra oportunidad',
        'No quiero perderte',
        'Vale, dejaré de insistir...',
        'Es broma, muejeje por favor perdóname!',
        'Me siento muy mal por lo que hice, de veras que no volvera a pasar',
        'hay forma de arreglarlo?',
        'Pls pls pls',
        'Cofa peldonameeeeeee',
        'Por favooooooor, pliiiis'
    ];

    // Mensaje basado en el ciclo
    const messageIndex = noButtonState % messageTemplates.length;
    const currentMessage = messageTemplates[messageIndex];
    
    document.getElementById('noBtn').innerHTML = currentMessage;
    document.getElementById('noBtn').style.backgroundColor = '#e63946';

    // Calcular el factor de escala continuamente
    // Comienza en 1.3 y sigue creciendo
    const scaleFactor = 1.0 + (noButtonState + 1) * 0.3; // 1.3, 1.6, 1.9, 2.2, etc.
    
    const baseFontSize = 1; // 1em
    const basePadding = 0.7; // 0.7em
    
    const newFontSize = (baseFontSize * 16 * scaleFactor) + 'px';
    const newPadding = (basePadding * 16 * scaleFactor) + 'px';
    
    document.getElementById('siBtn').style.fontSize = newFontSize;
    document.getElementById('siBtn').style.padding = newPadding;

    noButtonState++;
});

// Agregar transición visual a los botones
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.transition = 'all 0.3s ease';
});
