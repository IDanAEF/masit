<?=!in_array($_SERVER['REQUEST_URI'], $pageWithDots) ? '</div>' : ''?>
<div class="modal">
    <?php
        $ip = '';
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
                                        
        $countryData = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$ip));
        $phonePlace = '';
        $phoneMask = '';

        $masks = json_decode(file_get_contents(__DIR__.'/countryes.json'), true);
                                        
        for ($c = 0; $c < count($masks); $c++) {
            if ($masks[$c]['iso'] == $countryData['geoplugin_countryCode']) {
                $phonePlace = $masks[$c]['code'].' '.str_replace('#', '_', (is_array($masks[$c]['mask']) ? $masks[$c]['mask'][0] : $masks[$c]['mask']));
                $phoneMask = $masks[$c]['code'].' '.str_replace('#', '9', (is_array($masks[$c]['mask']) ? $masks[$c]['mask'][0] : $masks[$c]['mask']));
                break;
            }
        }
    ?>
    <div class="modal__item main__page" id="message">
        <div class="modal__close"></div>
        <div class="circle circle_915 circle1 mouse-move right"></div>
        <div class="circle circle_810 circle2 mouse-move"></div>
        <div class="main__page-wrap wrap wrap_center text_center active">
            <img src="/assets/images/message.png" alt="" class="back svg fade">
            <h2 class="title title_fz60 text_white-1 text_upper text_ls01 fade fade-top">фОРМА ОБРАТНОЙ СВЯЗИ</h2>
            <img src="/assets/images/svg/mess-line.svg" alt="" class="line fade">
            <form action="" class="subtitle text_fz16-1 text_ffHelv text_ls005 fade fade-bott">
                <div class="form_block label-top">
                    <label for="feedname">Имя <span class="text_green">*</span></label>
                    <input id="feedname" type="text" name="feedname" required>
                    <div class="sep"></div>
                </div>
                <div class="form_block label-top">
                    <label for="feedphone"><?=$phonePlace ? $phonePlace : '+7 (___) ___-__-__' ?> <span class="text_green">*</span></label>
                    <input id="feedphone" type="tel" name="feedphone" data-format="<?=$phonePlace ? $phonePlace : '+7 (___) ___-__-__' ?>" required>
                    <div class="sep"></div>
                </div>
                <div class="form_block label-top">
                    <label for="feedmail">Email <span class="text_green">*</span></label>
                    <input id="feedmail" type="email" name="feedmail" required>
                    <div class="sep"></div>
                </div>
                <div class="form_block">
                    <textarea name="feedtext" id="feedtext" placeholder="Пожелания по проекту"></textarea>
                    <div class="sep"></div>
                </div>
                <button class="button button_green">Раcсчитать стоимость</button>
                <div class="form_block checkbox text_fz12">
                    <label for="feedcheck"><span><img src="/assets/images/svg/check.svg" alt=""></span> Согласие на обработку персональных данных</label>
                    <input id="feedcheck" type="checkbox" name="feedcheck" required>
                </div>
            </form>
        </div>
        <div class="main__page-wrap wrap wrap_center text_center success">
            <img src="/assets/images/message2.png" alt="" class="back svg fade">
            <h2 class="title title_fz60 text_white-1 text_upper text_ls01 fade fade-top">спасибо!</h2>
            <img src="/assets/images/svg/mess-line.svg" alt="" class="line fade">
            <div class="succ_text text_fz24 text_white text_ffMont">Ваше сообщение отправлено</div>
        </div>
    </div>
</div>
<div class="mobile-menu">
    <div class="mobile-menu__close">
        <span></span>
        <span></span>
    </div>
    <a href="/" class="header__logo">
        <img src="/assets/images/svg/green_logo.svg" alt="logo">
    </a>
    <ul class="mobile-menu__list">
        <?php
            foreach($pagesData as $key => $item) {
                if ($item['menu']) {
                ?>
                <li class="mobile-menu__item title_fz30 text_ffHelv text_white<?=($_SERVER['REQUEST_URI'] == $key ? ' active' : '')?>">
                    <a href="<?=$key?>">
                        <?=$item['name']?>
                    </a>
                </li>
                <?php
                }
            }
        ?>
    </ul>
    <button class="mobile-menu__button text_fz16-1 text_ls005 text_ffHelv button button_green modal-targ" data-modal="message">Раcсчитать стоимость</button>
</div>
<script src="/assets/js/script.js"></script>
</body>
</html>