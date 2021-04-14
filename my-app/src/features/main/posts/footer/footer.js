import React from'react';
import styles from './footer.module.css';
import { useState } from 'react';
import { dateCalculator } from '../../../utilities/utils'; 
import { Comments } from '../comments/comments';

export const Footer = (props) => {
    const [active, setActive] = useState(false);


    const onCommentsClicked = () => {
        const postComments = document.getElementById(props.postId);
        if (active) {
            postComments.style.display = "none";
            setActive(false);
        } else {
            postComments.style.display = "block";
            setActive(true);
        }
    }

    return (
        <footer>
            <ul className={styles.postInfos}>
                <li><span>{props.postAuthor}</span></li>
                <li>{dateCalculator(props.postCreated)}</li>
                <li onClick={onCommentsClicked} className={styles.commentsIcon}><i className="far fa-comments"></i><span>{props.postComments}</span></li>
            </ul>
            <Comments permalink={props.postPermalink}
                id={props.postId}
                visible={props.visible}
            />
        </footer>
    );
};