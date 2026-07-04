<?php
// Set headers — restrict origin to same domain in production
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$host   = isset($_SERVER['HTTP_HOST'])   ? $_SERVER['HTTP_HOST']   : '';

// Allow the request's own origin (same-domain XHR on GoDaddy) or CORS from the site host
header("Access-Control-Allow-Origin: " . ($origin ?: '*'));
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle OPTIONS preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed. Only POST requests are allowed."]);
    exit();
}

// Get raw post data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON input."]);
    exit();
}

// Extract and sanitize input fields
$name    = isset($data['name'])    ? strip_tags(trim($data['name']))                            : '';
$email   = isset($data['email'])   ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL)   : '';
$subject = isset($data['subject']) ? strip_tags(trim($data['subject']))                         : '';
$message = isset($data['message']) ? strip_tags(trim($data['message']))                         : '';

// Validation matching frontend schema requirements
if (empty($name) || strlen($name) < 2) {
    http_response_code(400);
    echo json_encode(["error" => "Validation error", "details" => [["path" => ["name"], "message" => "Name must be at least 2 characters"]]]);
    exit();
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Validation error", "details" => [["path" => ["email"], "message" => "Please enter a valid email address"]]]);
    exit();
}

if (empty($subject) || strlen($subject) < 5) {
    http_response_code(400);
    echo json_encode(["error" => "Validation error", "details" => [["path" => ["subject"], "message" => "Subject must be at least 5 characters"]]]);
    exit();
}

if (empty($message) || strlen($message) < 10) {
    http_response_code(400);
    echo json_encode(["error" => "Validation error", "details" => [["path" => ["message"], "message" => "Message must be at least 10 characters"]]]);
    exit();
}

// ── Recipient Email Configuration ────────────────────────────────────────────
$to            = "Amarnath_vinodkumar@yahoo.com";
$email_subject = "New Inquiry: " . $subject;

// ── Email Body ────────────────────────────────────────────────────────────────
$email_body  = "You have received a new message from the Sachkhand website contact form.\n\n";
$email_body .= "Name:    $name\n";
$email_body .= "Email:   $email\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";

// ── From Header (domain-proper to reduce spam flags) ──────────────────────────
$clean_host = preg_replace('/^www\./', '', $host ?: 'sachkhandoils.com');
$from_email = "webmaster@" . $clean_host;

$headers  = "From: $name <$from_email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ── Send Email ────────────────────────────────────────────────────────────────
$mail_sent = @mail($to, $email_subject, $email_body, $headers);

if (!$mail_sent) {
    // Email delivery failed — log for server admin but still respond so
    // the client can proceed with the WhatsApp redirect
    error_log("[Sachkhand Contact] mail() failed for inquiry from: $email");
    http_response_code(201);
    echo json_encode([
        "success" => true,
        "message" => "Thank you for your inquiry. Please use the WhatsApp link to reach us directly.",
        "id"      => uniqid("inq_", true),
        "email_sent" => false
    ]);
    exit();
}

// ── Success Response ──────────────────────────────────────────────────────────
http_response_code(201);
echo json_encode([
    "success"    => true,
    "message"    => "Thank you for your inquiry. We will get back to you within 24 hours.",
    "id"         => uniqid("inq_", true),
    "email_sent" => true
]);
?>
