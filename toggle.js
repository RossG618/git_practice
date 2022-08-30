

var toggle = document.getElementById("rev-pop");
var popup = document.getElementById("tab-review")
function togglePop() {
        this.toggle.classList.toggle("close-pop");
        this.popup.classList.remove("review-tab-remove");
    }    

function unTogglePop(){
    this.toggle.classList.toggle("close-pop");
    this.popup.classList.add("review-tab-remove");

}
