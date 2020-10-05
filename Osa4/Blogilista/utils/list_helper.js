    const dummy=(blogs)=>{
        return 1
    }

    const likes = (blogs) => {
        
        if(blogs.length >= 1){
        const reducer = (accumulator , blog)=> accumulator + blog
        const map1 = blogs.map(blog => blog.likes).reduce(reducer)
        console.log(map1)
        return map1
        }else{
        return 0
        }
    }

    const favoriteBlog=(blogs)=>{
        if(blogs.length >= 1 ){
        const result = blogs.sort((a,b) => b.likes - a.likes)
        return result[0]
        }else {
            return 0;
        }

    }

    module.exports = {
        dummy,
        likes,
        favoriteBlog
    }