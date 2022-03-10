// @ts-ignore
import pinyin from 'chinese-to-pinyin';

export function getPinyin(word: string) {
    return pinyin(word, { removeSpace: true, removeTone: true });
}
