import { pinyin } from 'pinyin-pro';

export function getPinyin(word: string) {
    return pinyin(word, { toneType: 'none', v: true }).replace(/ /g, '');
}
