![_e7c95aa7-c5c7-48dd-b5a4-a45706809e72](https://github.com/user-attachments/assets/7697e245-3adf-4583-b907-0523f86450ba)

## サービス名
デジタル名刺アプリ

## サービスの説明
このアプリはデジタル名刺を作成することができます。
作成したデジタル名刺は新規登録時に設定したidを検索することで見ることができます。

## 使い方
- 「新規登録はこちら」より、デジタル名刺を作成
- 登録時に指定したIDを名刺検索し、デジタル名刺を確認

## 環境設定の方法
このアプリはsupabaseにデータを保存しています。
supabaseに登録し、.envファイルに認証情報を記載することでアプリを動作させることができます。

### supabaseへの登録
supabaseの登録はこちらから↓  
https://supabase.com/

### supabaseのDB作成
supabaseのDBを作成します。

### .envファイルの設定
VITE_SUPABASE_URLとVITE_SUPABASE_ANON_KEYの情報を設定します。
```
VITE_SUPABASE_URL="Project Settings > API > Project URLを貼り付ける"
VITE_SUPABASE_ANON_KEY="Project Settings > API > Project API keys > anon publicを貼り付ける"
```

## 起動方法
```sh
npm i

npm run dev
```

## テスト実行方法
```sh
npm run test
```

## firebaseへのデプロイ方法
buildを実行
```sh
npm run build
```
デプロイ
```sh
firebase deploy
```