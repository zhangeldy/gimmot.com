import React from 'react';
import { Comments } from './AdvertsStyle';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '../../_ui/Button/IconButton';

/**
 * @return {null}
 */
function AdvertComments({ comments }) {
  return (
    <Comments>
      {comments.map(comment => (
        <div key={comment} className="comment-item">
          <div className="flex flex-wrap items-center">
            <div className="colorPrimary user-name mr1">Жангельды, 29</div>
            <div className="imperceptible">ответил Жангельды, 29</div>
          </div>

          <div>
            Көлеңкенің жарығы бұл кітаппа? авторы кім және оны қайдан оқуға
            болады??
          </div>

          <div>
            <span className="imperceptible mr1">18 мая в 18:13</span>
            <span className="reply">Ответить</span>
          </div>
        </div>
      ))}
      <div className="add-comment">
        <input className="textPrimary" placeholder="Написать комментарий..." />
        <IconButton icon={<SendIcon style={{ opacity: 0.4 }} />} />
      </div>
    </Comments>
  );
}

export default AdvertComments;
