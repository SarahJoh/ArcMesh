<!DOCTYPE html>
<html>
    <head>
        <title>Contact</title>
</head>
<body>
<?php

    if(isset($_POST['submit'])) {

        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailTo = "sarahjoh19@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "Neue Mail von ".$name." erhalten.\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        echo "Your mail has been sent.";
    }
?>
</body>
</html>