const animation = () => {
    try {
        //header menu
        const headerMenu = document.querySelectorAll('.header__menu-item');

        let delay = 0.88;

        headerMenu.forEach(item => {
            item.style.cssText = `transition: 0.6s all ${delay}s`;
            item.classList.add('top');
            delay += 0.11;
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default animation;