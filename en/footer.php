<?=!in_array($_SERVER['REQUEST_URI'], $pageWithDots) ? '</div>' : ''?>
<div class="modal">
    <div class="modal__item main__page" id="message">
        <div class="modal__close"></div>
        <div class="circle circle_915 circle1 mouse-move right"></div>
        <div class="circle circle_810 circle2 mouse-move"></div>
        <div class="main__page-wrap wrap wrap_center text_center active">
            <img src="/assets/images/message.png" alt="" class="back svg fade">
            <h2 class="title title_fz60 text_white-1 text_upper text_ls01 fade fade-top">FEEDBACK FORM</h2>
            <img src="/assets/images/svg/mess-line.svg" alt="" class="line fade">
            <form action="" class="subtitle text_fz16-1 text_ffHelv text_ls005 fade fade-bott">
                <div class="form_block label-top">
                    <label for="feedname">Name <span class="text_green">*</span></label>
                    <input id="feedname" type="text" name="feedname" required>
                    <div class="sep"></div>
                </div>
                <div class="form_block label-top">
                    <label for="feedphone">+7 (___) ___-__-__ <span class="text_green">*</span></label>
                    <input id="feedphone" type="tel" name="feedphone" data-format="+7 (___) ___-__-__" required>
                    <div class="sep"></div>
                </div>
                <div class="form_block label-top">
                    <label for="feedmail">Email <span class="text_green">*</span></label>
                    <input id="feedmail" type="email" name="feedmail" required>
                    <div class="sep"></div>
                </div>
                <div class="form_block">
                    <textarea name="feedtext" id="feedtext" placeholder="Project suggestions"></textarea>
                    <div class="sep"></div>
                </div>
                <button class="button button_green">Calculate the cost</button>
                <div class="form_block checkbox text_fz12">
                    <label for="feedcheck"><span><img src="/assets/images/svg/check.svg" alt=""></span> Consent to the processing of personal data</label>
                    <input id="feedcheck" type="checkbox" name="feedcheck" required>
                </div>
            </form>
        </div>
        <div class="main__page-wrap wrap wrap_center text_center success">
            <img src="/assets/images/message2.png" alt="" class="back svg fade">
            <h2 class="title title_fz60 text_white-1 text_upper text_ls01 fade fade-top">thank you!</h2>
            <img src="/assets/images/svg/mess-line.svg" alt="" class="line fade">
            <div class="succ_text text_fz24 text_white text_ffMont">Your message has been sent</div>
        </div>
    </div>
</div>
<script src="/assets/js/script.js"></script>
</body>
</html>