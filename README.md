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

## 배포된 곳

- 페이지: <https://enderpawar.github.io/cobblemon-notes/>
- 저장소: <https://github.com/enderpawar/cobblemon-notes> (public, Pages는 `main` 브랜치 루트)

`site/` 폴더 자체가 그 저장소입니다. 상위 `cobblemon-server` 폴더는 월드와 모드 jar까지
들어 있으니 절대 통째로 push하지 마세요. 여기서 `git` 명령을 쓰면 이 폴더만 올라갑니다.

검색엔진 색인은 `index.html`의 `<meta name="robots" content="noindex, nofollow">`로 막아뒀습니다.
크롤링 자체는 열어둬야 구글이 이 태그를 읽고 확실히 제외하므로 `robots.txt`는 두지 않았습니다.
디스코드 링크 미리보기(`og:` 태그)는 정상 동작합니다.

## 다음 패치를 올릴 때

1. `index.html`에서 히어로의 날짜, 제목, 요약, 명령어 블록을 새 내용으로 교체
2. 이전 내용은 "지난 패치" 섹션에 `<details class="acc">` 블록을 하나 더 추가해서 보관
3. 푸터의 `마지막 업데이트` 날짜 수정
4. 아래 명령 실행

```powershell
cd C:\Users\jinwoo\cobblemon-server\site
git add .
git commit -m "7/30 패치"
git push
```

푸시하고 1분쯤 지나면 반영됩니다. 빌드 상태는 `gh api repos/enderpawar/cobblemon-notes/pages/builds/latest`로 볼 수 있습니다.

주소를 바꾸고 싶으면(예: `https://enderpawar.github.io/` 루트) 저장소 이름을
`enderpawar.github.io`로 바꾸면 됩니다. 그때 `index.html`의 `og:url`과 `og:image`도 같이 고치세요.

## 원본 글

`../discord-변경점.md`, `../discord-패치로그.md`, `../discord-안내문.md` 의 내용을 정리해 옮긴 것입니다.
디스코드용 원문은 그쪽을 계속 쓰시면 됩니다.
