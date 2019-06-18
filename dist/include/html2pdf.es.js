/**
 * html2pdf.js v0.9.1
 * Copyright (c) 2019 Erik Koopmans
 * Released under the MIT License.
 */
import 'es6-promise/auto';
import jsPDF from 'jspdf';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var domToImageMore_min = createCommonjsModule(function (module, exports) {
/*! dom-to-image-more 17-06-2019 */

!function(e){var s=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:n,mimeType:function(e){var t=n(e).toLowerCase();return function(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[t]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise(function(e){t.toBlob(e);}):function(i){return new Promise(function(e){for(var t=window.atob(i.toDataURL().split(",")[1]),n=t.length,r=new Uint8Array(n),o=0;o<n;o++)r[o]=t.charCodeAt(o);e(new Blob([r],{type:"image/png"}));})}(t)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o), r.href=t, o.href=e, o.href},getAndEncode:function(i){u.impl.options.cacheBust&&(i+=(/\?/.test(i)?"&":"?")+(new Date).getTime());return new Promise(function(n){var e,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(e?n(e):o("cannot fetch resource: "+i+", status: "+r.status));var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e);}, t.readAsDataURL(r.response);}, r.ontimeout=function(){e?n(e):o("timeout of 30000ms occured while fetching resource: "+i);}, r.responseType="blob", r.timeout=3e4, u.impl.options.useCredentials&&(r.withCredentials=!0), r.open("GET",i,!0), r.send(), u.impl.options.imagePlaceholder){var t=u.impl.options.imagePlaceholder.split(/,/);t&&t[1]&&(e=t[1]);}function o(e){console.error(e), n("");}})},uid:function(){var e=0;return function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}}(),delay:function(n){return function(t){return new Promise(function(e){setTimeout(function(){e(t);},n);})}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(r){return"data:,"===r?Promise.resolve():new Promise(function(e,t){var n=new Image;u.impl.options.useCredentials&&(n.crossOrigin="use-credentials"), n.onload=function(){e(n);}, n.onerror=t, n.src=r;})},width:function(e){var t=r(e,"border-left-width"),n=r(e,"border-right-width");return e.scrollWidth+t+n},height:function(e){var t=r(e,"border-top-width"),n=r(e,"border-bottom-width");return e.scrollHeight+t+n}};function n(e){var t=/\.([^\.\/]*?)(\?|$)/g.exec(e);return t?t[1]:""}function r(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),o=function(){var r=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,r,o){return e(t)?Promise.resolve(t).then(n).then(function(e){var n=Promise.resolve(t);return e.forEach(function(t){n=n.then(function(e){return i(e,t,r,o)});}), n}):Promise.resolve(t)},shouldProcess:e,impl:{readUrls:n,inline:i}};function e(e){return-1!==e.search(r)}function n(e){for(var t,n=[];null!==(t=r.exec(e));)n.push(t[1]);return n.filter(function(e){return!s.isDataUrl(e)})}function i(t,n,r,e){return Promise.resolve(n).then(function(e){return r?s.resolveUrl(e,r):e}).then(e||s.getAndEncode).then(function(e){return s.dataAsUrl(e,s.mimeType(n))}).then(function(e){return t.replace(function(e){return new RegExp("(url\\(['\"]?)("+s.escape(e)+")(['\"]?\\))","g")}(n),"$1"+e+"$3")})}}(),t=function(){return{resolveAll:function(){return e(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})},impl:{readAll:e}};function e(){return Promise.resolve(s.asArray(document.styleSheets)).then(function(e){var n=[];return e.forEach(function(t){if(t.hasOwnProperty("cssRules"))try{s.asArray(t.cssRules||[]).forEach(n.push.bind(n));}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString());}}), n}).then(function(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return o.shouldProcess(e.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return o.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),n=function(){return{inlineAll:function t(e){if(!(e instanceof Element))return Promise.resolve(e);return n(e).then(function(){return e instanceof HTMLImageElement?r(e).inline():Promise.all(s.asArray(e.childNodes).map(function(e){return t(e)}))});function n(t){var e=t.style.getPropertyValue("background");return e?o.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"));}).then(function(){return t}):Promise.resolve(t)}},impl:{newImage:r}};function r(n){return{inline:function(e){return s.isDataUrl(n.src)?Promise.resolve():Promise.resolve(n.src).then(e||s.getAndEncode).then(function(e){return s.dataAsUrl(e,s.mimeType(n.src))}).then(function(t){return new Promise(function(e){n.onload=e, n.onerror=e, n.src=t;})})}}}}(),r={imagePlaceholder:void 0,cacheBust:!1,useCredentials:!1},u={toSvg:a,toPng:function(e,t){return i(e,t||{}).then(function(e){return e.toDataURL()})},toJpeg:function(e,t){return i(e,t=t||{}).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})},toBlob:function(e,t){return i(e,t||{}).then(s.canvasToBlob)},toPixelData:function(t,e){return i(t,e||{}).then(function(e){return e.getContext("2d").getImageData(0,0,s.width(t),s.height(t)).data})},toCanvas:function(e,t){return i(e,t||{})},impl:{fontFaces:t,images:n,util:s,inliner:o,options:{}}};function a(t,n){return function(e){void 0===e.imagePlaceholder?u.impl.options.imagePlaceholder=r.imagePlaceholder:u.impl.options.imagePlaceholder=e.imagePlaceholder;void 0===e.cacheBust?u.impl.options.cacheBust=r.cacheBust:u.impl.options.cacheBust=e.cacheBust;void 0===e.useCredentials?u.impl.options.useCredentials=r.useCredentials:u.impl.options.useCredentials=e.useCredentials;}(n=n||{}), Promise.resolve(t).then(function(e){return function i(t,n,e){if(!e&&n&&!n(t))return Promise.resolve();return Promise.resolve(t).then(r).then(function(e){return o(t,e,n)}).then(function(e){return u(t,e)});function r(e){return e instanceof HTMLCanvasElement?s.makeImage(e.toDataURL()):e.cloneNode(!1)}function o(e,t,n){var r=e.childNodes;return 0===r.length?Promise.resolve(t):o(t,s.asArray(r),n).then(function(){return t});function o(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return i(e,n)}).then(function(e){e&&t.appendChild(e);});}), r}}function u(a,c){return c instanceof Element?Promise.resolve().then(e).then(t).then(n).then(r).then(function(){return c}):c;function e(){function e(e,t){var n,r;e.cssText?(t.cssText=e.cssText, t.font=e.font):(n=e, r=t, s.asArray(n).forEach(function(e){r.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e));}));}e(window.getComputedStyle(a),c.style);}function t(){function t(e){var t=window.getComputedStyle(a,e),n=t.getPropertyValue("content");if(""!==n&&"none"!==n){var r=s.uid(),o=c.getAttribute("class");o&&c.setAttribute("class",o+" "+r);var i=document.createElement("style");i.appendChild(u(r,e,t)), c.appendChild(i);}function u(e,t,n){var r,o,i="."+e+":"+t,u=n.cssText?(o=(r=n).getPropertyValue("content"), r.cssText+" content: "+o+";"):a(n);return document.createTextNode(i+"{"+u+"}");function a(t){return s.asArray(t).map(e).join("; ")+";";function e(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}}}}[":before",":after"].forEach(function(e){t(e);});}function n(){a instanceof HTMLTextAreaElement&&(c.innerHTML=a.value), a instanceof HTMLInputElement&&c.setAttribute("value",a.value);}function r(){c instanceof SVGElement&&(c.setAttribute("xmlns","http://www.w3.org/2000/svg"), c instanceof SVGRectElement&&["width","height"].forEach(function(e){var t=c.getAttribute(e);t&&c.style.setProperty(e,t);}));}}}(e,n.filter,!0)}).then(c).then(l).then(function(t){n.bgcolor&&(t.style.backgroundColor=n.bgcolor);n.width&&(t.style.width=n.width+"px");n.height&&(t.style.height=n.height+"px");n.style&&Object.keys(n.style).forEach(function(e){t.style[e]=n.style[e];});var e=null;"function"==typeof n.onclone&&(e=n.onclone(t));return Promise.resolve(e).then(function(){return t})}).then(function(e){return function(e,t,n){return Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"), (new XMLSerializer).serializeToString(e)}).then(s.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+n+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}(e,n.width||s.width(t),n.height||s.height(t))})}function i(o,i){return a(o,i).then(s.makeImage).then(s.delay(100)).then(function(e){var t="number"!=typeof i.scale?1:i.scale,n=function(e,t){var n=document.createElement("canvas");if(n.width=(i.width||s.width(e))*t, n.height=(i.height||s.height(e))*t, i.bgcolor){var r=n.getContext("2d");r.fillStyle=i.bgcolor, r.fillRect(0,0,n.width,n.height);}return n}(o,t),r=n.getContext("2d");return e&&(r.scale(t,t), r.drawImage(e,0,0)), n})}function c(n){return t.resolveAll().then(function(e){var t=document.createElement("style");return n.appendChild(t), t.appendChild(document.createTextNode(e)), n})}function l(e){return n.inlineAll(e).then(function(){return e})}module.exports=u;}(commonjsGlobal);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

// Determine the type of a variable/object.
var objType = function objType(obj) {
  var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  if (type === 'undefined') return 'undefined';else if (type === 'string' || obj instanceof String) return 'string';else if (type === 'number' || obj instanceof Number) return 'number';else if (type === 'function' || obj instanceof Function) return 'function';else if (!!obj && obj.constructor === Array) return 'array';else if (obj && obj.nodeType === 1) return 'element';else if (type === 'object') return 'object';else return 'unknown';
};

// Create an HTML element with optional className, innerHTML, and style.
var createElement = function createElement(tagName, opt) {
  var el = document.createElement(tagName);
  if (opt.className) el.className = opt.className;
  if (opt.innerHTML) {
    el.innerHTML = opt.innerHTML;
    var scripts = el.getElementsByTagName('script');
    for (var i = scripts.length; i-- > 0; null) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
  }
  for (var key in opt.style) {
    el.style[key] = opt.style[key];
  }
  return el;
};

// Deep-clone a node and preserve contents/properties.


// Convert units from px using the conversion value 'k' from jsPDF.
var unitConvert = function unitConvert(obj, k) {
  if (objType(obj) === 'number') {
    return obj * 72 / 96 / k;
  } else {
    var newObj = {};
    for (var key in obj) {
      newObj[key] = obj[key] * 72 / 96 / k;
    }
    return newObj;
  }
};

// Convert units to px using the conversion value 'k' from jsPDF.
var toPx = function toPx(val, k) {
  return Math.floor(val * k / 72 * 96);
};

var createIFrameContainer = function createIFrameContainer(rootElement) {
  if (this.prop.iframe) return Promise.resolve(this.prop.iframe);

  var iframe = document.createElement('iframe');

  iframe.className = 'html2pdf-container';
  iframe.style.visibility = 'hidden';
  iframe.style.position = 'fixed';
  iframe.style.left = '-10000px';
  iframe.style.top = '0px';
  iframe.style.border = '0';
  iframe.width = document.defaultView.innerWidth.toString();
  iframe.height = document.defaultView.innerHeight.toString();

  document.body.appendChild(iframe);

  iframe.contentWindow.document.body.style.margin = '0';
  iframe.contentWindow.document.body.appendChild(rootElement);

  var cloneWindow = iframe.contentWindow;
  var documentClone = cloneWindow.document;
  var docEl = documentClone.documentElement;

  // Following is needed for onload event to be correctly triggered in Firefox and MS Edge
  documentClone.open();
  documentClone.write('<!doctype html><html></html>');
  documentClone.replaceChild(documentClone.adoptNode(docEl), documentClone.documentElement);
  documentClone.close();

  this.prop.iframe = iframe;

  return new Promise(function (resolve) {
    iframe.onload = function () {
      iframe.onload = null;
      resolve(iframe);
    };
  });
};

var removeIframeContainer = function removeIframeContainer() {
  if (this.prop.iframe) {
    document.body.removeChild(this.prop.iframe);
    this.prop.iframe = null;
  }
};

/* ----- CONSTRUCTOR ----- */

var Worker = function Worker(opt) {
  // Create the root parent for the proto chain, and the starting Worker.
  var root = _extends(Worker.convert(Promise.resolve()), JSON.parse(JSON.stringify(Worker.template)));
  var self = Worker.convert(Promise.resolve(), root);

  // Set progress, optional settings, and return.
  self = self.setProgress(1, Worker, 1, [Worker]);
  self = self.set(opt);
  return self;
};

// Boilerplate for subclassing Promise.
Worker.prototype = Object.create(Promise.prototype);
Worker.prototype.constructor = Worker;

// Converts/casts promises into Workers.
Worker.convert = function convert(promise, inherit) {
  // Uses prototypal inheritance to receive changes made to ancestors' properties.
  promise.__proto__ = inherit || Worker.prototype;
  return promise;
};

Worker.template = {
  prop: {
    src: null,
    canvas: null,
    img: null,
    pdf: null,
    pageSize: null
  },
  progress: {
    val: 0,
    state: null,
    n: 0,
    stack: []
  },
  opt: {
    filename: 'file.pdf',
    margin: [0, 0, 0, 0],
    image: { type: 'jpeg', quality: 0.95 },
    enableLinks: true,
    domtoimage: {},
    jsPDF: {}
  }
};

/* ----- FROM / TO ----- */

Worker.prototype.from = function from(src, type) {
  function getType(src) {
    switch (objType(src)) {
      case 'string':
        return 'string';
      case 'element':
        return src.nodeName.toLowerCase() === 'canvas' ? 'canvas' : 'element';
      default:
        return 'unknown';
    }
  }

  return this.then(function from_main() {
    type = type || getType(src);
    switch (type) {
      case 'string':
        return this.set({ src: createElement('div', { innerHTML: src }) });
      case 'element':
        return this.set({ src: src });
      case 'canvas':
        return this.set({ canvas: src });
      case 'img':
        return this.set({ img: src });
      default:
        return this.error('Unknown source type.');
    }
  });
};

Worker.prototype.to = function to(target) {
  // Route the 'to' request to the appropriate method.
  switch (target) {
    case 'canvas':
      return this.toCanvas();
    case 'img':
      return this.toImg();
    case 'pdf':
      return this.toPdf();
    default:
      return this.error('Invalid target.');
  }
};

Worker.prototype.toCanvas = function toCanvas() {
  // Set up function prerequisites.
  var prereqs = [function checkSrc() {
    return this.prop.src || this.error('Cannot duplicate - no source HTML.');
  }, function checkPageSize() {
    return this.prop.pageSize || this.setPageSize();
  }];

  // Fulfill prereqs then create the canvas.
  return this.thenList(prereqs).then(function toCanvas_main() {
    // Handle old-fashioned 'onrendered' argument.
    var options = _extends({}, this.opt.domtoimage);

    // Alter domtoimage options for reflow behaviour.
    var src = this.prop.src;
    var filter_orig = options.filter || function () {
      return true;
    };
    options.filter = function (el) {
      // List of metadata tags:   https://www.w3schools.com/html/html_head.asp
      var metaTags = ['HEAD', 'TITLE', 'BASE', 'LINK', 'META', 'SCRIPT', 'STYLE'];
      var toClone = metaTags.indexOf(el.tagName) !== -1 || el.contains(src) || src.contains(el);
      return toClone && filter_orig(el);
    };
    options.windowWidth = this.prop.pageSize.inner.px.width;
    options.width = options.windowWidth;

    return domToImageMore_min.toCanvas(src, options);
  }).then(function toCanvas_post(canvas) {
    removeIframeContainer.bind(this)();
    this.prop.canvas = canvas;
  });
};

Worker.prototype.toImg = function toImg() {
  // Set up function prerequisites.
  var prereqs = [function checkCanvas() {
    return this.prop.canvas || this.toCanvas();
  }];

  // Fulfill prereqs then create the image.
  return this.thenList(prereqs).then(function toImg_main() {
    var imgData = this.prop.canvas.toDataURL('image/' + this.opt.image.type, this.opt.image.quality);
    this.prop.img = document.createElement('img');
    this.prop.img.src = imgData;
  });
};

Worker.prototype.toPdf = function toPdf() {
  // Set up function prerequisites.
  var prereqs = [function checkCanvas() {
    return this.prop.canvas || this.toCanvas();
  }];

  // Fulfill prereqs then create the image.
  return this.thenList(prereqs).then(function toPdf_main() {
    // Create local copies of frequently used properties.
    var canvas = this.prop.canvas;
    var opt = this.opt;

    // Calculate the number of pages.
    var pxFullHeight = canvas.height;
    var pxPageHeight = Math.floor(canvas.width * this.prop.pageSize.inner.ratio);
    var nPages = Math.ceil(pxFullHeight / pxPageHeight);

    // Define pageHeight separately so it can be trimmed on the final page.
    var pageHeight = this.prop.pageSize.inner.height;

    // Create a one-page canvas to split up the full image.
    var pageCanvas = document.createElement('canvas');
    var pageCtx = pageCanvas.getContext('2d');
    pageCanvas.width = canvas.width;
    pageCanvas.height = pxPageHeight;

    // Initialize the PDF.
    this.prop.pdf = this.prop.pdf || new jsPDF(opt.jsPDF);

    for (var page = 0; page < nPages; page++) {
      // Trim the final page to reduce file size.
      if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
        pageCanvas.height = pxFullHeight % pxPageHeight;
        pageHeight = pageCanvas.height * this.prop.pageSize.inner.width / pageCanvas.width;
      }

      // Display the page.
      var w = pageCanvas.width;
      var h = pageCanvas.height;
      pageCtx.fillStyle = 'white';
      pageCtx.fillRect(0, 0, w, h);
      pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

      // Add the page to the PDF.
      if (page) this.prop.pdf.addPage();
      var imgData = pageCanvas.toDataURL('image/' + opt.image.type, opt.image.quality);
      this.prop.pdf.addImage(imgData, opt.image.type, opt.margin[1], opt.margin[0], this.prop.pageSize.inner.width, pageHeight);
    }
  });
};

/* ----- OUTPUT / SAVE ----- */

Worker.prototype.output = function output(type, options, src) {
  // Redirect requests to the correct function (outputPdf / outputImg).
  src = src || 'pdf';
  if (src.toLowerCase() === 'img' || src.toLowerCase() === 'image') {
    return this.outputImg(type, options);
  } else {
    return this.outputPdf(type, options);
  }
};

Worker.prototype.outputPdf = function outputPdf(type, options) {
  // Set up function prerequisites.
  var prereqs = [function checkPdf() {
    return this.prop.pdf || this.toPdf();
  }];

  // Fulfill prereqs then perform the appropriate output.
  return this.thenList(prereqs).then(function outputPdf_main() {
    /* Currently implemented output types:
     *    https://rawgit.com/MrRio/jsPDF/master/docs/jspdf.js.html#line992
     *  save(options), arraybuffer, blob, bloburi/bloburl,
     *  datauristring/dataurlstring, dataurlnewwindow, datauri/dataurl
     */
    return this.prop.pdf.output(type, options);
  });
};

Worker.prototype.outputImg = function outputImg(type) {
  // Set up function prerequisites.
  var prereqs = [function checkImg() {
    return this.prop.img || this.toImg();
  }];

  // Fulfill prereqs then perform the appropriate output.
  return this.thenList(prereqs).then(function outputImg_main() {
    switch (type) {
      case undefined:
      case 'img':
        return this.prop.img;
      case 'datauristring':
      case 'dataurlstring':
        return this.prop.img.src;
      case 'datauri':
      case 'dataurl':
        return document.location.href = this.prop.img.src;
      default:
        throw 'Image output type "' + type + '" is not supported.';
    }
  });
};

Worker.prototype.save = function save(filename) {
  // Set up function prerequisites.
  var prereqs = [function checkPdf() {
    return this.prop.pdf || this.toPdf();
  }];

  // Fulfill prereqs, update the filename (if provided), and save the PDF.
  return this.thenList(prereqs).set(filename ? { filename: filename } : null).then(function save_main() {
    this.prop.pdf.save(this.opt.filename);
  });
};

/* ----- SET / GET ----- */

Worker.prototype.set = function set$$1(opt) {
  // TODO: Implement ordered pairs?

  // Silently ignore invalid or empty input.
  if (objType(opt) !== 'object') {
    return this;
  }

  // Build an array of setter functions to queue.
  var fns = Object.keys(opt || {}).map(function (key) {
    var self = this;

    if (key in Worker.template.prop) {
      // Set pre-defined properties.
      return function set_prop() {
        this.prop[key] = opt[key];
      };
    } else {
      switch (key) {
        case 'margin':
          return this.setMargin.bind(this, opt.margin);
        case 'jsPDF':
          return function set_jsPDF() {
            self.opt.jsPDF = opt.jsPDF;return self.setPageSize();
          };
        case 'pageSize':
          return this.setPageSize.bind(this, opt.pageSize);
        default:
          // Set any other properties in opt.
          return function set_opt() {
            this.opt[key] = opt[key];
          };
      }
    }
  }, this);

  // Set properties within the promise chain.
  return this.then(function set_main() {
    return this.thenList(fns);
  });
};

Worker.prototype.get = function get$$1(key, cbk) {
  return this.then(function get_main() {
    // Fetch the requested property, either as a predefined prop or in opt.
    var val = key in Worker.template.prop ? this.prop[key] : this.opt[key];
    return cbk ? cbk(val) : val;
  });
};

Worker.prototype.setMargin = function setMargin(margin) {
  return this.then(function setMargin_main() {
    // Parse the margin property: [top, left, bottom, right].
    switch (objType(margin)) {
      case 'number':
        margin = [margin, margin, margin, margin];
        break;
      case 'array':
        if (margin.length === 2) {
          margin = [margin[0], margin[1], margin[0], margin[1]];
        }
        break;
    }

    if (margin.length !== 4) {
      return this.error('Invalid margin array.');
    }

    // Set the margin property, then update pageSize.
    this.opt.margin = margin;
  }).then(this.setPageSize);
};

Worker.prototype.setPageSize = function setPageSize(pageSize) {
  return this.then(function setPageSize_main() {
    // Retrieve page-size based on jsPDF settings, if not explicitly provided.
    pageSize = pageSize || jsPDF.getPageSize(this.opt.jsPDF);

    // Add 'inner' field if not present.
    if (!pageSize.hasOwnProperty('inner')) {
      pageSize.inner = {
        width: pageSize.width - this.opt.margin[1] - this.opt.margin[3],
        height: pageSize.height - this.opt.margin[0] - this.opt.margin[2]
      };
      pageSize.inner.px = {
        width: toPx(pageSize.inner.width, pageSize.k),
        height: toPx(pageSize.inner.height, pageSize.k)
      };
      pageSize.inner.ratio = pageSize.inner.height / pageSize.inner.width;
    }

    // Attach pageSize to this.
    this.prop.pageSize = pageSize;
  });
};

Worker.prototype.setProgress = function setProgress(val, state, n, stack) {
  // Immediately update all progress values.
  if (val != null) this.progress.val = val;
  if (state != null) this.progress.state = state;
  if (n != null) this.progress.n = n;
  if (stack != null) this.progress.stack = stack;
  this.progress.ratio = this.progress.val / this.progress.state;

  // Return this for command chaining.
  return this;
};

Worker.prototype.updateProgress = function updateProgress(val, state, n, stack) {
  // Immediately update all progress values, using setProgress.
  return this.setProgress(val ? this.progress.val + val : null, state ? state : null, n ? this.progress.n + n : null, stack ? this.progress.stack.concat(stack) : null);
};

/* ----- PROMISE MAPPING ----- */

Worker.prototype.then = function then(onFulfilled, onRejected) {
  // Wrap `this` for encapsulation.
  var self = this;

  return this.thenCore(onFulfilled, onRejected, function then_main(onFulfilled, onRejected) {
    // Update progress while queuing, calling, and resolving `then`.
    self.updateProgress(null, null, 1, [onFulfilled]);
    return Promise.prototype.then.call(this, function then_pre(val) {
      self.updateProgress(null, onFulfilled);
      return val;
    }).then(onFulfilled, onRejected).then(function then_post(val) {
      self.updateProgress(1);
      return val;
    });
  });
};

Worker.prototype.thenCore = function thenCore(onFulfilled, onRejected, thenBase) {
  // Handle optional thenBase parameter.
  thenBase = thenBase || Promise.prototype.then;

  // Wrap `this` for encapsulation and bind it to the promise handlers.
  var self = this;
  if (onFulfilled) {
    onFulfilled = onFulfilled.bind(self);
  }
  if (onRejected) {
    onRejected = onRejected.bind(self);
  }

  // Cast self into a Promise to avoid polyfills recursively defining `then`.
  var isNative = Promise.toString().indexOf('[native code]') !== -1 && Promise.name === 'Promise';
  var selfPromise = isNative ? self : Worker.convert(_extends({}, self), Promise.prototype);

  // Return the promise, after casting it into a Worker and preserving props.
  var returnVal = thenBase.call(selfPromise, onFulfilled, onRejected);
  return Worker.convert(returnVal, self.__proto__);
};

Worker.prototype.thenExternal = function thenExternal(onFulfilled, onRejected) {
  // Call `then` and return a standard promise (exits the Worker chain).
  return Promise.prototype.then.call(this, onFulfilled, onRejected);
};

Worker.prototype.thenList = function thenList(fns) {
  // Queue a series of promise 'factories' into the promise chain.
  var self = this;
  fns.forEach(function thenList_forEach(fn) {
    self = self.thenCore(fn);
  });
  return self;
};

Worker.prototype['catch'] = function (onRejected) {
  // Bind `this` to the promise handler, call `catch`, and return a Worker.
  if (onRejected) {
    onRejected = onRejected.bind(this);
  }
  var returnVal = Promise.prototype['catch'].call(this, onRejected);
  return Worker.convert(returnVal, this);
};

Worker.prototype.catchExternal = function catchExternal(onRejected) {
  // Call `catch` and return a standard promise (exits the Worker chain).
  return Promise.prototype['catch'].call(this, onRejected);
};

Worker.prototype.error = function error(msg) {
  // Throw the error in the Promise chain.
  return this.then(function error_main() {
    throw new Error(msg);
  });
};

/* ----- ALIASES ----- */

Worker.prototype.using = Worker.prototype.set;
Worker.prototype.saveAs = Worker.prototype.save;
Worker.prototype.export = Worker.prototype.output;
Worker.prototype.run = Worker.prototype.then;

// Import dependencies.
// Get dimensions of a PDF page, as determined by jsPDF.
jsPDF.getPageSize = function (orientation, unit, format) {
  // Decode options object
  if ((typeof orientation === 'undefined' ? 'undefined' : _typeof(orientation)) === 'object') {
    var options = orientation;
    orientation = options.orientation;
    unit = options.unit || unit;
    format = options.format || format;
  }

  // Default options
  unit = unit || 'mm';
  format = format || 'a4';
  orientation = ('' + (orientation || 'P')).toLowerCase();
  var format_as_string = ('' + format).toLowerCase();

  // Size in pt of various paper formats
  var pageFormats = {
    'a0': [2383.94, 3370.39], 'a1': [1683.78, 2383.94],
    'a2': [1190.55, 1683.78], 'a3': [841.89, 1190.55],
    'a4': [595.28, 841.89], 'a5': [419.53, 595.28],
    'a6': [297.64, 419.53], 'a7': [209.76, 297.64],
    'a8': [147.40, 209.76], 'a9': [104.88, 147.40],
    'a10': [73.70, 104.88], 'b0': [2834.65, 4008.19],
    'b1': [2004.09, 2834.65], 'b2': [1417.32, 2004.09],
    'b3': [1000.63, 1417.32], 'b4': [708.66, 1000.63],
    'b5': [498.90, 708.66], 'b6': [354.33, 498.90],
    'b7': [249.45, 354.33], 'b8': [175.75, 249.45],
    'b9': [124.72, 175.75], 'b10': [87.87, 124.72],
    'c0': [2599.37, 3676.54], 'c1': [1836.85, 2599.37],
    'c2': [1298.27, 1836.85], 'c3': [918.43, 1298.27],
    'c4': [649.13, 918.43], 'c5': [459.21, 649.13],
    'c6': [323.15, 459.21], 'c7': [229.61, 323.15],
    'c8': [161.57, 229.61], 'c9': [113.39, 161.57],
    'c10': [79.37, 113.39], 'dl': [311.81, 623.62],
    'letter': [612, 792],
    'government-letter': [576, 756],
    'legal': [612, 1008],
    'junior-legal': [576, 360],
    'ledger': [1224, 792],
    'tabloid': [792, 1224],
    'credit-card': [153, 243]
  };

  // Unit conversion
  switch (unit) {
    case 'pt':
      var k = 1;break;
    case 'mm':
      var k = 72 / 25.4;break;
    case 'cm':
      var k = 72 / 2.54;break;
    case 'in':
      var k = 72;break;
    case 'px':
      var k = 72 / 96;break;
    case 'pc':
      var k = 12;break;
    case 'em':
      var k = 12;break;
    case 'ex':
      var k = 6;break;
    default:
      throw 'Invalid unit: ' + unit;
  }

  // Dimensions are stored as user units and converted to points on output
  if (pageFormats.hasOwnProperty(format_as_string)) {
    var pageHeight = pageFormats[format_as_string][1] / k;
    var pageWidth = pageFormats[format_as_string][0] / k;
  } else {
    try {
      var pageHeight = format[1];
      var pageWidth = format[0];
    } catch (err) {
      throw new Error('Invalid format: ' + format);
    }
  }

  // Handle page orientation
  if (orientation === 'p' || orientation === 'portrait') {
    orientation = 'p';
    if (pageWidth > pageHeight) {
      var tmp = pageWidth;
      pageWidth = pageHeight;
      pageHeight = tmp;
    }
  } else if (orientation === 'l' || orientation === 'landscape') {
    orientation = 'l';
    if (pageHeight > pageWidth) {
      var tmp = pageWidth;
      pageWidth = pageHeight;
      pageHeight = tmp;
    }
  } else {
    throw 'Invalid orientation: ' + orientation;
  }

  // Return information (k is the unit conversion ratio from pts)
  var info = { 'width': pageWidth, 'height': pageHeight, 'unit': unit, 'k': k };
  return info;
};

/* Pagebreak plugin:

    Adds page-break functionality to the html2pdf library. Page-breaks can be
    enabled by CSS styles, set on individual elements using selectors, or
    avoided from breaking inside all elements.

    Options on the `opt.pagebreak` object:

    mode:   String or array of strings: 'avoid-all', 'css', and/or 'legacy'
            Default: ['css', 'legacy']

    before: String or array of CSS selectors for which to add page-breaks
            before each element. Can be a specific element with an ID
            ('#myID'), all elements of a type (e.g. 'img'), all of a class
            ('.myClass'), or even '*' to match every element.

    after:  Like 'before', but adds a page-break immediately after the element.

    avoid:  Like 'before', but avoids page-breaks on these elements. You can
            enable this feature on every element using the 'avoid-all' mode.
*/

// Refs to original functions.
var orig = {
  toCanvas: Worker.prototype.toCanvas
};

// Add pagebreak default options to the Worker template.
Worker.template.opt.pagebreak = {
  mode: ['css', 'legacy'],
  before: [],
  after: [],
  avoid: []
};

Worker.prototype.toCanvas = function toCanvas() {
  return this.then(function toCanvas_pagebreak() {
    // Attach extra behaviour to the domtoimage onclone property.
    var oncloneOrig = this.opt.domtoimage.onclone || function () {},
        self = this;

    this.opt.domtoimage.onclone = function (rootElement) {
      // We need to add the cloned element to an iframe to calculate bounding client rectangle
      return createIFrameContainer.bind(self)(rootElement).then(function (iframe) {
        onclone_pagebreak.bind(self)(oncloneOrig, iframe);
      });
    };
  }).then(orig.toCanvas.bind(this));
};

function onclone_pagebreak(oncloneOrig, iframe) {
  var root = iframe.contentWindow.document.body;

  var pxPageHeight = this.prop.pageSize.inner.px.height;

  // Check all requested modes.
  var modeSrc = [].concat(this.opt.pagebreak.mode);
  var mode = {
    avoidAll: modeSrc.indexOf('avoid-all') !== -1,
    css: modeSrc.indexOf('css') !== -1,
    legacy: modeSrc.indexOf('legacy') !== -1
  };

  // Get arrays of all explicitly requested elements.
  var select = {};
  var self = this;
  ['before', 'after', 'avoid'].forEach(function (key) {
    var all = mode.avoidAll && key === 'avoid';
    select[key] = all ? [] : [].concat(self.opt.pagebreak[key] || []);
    if (select[key].length > 0) {
      select[key] = Array.prototype.slice.call(root.querySelectorAll(select[key].join(', ')));
    }
  });

  // Get all legacy page-break elements.
  var legacyEls = root.querySelectorAll('.html2pdf__page-break');
  legacyEls = Array.prototype.slice.call(legacyEls);

  // Loop through all elements.
  var els = root.querySelectorAll('*');
  Array.prototype.forEach.call(els, function pagebreak_loop(el) {
    // Setup pagebreak rules based on legacy and avoidAll modes.
    var rules = {
      before: false,
      after: mode.legacy && legacyEls.indexOf(el) !== -1,
      avoid: mode.avoidAll
    };

    // Add rules for css mode.
    if (mode.css) {
      // TODO: Check if this is valid with iFrames.
      var style = window.getComputedStyle(el);
      // TODO: Handle 'left' and 'right' correctly.
      // TODO: Add support for 'avoid' on breakBefore/After.
      var breakOpt = ['always', 'page', 'left', 'right'];
      var avoidOpt = ['avoid', 'avoid-page'];
      rules = {
        before: rules.before || breakOpt.indexOf(style.breakBefore || style.pageBreakBefore) !== -1,
        after: rules.after || breakOpt.indexOf(style.breakAfter || style.pageBreakAfter) !== -1,
        avoid: rules.avoid || avoidOpt.indexOf(style.breakInside || style.pageBreakInside) !== -1
      };
    }

    // Add rules for explicit requests.
    Object.keys(rules).forEach(function (key) {
      rules[key] = rules[key] || select[key].indexOf(el) !== -1;
    });

    // Get element position on the screen.
    // TODO: Subtract the top of the container from clientRect.top/bottom?
    var clientRect = el.getBoundingClientRect();

    // Avoid: Check if a break happens mid-element.
    if (rules.avoid && !rules.before) {
      var startPage = Math.floor(clientRect.top / pxPageHeight);
      var endPage = Math.floor(clientRect.bottom / pxPageHeight);
      var nPages = Math.abs(clientRect.bottom - clientRect.top) / pxPageHeight;

      // Turn on rules.before if the el is broken and is at most one page long.
      if (endPage !== startPage && nPages <= 1) {
        rules.before = true;
      }
    }

    // Before: Create a padding div to push the element to the next page.
    if (rules.before) {
      var beforePad = createElement('div', { style: {
          display: 'block',
          height: pxPageHeight - clientRect.top % pxPageHeight + 'px'
        } });
      el.parentNode.insertBefore(beforePad, el);
    }

    // After: Create a padding div to fill the remaining page.
    if (rules.after) {
      var afterPad = createElement('div', { style: {
          display: 'block',
          height: pxPageHeight - clientRect.bottom % pxPageHeight + 'px'
        } });
      el.parentNode.insertBefore(afterPad, el.nextSibling);
    }
  });

  // Call the original onclone callback.
  oncloneOrig(root);
}

// Add hyperlink functionality to the PDF creation.

// Main link array, and refs to original functions.
var linkInfo = [];
var orig$1 = {
  toCanvas: Worker.prototype.toCanvas,
  toPdf: Worker.prototype.toPdf
};

Worker.prototype.toCanvas = function toCanvas() {
  return this.then(function toCanvas_hyperlink() {
    // Attach extra behaviour to the domtoimage onclone property.
    var oncloneOrig = this.opt.domtoimage.onclone || function () {},
        self = this;

    this.opt.domtoimage.onclone = function (rootElement) {
      // We need to add the cloned element to an iframe to calculate bounding client rectangle
      return createIFrameContainer.bind(self)(rootElement).then(function (iframe) {
        onclone_hyperlink.bind(self)(oncloneOrig, iframe);
      });
    };
  }).then(orig$1.toCanvas.bind(this));
};

function onclone_hyperlink(oncloneOrig, iframe) {
  // Retrieve hyperlink info if the option is enabled.
  if (this.opt.enableLinks) {
    var container = iframe.contentWindow.document.body;

    var links = container.querySelectorAll('a');
    var containerRect = unitConvert(container.getBoundingClientRect(), this.prop.pageSize.k);
    linkInfo = [];

    // Loop through each anchor tag.
    Array.prototype.forEach.call(links, function (link) {
      // Treat each client rect as a separate link (for text-wrapping).
      var clientRects = link.getClientRects();
      for (var i = 0; i < clientRects.length; i++) {
        var clientRect = unitConvert(clientRects[i], this.prop.pageSize.k);
        clientRect.left -= containerRect.left;
        clientRect.top -= containerRect.top;

        var page = Math.floor(clientRect.top / this.prop.pageSize.inner.height) + 1;
        var top = this.opt.margin[0] + clientRect.top % this.prop.pageSize.inner.height;
        var left = this.opt.margin[1] + clientRect.left;

        linkInfo.push({ page: page, top: top, left: left, clientRect: clientRect, link: link });
      }
    }, this);
  }

  // Call the original onclone callback.
  oncloneOrig(container);
}

Worker.prototype.toPdf = function toPdf() {
  return orig$1.toPdf.call(this).then(function toPdf_hyperlink() {
    // Add hyperlinks if the option is enabled.
    if (this.opt.enableLinks) {
      // Attach each anchor tag based on info from the cloned document.
      linkInfo.forEach(function (l) {
        this.prop.pdf.setPage(l.page);
        this.prop.pdf.link(l.left, l.top, l.clientRect.width, l.clientRect.height, { url: l.link.href });
      }, this);

      // Reset the active page of the PDF to the final page.
      var nPages = this.prop.pdf.internal.getNumberOfPages();
      this.prop.pdf.setPage(nPages);
    }
  });
};

/**
 * Generate a PDF from an HTML element or string using html2canvas and jsPDF.
 *
 * @param {Element|string} source The source element or HTML string.
 * @param {Object=} opt An object of optional settings: 'margin', 'filename',
 *    'image' ('type' and 'quality'), and 'html2canvas' / 'jspdf', which are
 *    sent as settings to their corresponding functions.
 */
var html2pdf = function html2pdf(src, opt) {
  // Create a new worker with the given options.
  var worker = new html2pdf.Worker(opt);

  if (src) {
    // If src is specified, perform the traditional 'simple' operation.
    return worker.from(src).save();
  } else {
    // Otherwise, return the worker for new Promise-based operation.
    return worker;
  }
};
html2pdf.Worker = Worker;

export default html2pdf;
