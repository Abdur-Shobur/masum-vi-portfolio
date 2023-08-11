import CommentCard from '@/components/ui/cards/comment-card';
import style from './style.module.css';
import LeaveComments from '../leave-comments';

function CommentBox() {
	return (
		<div className={style.CommentBox}>
			<h1 className={style.totalComments}>22 COMMENTS</h1>
			<div className={style.commentCards}>
				<CommentCard />
				<CommentCard />
			</div>
			<LeaveComments />
		</div>
	);
}

export default CommentBox;
