const pages = () => {
    try {
        const sliderPagePlace = document.querySelector('.slider-page'),
              mainPages = document.querySelectorAll('.slider-page-item'),
              dotsField = document.querySelector('.main__dots'),
              menuItems = document.querySelectorAll('.header__menu-item'),
              //promoBtn = document.querySelector('.page__promo .button'),
              newsCont = document.querySelectorAll('.new-news-cont');

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
            dots.forEach(item => item.classList.remove('active'));
            mainPages.forEach(item => item.classList.remove('active'));

            newsCont.length > 0 ? newsCont.forEach(cont => cont.classList.remove('active')) : '';

            if (sliderPagePlace.classList.contains('menu-activity')) {
                menuItems.forEach(item => item.classList.remove('active'));
                menuItems[num].classList.add('active');
            }

            dots[num].classList.add('active');
            mainPages[num].classList.add('active');
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

        if (sliderPagePlace) {
            setPage();

            dots.forEach((item, i) => {
                item.addEventListener('click', () => {
                    num = i;
                    setPage();
                });
            });

            menuItems.forEach((item, i) => {
                item.addEventListener('click', (e) => {
                    if (sliderPagePlace.classList.contains('menu-activity')) {
                        e.preventDefault();

                        num = i;
                        setPage();
                    } else {
                        e.preventDefault();

                        window.location.href = document.querySelector('body').getAttribute('data-home');
                    }
                });
            });

            // if (promoBtn) {
            //     promoBtn.addEventListener('click', (e) => {
            //         e.preventDefault();
        
            //         num = 1;
            //         setPage();
            //     });
            // }        

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
        }

        const modal = document.querySelector('.modal'),
              targetBtn = document.querySelectorAll('.modal-targ'),
              newTitle = document.querySelectorAll('.new-title'),
              backTitle = document.querySelector('.back-title');

        if (newTitle.length > 0) {
            newTitle.forEach(title => {
                title.addEventListener('click', (e) => {
                    if (window.innerWidth >= 992) {
                        e.preventDefault();
                        mainPages.forEach(item => item.classList.remove('active'));
                        document.querySelector(`.new-news-cont[data-new="${title.getAttribute('data-new')}"]`).classList.add('active');
                    }
                });
            });

            backTitle.addEventListener('click', () => {
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

                    modal.classList.add('active');
                    modalItem.classList.add('active');
                }
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__close')) {
                isModal = false;
                //setPage();

                modal.querySelectorAll('.modal__item').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelector('body').classList.remove('fixed');
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