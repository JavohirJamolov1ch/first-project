const postApi  = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        'Content-type' : 'application/json; charset=UTF-8'
    },

    responseType : "json"
})


class Post {
    static pgnOptions = {
        _limit: 10,
        _page: 1

    }


    constructor ( { title, body, id=null} ) {
        this.title = title;
        this.body = body;
        this.userId = 1;

        if (id) {
            this.id = id;
        }
    }

    static async getPosts () {
        try {
            const {data} = await postApi.get("posts", {
                params: this.pgnOptions
            })

            return data;
        } catch (error) {
            throw error.response;
        }
    }
}