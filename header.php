<?php
    require 'data.php';
    
    $page = $pagesData[$_SERVER['REQUEST_URI']];

    $title = $page && $page['title'] ? $page['title'] : $page['name'];  
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.min.css">
    <title>Mas IT - <?=$title?></title>
</head>
<body>
    <header class="header text_fz16-1 text_ls005 text_ffHelv">
        <a href="/" class="header__logo">
            <img src="/assets/images/green_logo.svg" alt="logo">
        </a>
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
            <button class="header__button button button_green">Раcсчитать стоимость</button>
            <div class="header__lang">
                <span>RU</span>
                <img src="/assets/images/plate_arrow_down.svg" alt="down_arrow">
            </div>
        </div>
    </header>