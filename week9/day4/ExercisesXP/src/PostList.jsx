import { useEffect } from "react";
import { useState } from "react";
import post from '/Users/davidbensadon/Desktop/DI/week9/day4/ExercisesXP/src/file.json'

const PostList = ()=>{

    return(
        <>
        <h2> {post[0].title} </h2>
        <h3> {post[0].content} </h3>

        <h2> {post[1].title} </h2>
        <h3> {post[1].content} </h3>
        </>
    )

}


export default PostList;

