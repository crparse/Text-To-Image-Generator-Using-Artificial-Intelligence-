function addPwaFunction() {
    if (!('serviceWorker' in navigator)) return
    // window.addEventListener('load', function () {
    // })
    navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        })
        .then(
            function(registration) {},
            function(err) {});
    window.pwaPrompt = undefined
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        pwaPrompt = e;
    });

    // $pwaButton.click((e) => {
    //   $pwaButton.css('display', 'none');
    //   deferredPrompt.prompt();
    //   deferredPrompt.userChoice.then((choiceResult) => {
    //     if (choiceResult.outcome === 'accepted') {
    //     } else {
    //     }
    //   });
    // });
    // window.addEventListener('DOMContentLoaded', () => {
    //   if (window.matchMedia('(display-mode: minimal-ui)').matches) {
    //   }
    // });
    window.addEventListener('appinstalled', (e) => {
        window.sensors && window.sensors.track("fotor_web$install$fotor_chrome_app", {})
    });
    // window.addEventListener('DOMContentLoaded', () => {
    //   if (window.matchMedia('(display-mode: minimal-ui)').matches) {
    //     window.resizeTo(screen.availWidth, screen.availHeight);
    //   }
    // });
}

addPwaFunction()