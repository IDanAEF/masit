<?php
    require 'data.php';
    
    $page = $pagesData[$_SERVER['REQUEST_URI']];

    $title = $page && $page['title'] ? $page['title'] : $page['name'];  
?>
<!DOCTYPE html>
<html lang="en" <?=$_SERVER['REQUEST_URI'] == '/en/' ? 'class="fixed-base"' : ''?>>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.min.css">
    <title>Mas IT - <?=$title?></title>
</head>
<body <?=$_SERVER['REQUEST_URI'] == '/en/' ? 'class="fixed-base"' : ''?>>
    <header class="header text_fz16-1 text_ls005 text_ffHelv" <?=$_SERVER['REQUEST_URI'] != '/en/' ? 'style="position: absolute;"' : ''?>>
        <div class="header__left">
            <div class="header__burg">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="/en/" class="header__logo">
                <img src="/assets/images/svg/green_logo.svg" alt="logo">
            </a>
        </div>
        <ul class="header__menu">
            <?php
                foreach($pagesData as $key => $item) {
                    ?>
                    <li class="header__menu-item<?=($_SERVER['REQUEST_URI'] == $key ? ' active' : '')?>">
                        <a href="<?=$key?>">
                            <?=$item['name']?>
                        </a>
                    </li>
                    <?php
                }
            ?>
        </ul>
        <div class="header__right">
            <button class="header__button button button_green modal-targ" data-modal="message">Сalculate the cost</button>
            <div class="header__lang">
                <a href="/" class="text_green">RU</a>
                <span>EN</span>
                <img src="/assets/images/svg/plate_arrow_down.svg" alt="down_arrow">
            </div>
        </div>
    </header>