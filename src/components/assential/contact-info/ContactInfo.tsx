import Icons from '@/libs/Icon';
import style from './style.module.css';
import Input from '@/components/ui/inputs/Input';

function ContactInfo() {
	return (
		<section className={style.contactInfo}>
			<div className={style.wrap}>
				<div className={style.__left}>
					<div className={style.headerBox}>
						<h6 className={style.infoTitle}>Contact Information</h6>
						<p className={style.infoSubTitle}>
							Say something to start a live chat!
						</p>
					</div>
					<div className={style.contactData}>
						<div className={style.dataBox}>
							<div className={style.iconBox}>
								<Icons.Call className={style.icon} />
							</div>
							<p className={style.dataText}>+1012 3456 789</p>
						</div>
						<div className={style.dataBox}>
							<div className={style.iconBox}>
								<Icons.Mail className={style.icon} />
							</div>
							<p className={style.dataText}>demo@gmail.com</p>
						</div>
						<div className={style.dataBox}>
							<div className={style.iconBox}>
								<Icons.Map className={style.icon} />
							</div>
							<p className={style.dataText}>
								132 Dartmouth Street Boston, Massachusetts 02156 United States
							</p>
						</div>
					</div>
				</div>
				<div className={style.__right}>
					<form className={style.formWrap} action="">
						<div className={style.inputBox}>
							<Input label="First Name" name="fName" />
							<Input label="First Name" name="lName" />
						</div>
						<div className={style.inputBox}>
							<Input label="First Name" name="email" />
							<Input label="First Name" name="phoneNumber" />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default ContactInfo;
