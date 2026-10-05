function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('こころの作戦カード')
    .addMetaTag('viewport','width=device-width,initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}
