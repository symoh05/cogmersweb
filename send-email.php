<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    if (!$name || !$email || !$message) {
        echo "error";
        exit;
    }

    $to = "sngugi175@example.com";
    $subject = "New Message from Cogmers Website";

    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: no-reply@yourwebsite.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
