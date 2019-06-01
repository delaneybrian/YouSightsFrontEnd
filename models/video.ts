/* tslint:disable */
import { WordCount } from './word-count';
export interface Video {
  id?: number;
  url?: string;
  likes?: number;
  dislikes?: number;
  wordCounts?: Array<WordCount>;
}
