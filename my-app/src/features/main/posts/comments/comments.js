import React from 'react';
import { useState, useEffect } from 'react';
import styles from './comments.module.css';
import { getPostComments } from '../../../../app/API/Reddit';
import { dateCalculator } from '../../../utilities/utils';

export const Comments = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments(props.permalink)
            .then(jsonComments => setComments(
                jsonComments.map(comment => (

                    <div className={styles.comment} key={comment.id}>
                        <div className={styles.commentHeader}>
                            <p className={styles.commentAuthor}>{comment.author}</p>
                            <p className={styles.commentDate}>{dateCalculator(comment.created_utc)}</p>
                        </div>
                        <p>{comment.body}</p>
                    </div>

                ))));

    }, [props.permalink]);

    return (
        <div id={props.id} className={props.visible === true ? styles.isShown : styles.isNotShown}>
            {comments}
        </div>
    );
};