const timer1 = new easytimer.Timer();
const timeInput1 = document.getElementById('timeInput1');

timer1.addEventListener('secondsUpdated', function () {
    const timeValues = timer1.getTimeValues();
    timeInput1.value = timeValues.toString();
});

timer1.addEventListener('targetAchieved', function () {
    timeInput1.value = "00:00:00";
    document.getElementById('stopButton1').classList.add('hiddenButton');
    document.getElementById('startButton1').classList.remove('hiddenButton');
    
    timerSound.loop = true;
    timerSound.play ();

    $("#dialog1").dialog({
        width: 600,
        buttons: {
            "ОК": function() {
                $(this).dialog("close");
                timerSound.pause();
                timerSound.currentTime = 0;
            }
        }
    });
});

document.getElementById('startButton1').addEventListener('click', function () {
    const timeValue = timeInput1.value;
    const timeParts = timeValue.split(':').map(Number);
    const totalSeconds = timeParts.reverse().reduce((acc, time, index) => {
        return acc + time * Math.pow(60, index);
    }, 0);

    if (totalSeconds > 0) {
        timer1.start({ countdown: true, startValues: { seconds: totalSeconds } });
        document.getElementById('startButton1').classList.add('hiddenButton');
        document.getElementById('stopButton1').classList.remove('hiddenButton');
    } else {
        alert("Введите корректное время.");
    }
});

document.getElementById('stopButton1').addEventListener('click', function () {
    timer1.stop();
    document.getElementById('stopButton1').classList.add('hiddenButton');
    document.getElementById('startButton1').classList.remove('hiddenButton');
});


const timer2 = new easytimer.Timer();
const timeInput2 = document.getElementById('timeInput2');

timer2.addEventListener('secondsUpdated', function () {
    const timeValues = timer2.getTimeValues();
    timeInput2.value = timeValues.toString();
});

timer2.addEventListener('targetAchieved', function () {
    timeInput1.value = "00:00:00";
	document.getElementById('stopButton2').classList.add('hiddenButton');
    document.getElementById('startButton2').classList.remove('hiddenButton');

    timerSound.loop = true;
    timerSound.play ();

    $("#dialog1").dialog({
        width: 500,
        modal: true,
        buttons: {
            "ОК": function() {
                $(this).dialog("close");
                timerSound.pause();
                timerSound.currentTime = 0;
            }
        }
    });
});

document.getElementById('startButton2').addEventListener('click', function () {
    const timeValue = timeInput2.value;
    const timeParts = timeValue.split(':').map(Number);
    const totalSeconds = timeParts.reverse().reduce((acc, time, index) => {
        return acc + time * Math.pow(60, index);
    }, 0);

    if (totalSeconds > 0) {
        timer2.start({ countdown: true, startValues: { seconds: totalSeconds } });
        document.getElementById('startButton2').classList.add('hiddenButton');
        document.getElementById('stopButton2').classList.remove('hiddenButton');
    } else {
        alert("Введите корректное время.");
    }
});

document.getElementById('stopButton2').addEventListener('click', function () {
    timer2.stop();
    document.getElementById('stopButton2').classList.add('hiddenButton');
    document.getElementById('startButton2').classList.remove('hiddenButton');
});

$(document).ready(function() {
    $('#styleLabel').text('Стиль: Профессионалы');
    $('#logoImage').attr('src', './img/logo_profi-02.svg');
    $('body').css('background-image', 'url("./img/background.svg")');
    $('body').css('background-color', 'rgba(189, 198, 203, 0.322)');
    $('.timeInput, input').css('color', 'rgb(0, 140, 0)');
    $('.timeInput').css('border', '8px solid rgb(0, 140, 0)');
    $('.svgButton .svgPath').css('fill', 'rgb(0, 140, 0)');

    $('.dropdown-item-style').on('click', function() {
        var selectedStyle = $(this).data('style');
        $('#styleLabel').text('Стиль: ' + selectedStyle);

        if (selectedStyle === 'Профессионалы') {
            $('#logoImage').attr('src', './img/logo_profi-02.svg');
            $('body').css('background-image', 'url("./img/background.svg")');
            $('body').css('background-color', 'rgba(189, 198, 203, 0.322)');
            $('.timeInput, input').css('color', 'rgb(0, 140, 0)');
            $('.timeInput').css('border', '8px solid rgb(0, 140, 0)');
            $('.svgButton .svgPath').css('fill', 'rgb(0, 140, 0)');
        } else if (selectedStyle === 'ДемоЭкзамен') {
            $('#logoImage').attr('src', './img/logo_demo.svg');
            $('body').css('background-image', 'url("./img/background_demo.svg")');
            $('body').css('background-color', 'none');
            $('.timeInput, input').css('color', 'white');
            $('.timeInput').css('border', '8px solid white');
            $('.svgButton .svgPath').css('fill', 'white');
        }
    });


    $('#timersLabel').text('Таймеров: 1');
    $('#timer2').addClass('hiddenTimer');
    $('.svgButton_start, .svgButton_pause').css('transform', 'translate(0, -25%)');

    $('.dropdown-item-timer').on('click', function() {
        var selectedTimers = $(this).data('timers'); 
        $('#timersLabel').text('Таймеров: ' + selectedTimers);

        if (selectedTimers === 1) {
            $('#timer2').addClass('hiddenTimer');
            $('.svgButton_start, .svgButton_pause').css('transform', 'translate(0, -25%)');

        } else {
            $('#timer2').removeClass('hiddenTimer'); 
            $('.svgButton_start, .svgButton_pause').css('transform', 'translate(0, 0)');
        }
    });
    
});
