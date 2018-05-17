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
    const discussion = document.getElementById('discussion');
    console.log(commentEl.value);
    console.log(authorEl.value);

    let div = document.createElement('div');
    div.className = 'disc-item';
    div.innerHTML = `<div class="disc-names">
    <div>БУ</div><div>17.05.2018<br>14:26:54</div>
</div>
<div class="disc-content">
<div class="disc-content-item">${authorEl.value}<p>${commentEl.value}</p></div>
</div>`;

    console.log(div.innerHTML);
    discussion.insertBefore(div, discussion.firstChild);
}

