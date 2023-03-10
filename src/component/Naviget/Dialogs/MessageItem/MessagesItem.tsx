import React, {FC} from 'react';
import s from "../MessageItem/MessageItem.module.css";

// import {UserDialogType} from "./Dialogs";
import {MessagesPropsType} from "../../../../redux/state";


type MessagesItemProps = {
	messages: MessagesPropsType[]
};
export const MessagesItem: FC<MessagesItemProps> = (props) => {
	return (
		<div className={s.dialog + ' ' + s.active}>

			{props.messages.map(m => {
				return (
					<div key={m.id} className={s.message}>{m.message}</div>
				)
			})}
		</div>
	);
};

//Z