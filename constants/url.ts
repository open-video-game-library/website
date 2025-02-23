/** サイト内URL */
export const INTERNAL_URL = {
  /** TOPページ */
  ABOUT: '/',
  /** オープンビデオゲーム */
  GAME: '/game',
  /** サーベイした論文一覧 */
  GAME_SURVEY: '/game/survey',
  /** ツール */
  TOOL: '/tool',
  /** オープンソースゲーム */
  TOOL_OPENSOURCEGAME: '/tool/opensourcegame',
  /** ブラウザゲーム */
  TOOL_BROWSERGAME: '/tool/browsergame',
  /** 開発フレームワーク */
  TOOL_FRAMEWORK: '/tool/framework',
  /** アセット */
  TOOL_ASSET: '/tool/asset',
  /** 記事 */
  ARTICLE: '/article',
  /** お問い合わせ */
  CONTACT: '/contact',
} as const;

/** 外部URL */
export const EXTERNAL_URL = {
  /** GitHub */
  GITHUB: 'https://github.com/open-video-game-library',
} as const;

/** ID名 */
export const ID_NAME = {
  /** 動物ゲームのサーベイ論文 */
  ANIMAL: 'animal',
  /** Open FPSのサーベイ論文 */
  FPS: 'fps',
  /** Minimum Tennisのサーベイ論文 */
  TENNIS: 'tennis',
  /** 共通体験サンプルのサーベイ論文 */
  CES: 'ces',
  /** 内部ツール */
  TOOL: 'tool',
  /** 外部ツール */
  EXTOOL: 'extool',
} as const;
