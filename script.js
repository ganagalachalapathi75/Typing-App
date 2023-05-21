document.addEventListener('DOMContentLoaded', () => {
    const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
    let currentKeyIndex = 0;
    let keysPressed = 0;
    let correctKeysPressed = 0;

    const currentKeyElement = document.getElementById('current-key');
    const userInputElement = document.getElementById('user-input');
    const keysPressedElement = document.getElementById('keys-pressed');
    const accuracyElement = document.getElementById('accuracy');

    currentKeyElement.textContent = keys[currentKeyIndex];

    userInputElement.addEventListener('input', (e) => {
        const userInput = e.target.value;

        if (userInput === keys[currentKeyIndex]) {
            correctKeysPressed++;
            currentKeyIndex++;
            userInputElement.value = '';
            currentKeyElement.textContent = keys[currentKeyIndex];
        }

        keysPressed++;
        updateStats();
    });

    function updateStats() {
        keysPressedElement.textContent = keysPressed;
        const accuracy = keysPressed > 0 ? Math.round((correctKeysPressed / keysPressed) * 100) : 0;
        accuracyElement.textContent = accuracy + '%';
    }
});