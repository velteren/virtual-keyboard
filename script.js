const line1data = [{
  code: 'Backquote', en: '`', enshift: '~', ru: 'ё', rushift: 'Ё',
}, {
  code: 'Digit1', en: '1', enshift: '!', ru: '1', rushift: '!',
}, {
  code: 'Digit2', en: '2', enshift: '@', ru: '2', rushift: '"',
}, {
  code: 'Digit3', en: '3', enshift: '#', ru: '3', rushift: '№',
}, {
  code: 'Digit4', en: '4', enshift: '$', ru: '4', rushift: ';',
}, {
  code: 'Digit5', en: '5', enshift: '%', ru: '5', rushift: '%',
}, {
  code: 'Digit6', en: '6', enshift: '^', ru: '6', rushift: ':',
}, {
  code: 'Digit7', en: '7', enshift: '&', ru: '7', rushift: '?',
}, {
  code: 'Digit8', en: '8', enshift: '*', ru: '8', rushift: '*',
}, {
  code: 'Digit9', en: '9', enshift: '(', ru: '9', rushift: '(',
}, {
  code: 'Digit0', en: '0', enshift: ')', ru: '0', rushift: ')',
}, {
  code: 'Minus', en: '-', enshift: '_', ru: '-', rushift: '_',
}, {
  code: 'Equal', en: '=', enshift: '+', ru: '=', rushift: '+',
}, {
  code: 'Backspace', en: 'BACKSPACE', enshift: 'BACKSPACE', ru: 'BACKSPACE', rushift: 'BACKSPACE',
},
];
const line2data = [{
  code: 'Tab', en: 'TAB', enshift: 'TAB', ru: 'TAB', rushift: 'TAB',
}, {
  code: 'KeyQ', en: 'q', enshift: 'Q', ru: 'й', rushift: 'Й',
}, {
  code: 'KeyW', en: 'w', enshift: 'W', ru: 'ц', rushift: 'Ц',
}, {
  code: 'KeyE', en: 'e', enshift: 'E', ru: 'у', rushift: 'У',
}, {
  code: 'KeyR', en: 'r', enshift: 'R', ru: 'к', rushift: 'К',
}, {
  code: 'KeyT', en: 't', enshift: 'T', ru: 'е', rushift: 'Е',
}, {
  code: 'KeyY', en: 'y', enshift: 'Y', ru: 'н', rushift: 'Н',
}, {
  code: 'KeyU', en: 'u', enshift: 'U', ru: 'г', rushift: 'Г',
}, {
  code: 'KeyI', en: 'i', enshift: 'I', ru: 'ш', rushift: 'Ш',
}, {
  code: 'KeyO', en: 'o', enshift: 'O', ru: 'щ', rushift: 'Щ',
}, {
  code: 'KeyP', en: 'p', enshift: 'P', ru: 'з', rushift: 'З',
}, {
  code: 'BracketLeft', en: '[', enshift: '{', ru: 'х', rushift: 'Х',
}, {
  code: 'BracketRight', en: ']', enshift: '}', ru: 'ъ', rushift: 'Ъ',
}, {
  code: 'Backslash', en: '\\', enshift: '|', ru: '\\', rushift: '/',
},
];
const line3data = [{
  code: 'CapsLock', en: 'CAPS LOCK', enshift: 'CAPS LOCK', ru: 'CAPS LOCK', rushift: 'CAPS LOCK',
}, {
  code: 'KeyA', en: 'a', enshift: 'A', ru: 'ф', rushift: 'Ф',
}, {
  code: 'KeyS', en: 's', enshift: 'S', ru: 'ы', rushift: 'Ы',
}, {
  code: 'KeyD', en: 'd', enshift: 'D', ru: 'в', rushift: 'В',
}, {
  code: 'KeyF', en: 'f', enshift: 'F', ru: 'а', rushift: 'А',
}, {
  code: 'KeyG', en: 'g', enshift: 'G', ru: 'п', rushift: 'П',
}, {
  code: 'KeyH', en: 'h', enshift: 'H', ru: 'р', rushift: 'Р',
}, {
  code: 'KeyJ', en: 'j', enshift: 'J', ru: 'о', rushift: 'О',
}, {
  code: 'KeyK', en: 'k', enshift: 'K', ru: 'л', rushift: 'Л',
}, {
  code: 'KeyL', en: 'l', enshift: 'L', ru: 'д', rushift: 'Д',
}, {
  code: 'Semicolon', en: ';', enshift: ':', ru: 'ж', rushift: 'Ж',
}, {
  code: 'Quote', en: '\'', enshift: '"', ru: 'э', rushift: 'Э',
}, {
  code: 'Enter', en: 'ENTER', enshift: 'ENTER', ru: 'ENTER', rushift: 'ENTER',
},
];
const line4data = [{
  code: 'ShiftLeft', en: 'SHIFT', enshift: 'SHIFT', ru: 'SHIFT', rushift: 'SHIFT',
}, {
  code: 'KeyZ', en: 'z', enshift: 'Z', ru: 'я', rushift: 'Я',
}, {
  code: 'KeyX', en: 'x', enshift: 'X', ru: 'ч', rushift: 'Ч',
}, {
  code: 'KeyC', en: 'c', enshift: 'C', ru: 'с', rushift: 'С',
}, {
  code: 'KeyV', en: 'v', enshift: 'V', ru: 'м', rushift: 'М',
}, {
  code: 'KeyB', en: 'b', enshift: 'B', ru: 'и', rushift: 'И',
}, {
  code: 'KeyN', en: 'n', enshift: 'N', ru: 'т', rushift: 'Т',
}, {
  code: 'KeyM', en: 'm', enshift: 'M', ru: 'ь', rushift: 'Ь',
}, {
  code: 'Comma', en: ',', enshift: '<', ru: 'б', rushift: 'Б',
}, {
  code: 'Period', en: '.', enshift: '>', ru: 'ю', rushift: 'Ю',
}, {
  code: 'Slash', en: '/', enshift: '?', ru: '.', rushift: ',',
}, {
  code: 'ArrowUp', en: '▲', enshift: '▲', ru: '▲', rushift: '▲',
}, {
  code: 'ShiftRight', en: 'SHIFT', enshift: 'SHIFT', ru: 'SHIFT', rushift: 'SHIFT',
},
];
const line5data = [{
  code: 'ControlLeft', en: 'CTRL', enshift: 'CTRL', ru: 'CTRL', rushift: 'CTRL',
}, {
  code: 'MetaLeft', en: '', enshift: '', ru: '', rushift: '',
}, {
  code: 'AltLeft', en: 'ALT', enshift: 'ALT', ru: 'ALT', rushift: 'ALT',
}, {
  code: 'Space', en: '', enshift: '', ru: '', rushift: '',
}, {
  code: 'AltRight', en: 'ALT', enshift: 'ALT', ru: 'ALT', rushift: 'ALT',
}, {
  code: 'ArrowLeft', en: '◄', enshift: '◄', ru: '◄', rushift: '◄',
}, {
  code: 'ArrowDown', en: '▼', enshift: '▼', ru: '▼', rushift: '▼',
}, {
  code: 'ArrowRight', en: '►', enshift: '►', ru: '►', rushift: '►',
}, {
  code: 'ControlRight', en: 'CTRL', enshift: 'CTRL', ru: 'CTRL', rushift: 'CTRL',
},
];

