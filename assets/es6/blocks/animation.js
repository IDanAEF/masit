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
        const moveTarget = document.querySelectorAll('.mouse-move');

        if (document.querySelector('main.main')) {
            moveTarget.forEach(item => {
                item.setAttribute('data-top', +window.getComputedStyle(item).top.replace('px', ''));
    
                if (item.classList.contains('right')) {
                    item.setAttribute('data-right', +window.getComputedStyle(item).right.replace('px', ''));
                } else {
                    item.setAttribute('data-left', +window.getComputedStyle(item).left.replace('px', ''));
                }
            });
    
            window.addEventListener('mousemove', (e) => {
                if (window.innerWidth >= 1024) {
                    document.querySelector('.main__page.active').querySelectorAll('.mouse-move').forEach(item => {
                        item.style.top = `${+item.getAttribute('data-top') + (e.pageY - window.innerHeight / 2) / 6}px`;
    
                        if (item.classList.contains('right')) {
                            item.style.right = `${+item.getAttribute('data-right') - (e.pageX - window.innerWidth / 2) / 12}px`;
                        } else {
                            item.style.left = `${+item.getAttribute('data-left') + (e.pageX - window.innerWidth / 2) / 12}px`;
                        }
                    });
                }
            });
        }
    } catch (e) {
        console.log(e.stack);
    }
}

export default animation;