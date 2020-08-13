let like_counter = 1;
let dis_counter = 1;

function like() {
    like_counter++;

    let ele = document.querySelector("#like");

    ele.innerHTML = "Like" + " " + like_counter;


}

function dislike() {
    dis_counter++;

    let ele = document.querySelector("#dislike");

    ele.innerHTML = "Dislike" + " " + dis_counter;
}



function commentbox() {
    let comment = document.querySelector("#comment").value;



    const newelement = document.createElement("div");

    newelement.textContent = comment;
    newelement.style.background = "skyblue";


    const commentboxid = document.querySelector("#commentbox");
    //commentboxid.appendChild(newelement);
    commentboxid.insertBefore(newelement, commentboxid.firstChild)


    document.querySelector("#comment").value = "";



}


