/* ======================================================================== */
/* Copyright (c) 2020 Jungebluth Consulting                                 */
/* ------------------------------------------------------------------------ */
/* Historie : xx.xx.xxxx (Erstellung)                                       */
/*                                                                          */
/* Azure DevOps                                                             */
/* ------------                                                             */
/* ======================================================================== */

// https://github.com/mebjas/html5-qrcode
// https://blog.minhazav.dev/HTML5-QR-Code-scanning-launched-v1.0.1/

function QRCodeScanner(str_info) {

	function onScanSuccess(qrCodeMessage) {
		// handle on success condition with the decoded message
		if (confirm('Dekodiert wurde:\n\n' + qrCodeMessage + '\n\nSoll dies übernommen werden?')) {
			// Save it!
		} else {
			// Do nothing!
		}
	}

	function onScanFailure(error) {
		// handle scan failure, usually better to ignore and keep scanning
		console.warn(`QR error = ${error}`);
	}

	var html5QrcodeScanner = new Html5QrcodeScanner(
		"reader",
		{
			// fps - Integer, Example = 10
			// A.K.A frame per second, the default value for this is 2 but it
			// can be increased to get faster scanning.Increasing too high
			// value could affect performance.Value > 1000 will simply fail.
			fps: 10,

			// qrbox - Integer, Example = 250
			// Use this property to limit the region of the viewfinder you
			// want to use for scanning.The rest of the viewfinder would be
			// shaded.For example by passing config { qrbox: 250 }, the screen
			// will look like. If you do not pass any value, the whole
			// viewfinder would be used for scanning.Note: this value has to
			// be smaller than the width and height of the QR code
			// HTML element.
			qrbox: 250
		},

		/* verbose= */ true
	);

	html5QrcodeScanner.render(onScanSuccess, onScanFailure);

	return 0;
}

/* ------------------------------------------------------------------------ */
/* Ende der Datei                                                           */
/* ------------------------------------------------------------------------ */