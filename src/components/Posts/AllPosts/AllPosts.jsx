"use client"
import React, { useEffect, useRef, useState } from 'react';
import Post from '../Post/Post';
import CreatePost from '../CreatePost/CreatePost';
import domain from '@/Domain/domain.config';
import useAuth from '@/Hooks/useAuth';
import createPost from '@/utils/createPost';
import { toast } from 'sonner';
import imageUpload from '@/utils/imageUpload';
import { useRouter } from 'next/navigation';

// Posts Limit
const postsLimit = 6;

const AllPosts = () => {
    // Load all posts
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const loadingRef = useRef(null);

    // Create Post
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const router = useRouter();
    const user = useAuth();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    useEffect(() => {
        const fetchingPosts = async () => {
            const res = await fetch(`${domain}/api/post?limit=${postsLimit}&skip=${page * postsLimit}`);
            const data = await res.json();

            if (data.length === 0) {
                setHasMore(false)
            }
            else {
                setPosts(prev => [...prev, ...data])
                setPage(prev => prev + 1)
            }
        }

        const onInterSection = (items) => {
            const loaderItem = items[0];

            if (loaderItem.isIntersecting && hasMore) {
                fetchingPosts();
            }
        }

        const observer = new IntersectionObserver(onInterSection)

        if (observer && loadingRef.current) {
            observer.observe(loadingRef.current);
        }

        // cleanup
        return () => {
            if (observer) observer.disconnect();
        }

    }, [page, hasMore])


    console.log(posts);

    const handleCreatePost = async () => {
        setLoading(true)
        try {
            const imageHost = await imageUpload(image, true);
            if (imageHost.success) {
                // New Post 
                const newPost = {
                    name: user?.displayName,
                    email: user?.email,
                    profilePhoto: user?.photoURL,
                    postPhoto: imageHost?.data?.display_url,
                    description: description
                }

                const req = await createPost(newPost);
                if (req.success) {
                    setLoading(false)
                    setDescription("")
                    setImage("")
                    router.refresh();
                    toast.success("Post created successfully")
                }
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <div>
            {/* Create Post */}
            <div className='py-5 sm:py-8'>
                <CreatePost handleCreatePost={handleCreatePost} user={user} loading={loading} image={image} setImage={setImage} handleImageChange={handleImageChange} description={description} setDescription={setDescription} />
            </div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    posts.map((post, index) => <Post key={index} post={post} />)
                }

                {hasMore && <h1 ref={loadingRef}>Loading...</h1>}
            </div>
        </div>
    );
};

export default AllPosts;