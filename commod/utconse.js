const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const buffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 2, audioCtx.sampleRate);
