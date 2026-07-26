# 코블몬 서버 패치 노트 (정적 페이지)

빌드 스텝이 없는 순수 정적 사이트입니다. `index.html`을 브라우저로 그냥 열어도 그대로 동작합니다.

```
site/
  index.html      전체 내용. 패치 글은 여기만 고치면 됩니다
  styles.css      팔레트와 레이아웃 (색은 파일 맨 위 토큰에서 한 번에 바뀝니다)
  app.js          복사 버튼, 테마 토글
  assets/mark.png server-icon.png 사본
  .nojekyll       GitHub Pages가 Jekyll로 재가공하지 않게 막습니다
```

## GitHub Pages 배포

이 `site/` 폴더만 별도 저장소로 올리세요. 상위 `cobblemon-server` 폴더는 월드와 모드 jar까지
들어 있어 절대 통째로 push하면 안 됩니다.

```powershell
cd C:\Users\jinwoo\cobblemon-server\site
git init
git add .
git commit -m "코블몬 서버 패치 노트"
git branch -M main
git remote add origin https://github.com/<계정>/cobblemon-notes.git
git push -u origin main
```

push한 뒤 GitHub 저장소에서 **Settings > Pages > Source: Deploy from a branch**,
브랜치는 `main`, 폴더는 `/ (root)`로 두면 됩니다.
주소는 `https://<계정>.github.io/cobblemon-notes/` 로 나옵니다.

저장소 이름을 `<계정>.github.io`로 만들면 주소가 `https://<계정>.github.io/` 가 됩니다.

## 다음 패치를 올릴 때

1. `index.html`에서 히어로의 날짜, 제목, 요약, 명령어 블록을 새 내용으로 교체
2. 이전 내용은 "지난 패치" 섹션에 `<details class="acc">` 블록을 하나 더 추가해서 보관
3. 푸터의 `마지막 업데이트` 날짜 수정
4. `git add . && git commit -m "7/30 패치" && git push`

푸시하고 1분쯤 지나면 반영됩니다.

## 원본 글

`../discord-변경점.md`, `../discord-패치로그.md`, `../discord-안내문.md` 의 내용을 정리해 옮긴 것입니다.
디스코드용 원문은 그쪽을 계속 쓰시면 됩니다.
