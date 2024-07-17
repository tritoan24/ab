document.addEventListener('DOMContentLoaded', (event) => {
    var clipboard = new ClipboardJS('.copy-btn');

    clipboard.on('success', function(e) {
        var message = document.getElementById('copy-message');
        message.style.display = 'inline';
        setTimeout(function() {
            message.style.display = 'none';
        }, 2000);
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        alert('Copy thất bại. Vui lòng thử lại!');
    });
});