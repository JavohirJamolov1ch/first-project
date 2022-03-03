

class  UI {

    /**
     * 
     * @property {HTMLDivElement} lists
     * @property {HTMLDivElement} loadingBlock
     */
    constructor (querySelector, loadingSelector){
        this.list = document.querySelector(querySelector)
        this.loadingBlock = document.querySelector(loadingSelector);   
    
    }
    /**
     * 
     * @param {Array<Post>} posts 
     */

    renderList(posts){
             posts.forEach(post => {
           this.list.appendChild(this.createPostCard(post));
        }) ;
    }

     /**
     * 
     * @param {Post} post  
     */


    createPostCard (post){
        const card = document.createElement("div");
        card.className = "card mb-3 "

        card.innerHTML = `
        <div class="card-header d-flex align-items-center justify-content-between">
        <h3 class="card-title">${post.title}</h3>
        <div>
        <!-- <button class="btn btn-secondary btn-sm">View</button> -->
        <button data-bs-toggle="modal"  data-bs-target="#form-modal" class="btn btn-info btn-sm text-white ">Edit</button>
        <button class="btn btn-danger btn-sm">Delete</button>
        </div>
    </div>

    <div class="card-body">
      ${post.body}
    </div>`;
    return card;
    }


get loading (){
return !this.loadingBlock.clasList.contains("d-none")
}

set loading (val){
    if(val) {
        this.loadingBlock.classList.remove("d-none")
    }

    else{
        this.loadingBlock.classList.add("d-none")
    }
}

}