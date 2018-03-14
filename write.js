function p(text, not_br = false) {
  document.write(text);
  if (!not_br) {
    document.write("<br />")
  }
}
function br() {document.write("<br />")}
