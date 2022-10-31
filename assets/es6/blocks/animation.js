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

    try {
        //mouse move
        const moveTarget = document.querySelectorAll('.circle');

        moveTarget.forEach(item => {
            item.setAttribute('data-top', +window.getComputedStyle(item).top.replace('px', ''));

            if (item.classList.contains('circle2')) {
                item.setAttribute('data-left', +window.getComputedStyle(item).left.replace('px', ''));
            } else {
                item.setAttribute('data-right', +window.getComputedStyle(item).right.replace('px', ''));
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (window.innerWidth >= 1024) {
                document.querySelector('.main__page.active').querySelectorAll('.circle').forEach(item => {
                    item.style.top = `${+item.getAttribute('data-top') + (e.pageY - window.innerHeight / 2) / 6}px`;
    
                    if (item.classList.contains('circle2')) {
                        item.style.left = `${+item.getAttribute('data-left') + (e.pageX - window.innerWidth / 2) / 13}px`;
                    } else {
                        item.style.right = `${+item.getAttribute('data-right') - (e.pageX - window.innerWidth / 2) / 13}px`;
                    }
                });
            }
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default animation;