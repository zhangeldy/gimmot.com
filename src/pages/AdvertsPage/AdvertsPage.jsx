import React from 'react';
import AdvertsHeader from './AdvertsHeader';
import Paper from '@material-ui/core/Paper';
import IconButton from '../../_ui/Button/IconButton';
import StarIcon from '@material-ui/icons/GradeOutlined';
import withTranslation from '../../components/_hoc/withTranslation';
import { Marks } from './AdvertsStyle';
import AdvertComments from "./AdvertComments";

const advertsData = [
  {
    userName: 'Жангельды, 29',
    time: '18 мая в 18:13',
    params: 'Астана, Гетеро, 170см - 55кг - 16см',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    comments: ['Хочу сейчас', 'С местом', 'На машине'],
    text:
      'text text text text text text text text text text text text text text\ntext text text text text text text text text text text text text text',
  },
  {
    userName: 'Жангельды, 29',
    time: '18 мая в 18:13',
    params: 'Астана, Гетеро, 170см - 55кг - 16см',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    comments: ['Хочу сейчас', 'С местом', 'На машине'],
    text:
      'text text text text text text text text text text text text text text\ntext text text text text text text text text text text text text text',
  },
  {
    userName: 'Жангельды, 29',
    time: '18 мая в 18:13',
    params: 'Астана, Гетеро, 170см - 55кг - 16см',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    comments: ['Хочу сейчас', 'С местом', 'На машине'],
    text:
      'text text text text text text text text text text text text text text\ntext text text text text text text text text text text text text text',
  },
  {
    userName: 'Жангельды, 29',
    time: '18 мая в 18:13',
    params: 'Астана, Гетеро, 170см - 55кг - 16см',
    marks: ['Хочу сейчас', 'С местом', 'На машине'],
    comments: ['Хочу сейчас', 'С местом', 'На машине'],
    text:
      'text text text text text text text text text text text text text text\ntext text text text text text text text text text text text text text',
  },
];

function AdvertsPage({ t }) {
  return (
    <div>
      <AdvertsHeader />
      {advertsData.map(item => (
        <Paper className="mt2">
          <div className="p2">
            <IconButton
              style={{ padding: 0, marginLeft: 10, marginTop: -5 }}
              tooltip={t('advertItem_addFavorites')}
              icon={<StarIcon fontSize="small" />}
            />
            <div className="right imperceptible">{item.time}</div>
            <a className="colorPrimary user-name mr1">{item.userName}</a>
            <div className="imperceptible">{item.params}</div>
            <div className="py1 fs-medium">{item.text}</div>

            {item.marks && (
              <Marks className="italic lowercase fs-small">
                {item.marks.map(mark => (
                  <span className="mark-item">{mark}</span>
                ))}
              </Marks>
            )}
          </div>
          <AdvertComments comments={item.comments}/>
        </Paper>
      ))}
    </div>
  );
}

export default withTranslation(AdvertsPage);
