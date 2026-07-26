# 코블몬 서버 게시판

빌드 스텝이 없는 정적 사이트입니다. 글 목록과 상세를 해시 라우팅으로 그립니다.

- 페이지: <https://enderpawar.github.io/cobblemon-notes/>
- 저장소: <https://github.com/enderpawar/cobblemon-notes> (public, Pages는 `main` 브랜치 루트)

```
site/
  index.html      게시판 껍데기 (내비, 푸터). 글 내용은 여기 없습니다
  posts.js        글 데이터. 새 글은 여기에만 추가합니다
  app.js          목록/상세 렌더링, 검색, 분류 필터, 복사, 테마
  write.html      글 양식을 만들어 주는 작성 폼
  styles.css      팔레트와 레이아웃 (색은 파일 맨 위 토큰에서 한 번에 바뀝니다)
  assets/mark.png server-icon.png 사본
  .nojekyll       GitHub Pages가 Jekyll로 재가공하지 않게 막습니다
```

`site/` 폴더 자체가 그 저장소입니다. 상위 `cobblemon-server` 폴더는 월드와 모드 jar까지
들어 있으니 절대 통째로 push하지 마세요. 여기서 `git` 명령을 쓰면 이 폴더만 올라갑니다.

## 정적 사이트라 진짜 CRUD는 아닙니다

서버에 쓰기가 없으므로 읽기(R)만 브라우저에서 일어납니다.
추가, 수정, 삭제는 `posts.js`를 고치고 push하는 것으로 대신합니다.

| 작업 | 방법 |
|---|---|
| 추가 (C) | `write.html`에서 양식을 만들어 `posts.js`의 `window.POSTS = [` 다음 줄에 붙여넣기 |
| 조회 (R) | 목록에서 제목 클릭. 주소는 `#/post/<id>` 라 링크 공유가 됩니다 |
| 수정 (U) | `posts.js`에서 해당 객체를 고칩니다. `id`는 바꾸지 마세요. 링크가 깨집니다 |
| 삭제 (D) | 그 객체를 지웁니다. 번호는 자동으로 다시 매겨집니다 |

고친 다음에는:

```powershell
cd C:\Users\jinwoo\cobblemon-server\site
git add .
git commit -m "7/30 패치 글 추가"
git push
```

1분쯤 지나면 반영됩니다. 빌드 상태는 `gh api repos/enderpawar/cobblemon-notes/pages/builds/latest`로 볼 수 있습니다.

## 글 한 건의 모양

```js
{
  id: "2026-07-30-update",   // 주소에 쓰입니다. 영문 소문자/숫자/하이픈만
  date: "2026-07-30",
  cat: "패치",                // "패치" | "안내" | "공지"
  pinned: false,             // true면 목록 맨 위 고정, 번호 대신 "공지" 표시
  title: "제목",
  summary: "목록에서 제목 아래 한 줄로 보입니다",
  body: `<h2>소제목</h2><p class="body">문단입니다.</p>`
}
```

목록 순서는 고정글이 먼저, 그 다음 날짜 내림차순입니다. 번호는 고정글을 빼고
오래된 글부터 1번이 붙습니다. 배열 순서는 날짜가 같을 때만 영향을 줍니다.

### 본문에서 쓸 수 있는 조각

| 쓰는 법 | 결과 |
|---|---|
| `<h2>...</h2>` | 소제목 (위에 구분선이 붙습니다) |
| `<p class="body">...</p>` | 본문 문단 |
| `<div class="callout"><h3>제목</h3><p>내용</p></div>` | 강조 상자 |
| `<div class="tablewrap"><table>...</table></div>` | 표 (좁은 화면에서 가로 스크롤) |
| `<dl class="faq"><dt>질문</dt><dd>답</dd></dl>` | 문답 |
| `<ol class="setup"><li><h3>제목</h3><p>설명</p></li></ol>` | 번호 붙은 단계 |
| 명령어 코드 블록 | `write.html`의 "명령어 블록 만들기"로 생성 |

## 검색엔진

`index.html`의 `<meta name="robots" content="noindex, nofollow">`로 색인을 막아뒀습니다.
크롤링 자체는 열어둬야 구글이 이 태그를 읽고 확실히 제외하므로 `robots.txt`는 두지 않았습니다.
디스코드 링크 미리보기(`og:` 태그)는 정상 동작합니다.

## 원본 글

`../discord-변경점.md`, `../discord-패치로그.md`, `../discord-안내문.md` 의 내용을 옮긴 것입니다.
