import React from 'react';
import { Picker } from 'emoji-mart';
import { styles } from '../ThemeProvider/Styles';
import styled from 'styled-components';
import Popover from '@material-ui/core/Popover';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  width: 325px;
  background-color: ${styles.bgColorLight} !important;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35) !important;
  border-radius: ${styles.borderRadius};
  padding-top: 5px;

  .emoji-mart-search {
    display: none;
  }
  .emoji-mart-bar {
    display: none;
  }
  .emoji-mart-category-label span {
    font-size: 12px;
    color: #999999 !important;
    background-color: ${styles.bgColorLight} !important;
  }
  .emoji-mart-category .emoji-mart-emoji span {
    cursor: pointer !important;
  }
  button {
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
  .emoji-mart-scroll {
    ::-webkit-scrollbar {
      width: 6px !important;
      height: 6px !important;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.5) !important;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3) !important;
      border-radius: 4px;
      min-height: 35px;
    }
    ::-webkit-scrollbar-track {
      background: transparent !important;
    }
  }
`;

export default function EmojiPicker({ anchorEl, handleClose, onSelect }) {
  const { i18n } = useTranslation();
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Wrapper>
        <Picker
          darkMode={styles.isDark}
          emojiSize={18}
          showPreview={false}
          showSkinTones={false}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            width: 320
          }}
          i18n={{
            categories:
              i18n.language === 'ru'
                ? {
                    recent: 'Часто используемые',
                    people: 'Эмоции и люди',
                    nature: 'Животные и растения',
                    foods: 'Еда и напитки',
                    activity: 'Спорт и активности',
                    places: 'Путешествия и транспорт',
                    objects: 'Предметы',
                    symbols: 'Символы',
                    flags: 'Флаги'
                  }
                : {
                    recent: 'asdasd',
                    people: 'Smileys & People',
                    nature: 'Animals & Nature',
                    foods: 'Food & Drink',
                    activity: 'Activity',
                    places: 'Travel & Places',
                    objects: 'Objects',
                    symbols: 'Symbols',
                    flags: 'Flags'
                  }
          }}
          onSelect={onSelect}
        />
      </Wrapper>
    </Popover>
  );
}
