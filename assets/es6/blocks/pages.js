const pages = () => {
    try {
        const mainPages = document.querySelectorAll('.main__page'),
              dotsField = document.querySelector('.main__dots');

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

            dots[num].classList.add('active');
            mainPages[num].classList.add('active');
        }

        setPage();

        dots.forEach((item, i) => {
            item.addEventListener('click', () => {
                num = i;
                setPage();
            });
        });

        window.addEventListener('wheel', (e) => {
            let move = true;

            if (!list) {
                if (e.deltaY >= 0) {
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
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default pages;