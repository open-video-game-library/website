# Hunter Chameleon

[English version README](https://github.com/open-video-game-library/Hunter-Chameleon/blob/main/README.md)

Hunter Chameleon はカメレオンの 2D シューティングゲームです。

ハエやリンゴなど、絶え間なくターゲットが出現するので、カメレオンの舌で撃ち落としましょう。

![Hunter Chameleonのプレイ映像](https://user-images.githubusercontent.com/52689532/196686104-ead98b13-ec54-452c-9c10-f629bb216e5f.gif)

## コンテンツ

### ルール

出現するターゲット（ハエ・リンゴ・ハチ）に照準を合わせて、舌で落としましょう。

カメレオンの胴体にハチかリンゴが当たるとダメージを受けます。
3 回ダメージを受けるとゲームオーバーです。

### 操作方法

Hunter Chamaleon はマウス操作でプレイできます。

- マウスの移動 → 照準の移動
- 左クリック → トリガーを引く

![Hunter Chameleonの操作方法](https://user-images.githubusercontent.com/52689532/196676762-4b561a4d-eacf-43a2-9de5-26b8e95a69aa.png)

## 機能

### パラメータ調整機能

以下のパラメータをゲーム画面上で調整できます。

- 制限時間（second）

  - デフォルト値: 30

- 各ターゲットの出現頻度(second/num)

  デフォルト値

  - リンゴ: 5
  - ハチ: 8
  - ハエ: 2

- 各ターゲットの移動速度

  デフォルト値

  - リンゴ: 0.50(gravity scale)
  - ハチ: 0.05
  - ハエ: 0.05

- 各ターゲットと背景のグラフィック（スタンドアロン版のみ）

- 照準の色と形状（スタンドアロン版のみ）

### パラメータ出力機能

以下のパラメータをゲーム終了時に CSV ファイルとして出力できます。

- プレイ時間（second）
- スコア
- ヒット率

### 研究利用例

1. 複数のゲームコントローラのポインティング性能の比較評価

   本ゲームを複数のゲームコントローラでプレイしてもらい、パラメータ出力機能で得たヒット率を比較して相対的な評価をおこなう

2. マウスで操作するシステムの体験評価

   本ゲームの基本操作方法であるマウスでプレイするシステムを体験してもらい、体験後のインタビューから定性的な評価をおこなう

Hunter Chameleon を用いた具体的なケーススタディは、[こちらの論文](http://id.nii.ac.jp/1001/00214482/)をご覧ください。

## 環境

MacOS, Unity 2021.3.9f1

## インストール方法

本リポジトリのデータは下記のコマンドを入力することでローカル環境にクローンできます。

```bash
git clone git@github.com:open-video-game-library/Hunter-Chameleon.git
```

## 使い方

Hunter Chameleon が動作するために必要なデータはすべて同梱されています。

グラフィックや BGM などのアセットを変更したい場合は、その都度インポート・置き換えをして下さい。

また、プロジェクトに含まれているアセットの中には、外部が提供している再配布が認められた素材も含まれています。それらを含んだゲームデータを公開する場合は、各アセット毎に同梱されたライセンスファイルをご確認下さい。

## ライセンス

本コンテンツは、[MIT ライセンス](https://github.com/open-video-game-library/Hunter-Chameleon/blob/main/LICENSE)のもとで利用が許可されています。

## 引用

研究利用しやすく標準性を目指したビデオゲームの設計と開発

[論文はこちら](http://id.nii.ac.jp/1001/00212465/)

```
@inproceedings{weko_212571_1,
   author	 = "拓也,岡 and 拓也,川島 and 大智,林 and 恵太,渡邊",
   title	 = "研究利用しやすく標準性を目指したビデオゲームの設計と開発",
   booktitle	 = "エンタテインメントコンピューティングシンポジウム論文集",
   year 	 = "2021",
   volume	 = "2021",
   number	 = "",
   pages	 = "181--186",
   month	 = "aug"
}
```

## お問い合わせ

意見や要望、質問などがありましたら、[こちら](https://open-video-game-library.github.io/info/contact/)からお問い合わせ下さい。
