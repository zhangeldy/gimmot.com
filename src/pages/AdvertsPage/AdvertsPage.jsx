import React from 'react';
import AdvertsHeader from './AdvertsHeader';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/GradeOutlined';
import { Marks } from './AdvertsStyle';
import AdvertComments from './AdvertComments';
import Divider from '@material-ui/core/Divider';
import { Wrapper } from './AdvertsStyle';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';

const advertsData = [
  {
    userName: 'Жангельды, 29',
    time: '18 мая в 18:13',
    params: 'Астана, Гетеро, 170см - 55кг - 16см',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    comments: ['Хочу сейчас', 'С местом', 'На машине'],
    text:
      'text text text text text text text text text text text text text text\ntext text text text text text text text text text text text text text'
  },
  {
    userName: 'Жангельды, 29',
    time: '18 мая в 18:13',
    params: 'Астана, Гетеро, 170см - 55кг - 16см',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    comments: ['Хочу сейчас', 'С местом', 'На машине'],
    text:
      'text text text text text text text text text text text text text text\ntext text text text text text text text text text text text text text'
  },
  {
    userName: 'Жангельды, 29',
    time: '18 мая в 18:13',
    params: 'Астана, Гетеро, 170см - 55кг - 16см',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    comments: ['Хочу сейчас', 'С местом', 'На машине'],
    text:
      'text text text text text text text text text text text text text text\ntext text text text text text text text text text text text text text'
  },
  {
    userName: 'Жангельды, 29',
    time: '18 мая в 18:13',
    params: 'Астана, Гетеро, 170см - 55кг - 16см',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    comments: ['Хочу сейчас', 'С местом', 'На машине'],
    text:
      'text text text text text text text text text text text text text text\ntext text text text text text text text text text text text text text'
  }
];

export default function AdvertsPage() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <AdvertsHeader />
      {advertsData.map((item, index) => (
        <Paper key={index} className="advert-item mt2">
          <Tooltip title={t('advert_addFavorites')} className="right">
            <IconButton
              style={{ transform: 'translate(10px, -8px)' }}
              children={<StarIcon fontSize="small" />}
            />
          </Tooltip>
          <div className="right imperceptible">{item.time}</div>
          <div className="colorPrimary user-name mr1">{item.userName}</div>
          <div className="imperceptible">{item.params}</div>
          <div className="py1 fs-medium">{item.text}</div>
          <Marks className="italic lowercase fs-small mb2">
            {item.marks &&
              item.marks.map(mark => (
                <span key={mark} className="mark-item">
                  {mark}
                </span>
              ))}
          </Marks>
          <Divider />
          <AdvertComments comments={item.comments} />
        </Paper>
      ))}
    </Wrapper>
  );
}
