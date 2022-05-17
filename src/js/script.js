(function () {
  //!------------------: Starting an anonymous container

  const keys = [
    {
      data: ["sc145", "NumLock", "144", "NumLock"],
    },
    {
      data: ["sc135", "NumpadDivide", "111", "/"],
    },
    {
      data: ["sc37", "NumpadMultiply", "106", "*"],
    },
    {
      data: ["sc4A", "NumpadSubtract", "109", "-"],
    },
    {
      data: ["sc4E", "NumpadAdd", "107", "+"],
    },
    {
      data: ["sc49", "Numpad9", "105", "9Num"],
    },
    {
      data: ["sc48", "Numpad8", "104", "8Num"],
    },
    {
      data: ["sc47", "Numpad7", "103", "7Num"],
    },
    {
      data: ["sc4D", "Numpad6", "102", "6Num"],
    },
    {
      data: ["sc4C", "Numpad5", "101", "5Num"],
    },
    {
      data: ["sc4B", "Numpad4", "100", "4Num"],
    },
    {
      data: ["sc51", "Numpad3", "99", "3Num"],
    },
    {
      data: ["sc50", "Numpad2", "98", "2Num"],
    },
    {
      data: ["sc4F", "Numpad1", "97", "1Num"],
    },
    {
      data: ["sc52", "Numpad0", "96", "0Num"],
    },
    {
      data: ["sc11C", "NumpadEnter", "13", "EnterNum"],
    },
    {
      data: ["sc53", "NumpadDecimal", "110", "."],
    },
    {
      data: ["sc137", "PrintScreen", "44", "PrtScn"],
    },
    {
      data: ["sc46", "ScrollLock", "145", "ScrLK"],
    },
    {
      data: ["sc45", "Pause", "19", "Pause"],
    },
    {
      data: ["sc152", "Insert", "45", "Insert"],
    },
    {
      data: ["sc147", "Home", "36", "Home"],
    },
    {
      data: ["sc149", "PageUp", "33", "PageUp"],
    },
    {
      data: ["sc153", "Delete", "46", "Delete"],
    },
    {
      data: ["sc14F", "End", "35", "End"],
    },
    {
      data: ["sc151", "PageDown", "34", "PgDn"],
    },
    {
      data: ["sc148", "ArrowUp", "38", "Up"],
    },
    {
      data: ["sc150", "ArrowDown", "40", "Down"],
    },
    {
      data: ["sc14B", "ArrowLeft", "37", "Left"],
    },
    {
      data: ["sc14D", "ArrowRight", "39", "Right"],
    },
    {
      data: ["sc1", "Escape", "27", "Esc"],
    },
    {
      data: ["sc3B", "F1", "112", "F1"],
    },
    {
      data: ["sc3C", "F2", "113", "F2"],
    },
    {
      data: ["sc3D", "F3", "114", "F3"],
    },
    {
      data: ["sc3E", "F4", "115", "F4"],
    },
    {
      data: ["sc3F", "F5", "116", "F5"],
    },
    {
      data: ["sc40", "F6", "117", "F6"],
    },
    {
      data: ["sc41", "F7", "118", "F7"],
    },
    {
      data: ["sc42", "F8", "119", "F8"],
    },
    {
      data: ["sc43", "F9", "120", "F9"],
    },
    {
      data: ["sc44", "F10", "121", "F10"],
    },
    {
      data: ["sc57", "F11", "122", "F11"],
    },
    {
      data: ["sc58", "F12", "123", "F12"],
    },
    {
      data: ["sc29", "Backquote", "192", "`"],
    },
    {
      data: ["sc2", "Digit1", "49", "1"],
    },
    {
      data: ["sc3", "Digit2", "50", "2"],
    },
    {
      data: ["sc4", "Digit3", "51", "3"],
    },
    {
      data: ["sc5", "Digit4", "52", "4"],
    },
    {
      data: ["sc6", "Digit5", "53", "5"],
    },
    {
      data: ["sc7", "Digit6", "54", "6"],
    },
    {
      data: ["sc8", "Digit7", "55", "7"],
    },
    {
      data: ["sc9", "Digit8", "56", "8"],
    },
    {
      data: ["scA", "Digit9", "57", "9"],
    },
    {
      data: ["scB", "Digit0", "48", "0"],
    },
    {
      data: ["scC", "Minus", "189", "-"],
    },
    {
      data: ["scD", "Equal", "187", "="],
    },
    {
      data: ["scE", "Backspace", "8", "Backspace"],
    },
    {
      data: ["scF", "Tab", "9", "Tab"],
    },
    {
      data: ["sc10", "KeyQ", "81", "Q"],
    },
    {
      data: ["sc11", "KeyW", "87", "W"],
    },
    {
      data: ["sc12", "KeyE", "69", "E"],
    },
    {
      data: ["sc13", "KeyR", "82", "R"],
    },
    {
      data: ["sc14", "KeyT", "84", "T"],
    },
    {
      data: ["sc15", "KeyY", "90", "Z"],
    },
    {
      data: ["sc16", "KeyU", "85", "U"],
    },
    {
      data: ["sc17", "KeyI", "73", "I"],
    },
    {
      data: ["sc18", "KeyO", "79", "O"],
    },
    {
      data: ["sc19", "KeyP", "80", "P"],
    },
    {
      data: ["sc1A", "BracketLeft", "219", "["],
    },
    {
      data: ["sc1B", "BracketRight", "221", "]"],
    },
    {
      data: ["sc2B", "Backslash", "220", "\\"],
    },
    {
      data: ["sc3A", "CapsLock", "20", "CapsLock"],
    },
    {
      data: ["sc1E", "KeyA", "65", "A"],
    },
    {
      data: ["sc1F", "KeyS", "83", "S"],
    },
    {
      data: ["sc20", "KeyD", "68", "D"],
    },
    {
      data: ["sc21", "KeyF", "70", "F"],
    },
    {
      data: ["sc22", "KeyG", "71", "G"],
    },
    {
      data: ["sc23", "KeyH", "72", "H"],
    },
    {
      data: ["sc24", "KeyJ", "74", "J"],
    },
    {
      data: ["sc25", "KeyK", "75", "K"],
    },
    {
      data: ["sc26", "KeyL", "76", "L"],
    },
    {
      data: ["sc27", "Semicolon", "186", ";"],
    },
    {
      data: ["sc28", "Quote", "222", "'"],
    },
    {
      data: ["sc1C", "Enter", "13", "Enter"],
    },
    {
      data: ["sc2A", "ShiftLeft", "16", "ShiftL"],
    },
    {
      data: ["sc056", "Backslash", "220", "\\"],
    },
    {
      data: ["sc2C", "KeyZ", "89", "Y"],
    },
    {
      data: ["sc2D", "KeyX", "88", "X"],
    },
    {
      data: ["sc2E", "KeyC", "67", "C"],
    },
    {
      data: ["sc2F", "KeyV", "86", "V"],
    },
    {
      data: ["sc30", "KeyB", "66", "B"],
    },
    {
      data: ["sc31", "KeyN", "78", "N"],
    },
    {
      data: ["sc32", "KeyM", "77", "M"],
    },
    {
      data: ["sc33", "Comma", "188", ","],
    },
    {
      data: ["sc34", "Period", "190", "."],
    },
    {
      data: ["sc35", "Slash", "189", "-"],
    },
    {
      data: ["sc36", "ShiftRight", "16", "ShiftR"],
    },
    {
      data: ["sc1D", "ControlLeft", "17", "CtrlL"],
    },
    {
      data: ["sc15B", "MetaLeft", "91", "WinL"],
    },
    {
      data: ["sc38", "AltLeft", "18", "AltL"],
    },
    {
      data: ["sc39", "Space", "32", "Space"],
    },
    {
      data: ["sc138", "AltRight", "18", "AltGr"],
    },
    {
      data: ["sc15C", "MetaRight", "92", "WinR"],
    },
    {
      data: ["sc15D", "ContextMenu", "93", "Menu"],
    },
    {
      data: ["sc11D", "ControlRight", "17", "CtrlR"],
    },
  ];

  function elemTarget(e) {
    e = e || window.event;
    e.preventDefault();
    return e.target;
  }

  //@---------------------------------: keydown, keyup :-------------
  let check = true;

  window.addEventListener(
    "keydown",
    function (e) {
      e.preventDefault();

      let keyA = `${e.code}`;
      if (check) {
        keyDown(keyA);
        check = false;
      }
    },
    true
  );

  window.addEventListener(
    "keyup",
    function (e) {
      e.preventDefault();
      if (!check) {
        check = true;
      }
    },
    true
  );

  //@-----------------------: keydown function

  function keyDown(keyA) {
    let code = "";

    [...keys].forEach((elem) => {
      code = elem.data[1];
      if (code === keyA) {
        logKey(elem.data[3]);
        let elemClick = document.querySelector(".kbd-" + elem.data[0]);
        elClick(elemClick);

        console.log(elem.data[3]);
      }
    });
  }

  //@---------------------------------: innerHTML button
  function logKey(data) {
    document.querySelector(
      ".key-box"
    ).innerHTML += `<kbd class="mi">${data}</kbd>`;
  }

  function elClick(elem) {
    if (elem.parentNode.matches(".group-button")) {
      elem.parentNode.querySelector(".kbd-box").classList.add("key-click");
    } else {
      elem.querySelector(".kbd-box").classList.add("key-click");
    }

    setTimeout(function () {
      let xElem = document.querySelector(".key-click");
      if (xElem) {
        xElem.classList.remove("key-click");
      }
    }, 510);
  }

  //@---------------------------------: Click :-------------

  document.addEventListener("click", (e) => {
    let elem = elemTarget(e);

    if (elem.parentNode.matches(".group-button")) {
      myClick(elem);
    }
  });

  //@---------------------------------: Click function
  function myClick(elem) {
    elClick(elem);

    let ahkCode = "";
    let code = "";

    let classes = elem.parentNode.classList;
    let listA = classes.entries();

    [...listA].forEach((elemA) => {
      [...elemA].forEach((elemX) => {
        elemX = JSON.stringify(elemX);
        if (~elemX.indexOf("kbd-")) {
          ahkCode = elemX.replaceAll('"', "").replace("kbd-", "");
          console.log(ahkCode);

          [...keys].forEach((elemY) => {
            code = elemY.data[0];
            if (code === ahkCode) {
              logKey(elemY.data[3]);

              console.log(elemY.data[3]);
            }
          });
        }
      });
    });
  }

  //!------------------: end of anonymous container
})();
