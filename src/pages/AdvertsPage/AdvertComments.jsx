import React, { useState } from 'react';
import { Comments } from './AdvertsStyle';
import SendIcon from '@material-ui/icons/Send';
import EmojiIcon from '@material-ui/icons/EmojiEmotions';
import EmojiPicker from '../../components/EmojiPicker/EmojiPicker';
import IconButton from '@material-ui/core/IconButton/IconButton';

/**
 * @return {null}
 */
function AdvertComments({ comments }) {
  const [emojiAnchor, setEmojiAnchor] = useState();
  return (
    <Comments>
      {comments.map(comment => (
        <div key={comment} className="comment-item">
          <div className="flex flex-wrap items-center">
            <div className="colorPrimary user-name mr1">Жангельды, 29</div>
            <div className="imperceptible">ответил Жангельды, 29</div>
          </div>

          <div>
            Көлеңкенің жарығы бұл кітаппа? авторы кім және оны қайдан оқуға болады??
          </div>

          <div>
            <span className="imperceptible mr1">18 мая в 18:13</span>
            <span className="reply">Ответить</span>
          </div>
        </div>
      ))}
      <div className="add-comment flex items-center">
        <div className="cmt-field flex items-center">
          <input className="textPrimary" placeholder="Написать комментарий..." />
          <IconButton
            children={<EmojiIcon color="action" fontSize="small" />}
            onClick={event => setEmojiAnchor(event.currentTarget)}
          />
        </div>
        <IconButton children={<SendIcon color="action" fontSize="small" />} />
        <EmojiPicker
          anchorEl={emojiAnchor}
          handleClose={() => setEmojiAnchor(null)}
          onSelect={console.log}
        />
      </div>
    </Comments>
  );
}

export default AdvertComments;