if (!localStorage.getItem('language')) localStorage.setItem('language', 'en');
let isCaps = false;
let isShift = false;

function createElem(className, tagName = 'div') {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
}

function createKey(obj) {
  const key = createElem(obj.code);
  key.classList.add('key');
  key.dataset.en = obj.en;
  key.dataset.enshift = obj.enshift;
  key.dataset.ru = obj.ru;
  key.dataset.rushift = obj.rushift;
  return key;
}

function renderKeyboard() {
  const wrapper = createElem('wrapper');
  const textArea = createElem('textarea', 'textarea');
  const keyboard = createElem('keyboard');
  const line1 = createElem('line1');
  line1data.forEach((item) => {
    const key = createKey(item);
    line1.append(key);
  });
  const line2 = createElem('line2');
  line2data.forEach((item) => {
    const key = createKey(item);
    line2.append(key);
  });
  const line3 = createElem('line3');
  line3data.forEach((item) => {
    const key = createKey(item);
    line3.append(key);
  });
  const line4 = createElem('line4');
  line4data.forEach((item) => {
    const key = createKey(item);
    line4.append(key);
  });
  const line5 = createElem('line5');
  line5data.forEach((item) => {
    const key = createKey(item);
    line5.append(key);
  });
  keyboard.append(line1, line2, line3, line4, line5);
  wrapper.append(textArea, keyboard);
  document.body.append(wrapper);
}

