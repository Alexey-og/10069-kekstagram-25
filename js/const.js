const RANDOM_PHOTOS_COUNT = 10;
const HASHTAGS_MAX_COUNT = 5;
const HASHTAGS_MIN_SYMBOLS = 2;
const HASHTAGS_MAX_SYMBOLS = 20;
const HASHTAGS_REGEX = /^#[\da-zа-яё]{1,19}$/g;
const COMMENT_MAX_LENGTH = 140;
const COMMENTS_PORTION = 5;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_PHOTO_URL = 'img/upload-default-image.jpg';
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;

export {
  RANDOM_PHOTOS_COUNT,
  HASHTAGS_MAX_COUNT,
  HASHTAGS_MIN_SYMBOLS,
  HASHTAGS_MAX_SYMBOLS,
  HASHTAGS_REGEX,
  COMMENT_MAX_LENGTH,
  COMMENTS_PORTION,
  FILE_TYPES,
  DEFAULT_PHOTO_URL,
  SCALE_MIN,
  SCALE_MAX,
  SCALE_STEP
};
