require.config({
    baseUrl: PORTAL_URL,
    paths: {
        app: "++theme++justica_eleitoral/js/app/jsm",
        bootstrap: "++theme++justica_eleitoral/js/lib/bootstrap/bootstrap.min",
        popper: "++theme++justica_eleitoral/js/lib/bootstrap/popper.min",
        gijgo: "++theme++justica_eleitoral/js/lib/gijgo/gijgo.min",
        cookie: "++theme++justica_eleitoral/js/lib/js-cookie/js.cookie",
        breakpoints: "++theme++justica_eleitoral/js/lib/breakpoints/breakpoints",
        placeholder: "++theme++justica_eleitoral/js/lib/jquery-placeholder/jquery.placeholder.min",
        clipboard: "++theme++justica_eleitoral/js/lib/clipboard/clipboard.min",
        carousel: "++theme++justica_eleitoral/js/lib/owl-carousel/owl.carousel.min",
        fancybox: "++theme++justica_eleitoral/js/lib/fancybox/jquery.fancybox.min",
        "jquery-validation": "++theme++justica_eleitoral/js/lib/jquery-validation/jquery.validate.min",
        "additional-methods": "++theme++justica_eleitoral/js/lib/jquery-validation/additional-methods.min",
        "jquery-mask": "++theme++justica_eleitoral/js/lib/jquery-mask/jquery.mask.min",
        filesaver: "++theme++justica_eleitoral/js/lib/FileSaver/FileSaver.min",
        "green-audio-player": "++theme++justica_eleitoral/js/lib/green-audio-player/js/green-audio-player.min",
        "jquery-mark": "++theme++justica_eleitoral/js/lib/jquery-mark/jquery.mark.min",
        "jquery-bar-rating": "++theme++justica_eleitoral/js/lib/jquery-bar-rating/jquery.barrating.min",
        "jquery-ui": "++theme++justica_eleitoral/js/lib/jquery-ui/jquery-ui.min",
        "rybena": "++theme++justica_eleitoral/js/lib/rybena/rybena",
        "iframeResizer": "++theme++justica_eleitoral/js/lib/iframeresizer/iframeResizer.min",
        "jsQR": "++theme++justica_eleitoral/js/lib/jsQR/jsQR.min",
        "qrCodeReader": "++theme++justica_eleitoral/js/lib/qrcode-reader/js/qrcode-reader.min",
        "dompurify": "++theme++justica_eleitoral/js/lib/dompurify/purify.min"
    },
    urlArgs: 'v=240729',
    shim: {
        bootstrap: ["jquery"],
        "jquery-validation": ["jquery"],
        "additional-methods": ["jquery", "jquery-validation"],
    },
    map: {
        "*": {
            "popper.js": "popper",
        },
    },
});
