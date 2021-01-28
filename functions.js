function hide(id) {
    var el = document.getElementById(id); 
    el.style.display = 'none';
}
function show(id) {
    console.info("show id=", id);
    document.getElementById(id).style.display = '';
}

function hideAllPages () {
    var pages = document.querySelectorAll(".page");

    for(var i = 0; i < pages.length; i++) {
        var page = pages[i];
        hide(page.id);
        //hide(pages[i].id);
        //hide(pagesIds[i]);
    }
}

function showPage(pageId) {
    console.warn("pageId=", pageId);
    hideAllPages();
    show(pageId); 
    }
    

