const lodash = require('lodash')    
    
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

    const mostBlogs = (blogs) => {
        const allBlogs = []
        if(blogs.length >= 1){
            blogs.forEach(blog =>{
                newAuthorObject = {
                    author: blog.author,
                    blogs: blogs.filter(ihaok => ihaok.author === blog.author).length 
                }
                allBlogs.push(newAuthorObject)
                })
            const result = allBlogs.sort((a,b)=>b.blogs - a.blogs)[0]
            console.log(result)
            return result
        }else return 0
    }

    const mostLikes = (blogs) => {
        const allBlogs = []
        const reducer = (accumulator , blog)=> accumulator + blog
        if(blogs.length >= 1){
            blogs.forEach(blog =>{
                newAuthorObject =
                {
                    author: blog.author,
                    likes: blogs.filter(ihaok => ihaok.author === blog.author).map(blog => blog.likes).reduce(reducer)
                }
                allBlogs.push(newAuthorObject)
                })
            const result = allBlogs.sort((a,b)=>b.likes - a.likes)[0]
            console.log(result)
            return result
        }else return 0
    }

    module.exports = {
        dummy,
        likes,
        favoriteBlog,
        mostBlogs,
        mostLikes
    }