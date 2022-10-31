const pages = () => {
    try {
        const mainPages = document.querySelectorAll('.main__page'),
              dotsField = document.querySelector('.main__dots'),
              menuItems = document.querySelectorAll('.header__menu-item'),
              promoBtn = document.querySelector('.page__promo .button');

        for (let i = 0; i < mainPages.length; i++) {
            const newDot = document.createElement('div');
            newDot.classList.add('main__dots-item');
            newDot.innerHTML = '<span></span>';


            dotsField.append(newDot);
        }

        const dots = dotsField.querySelectorAll('.main__dots-item');

        let num = 0,
            list = false;

        const setPage = () => {
            dots.forEach(item => item.classList.remove('active'));
            mainPages.forEach(item => item.classList.remove('active'));
            menuItems.forEach(item => item.classList.remove('active'));

            dots[num].classList.add('active');
            mainPages[num].classList.add('active');
            menuItems[num].classList.add('active');
        }

        setPage();

        dots.forEach((item, i) => {
            item.addEventListener('click', () => {
                num = i;
                setPage();
            });
        });

        menuItems.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                num = i;
                setPage();
            });
        });

        promoBtn.addEventListener('click', (e) => {
            e.preventDefault();

            num = 1;
            setPage();
        });

        const moveAnim = (cord) => {
            let move = true;

            if (!list) {
                if (cord >= 0) {
                    if (num == mainPages.length - 1) {
                        move = false;
                    } else {
                        num++;
                    }
                } else {
                    if (num == 0) {
                        move = false;
                    } else {
                        num--;
                    }
                }

                if (move) {
                    setPage();
                    list = true;

                    setTimeout(() => {
                        list = false;
                    }, 1500);
                }
            }
        }

        window.addEventListener('wheel', (e) => {
            moveAnim(e.deltaY);
        });

        let startPos = 0;
        
        window.addEventListener('touchstart', (e) => {
            startPos = e.changedTouches[0].screenY;
        });
    
        window.addEventListener('touchend', (e) => {
            if (startPos - e.changedTouches[0].screenY > 50) {
                moveAnim(1);
            } else if (startPos - e.changedTouches[0].screenY < -50) {
                moveAnim(-1);
            }
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default pages;