import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUserInfo, fetchUserPosts } from '../fetches';
import { usePosts } from '../hooks';
import { ReactComponent as ArrowIcon } from '../assets/icon-arrow.svg';
import { ReactComponent as LocationIcon } from '../assets/icon-location.svg';
import { ReactComponent as BriefcaseIcon } from '../assets/icon-briefcase.svg';

export const UserPage = () => {
    let {userId} = useParams();
    const [posts, setPosts] = usePosts(fetchUserPosts);
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        fetchUserInfo(userId).then(res => setUserInfo(res.data[0]));
    }, [])
    return(
        <div className='UserPage'>
            <div className="UserInfoBox">
                <Link to={'/'}>
                    <button className='arrowIcon'>{<ArrowIcon/>} Back </button>
                </Link>
                <div className='UserName'>{userId.split('_').join(' ')}</div>
                <div className='locationIcon'><LocationIcon/> {userInfo.country}</div>
                <div className='briefcaseIcon'><BriefcaseIcon/> {userInfo.companyName}</div>
            </div>
            {
                posts.map((post, idx) => (
                    <div className='Card' key={idx}>
                        <div className="CardHeader">
                            <div className="Date">{post.dateTime}</div>
                        </div>
                        <div>{post.content}</div>
                    </div>                   
                ))
            }
        </div>
    )
}