const createButton = (buttonNumber) => {
    const button = document.createElement('button');
    button.innerHTML = 'Click';
    button.addEventListener('click', () => {

        const div = document.createElement('div');
        div.innerHTML = `You clicked button number ${buttonNumber}`;

        const parentElement = button.parentElement;
        parentElement.replaceChild(div, button);
    });

    return button;
};

const createButtonsHolder = () => {
    const holder = document.createElement('div');
    
    for(let i = 1; i < 4; i++) {
        const button = createButton(i);
        holder.appendChild(button);
        holder.appendChild(document.createElement('br'));
    }

    return holder;
};

const buttonsHolder = createButtonsHolder();
document.getElementById('plain-js-root').appendChild(buttonsHolder);