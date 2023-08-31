import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";
import _ from "lodash";

export default function messages(state = getMessages(10), action) {
	switch (action.type) {
		case SEND_MESSAGE:
			const { message, userId } = action.payload;
			const allUserMSGS = state[userId];
			const number = +_.keys(allUserMSGS).pop() + 1;

			return {
				...state,
				[userId]: {
					...allUserMSGS,
					[number]: {
						number,
						text: message,
						is_user_msg: true,
					},
				},
			};

		default:
			return state;
	}
}
