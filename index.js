function myFunction(){
    var copyText = document.getElementById("copy");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Text copied :"+ copyText.value);
}