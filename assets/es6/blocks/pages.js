const pages = () => {
    try {
        const mainPages = document.querySelectorAll('section.main__page.count'),
              dotsField = document.querySelector('.main__dots'),
              menuItems = document.querySelectorAll('.header__menu-item'),
              promoBtn = document.querySelector('.page__promo .button');


        if (dotsField) {
            for (let i = 0; i < mainPages.length; i++) {
                const newDot = document.createElement('div');
                newDot.classList.add('main__dots-item');
                newDot.innerHTML = '<span></span>';
    
    
                dotsField.append(newDot);
            }
        }

        const dots = dotsField ? dotsField.querySelectorAll('.main__dots-item') : [];

        let num = 0,
            list = false,
            isModal = false;

        const setPage = () => {
            if (document.querySelector('main.main')) {
                dots.forEach(item => item.classList.remove('active'));
                mainPages.forEach(item => item.classList.remove('active'));
                menuItems.forEach(item => item.classList.remove('active'));
                document.querySelector('.new-news-cont').classList.remove('active');

                dots[num].classList.add('active');
                mainPages[num].classList.add('active');
                menuItems[num].classList.add('active');
            }
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
                console.log(e.target.textContent);
                if (e.target.textContent.trim() != 'Новости' && e.target.textContent.trim() != 'News') {
                    e.preventDefault();

                    num = i;
                    setPage();
                }
            });
        });

        if (promoBtn) {
            promoBtn.addEventListener('click', (e) => {
                e.preventDefault();
    
                num = 1;
                setPage();
            });
        }        

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
                    }, 900);
                }
            }
        }

        window.addEventListener('wheel', (e) => {
            if (!isModal) {
                moveAnim(e.deltaY);
            }
        });

        let startPos = 0;
        
        window.addEventListener('touchstart', (e) => {
            startPos = e.changedTouches[0].screenY;
        });
    
        window.addEventListener('touchend', (e) => {
            if (!isModal) {
                if (startPos - e.changedTouches[0].screenY > 50) {
                    moveAnim(1);
                } else if (startPos - e.changedTouches[0].screenY < -50) {
                    moveAnim(-1);
                }
            }
        });

        const modal = document.querySelector('.modal'),
              targetBtn = document.querySelectorAll('.modal-targ'),
              newTitle = document.querySelector('.new-title'),
              backTitle = document.querySelector('.back-title');

        if (newTitle) {
            newTitle.addEventListener('click', (e) => {
                if (window.innerWidth >= 992) {
                    e.preventDefault();
                    mainPages.forEach(item => item.classList.remove('active'));
                    document.querySelector('.new-news-cont').classList.add('active');
                }
            });

            backTitle.addEventListener('click', () => {
                document.querySelector('.new-news-cont').classList.remove('active');
                setPage();
            });
        }

        targetBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                const modalItem = modal.querySelector(`#${btn.getAttribute('data-modal')}`);

                if (modalItem) {
                    isModal = true;
                    //mainPages.forEach(item => item.classList.remove('active'));
                    document.querySelector('body').classList.add('fixed');
                    document.querySelector('html').classList.add('fixed');

                    modal.classList.add('active');
                    modalItem.classList.add('active');
                }
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__close')) {
                isModal = false;
                setPage();

                modal.querySelectorAll('.modal__item').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelector('body').classList.remove('fixed');
                document.querySelector('html').classList.remove('fixed');
                modal.querySelector('#message .wrap').classList.add('active');
                modal.querySelector('#message .wrap.success').classList.remove('active');
                modal.classList.remove('active');
            }
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default pages;