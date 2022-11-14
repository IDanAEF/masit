const other = () => {
    try {
        //header lang
        const headLang = document.querySelector('.header__lang');

        headLang.addEventListener('click', () => {
            headLang.classList.toggle('active');
        });
    } catch (e) {
        console.log(e.stack);
    }

    try {
        //async images
        const objects = document.getElementsByClassName('asyncImage');
        
        Array.from(objects).map((item) => {
            const img = new Image();
            img.src = item.dataset.src;
            
            img.onload = () => {
            item.classList.remove('asyncImage');
            return item.nodeName === 'IMG' ? 
                item.src = item.dataset.src :        
                item.style.backgroundImage = `url(${item.dataset.src})`;
            };
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default other;