renderKeyboard();

//const TAB = document.querySelector('.Tab');
//const CAPS = document.querySelector('.CapsLock');
//const LSHIFT = document.querySelector('.ShiftLeft');
//const LCTRL = document.querySelector('.ControlLeft');
//const WIN = document.querySelector('.MetaLeft');
//const LALT = document.querySelector('.AltLeft');
//const SPACE = document.querySelector('.Space');
//const BACKSPACE = document.querySelector('.Backspace');
//const ENTER = document.querySelector('.Enter');
//const RSHIFT = document.querySelector('.ShiftRight');
//const RCTRL = document.querySelector('.ControlRight');
//const RALT = document.querySelector('.AltRight');

function renderKeys() {
  function winKey() {
    const win = document.querySelector('.MetaLeft');
    const winImg = createElem('winImg', 'img');
    winImg.src = '/assets/windows.png';
    win.append(winImg);
  }
  const lang = localStorage.getItem('language');
  const line1keys = document.querySelector('.line1').childNodes;
  line1keys.forEach((child) => {
    const tmp = child;
    const code = child.classList[0];
    let obj;
    line1data.forEach((item) => {
      if (Object.values(item).includes(code)) obj = item;
    });
    if (lang === 'en') {
      tmp.textContent = obj.en;
    } else {
      tmp.textContent = obj.ru;
    }
  });
  const line2keys = document.querySelector('.line2').childNodes;
  line2keys.forEach((child) => {
    const tmp = child;
    const code = child.classList[0];
    let obj;
    line2data.forEach((item) => {
      if (Object.values(item).includes(code)) obj = item;
    });
    if (lang === 'en') {
      tmp.textContent = obj.en;
    } else {
      tmp.textContent = obj.ru;
    }
  });
  const line3keys = document.querySelector('.line3').childNodes;
  line3keys.forEach((child) => {
    const tmp = child;
    const code = child.classList[0];
    let obj;
    line3data.forEach((item) => {
      if (Object.values(item).includes(code)) obj = item;
    });
    if (lang === 'en') {
      tmp.textContent = obj.en;
    } else {
      tmp.textContent = obj.ru;
    }
  });
  const line4keys = document.querySelector('.line4').childNodes;
  line4keys.forEach((child) => {
    const tmp = child;
    const code = child.classList[0];
    let obj;
    line4data.forEach((item) => {
      if (Object.values(item).includes(code)) obj = item;
    });
    if (lang === 'en') {
      tmp.textContent = obj.en;
    } else {
      tmp.textContent = obj.ru;
    }
  });
  const line5keys = document.querySelector('.line5').childNodes;
  line5keys.forEach((child) => {
    const tmp = child;
    const code = child.classList[0];
    let obj;
    line5data.forEach((item) => {
      if (Object.values(item).includes(code)) obj = item;
    });
    if (lang === 'en') {
      tmp.textContent = obj.en;
    } else {
      tmp.textContent = obj.ru;
    }
  });
  winKey();
}

renderKeys();

function runOnKeys(func, numOfCodes, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    if (codes.every((code) => pressed.has(code)) && numOfCodes === pressed.size) {
      pressed.clear();
      func();
    }
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  () => {
    if (localStorage.getItem('language') === 'en') {
      localStorage.setItem('language', 'ru');
    } else {
      localStorage.setItem('language', 'en');
    }
    renderKeys();
  },
  2,
  'ShiftLeft',
  'AltLeft',
);

document.addEventListener('keydown', (event) => {
  const { code } = event;
  const elem = document.querySelector(`.${code}`);
  elem.classList.add('key-active');
});

document.addEventListener('keyup', (event) => {
  const { code } = event;
  const elem = document.querySelector(`.${code}`);
  elem.classList.remove('key-active');
});
