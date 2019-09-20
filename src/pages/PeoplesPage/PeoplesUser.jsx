import React from 'react';
import { UserItem } from './PeoplesStyle';

const imgLink =
  'https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000';

function PeoplesUser() {
  return (
    <UserItem className="flex flex-wrap">
      <div className="user-avatar">
        <img src={imgLink} alt="user item" />
        <div className="is-online" />
      </div>
      <div className="ml2">
        <div className="user-name">Жангельды, 29</div>
        <div className="imperceptible">Астана, Гетеро</div>
        <div className="imperceptible">170см - 55кг - 16см</div>
        <div className="imperceptible">1,4 км от вас </div>
      </div>
    </UserItem>
  );
}

export default PeoplesUser;
