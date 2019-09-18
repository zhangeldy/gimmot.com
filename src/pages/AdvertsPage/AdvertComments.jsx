import React from 'react';
import { Comments } from './AdvertsStyle';

function AdvertComments(props) {
  return (
    <Comments>
      <div className="comment-item">
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
      <div className="add-comment">
        <input className="textPrimary" placeholder="Написать комментарий..." />
      </div>
    </Comments>
  );
}

export default AdvertComments;
