const addElement = document.getElementById("add");
const blogElement = document.getElementById("createBlogs");


addElement.addEventListener("click", () => {

  const newBlogEntry = document.createElement('div');
  newBlogEntry.innerHTML = `<div class="createdBlogs">
          <h2 class="title" spellcheck="false" contenteditable="true"></h2>
          <p class="content" spellcheck="false" contenteditable="true"></p>
          <button class="delete-button">&Cross;</button>
          </div>`;
  blogElement.appendChild(newBlogEntry.firstChild);

  document.querySelector(".content").addEventListener('paste', function(e) {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  });
  
  document.querySelector(".title").addEventListener('paste', function(e) {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  });

  document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete-button")){
      event.target.parentNode.remove();
    }
  })
});
