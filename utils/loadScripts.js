export function loadScripts(script) {
  const node = document.createElement("script");
  node.src = script; // put there your js file location
  node.type = "text/javascript";
  node.async = true;
  node.charset = "utf-8";
  document.getElementsByTagName("head")[0].appendChild(node);
}
