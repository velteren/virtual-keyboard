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

const funcKeys = ['ControlLeft', 'ControlRight', 'Tab', 'Backspace', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'Space'];
const wrongClicks = ['line1', 'line2', 'line3', 'line4', 'line5', 'keyboard'];

let isCaps = false;
let isShift = false;
let ctrl = false;
let isTextSelected = false;

if (!localStorage.getItem('language')) localStorage.setItem('language', 'en');
if (!localStorage.getItem('clipboard')) localStorage.setItem('clipboard', '');

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
  textArea.setAttribute('id', 'textarea');
  const paragraph = createElem('paragraph', 'p');
  paragraph.innerHTML = 'Клавиатура создана в операционной системе Windows. <br> Нажмите Left SHIFT + Left ALT для смены языка';
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
  wrapper.append(textArea, keyboard, paragraph);
  document.body.append(wrapper);
}

renderKeyboard();

function renderKeys() {
  function winKey() {
    const win = document.querySelector('.MetaLeft');
    const winImg = createElem('winImg', 'img');
    winImg.src = './assets/windows.png';
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
  const keyz = document.querySelectorAll('.key');
  if (isCaps && !isShift) {
    keyz.forEach((item) => {
      const key = item;
      key.textContent = key.textContent.toUpperCase();
    });
  }
  if (isShift && lang === 'ru') {
    keyz.forEach((item) => {
      const key = item;
      key.textContent = key.dataset.rushift;
    });
  }
  if (isShift && lang === 'en') {
    keyz.forEach((item) => {
      const key = item;
      key.textContent = key.dataset.enshift;
    });
  }
  if (isCaps && isShift) {
    keyz.forEach((item) => {
      if (!funcKeys.includes(item.classList[0])) {
        const key = item;
        key.textContent = key.textContent.toLowerCase();
      }
    });
  }
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

runOnKeys(
  () => {
    isTextSelected = !isTextSelected;
    const textarea = document.querySelector('.textarea');
    textarea.focus();
    textarea.select();
  },
  2,
  'ControlLeft',
  'KeyA',
);

runOnKeys(
  () => {
    const textarea = document.querySelector('.textarea');
    if (isTextSelected) {
      navigator.clipboard.writeText(`${textarea.value}`);
      localStorage.setItem('clipboard', `${textarea.value}`);
    }
  },
  2,
  'ControlLeft',
  'KeyC',
);

runOnKeys(
  () => {
    const textarea = document.querySelector('.textarea');
    if (isTextSelected) {
      textarea.value = localStorage.getItem('clipboard');
    } else {
      textarea.value += localStorage.getItem('clipboard');
    }
  },
  2,
  'ControlLeft',
  'KeyV',
);

runOnKeys(
  () => {
    const textarea = document.querySelector('.textarea');
    if (isTextSelected) {
      localStorage.setItem('clipboard', `${textarea.value}`);
      navigator.clipboard.writeText(`${textarea.value}`);
      textarea.value = '';
      isTextSelected = !isTextSelected;
    }
  },
  2,
  'ControlLeft',
  'KeyX',
);

document.addEventListener('keydown', (event) => {
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  const { code } = event;
  if (!funcKeys.includes.code) {
    event.preventDefault();
  }
  const elem = document.querySelector(`.${code}`);
  elem.classList.add('key-active');
  if (!funcKeys.includes(code) && code !== 'KeyA' && code !== 'KeyC' && code !== 'KeyV' && code !== 'KeyX') {
    if (isTextSelected) {
      textarea.value = elem.textContent;
      isTextSelected = !isTextSelected;
    } else {
      textarea.value += elem.textContent;
    }
  }
  if (code === 'Space') {
    textarea.value += ' ';
  }
  if (code === 'CapsLock') {
    isCaps = !isCaps;
    if (isCaps) {
      document.querySelector('.CapsLock').classList.add('key-active');
    } else {
      document.querySelector('.CapsLock').classList.remove('key-active');
    }
    renderKeys();
  }
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    isShift = true;
    renderKeys();
  }
  if (code === 'Tab') {
    event.preventDefault();
    textarea.textContent += '  ';
  }
  if (code === 'ControlLeft') {
    ctrl = true;
  }
  if (code === 'KeyA') {
    if (isTextSelected) {
      if (!ctrl) {
        textarea.value = elem.textContent;
      }
    } else if (!ctrl) {
      textarea.value += elem.textContent;
    }
  }
  if (code === 'KeyC') {
    if (isTextSelected) {
      if (!ctrl) {
        textarea.value = elem.textContent;
      }
    } else if (!ctrl) {
      textarea.value += elem.textContent;
    }
  }
  if (code === 'KeyV') {
    if (isTextSelected) {
      if (!ctrl) {
        textarea.value = elem.textContent;
      }
    } else if (!ctrl) {
      textarea.value += elem.textContent;
    }
  }
  if (code === 'KeyX') {
    if (isTextSelected) {
      if (!ctrl) {
        textarea.value = elem.textContent;
      }
    } else if (!ctrl) {
      textarea.value += elem.textContent;
    }
  }
  if (code === 'Backspace') {
    if (isTextSelected) {
      textarea.value = '';
      isTextSelected = false;
    } else {
      textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }
  }
  if (code === 'Enter') {
    textarea.value += '\n';
  }
});

document.addEventListener('keyup', (event) => {
  const { code } = event;
  const elem = document.querySelector(`.${code}`);
  if (code !== 'CapsLock') {
    elem.classList.remove('key-active');
  }
  if (code === 'ControlLeft') {
    ctrl = false;
  }
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    isShift = false;
    renderKeys();
  }
});

document.querySelector('.keyboard').addEventListener('click', (event) => {
  const textarea = document.getElementById('textarea');
  textarea.focus();
  const { target } = event;
  if (wrongClicks.includes(target.classList.item(0))) {
    return;
  }
  if (!funcKeys.includes(target.classList.item(0))) {
    textarea.value += target.textContent;
  }
  if (target.classList.item(0) === 'Tab') {
    textarea.value += '  ';
  }
  if (target.classList.item(0) === 'Space') {
    textarea.value += ' ';
  }
  if (target.classList.item(0) === 'Enter') {
    textarea.value += '\n';
  }
  if (target.classList.item(0) === 'Backspace') {
    if (isTextSelected) {
      textarea.value = '';
      isTextSelected = false;
    } else {
      textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }
  }
  if (target.classList.item(0) === 'CapsLock') {
    isCaps = !isCaps;
    renderKeys();
    target.classList.toggle('key-active');
  }
  if (target.classList.item(0) === 'ShiftLeft' || target.classList.item(0) === 'ShiftRight') {
    isShift = !isShift;
    renderKeys();
    target.classList.toggle('key-active');
  }
  if (target.classList.item(0) === 'AltLeft' && isShift && document.querySelector('.ShiftLeft').classList.item(2) === 'key-active') {
    if (localStorage.getItem('language') === 'en') {
      localStorage.setItem('language', 'ru');
    } else {
      localStorage.setItem('language', 'en');
    }
    isShift = !isShift;
    document.querySelector('.ShiftLeft').classList.remove('key-active');
    renderKeys();
  }
});
