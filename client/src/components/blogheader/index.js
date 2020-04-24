import React from 'react';
import Style from "./Blogheader.module.css";

const Blogheader = ({image, title, description, createdAt}) => (
		<div className={Style.headerContainer}>
			<div className={Style.imgContainer}>
				<img src={image} alt="logo"/>
			</div>
			<div className={Style.titleContainer}>
				<h3>{title}</h3>
				<p>{description} - <span>{createdAt}</span></p>
			</div>
		</div>
);



export default Blogheader;
