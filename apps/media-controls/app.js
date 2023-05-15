"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// app/data.ts
function decp(x) {
    return require("heatshrink").decompress(atob(x));
}
var mediaBtns = {
    frwd: decp("nc7gIgdh//AAX+gEDAwf/8EAAwgOBn4OFDggOBgIGE//ACov4g4OFFYokBj4GE/hBF/+Av4GE+A6I9//746D/n//I6Ex//F4Q6B+H/8I6D/0P/gOBHQXA/+BHQf4h/wBwI6CgA3CAQR/B4AOBHQUA/ALBHQWAh8ABwI6CgHgDQQ6BgEMBwI6DgeADQQ6BgHwCoI6Dn0Av46KgY3CHQf/YYQ6Cn/gTwJ1J4f/w51E//xWAk//wcBWBLrzAAg6HEgqmBBwuABwvgBwqtBADoA="),
    bcwd: decp("nc7gIgdh//AAX+gEDAwf/8EAAwgOBn4OFDggOBgIGE//ACov4g4OFFYokBj4GE/hBF/+Av4GE+A6J/v//Y6En/+v46D4//x46D+H/8I6D/kf/E/HQcD/waBHQXAv+AHQYCBDQI6C/kB/AaBHQUAn0AHQfAg+ADQI6B+EA8AaBD4P8gEYUwI6C4EDwA6DBwN4DQQfB4EPwA6LAQIaBHQX8g/4HQYOB/+BOpfD/+HOof8EQKwE5//z6wLdeQADHQ4kF/ykBFYoOF8AOF/EAADo"),
    mins: decp("nc7gIgdh//AAX+gEDAwf/8EAAwgOBn4OFDggOBgIGE//ACov4g4OFFYokBj4GE/hBF/+Av4GE+A6/HRSOBAAI6DwCtDBIPwAwIaBHQIVDn46C4AGBDQV//AkDHQQkCGAJ1/HX46EEgqmBBwuABwvgBwqtDADYA=="),
    play: decp("nc7gIgdh//AAX+gEDAwf/8EAAwgOBn4OFDggOBgIGE//ACov4g4OFFYokBj4GE/hBF/+Av4GE+A6Qz46F+A6F/xEDHQRTDHQX4E4Y6CRwY6CQ4IKBHQX8SwYhCwEAFAI6DVoI6EWgY6DBwQ6DAwIhCHQQVCHQgoBHRZYCHQh1FK4R1LXQY6CVYY6C87r/HRokFOQIOFwAOFTwIOEWgQAcA=="),
    plus: decp("nc7gIgdh//AAX+gEDAwf/8EAAwgOBn4OFDggOBgIGE//ACov4g4OFFYokBj4GE/hBF/+Av4GE+A6J/ggCHQYKCHQfgBQQ6C/gKDDIWAHQvwBQY6B/wKDHQXABQQvDBQYvBUoILBHQXAA4IlBHQP4AwIlBHQS8Cv46CWYLDCHQP8EgY6CEgV/HRR1zWA7ryAAY6HEgv+gAOFwAOFVoIOEYYQAcA=="),
    pause: decp("nc7gIgdh//AAX+gEDAwf/8EAAwgOBn4OFDggOBgIGE//ACov4g4OFFYokBj4GE/hBF/+Av4GE+A6IFwILCHQUABYguCBYYuCBYguCBYYuCBYgiBBYguCBYY6/HXzryAAg6HEgv+gAOFwAOF8AOF/EAADoA==")
};
var box = {
    1: [0, 0],
    2: [59, 0],
    3: [117, 0],
    4: [0, 59],
    5: [59, 59],
    6: [117, 59],
    7: [0, 117],
    8: [59, 117],
    9: [117, 117]
};
var clr = {
    wht: [1, 1, 1],
    blc: [0, 0, 0],
    red: [1, 0, 0],
    grn: [0, 1, 0],
    blu: [0, 0, 1],
    ylw: [1, 1, 0],
    mgt: [1, 0, 1],
    cyn: [0, 1, 1]
};
var theme = g.theme.dark ? {
    "dark": true,
    "bg": clr.blc,
    // Black background
    "fg": clr.wht,
    // White foreground
    "fg2": clr.grn
    // Blue for secondary elements
    // "bg2": clr.blc, // Black background for secondary elements
    // "fgH": clr.red, // Red for highlights
    // "bgH": clr.blc, // Black background for highlights
} : {
    "dark": false,
    "bg": clr.wht,
    // White background
    "fg": clr.blc,
    // Black foreground
    "fg2": clr.red
    // Green for secondary elements
    // "bg2": clr.wht, // White background for secondary elements
    // "fgH": clr.red, // Red for highlights
    // "bgH": clr.wht, // White background for highlights
};
// app/render.ts
function render() {
    var _a, _b;
    var s = getState();
    var fg = theme.fg;
    g.clear();
    setColor(fg);
    var btns = getMediaBtns();
    for (var key in btns)
        btns[key]();
    if ((_a = s.musicState) === null || _a === void 0 ? void 0 : _a.timeOfMsg) {
        var _c = getAudioTime(s.musicState, ((_b = s.musicState) === null || _b === void 0 ? void 0 : _b.state) === "play"), pos = _c.pos, dur = _c.dur;
        g.setFont("6x8", 2);
        var startPosDur = (120 - g.stringWidth(dur)) / 2;
        g.drawString(dur, startPosDur, 98);
        var startPosPos = (120 - g.stringWidth(pos)) / 2;
        g.drawString(pos, startPosPos, 78);
        g.setFont("Vector", 15);
        var _d = s.musicState, artist = _d.artist, track = _d.track;
        var maxWidth = g.getWidth() * 2 / 3;
        var trackLines = g.wrapString(track, maxWidth);
        var artistLines = g.wrapString(artist, maxWidth);
        if (trackLines.length > 2) {
            trackLines = [trackLines[0], trackLines[1] + "..."];
        }
        if (artistLines.length > 2) {
            artistLines = [artistLines[0] + "..."];
        }
        var lines = trackLines.concat([""], artistLines);
        var y = 0;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            g.drawString(line, 0, y);
            y += g.getFontHeight();
        }
    }
    g.flip();
}
// app/state.ts
var state = {
    now: Date.now(),
    musicState: null,
    playPause: "pause"
};
var setState;
var getState = function () { return state; };
function debounce(func, wait) {
    var timeoutId;
    return function () {
        var args = arguments;
        clearTimeout(timeoutId || 0);
        timeoutId = setTimeout(function () {
            func.apply(this, args);
        }, wait);
    };
}
var debouncedRenderOnState = debounce(render, 200);
setState = function (stateUpdate) {
    var s = __assign(__assign({}, state), stateUpdate);
    var mS = stateUpdate.musicState;
    if (mS)
        s.playPause = mS.state === "play" ? "pause" : "play";
    state = s;
    debouncedRenderOnState();
};
// app/utils.ts
var setColor = function (clr2) { return g.setColor(clr2[0], clr2[1], clr2[2]); };
var getMediaBtns = function () { return ({
    // Top Left 4 squares
    // g.drawImage(mediaBtns.power, 0, 0);
    // g.drawImage(mediaBtns.power, 59, 0);
    // g.drawImage(mediaBtns.power, 0, 59);
    // g.drawImage(mediaBtns.power, 59, 59);
    // Volume: [+ | -]
    3: function () {
        g.drawImage(mediaBtns.plus, 117, 0);
    },
    // volUp
    6: function () {
        g.drawImage(mediaBtns.mins, 117, 59);
    },
    // volDn
    // Media: [<< | > | >>]
    7: function () {
        g.drawImage(mediaBtns.bcwd, 0, 117);
    },
    // back
    8: function () {
        g.drawImage(mediaBtns[getState().playPause], 59, 117);
    },
    // playPause
    9: function () {
        g.drawImage(mediaBtns.frwd, 117, 117);
    }
    // frwd
}); };
function debounce2(func, wait) {
    var timeoutId;
    return function () {
        var args = arguments;
        clearTimeout(timeoutId || 0);
        timeoutId = setTimeout(function () {
            func.apply(this, args);
        }, wait);
    };
}
function sendBT(obj) {
    Bluetooth.println(JSON.stringify(obj));
}
var formatAudioTime = function (timeInSeconds) {
    var h = Math.floor(timeInSeconds / 3600);
    var m = Math.floor(timeInSeconds % 3600 / 60);
    var s = Math.floor(timeInSeconds % 60);
    return "".concat(h ? "".concat(h, ":") : "").concat(m < 10 ? "0".concat(m) : m, ":").concat(s < 10 ? "0".concat(s) : s);
};
function getAudioTime(data, isPlay) {
    var timeSinceMsg = getState().now - data.timeOfMsg;
    var currentPosition = Math.floor(data.position + (isPlay ? timeSinceMsg / 1e3 + 1 : 0));
    currentPosition = Math.floor(data.dur <= currentPosition ? data.dur : currentPosition);
    return {
        pos: formatAudioTime(currentPosition),
        dur: "-" + formatAudioTime(data.dur - currentPosition)
    };
}
// app/app.ts
setTimeout(function () {
    Bangle.setLCDBrightness(1);
    Bangle.setLocked(false);
    render();
    var debouncedRenderOnTouch = debounce2(render, 230);
    Bangle.on("touch", function (_btn, cor) {
        render();
        var x = cor.x;
        var y = cor.y;
        for (var i = 1; i < 10; i++) {
            var bN = i;
            if (!tapEvHandlers[i])
                continue;
            var bX = box[bN][0];
            var bY = box[bN][1];
            if (x >= bX && x < bX + 59 && y >= bY && y < bY + 59) {
                g.setColor(0, 1, 0);
                getMediaBtns()[bN]();
                tapEvHandlers[bN]();
                debouncedRenderOnTouch();
                return;
            }
        }
    });
    setInterval(function () {
        setState({ now: Date.now() });
    }, 1e3);
}, 0);
var tapEvHandlers = {
    1: function () {
    },
    2: function () {
    },
    4: function () {
    },
    5: function () {
    },
    // volume up
    3: function () {
        console.log("volume up");
        sendBT({ t: "music", n: "volumeup" });
    },
    // volume down
    6: function () {
        console.log("volume down");
        sendBT({ t: "music", n: "volumedown" });
    },
    // backward
    7: function () {
        console.log("previous");
        sendBT({ t: "music", n: "previous" });
        tigerMusicStateMsg();
    },
    // play/pause
    8: function (playPause) {
        if (playPause === void 0) { playPause = getState().playPause; }
        console.log("play/pause");
        sendBT({ t: "music", n: playPause });
    },
    // forward
    9: function () {
        console.log("next");
        sendBT({ t: "music", n: "next" });
        tigerMusicStateMsg();
    }
};
function tigerMusicStateMsg() {
    var try1 = getState().playPause;
    var try2 = try1 === "play" ? "pause" : "play";
    setTimeout(function () { return tapEvHandlers[8](try1); }, 0);
    setTimeout(function () { return tapEvHandlers[8](try2); }, 100);
}
global.GB = function (obj) {
    switch (obj.t) {
        case "musicinfo":
        case "musicstate": {
            if (obj.t === "musicstate")
                obj.timeOfMsg = Date.now();
            var musicState = __assign(__assign({}, getState().musicState || {}), obj);
            setState({ musicState: musicState });
        }
    }
};
