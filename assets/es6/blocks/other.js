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
}

export default other;