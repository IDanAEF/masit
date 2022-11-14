<?php
    if ($_POST) {
        $to = "masitoffice@icloud.com"; 
        $from = "masitoffice@icloud.com";
        $subject = "Mas It: Сообщение с формы обратной связи (Расчитать стоимость)"; 
        $messText = "
            Имя: ".$_POST['feedname']."
            Телефон: ".$_POST['feedphone']."
            E-mail: ".$_POST['feedmail']."
            Пожелания по проекту: ".$_POST['feedtext']."
        ";
        $message = "Информационное сообщение Mas It
        ------------------------------------------
        
        Вам было отправлено сообщение через форму обратной связи - 
        
        ".$messText."
        
        Сообщение сгенерировано автоматически"; 
        
        $boundary = "--".md5(uniqid(time())); 
        $mailheaders = "MIME-Version: 1.0\n"; 
        $mailheaders .="Content-Type: multipart/mixed; boundary=".$boundary."\n"; 
        $mailheaders .= "From: ".$from."\r\n";
        $multipart = "--".$boundary."\n"; 
        $multipart .= "Content-Type: text/plain; charset=UTF-8\n\n"; 
        $multipart .= $message."\n\n"; 
        
        // $filename = $_FILES['file']['name'];
        // $fp = fopen($_FILES['file']['tmp_name'], "r"); 
        // if ($fp) { 
        //     $file = fread($fp, filesize($_FILES['file']['tmp_name'])); 
        //     fclose($fp);
            
        //     $fileRight = '"'.$filename.'"';

        //     $message_part = "--".$boundary."\n"; 
        //     $message_part .= "Content-Type: application/octet-stream; name = ".$fileRight."\n"; 
        //     $message_part .= "Content-Transfer-Encoding: base64\n"; 
        //     $message_part .= "Content-Disposition: attachment; filename = ".$fileRight."\n\n"; 
        //     $message_part .= chunk_split(base64_encode($file))."\n"; 
            
        //     $multipart .= $message_part;
        // } 
        
        $rsf = mail($to,$subject,$multipart,$mailheaders);
    }
?>