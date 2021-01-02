//TODO: Work on adding more buttons (LinkedIn, Reddit)
//TODO: Work on the functionalities of the buttons
//TODO: Select appropriate icons for the button
//TODO: Remove unwanted variables
//TODO: Automatically take care of generating minnified and gzipped versions of the code using Gulp/Grunt Task Runners
/**
 *
 * Methodology: An IIFE which will return a function which will act as a constructor with a preserved namespace.main
 * Eg teXelector IIFE will return a teXelectorUtil function which behaves like a constructor
 *
 */

window.teXelector = (function (config) {
  console.log(config);
  //Create a dummy element, focus it and do doc.execCommand
  function copyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.style.position = "fixed";
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.padding = 0;
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.value = text;

    document.body.appendChild(textArea);
    console.log("TextArea created ", textArea);
    textArea.focus();
    textArea.select();

    try {
      let successful = document.execCommand("copy");
      let msg = successful ? "successful" : "unsuccessful";
      //console.log('Copying text command was ', text);
    } catch (err) {
      console.log("Unable to Copy");
    }

    document.body.removeChild(textArea);
  }

  function teXelectorUtil(options) {
    const menu = {
      twitter: options.twitter ? true : false,
      facebook: options.facebook ? true : false,
      reddit: options.reddit ? true : false,
      linkedIn: options.linkedIn ? true : false,
      search: options.search ? true : false,
      copy: options.copy ? true : false,
      disable: options.disable ? true : false,
    };
    const twitterConfig = {
      url: "https://twitter.com/intent/tweet?text=",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" style=" fill:#000000;"><linearGradient id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"></path></svg>',
    };
    const facebookConfig = {
      url: "https://www.facebook.com/sharer/sharer.php?quote=",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" style=" fill:#000000;"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path></svg>',
    };
    const searchConfig = {
      url: "https://www.google.co.in/search?q=",
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" style=" fill:#000000;"><path fill="#199be2" d="M35.983,32.448l-3.536,3.536l7.87,7.87c0.195,0.195,0.512,0.195,0.707,0l2.828-2.828	c0.195-0.195,0.195-0.512,0-0.707L35.983,32.448z"></path><radialGradient id="KGt2acGa95QyN2j07oBX6a" cx="20.024" cy="20.096" r="19.604" gradientUnits="userSpaceOnUse"><stop offset=".693" stop-color="#006185"></stop><stop offset=".921" stop-color="#35c1f1"></stop></radialGradient><polygon fill="url(#undefined)" points="31.601,28.065 28.065,31.601 32.448,35.983 35.983,32.448"></polygon><linearGradient id="KGt2acGa95QyN2j07oBX6b_KPmthqkeTgDN_gr1" x1="8.911" x2="31.339" y1="8.911" y2="31.339" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a3ffff"></stop><stop offset=".223" stop-color="#9dfbff"></stop><stop offset=".53" stop-color="#8bf1ff"></stop><stop offset=".885" stop-color="#6ee0ff"></stop><stop offset="1" stop-color="#63daff"></stop></linearGradient><circle cx="20" cy="20" r="16" fill="url(#KGt2acGa95QyN2j07oBX6b_KPmthqkeTgDN_gr1)"></circle></svg>',
    };
    const copyConfig = {
      icon:
        '<svg id="color" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.25 21h-11.5c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h11.5c1.517 0 2.75 1.233 2.75 2.75v15.5c0 1.517-1.233 2.75-2.75 2.75z" fill="#1976d2"/><path d="m10 0h-6.25c-1.517 0-2.75 1.233-2.75 2.75v15.5c0 1.517 1.233 2.75 2.75 2.75h6.25z" fill="#1667b7"/><path d="m20.25 24h-11.5c-1.517 0-2.75-1.233-2.75-2.75v-14.5c0-1.517 1.233-2.75 2.75-2.75h11.5c1.517 0 2.75 1.233 2.75 2.75v14.5c0 1.517-1.233 2.75-2.75 2.75z" fill="#eceff1"/><g fill="#607d8b"><path d="m18.25 17h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m18.25 21h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m18.25 13.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m18.25 9.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/></g><path d="m14.5 4h-5.75c-1.517 0-2.75 1.233-2.75 2.75v14.5c0 1.517 1.233 2.75 2.75 2.75h5.75v-3h-3.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.75v-2.5h-3.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.75v-2h-3.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.75v-2.5h-3.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.75z" fill="#cdd0d2"/><path d="m14.5 15.5h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h3.75z" fill="#546d79"/><path d="m14.5 19.5h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h3.75z" fill="#546d79"/><path d="m14.5 12h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h3.75z" fill="#546d79"/><path d="m14.5 8h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h3.75z" fill="#546d79"/></svg>',
    };

    let selection = "";
    let text = "";
    let bgcolor = "";
    let iconcolor = "#fff";

    let _icons = {};
    let arrowsize = 5;
    let iconsize = 24;
    let top = 0;
    let left = 0;
    let reverseSelect = false;

    function facebookButton() {
      return new Button(facebookConfig.icon, function () {});
    }

    function twitterButton() {
      return new Button(twitterConfig.icon, function () {});
    }

    function searchButton() {
      return new Button(searchConfig.icon, function () {});
    }

    function copyButton() {
      return new Button(copyConfig.icon, function () {
        copyTextToClipboard(text);
      });
    }

    function appendIcons() {
      const myitems = [
        { feature: "twitter", call: twitterButton() },
        { feature: "facebook", call: facebookButton() },
        { feature: "search", call: searchButton() },
        { feature: "copy", call: copyButton() },
      ];
      const div = document.createElement("div");
      let count = 0;
      myitems.forEach((item) => {
        if (menu[item.feature]) {
          div.appendChild(item.call);
          count++;
        }
      });
      return {
        icons: div,
        length: count,
      };
    }

    function setTooltipPosition() {
      console.log(selection.anchorOffset, selection.focusOffset);
      if (selection.anchorOffset > selection.focusOffset) {
        reverseSelect = true;
      } else {
        reverseSelect = false;
      }
      const position = selection.getRangeAt(0).getBoundingClientRect();
      console.log("Position ", position);
      console.log("VP", window.innerHeight, innerWidth);
      //For the edge cases(DBT)
      const DOCUMENT_SCROLL_TOP =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      top = position.top - 10;

      //console.log(position.left, position.width);
      //console.log('ReverseSelect is ', reverseSelect);
      //38 is the width of the teXelector
      if (reverseSelect) left = position.left - 38;
      else left = position.left + position.width;
      if (position.left + position.width + 38 > window.innerWidth) {
        console.log("Overflow");
        left = position.left;
      }

      if (reverseSelect && position.left < 38) {
        console.log("Overflow");
        left = position.left + position.width;
      }
    }

    function moveTooltip() {
      setTooltipPosition();
      let tooltip = document.querySelector(".selection");
      console.log(top, left, "Is moveToolTip");
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    }

    function drawTooltip() {
      _icons = appendIcons(); //returns icons and number of icons
      setTooltipPosition();

      const div = document.createElement("div");
      div.className = "selection";
      console.log(bgColor, "from tooltip");
      div.style =
        "line-height:0;" +
        "position:absolute;" +
        "background-color:" +
        bgColor +
        ";" +
        "border-radius:20px;" +
        "top:" +
        top +
        "px;" +
        "left:" +
        left +
        "px;" +
        "transition:all .2s ease-in-out;" +
        "z-index:99999;";
      _icons.icons.style = "display:flex; flex-direction: column;";
      div.appendChild(_icons.icons);
      console.log("tooltip style ", _icons.icons);

      document.body.appendChild(div);
    }

    function attachEvents() {
      function hasSelection() {
        return !!window.getSelection().toString();
      }

      function hasTooltipDrawn() {
        return !!document.querySelector(".selection");
      }

      window.addEventListener(
        "mouseup",
        function () {
          setTimeout(function mouseTimeout() {
            if (hasTooltipDrawn()) {
              if (hasSelection()) {
                selection = window.getSelection();
                text = selection.toString();
                moveTooltip();
                return;
              } else {
                document.querySelector(".selection").remove();
              }
            }
            if (hasSelection()) {
              selection = window.getSelection();
              text = selection.toString();
              drawTooltip();
            }
          }, 10);
        },
        false
      );
    }

    function styleToolTip(mode = "light") {
      bgColor = mode === "dark" ? "#000000" : "#ffffff";
      console.log("bgColor ", bgColor, mode);
      const style = document.createElement("style");
      style.innerHTML = `.mode{fill: ${
        mode === "dark" ? "#ffffff" : "#00000"
      }}`; //Depending upon the mode, style the ele
      document.body.appendChild(style);
    }

    styleToolTip(options.mode);
    attachEvents();
  }

  function Button(icon, clickFn) {
    const btn = document.createElement("div");
    btn.style =
      "display:inline-block;" +
      "margin:7px;" +
      "cursor:pointer;" +
      "transition:all .2s ease-in-out;";
    btn.innerHTML = icon;
    btn.onclick = clickFn;
    btn.onmouseover = function () {
      this.style.transform = "scale(1.2)";
    };
    btn.onmouseout = function () {
      this.style.transform = "scale(1)";
    };
    return btn;
  }

  return teXelectorUtil;
})();
