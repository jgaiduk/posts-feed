import { useState, useEffect } from "react";
import moment from "moment";

export const usePosts = (getPosts) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(res => {
            const posts = res.data
            .sort((p1, p2) => moment(p2.dateTime.date) - moment(p1.dateTime.date))
            .map((post) => {
                const newDate = moment(post.dateTime.date).format('MMMM Do YYYY, h:mm:ss');
                return {...post, dateTime: newDate}
            });
            setPosts(posts);
        });
    }, []);
    return [posts, setPosts];
}