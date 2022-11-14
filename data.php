<?php
    //Данные страниц

    /*
        $pagesData = [
            'ярлык страницы' => [
                'name' => название
                'title' => заголовок meta
                'descr' => описание meta
                'keywords' => ключевые слова meta
                'menu' => отображать в меню (да/нет)
            ],
            ...
        ]
    */
    $pagesData = [
        '/' => [
            'name' => 'Главная',
            'menu' => true
        ],
        '/design/' => [
            'name' => 'Дизайн',
            'menu' => true
        ],
        '/brand/' => [
            'name' => 'Брендинг',
            'menu' => true
        ],
        '/development/' => [
            'name' => 'Разработка',
            'menu' => true
        ],
        '/applications/' => [
            'name' => 'Приложения',
            'menu' => true
        ],
        '/marketing/' => [
            'name' => 'Маркетинг',
            'menu' => true
        ],
        '/steps/' => [
            'name' => 'Этапы работ',
            'menu' => true
        ],
        '/news/' => [
            'name' => 'Новости',
            'menu' => true
        ],
        '/contacts/' => [
            'name' => 'Контакты',
            'menu' => true
        ],
        '/projects/' => [
            'name' => 'Проекты',
            'menu' => false
        ]
    ];
?>