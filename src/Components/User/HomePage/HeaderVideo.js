import React from 'react';
import video from '../../../Images/Saint_Barthelemy_2.mov'
import classes from '../../../styles/HeaderVideo.module.css'

const HeaderVideo = () => {
    const videoSource = video
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Elijah Straight's I&E Portfolio</h1>
                    <i>"The value of an idea lies in the using of it."</i>
                    <p>-Thomas Edison</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderVideo