const content = script => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signature Pad demo</title>
  <meta name="description" content="Signature Pad - HTML5 canvas based smooth signature drawing using variable width spline interpolation.">

  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <style>
    body {
      font-family: Helvetica, Sans-Serif;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    
    .m-signature-pad {
      position: absolute;
      font-size: 10px;
      left: 0; top: 0; right: 0; bottom: 0;
      background-color: #fff;
    }
    
    .m-signature-pad:before, .m-signature-pad:after {
      position: absolute;
      z-index: -1;
      content: "";
      width: 40%;
      height: 10px;
      left: 20px;
      bottom: 10px;
      background: transparent;
      -webkit-transform: skew(-3deg) rotate(-3deg);
      -moz-transform: skew(-3deg) rotate(-3deg);
      -ms-transform: skew(-3deg) rotate(-3deg);
      -o-transform: skew(-3deg) rotate(-3deg);
      transform: skew(-3deg) rotate(-3deg);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
    }
    
    .m-signature-pad:after {
      left: auto;
      right: 20px;
      -webkit-transform: skew(3deg) rotate(3deg);
      -moz-transform: skew(3deg) rotate(3deg);
      -ms-transform: skew(3deg) rotate(3deg);
      -o-transform: skew(3deg) rotate(3deg);
      transform: skew(3deg) rotate(3deg);
    }
    
    .m-signature-pad--body {
      position: absolute;
      left: 20px;
      right: 20px;
      top: 20px;
      bottom: 60px;
      border: 1px solid #f4f4f4;
    }
    
    .m-signature-pad--body
      canvas {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
      }
    
    .m-signature-pad--footer {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 20px;
      height: 40px;
    }
    
    .m-signature-pad--footer
      .description {
        color: #C3C3C3;
        text-align: center;
        font-size: 1.2em;
        margin-top: 1.8em;
      }
    
    .m-signature-pad--footer
      .button {
        position: absolute;
        bottom: 0;
        background-color: #3F99F7;
        height: 32px;
        padding: 0 20px;
        line-height: 32px;
        text-align: center;
        color: #FFF;
        border: 1px solid transparent;
        border-radius: 4px;
        outline: none;
        box-shadow: none;
      }
    
    .m-signature-pad--footer
      .button.clear {
        left: 0;
      }
    
    .m-signature-pad--footer
      .button.save {
        right: 0;
      }
    
    <%style%>
    </style>
</head>
<body onselectstart="return false">
  <div id="signature-pad" class="m-signature-pad">
    <div class="m-signature-pad--body">
      <canvas></canvas>
    </div>
    <div class="m-signature-pad--footer">
      <div class="description"><%description%></div>
      <button type="button" class="button clear" data-action="clear"><%clear%></button>
      <button type="button" class="button save" data-action="save"><%confirm%></button>
    </div>
  </div>

  <script>
    ${script}
  </script>
</body>
</html>`;

export default content;
