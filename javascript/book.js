const addBookmarkBtn=document.getElementById("add-bookmark");
const bookmarkList=document.getElementById("bookmark-List");
const bookmarkNameInput=document.getElementById("bookmark-name");
const bookmarkUrlInput=document.getElementById("bookmark-url");
document.addEventListener("DomContentLoaded",loadBookMarks);
addBookmarkBtn.addEventListener("click",()=>{
    const name=bookmarkNameInput.value.trim();
    const url=bookmarkUrlInput.value.trim();
    if(!name||!url){
        alert("please enter name and url");
        return;
    }
    else{
        if(!url.startsWith("http://")&&!url.startsWith("https://")){
            alert("plase neter a valid url satting with http:// or htttps://");
        }
        addBookmark(name,url);
        saveBookmark(name,url);
        bookmarkNameInput.value="";
        bookmarkUrlInput.value="";


    }
})
function addBookmark(name,url){
    const li=document.createElement("li");
    const link=document.createElement("a");
    link.href=url;
    link.textContent=name;
    link.target="_blank";
    const removebtn=document.createElement("button");
    removebtn.textContent="remove";
    removebtn.addEventListener("click",()=>{
        bookmarkList.removeChild(li);
        removeBookmarkFromStorage(name,url);
    })
    li.appendChild(link);
    li.appendChild(removebtn);
    bookmarkList.appendChild(li);
}
function saveBookmark(name,url){
    const bookmarks=getBookmarksFromStorage();
    bookmarks.push({name,url});
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
}
function getBookmarksFromStorage(){
    const bookmarks=localStorage.getItem("bookmarks")
    return bookmarks?JSON.parse(bookmarks):[];

}

function loadBookMarks(){
    const bookmarks=getBookmarksFromStorage()
    bookmarks.forEach((bookmark)=>addBookmark(bookmark.name,bookmark.url))
}
function removeBookmarkFromStorage(name,url){
    let bookmark=getBookmarksFromStorage()
    bookmarks=bookmarks.filter((bookmark)=>!(bookmark.name==name||bookmark.url==url));
    localStorage.setItem("bookmarks",JSON>stringify(bookmarks));
}