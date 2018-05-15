'use sctrict'


function closeDiscussion() {
	console.log("Discussion is closing...");
}

/*document.querySelector("i").addEventListener("onclick", closeDiscussion);*/ 

function addComment() {
    const commentEl = document.getElementById('comment');
    const authorEl = document.getElementById('author');
    if (authorEl.value == "") {
        alert("Author must be filled!")
    }
    const discussion = document.getElementsByClassName('disc-center')
    console.log(commentEl.value);
    console.log(authorEl.value);

}

