import './App.css';
import UserCard from "./components/UserCard";
import AddedUserCard from "./components/AddedUserCard";

import React, {useState, useEffect} from "react"

function task11() {

    const ColorThresholds = {
        GREEN: 30,
        YELLOW: 60,
        ORANGE: 90,
        RED: 100,
    };

    const [posts, setPosts] = useState([]);
    const [defaultHeight, setDefaultHeight] = useState(0);
    const [defaultColor, setDefaultColor] = useState('transparent');
    const [visibleButton, notVisibleButton] = useState(true);
    const [savedPosts, setSavedPosts] = useState([]);

    const fetchData = () => {
        fetch('https://dummyjson.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data.posts));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const displayedPosts = posts.slice(0, 10);


    const addPost = (post) => {
        if (defaultHeight <= 90){
            const newHeight = defaultHeight + 10;
            setDefaultHeight(newHeight);

            updateColor(newHeight);

            const updatedPost = { ...post, id: generateUniqueId() };
            setSavedPosts([...savedPosts, updatedPost]);

        }

    };

    const updateColor = (height) => {
        let color = 'transparent';

        if (height >= ColorThresholds.RED) {
            color = 'red';
        } else if (height >= ColorThresholds.ORANGE) {
            color = 'orange';
        } else if (height >= ColorThresholds.YELLOW) {
            color = 'yellow';
        } else if (height >= ColorThresholds.GREEN) {
            color = 'green';
        }

        setDefaultColor(color);
    };


    const generateUniqueId = () => {
        return Date.now();
    };

    const removePost = (postToRemove) => {
        const updatedPosts = savedPosts.filter((post) => post !== postToRemove);
        setSavedPosts(updatedPosts);
        setDefaultHeight(defaultHeight - 10)
        notVisibleButton(true);
        updateColor(defaultHeight - 10);
    };



    return (
        <div className="cardContainer d-flex">
            <div className="flex-1">
                <h1 className="m-10">Retrieved Posts: </h1>
                <div className="postsContainer m-10">
                    {displayedPosts.map((x, i) => (
                        <UserCard
                            post={x}
                            key={i}
                            addPost={addPost}
                            visibleButton={visibleButton}
                        />
                    ))}
                </div>
            </div>

            <div className="progressBar">
                <div
                    className="limitBar"
                    style={{ height: `${defaultHeight}%`, backgroundColor: `${defaultColor}` }}
                ></div>
            </div>
            <div className="flex-1">
                <h1>Added to the storage posts:</h1>
                <div className="addedPosts m-10">
                    {savedPosts.map((post, i) => (
                        <AddedUserCard post={post}
                                       key={i}
                                       removePost={removePost}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default task11;