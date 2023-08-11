import Input from '@/components/ui/inputs/Input';
import style from './style.module.css';
import Button from '@/components/ui/buttons/Button';

function LeaveComments() {
	return (
		<div>
			<div className={style.LeaveComments}>
				<h1 className={style.title}>Leave your thoughts</h1>
				<form action="">
					<div className={style.inputBoxes}>
						<Input label="First Name" name="fName" />
						<Input label="Email" name="email" type="email" />
						<Input
							label="Message"
							name="message"
							placeholder="Write your message.."
						/>
					</div>
					<div className={style.subBtn}>
						<Button text="Send Message" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default LeaveComments;
