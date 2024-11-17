<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Validate required fields
    if (!$name || !$email || !$message) {
        echo "error";  // Return error if validation fails
        exit;
    }

    // Email recipient
    $to = "sngugi175@gmail.com";  // Your email address
    $subject = "New Message from Website";

    // Email content
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: no-reply@yourwebsite.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";  // Return success if email was sent
    } else {
        // Log the error for debugging (optional)
        error_log("Email failed to send to $to.\nHeaders: $headers\nBody: $body\n", 3, "email_errors.log");
        echo "error";  // Return error if mail failed
    }
}
?>

<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Validate required fields
    if (!$name || !$email || !$message) {
        echo "error: Missing required fields";
        exit;
    }

    // Email recipient
    $to = "sngugi175@gmail.com";  // Your email address
    $subject = "New Message from Website";

    // Email content
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: no-reply@yourwebsite.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";  // Return success if email was sent
    } else {
        // Log the error for debugging (optional)
        error_log("Email failed to send to $to.\nHeaders: $headers\nBody: $body\n", 3, "email_errors.log");
        echo "error: Mail failed to send.";
    }
}
?>
