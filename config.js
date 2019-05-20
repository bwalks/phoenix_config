var basePoint = {x: 0, y:0};
var macroKeys = [ 'ctrl', 'alt', 'shift' ];

Key.on('z', macroKeys, function () {

  var screen = Screen.main().flippedVisibleFrame();
  var window = Window.focused();

  if (window) {
    window.setTopLeft({
      x: screen.x + (screen.width / 2) - (window.frame().width / 2),
      y: screen.y + (screen.height / 2) - (window.frame().height / 2)
    });
  }
});


Key.on('left', macroKeys, function () {
  var screen = Screen.main().flippedVisibleFrame();
  var window = Window.focused();

  if (window) {
    var frame = window.frame();
    window.setSize({
        width: screen.width / 2,
        height: frame.height
    });

    // Reloading frame
    frame = window.frame();
    window.setTopLeft({
      x: 0,
      y: frame.y
    });
  }
});


Key.on('up', macroKeys, function () {
  var screen = Screen.main().flippedVisibleFrame();
  var window = Window.focused();

  if (window) {
    window.setFullScreen(!window.isFullScreen());
  }
});

Key.on('right', macroKeys, function () {
  var screen = Screen.main().flippedVisibleFrame();
  var window = Window.focused();

  if (window) {
    var frame = window.frame();
    window.setSize({
        width: screen.width / 2,
        height: frame.height
    });

    // Reloading frame
    frame = window.frame();
    window.setTopLeft({
      x: screen.width  - frame.width,
      y: frame.y
    });
  }
});

Key.on('b', macroKeys, function () {
  App.launch('Google Chrome').focus()
});

Key.on('s', macroKeys, function () {
  App.launch('Sublime Text').focus()
});

Key.on('p', macroKeys, function () {
  App.launch('PyCharm CE').focus()
});

Key.on('i', macroKeys, function () {
  var screen = Screen.main().flippedVisibleFrame();
  var window = Window.focused();

  if (window) {
    var frame = window.frame();
    window.setSize({
        width: Math.min(frame.width * 1.5, screen.width),
        height: Math.min(frame.height * 1.5, screen.height)
    });
  }
});
