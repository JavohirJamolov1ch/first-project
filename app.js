

const ui =  new UI("#main", "#loading")    

main()

function main () {
    document.addEventListener("DOMContentLoaded", async (e) => {
        ui.loading = true
   setTimeout(async () =>{
    const posts  = await Post.getPosts();
    ui.renderList(posts);
    ui.loading = false
   }, 1500)
    })
}   
