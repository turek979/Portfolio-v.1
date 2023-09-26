<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $topic = $_POST["topic"];
    $message = $_POST["message"];

    // Compose the email message
    $to = "turek979@gmail.com";
    $subject = "Contact Form Submission: $topic";
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Topic: $topic\n";
    $message_body .= "Message:\n$message";

    // Send the email
    $headers = "From: $email";
    if (mail($to, $subject, $message_body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    echo "Access denied.";
}
?>
