import React from 'react';
import { Picker } from 'emoji-mart';
import { styles } from '../ThemeProvider/Styles';

function EmojiPicker(props) {
  return (
    <Picker
      darkMode={styles.isDark}
      emojiSize={18}
      showPreview={false}
      showSkinTones={false}
    />
  );
}

export default EmojiPicker;
