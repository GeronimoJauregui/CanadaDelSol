window.Clipboard = (function(window, document, navigator) {
    var textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
            selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {        
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    copy = function(text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };

    return {
        copy: copy
    };
})(window, document, navigator);

const urlToClipboard1 = document.getElementById('shareButton');
const urlToClipboard2 = document.getElementById('shareButtonAlt');
let link = window.location.href;

urlToClipboard1.onclick = function() {
    if (navigator.share) {
        navigator.share({
            title: 'Cañada del Sol',
            text: 'Descubre más acerca de nuestros servicios en:',
          url: window.location.href
        }).then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(err => {
          console.log(`Couldn't share because of`, err.message);
        });
    } else {
    	swaler();
        Clipboard.copy(link);
    }
};

urlToClipboard2.onclick = function() {
    if (navigator.share) {
        navigator.share({
          title: 'Cañada del Sol',
          text: 'Descubre más acerca de nuestros servicios en:',
          url: window.location.href
        }).then(() => {
        	console.log('Thanks for sharing!');
        })
        .catch(err => {
          console.log(`Couldn't share because of`, err.message);
        });
    } else {
    	swaler();
        Clipboard.copy(link);
    }
};

function swaler(){
	swal("Link copiado", {
  			buttons: false,
  			timer: 1000,
		});
};