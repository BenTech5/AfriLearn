function sendVerificationCode() {
    // Add functionality to send verification code
    alert('Verification code sent!');
}

function resendVerificationCode() {
    // Add functionality to resend verification code
    alert('Verification code resent!');
}

document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add functionality to verify the code and reset the password
    alert('Password reset successful!');
});