import React from 'react';
import {DialogPropsType} from "../../../redux/state";
import people from "../../../image/avatar/people.svg";
import s from './Friend.module.css'

type FriendType = {
	friends: DialogPropsType[]
};
export const Friends = (props: FriendType) => {

	return (
		<>
		<div className={s.nameBlock}>Friends</div>
		<div className={s.friends}>

			{props.friends.map(f => {
				return (
					<div className={s.friend}>
							<img src={people}
								  alt=""/>
						{f.userName}
					</div>
				)
			})}
		</div>
		</>
	);
};