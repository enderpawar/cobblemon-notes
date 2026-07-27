/* ============================================================
   글 데이터. 새 글은 이 배열 맨 앞에 객체 하나만 추가하면 됩니다.
   양식을 만들어 주는 폼: write.html

   id      주소에 쓰이는 값. 영문/숫자/하이픈만. 한번 정하면 바꾸지 마세요(링크가 깨집니다)
   date    YYYY-MM-DD
   cat     "패치" | "안내" | "공지"
   pinned  true면 목록 맨 위에 고정되고 번호 대신 "공지"로 표시됩니다
   summary 글 상세에서 제목 아래 한 줄로 보입니다 (목록에는 안 나오지만 검색에는 걸립니다)
   body    본문 HTML
   ============================================================ */

window.POSTS = [

{
  id: "server-guide",
  date: "2026-07-26",
  cat: "공지",
  pinned: true,
  title: "서버 접속 안내",
  summary: "처음 오셨다면 이 글부터 보세요. 설치 순서와 화이트리스트 신청 방법입니다.",
  body: `
<p class="body">접속 주소는 <b>8.230.12.174</b> 입니다. 아래 순서대로 준비하면 됩니다.</p>

<ol class="setup">
  <li>
    <h3>마인크래프트 자바 에디션 1.21.1</h3>
    <p>베드락 에디션으로는 접속되지 않습니다.</p>
  </li>
  <li>
    <h3>Modrinth App 설치</h3>
    <p><a href="https://modrinth.com/app" rel="noopener">modrinth.com/app</a> 에서 받습니다.</p>
    <figure class="shot">
      <img src="assets/guide-modrinth.png" width="1400" height="571" loading="lazy" decoding="async"
           alt="Modrinth 다운로드 페이지. 가운데에 초록색 Download Modrinth App 버튼이 있습니다.">
      <figcaption>가운데 초록색 <b>Download Modrinth App</b>을 누릅니다.</figcaption>
    </figure>
  </li>
  <li>
    <h3>모드팩 설치</h3>
    <p>Modrinth App에서 <b>Cobblemon Official Modpack [Fabric]</b>을 검색해 버전 <b>1.7.3</b>으로 Install을 누릅니다.</p>
    <figure class="shot">
      <img src="assets/guide-modpack.png" width="1400" height="534" loading="lazy" decoding="async"
           alt="Modrinth App의 Discover content 화면. Modpacks 탭에서 Cobblemon Official Modpack을 검색한 결과와 오른쪽의 Install 버튼.">
      <figcaption>Discover content의 <b>Modpacks</b> 탭에서 검색한 뒤 오른쪽 <b>Install</b>을 누릅니다.</figcaption>
    </figure>
  </li>
  <li>
    <h3>그 인스턴스에 AutoModpack 추가</h3>
    <p>설치한 인스턴스를 열고 <b>Additional content</b> 줄의 <b>Browse content</b>를 누릅니다.</p>
    <figure class="shot">
      <img src="assets/guide-content.png" width="1339" height="146" loading="lazy" decoding="async"
           alt="인스턴스 화면의 Additional content 줄. 오른쪽에 Upload files와 초록색 Browse content 버튼이 있습니다.">
    </figure>
    <p><b>Mods</b> 탭에서 <b>AutoModPack</b>을 검색해 설치합니다. 이게 없으면 접속이 거부됩니다.</p>
    <figure class="shot">
      <img src="assets/guide-automodpack.png" width="1400" height="484" loading="lazy" decoding="async"
           alt="Mods 탭에서 AutoModPack을 검색한 결과. 오른쪽 버튼이 Installed로 표시되어 있습니다.">
      <figcaption>오른쪽이 <b>Installed</b>로 바뀌면 끝입니다.</figcaption>
    </figure>
    <p><a href="https://modrinth.com/mod/automodpack" rel="noopener">modrinth.com/mod/automodpack</a></p>
  </li>
  <li>
    <h3>메모리 4GB 이상 할당</h3>
    <p>인스턴스 우클릭, Options, Java and memory, Allocated memory 순서입니다. 기본값으로는 튕기거나 심하게 렉이 걸립니다.</p>
  </li>
  <li>
    <h3>화이트리스트 신청</h3>
    <p>아무나 들어올 수 없습니다. 마인크래프트 닉네임을 대소문자까지 정확히 적어 디스코드 채널에 남겨주세요.</p>
    <p class="setup__action">
      <a class="btn btn--primary btn--auto"
         href="https://discord.com/channels/1472919839084380173/1530143818534621285"
         target="_blank" rel="noopener noreferrer">디스코드에서 화이트리스트 신청</a>
    </p>
    <p class="names"><span>Noonmiso</span><span>H0ngcha_</span><span>Cut_Hyoon</span><span>Jandi0209</span><span>haruyayee</span></p>
  </li>
</ol>

<div class="callout">
  <h3>첫 접속에서 다운로드가 돕니다</h3>
  <p>AutoModpack이 서버와 다른 파일을 약 <b>233MB</b> 받습니다. 인터넷 속도에 따라 몇 분 걸리고, 받는 동안 창을 끄지 말아주세요. 다 받으면 <b>게임을 껐다 켜야</b> 적용됩니다.</p>
</div>

<h2>서버가 꺼져 있을 수 있습니다</h2>
<p class="body">비용 때문에 24시간 돌리지 않습니다. 아무도 접속해 있지 않으면 자동으로 꺼집니다. 접속하려는데 서버가 안 뜨면 디스코드 채널에 말씀해 주세요. 켜는 데 1~2분 걸립니다.</p>

<h2>서버 설정</h2>
<p class="body">서바이벌, 난이도 노말, PvP 켜짐, 최대 20명입니다.</p>

<h2>들어있는 추가 콘텐츠</h2>
<div class="tablewrap">
<table>
  <thead><tr><th>모드</th><th>내용</th></tr></thead>
  <tbody>
    <tr><td>Radical Cobblemon Trainers</td><td>야생 트레이너와 배틀</td></tr>
    <tr><td>Radical Gyms &amp; Structures</td><td>체육관 건물이 월드에 생성됩니다. 칸토 8곳과 엔드의 칸토 리그</td></tr>
    <tr><td>Mega Showdown</td><td>메가진화</td></tr>
    <tr><td>Path to Legends</td><td>전설 포켓몬 퀘스트. 구조물 제단에 아이템을 바치면 소환됩니다</td></tr>
    <tr><td>Myths and Legends</td><td>환상의 포켓몬. 키 아이템을 들고 맞는 바이옴에 가면 등장합니다</td></tr>
    <tr><td>Fight or Flight</td><td>야생 포켓몬이 먼저 공격하진 않지만 때리면 반격합니다</td></tr>
    <tr><td>Cobbreeding</td><td>포켓몬 교배</td></tr>
    <tr><td>CobbleDollars</td><td>상점과 화폐</td></tr>
    <tr><td>Cobblemon Additions</td><td>추가 아이템과 블록</td></tr>
  </tbody>
</table>
</div>
`
},

{
  id: "2026-07-27-kanto",
  date: "2026-07-27",
  cat: "안내",
  pinned: false,
  title: "관동 체육관 위치, 관장 소환 명령어 안내",
  summary: "체육관 9곳을 진행도 순서로 정리했습니다. 관장이 사라졌을 때 다시 부르는 명령어까지 있습니다.",
  body: `
<p class="body">체육관에 갔는데 관장이 없는 경우가 있습니다. 그럴 때 직접 부를 수 있게 <b>찾아가는 명령어</b>와 <b>부르는 명령어</b>를 관장별로 정리했습니다. 화이트리스트에 있는 분들은 모두 권한을 드렸으니 그대로 채팅창에 붙여넣으면 됩니다.</p>

<div class="callout">
  <h3>부를 때는 체육관 안에서</h3>
  <p>소환 명령어는 <b>명령어를 친 사람이 서 있는 자리</b>에 관장을 만듭니다. 체육관 밖에서 치면 밖에 서 있게 되니, 원래 있어야 할 자리에 들어가서 치세요.</p>
</div>

<ol class="cmds">
  <li>
    <h3 class="cmd__t"><span class="cmd__n">1</span>회색시티 · Brock · 바위 · Lv 14</h3>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:pewter_gym</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:pewter_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">관장이 없을 때</p>
    <div class="code">
      <code>/rctmod trainer summon leader_brock_019e</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon leader_brock_019e" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">2</span>블루시티 · Misty · 물 · Lv 27</h3>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:cerulean_gym</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:cerulean_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">관장이 없을 때</p>
    <div class="code">
      <code>/rctmod trainer summon leader_misty_019f</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon leader_misty_019f" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">3</span>갈색시티 · Lt. Surge · 전기 · Lv 34</h3>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:vermilion_gym</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:vermilion_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">관장이 없을 때</p>
    <div class="code">
      <code>/rctmod trainer summon leader_lt_surge_01a0</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon leader_lt_surge_01a0" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">4</span>무지개시티 · Erika · 풀 · Lv 44</h3>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:celadon_gym</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:celadon_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">관장이 없을 때</p>
    <div class="code">
      <code>/rctmod trainer summon leader_erika_01a1</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon leader_erika_01a1" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">5</span>금빛시티 · Sabrina · 에스퍼 · Lv 59</h3>
    <p class="cmd__d">원작과 순서가 다릅니다. 이 서버(라디컬레드)에서는 <b>코가보다 사브리나가 먼저</b>입니다.</p>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:saffron_gym</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:saffron_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">관장이 없을 때</p>
    <div class="code">
      <code>/rctmod trainer summon leader_sabrina_01a4</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon leader_sabrina_01a4" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">6</span>연분홍시티 · Koga · 독 · Lv 68</h3>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:fuchsia_gym</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:fuchsia_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">관장이 없을 때</p>
    <div class="code">
      <code>/rctmod trainer summon leader_koga_01a2</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon leader_koga_01a2" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">7</span>홍련섬 · Blaine · 불꽃 · Lv 76</h3>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:cinnabar_gym</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:cinnabar_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">관장이 없을 때</p>
    <div class="code">
      <code>/rctmod trainer summon leader_blaine_01a3</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon leader_blaine_01a3" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">8</span>검은먹시티 · Clair · 드래곤 · Lv 81</h3>
    <p class="cmd__d">여덟 번째는 상록시티 관장(Giovanni)이 아니라 <b>Clair</b>입니다. 성도 도시지만 이 모드가 관동 마지막 체육관으로 넣어두었습니다. 상록시티 체육관 건물은 없으니 찾지 마세요.</p>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:blackthorn_gym</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:blackthorn_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">관장이 없을 때</p>
    <div class="code">
      <code>/rctmod trainer summon leader_clair_004a</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon leader_clair_004a" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">9</span>관동 리그 · 사천왕과 챔피언 · Lv 85</h3>
    <p class="cmd__d"><b>엔드에 있습니다.</b> 배지 여덟 개를 모은 뒤에 가세요. 사천왕 넷과 챔피언이 한 건물 안에 각각 방을 쓰고 있습니다.</p>
    <p class="code__k">찾아가기</p>
    <div class="code">
      <code>/locate structure rgs:kanto_league</code>
      <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:kanto_league" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">비어 있는 방이 있을 때 · 그 방에서 실행</p>
    <div class="code">
      <code>/rctmod trainer summon elite_four_lorelei_004e</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon elite_four_lorelei_004e" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <div class="code">
      <code>/rctmod trainer summon elite_four_bruno_0051</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon elite_four_bruno_0051" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <div class="code">
      <code>/rctmod trainer summon elite_four_agatha_0053</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon elite_four_agatha_0053" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <div class="code">
      <code>/rctmod trainer summon elite_four_agatha_0054</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon elite_four_agatha_0054" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <div class="code">
      <code>/rctmod trainer summon elite_four_lance_0057</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon elite_four_lance_0057" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">챔피언</p>
    <div class="code">
      <code>/rctmod trainer summon champion_terry_01b8</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon champion_terry_01b8" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
</ol>

<h2>체육관이 안 찾아질 때</h2>
<p class="body">지형이 생성될 때 함께 만들어지는 건물이라 <b>7월 26일 이후 처음 가는 지역</b>에만 나타납니다. 이미 탐사한 곳에는 없습니다. <code>/locate</code>가 못 찾는다고 하거나 몇 천 블록 떨어진 좌표를 주면 그게 정상입니다. 안 가본 방향으로 나가면 500블록쯤마다 하나씩 있습니다.</p>

<div class="callout callout--tip">
  <h3>부른 관장을 그 자리에 붙박이로 두려면</h3>
  <p><code>summon</code> 으로 부른 관장은 한참 지나면 다른 몹처럼 사라질 수 있습니다. 체육관에 아예 고정해 두려면 <code>summon</code> 대신 <code>summon_persistent</code> 를 쓰세요. 위 명령어에서 그 단어만 바꾸면 됩니다.</p>
  <div class="code">
    <code>/rctmod trainer summon_persistent leader_brock_019e</code>
    <button class="btn btn--ghost" type="button" data-copy="/rctmod trainer summon_persistent leader_brock_019e" data-label="복사됨"><span data-copy-label>복사</span></button>
  </div>
</div>

<h2>말은 거는데 배틀이 시작 안 될 때</h2>
<p class="body">관장이 눈앞에 있는데 배틀을 거부한다면 아래 넷 중 하나입니다. 관장이 하는 말에 이유가 적혀 있습니다.</p>

<dl class="faq">
  <dt>"다른 지방 사람이다" 같은 말을 합니다</dt>
  <dd>내 지방이 관동으로 설정되지 않았습니다. 아래를 한 번 실행하세요. 체육관 글의 1번과 같은 명령어입니다.
    <div class="code">
      <code>/rctmod player set series radicalred</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod player set series radicalred" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </dd>

  <dt>앞 순서를 먼저 깨라고 합니다</dt>
  <dd>관장마다 먼저 이겨야 하는 상대가 정해져 있습니다. 진행도를 그 관장 <b>직전</b>으로 맞추면 열립니다. 끝의 ID를 위 목록에서 복사해 바꿔 넣으세요.
    <div class="code">
      <code>/rctmod player set progress before leader_misty_019f</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod player set progress before leader_misty_019f" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </dd>

  <dt>이미 이긴 관장입니다</dt>
  <dd>관장은 한 사람당 <b>한 번만</b> 이길 수 있습니다. 다시 붙고 싶으면 격파 횟수를 0으로 되돌리세요.
    <div class="code">
      <code>/rctmod player set defeats leader_misty_019f 0</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod player set defeats leader_misty_019f 0" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </dd>

  <dt>포켓몬이 너무 세다고 합니다</dt>
  <dd>내 파티 최고 레벨이 상한을 넘었을 때 나옵니다. 이 서버는 상한을 100으로 열어두었으니 거의 볼 일이 없지만, 나온다면 제일 센 포켓몬을 <b>PC 박스</b>에 넣으면 됩니다. 손에 든 6마리만 계산에 들어갑니다.</dd>
</dl>

<div class="split">
  <p class="warn"><b>선택자를 붙이지 마세요.</b> 명령어 뒤에 <code>@a</code> 같은 것을 붙이면 접속해 있는 사람 전원에게 적용됩니다. 그냥 위에 적힌 그대로 치면 <b>자기 자신에게만</b> 걸립니다.</p>
  <p class="why"><b>왜 관장이 사라지나요.</b> 체육관 건물이 만들어질 때 안쪽 장치가 관장을 한 번 불러냅니다. 그 뒤에 관장이 죽거나 사라지면 다시 불러주는 장치가 없어서 빈 건물만 남습니다. 위 명령어가 그 역할을 대신합니다.</p>
</div>

<h2>한눈에 보기</h2>
<div class="tablewrap">
<table>
  <thead><tr><th>순서</th><th>체육관</th><th>관장</th><th>타입</th><th>레벨</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>회색시티</td><td>Brock</td><td>바위</td><td>14</td></tr>
    <tr><td>2</td><td>블루시티</td><td>Misty</td><td>물</td><td>27</td></tr>
    <tr><td>3</td><td>갈색시티</td><td>Lt. Surge</td><td>전기</td><td>34</td></tr>
    <tr><td>4</td><td>무지개시티</td><td>Erika</td><td>풀</td><td>44</td></tr>
    <tr><td>5</td><td>금빛시티</td><td>Sabrina</td><td>에스퍼</td><td>59</td></tr>
    <tr><td>6</td><td>연분홍시티</td><td>Koga</td><td>독</td><td>68</td></tr>
    <tr><td>7</td><td>홍련섬</td><td>Blaine</td><td>불꽃</td><td>76</td></tr>
    <tr><td>8</td><td>검은먹시티</td><td>Clair</td><td>드래곤</td><td>81</td></tr>
    <tr><td>9</td><td>관동 리그 <b>(엔드)</b></td><td>사천왕 · 챔피언</td><td>-</td><td>85</td></tr>
  </tbody>
</table>
</div>
<p class="body">레벨은 관장이 데리고 나오는 포켓몬 기준입니다. 야생 트레이너와 달리 관장은 내 레벨에 맞춰 약해지지 않으니, 표를 보고 준비되었을 때 도전하세요.</p>
`
},

{
  id: "2026-07-26-gym",
  date: "2026-07-26",
  cat: "패치",
  pinned: false,
  title: "체육관, 관장 스폰 업데이트",
  summary: "칸토 8곳과 리그가 월드에 생성됩니다. 관장이 안 나오던 문제도 고쳤습니다.",
  body: `
<p class="body">관장이 나오지 않던 문제도 함께 고쳤습니다. 접속한 뒤 아래 두 줄만 한 번 실행하면 끝입니다.</p>

<h2>접속하면 딱 한 번, 이것만</h2>

<ol class="cmds">
  <li>
    <h3 class="cmd__t"><span class="cmd__n">1</span>칸토 지방으로 설정</h3>
    <div class="code">
      <code>/rctmod player set series radicalred targets @s</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod player set series radicalred targets @s" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
  <li>
    <h3 class="cmd__t"><span class="cmd__n">2</span>진행도 맞추기</h3>
    <p class="cmd__d">내 <b>파티 최고 레벨</b>을 보고 둘 중 하나만 실행하세요.</p>
    <p class="code__k">파티 최고 55 이상</p>
    <div class="code">
      <code>/rctmod player set progress after trainer_brendan_0032 targets @s</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod player set progress after trainer_brendan_0032 targets @s" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
    <p class="code__k">파티 최고 50 이하</p>
    <div class="code">
      <code>/rctmod player set progress after leader_misty_019f targets @s</code>
      <button class="btn btn--ghost" type="button" data-copy="/rctmod player set progress after leader_misty_019f targets @s" data-label="복사됨"><span data-copy-label>복사</span></button>
    </div>
  </li>
</ol>

<div class="split">
  <p class="warn"><b>반드시 <code>@s</code>로 실행하세요.</b> <code>@a</code>를 쓰면 그 순간 접속해 있는 사람 전원에게 적용됩니다. 한 번만 하면 계속 유지되고, 다 같이 모일 필요도 없습니다.</p>
  <p class="why"><b>왜 필요한가요.</b> 트레이너는 내 레벨에 맞는 상대만 나타납니다. 그런데 칸토 스토리는 레벨 14 브록부터 시작합니다. 이미 레벨 60인 사람이 처음부터 시작하면 초반 상대가 너무 약해서 아무도 나타나지 않습니다.</p>
</div>

<h2>체육관 찾기</h2>
<p class="body">칸토 8곳과 리그 1곳이 월드에 생성됩니다. 아래 이름을 <code>/locate structure</code> 뒤에 붙이면 좌표를 알려줍니다.</p>

<div class="code code--lg">
  <code>/locate structure rgs:pewter_gym</code>
  <button class="btn btn--ghost" type="button" data-copy="/locate structure rgs:pewter_gym" data-label="복사됨"><span data-copy-label>복사</span></button>
</div>

<ul class="chips">
  <li><button type="button" data-copy="rgs:pewter_gym" data-label="복사됨"><span data-copy-label>rgs:pewter_gym</span></button></li>
  <li><button type="button" data-copy="rgs:cerulean_gym" data-label="복사됨"><span data-copy-label>rgs:cerulean_gym</span></button></li>
  <li><button type="button" data-copy="rgs:vermilion_gym" data-label="복사됨"><span data-copy-label>rgs:vermilion_gym</span></button></li>
  <li><button type="button" data-copy="rgs:celadon_gym" data-label="복사됨"><span data-copy-label>rgs:celadon_gym</span></button></li>
  <li><button type="button" data-copy="rgs:fuchsia_gym" data-label="복사됨"><span data-copy-label>rgs:fuchsia_gym</span></button></li>
  <li><button type="button" data-copy="rgs:saffron_gym" data-label="복사됨"><span data-copy-label>rgs:saffron_gym</span></button></li>
  <li><button type="button" data-copy="rgs:cinnabar_gym" data-label="복사됨"><span data-copy-label>rgs:cinnabar_gym</span></button></li>
  <li><button type="button" data-copy="rgs:blackthorn_gym" data-label="복사됨"><span data-copy-label>rgs:blackthorn_gym</span></button></li>
  <li class="chips__end"><button type="button" data-copy="rgs:kanto_league" data-label="복사됨"><span data-copy-label>rgs:kanto_league</span></button><span class="chips__hint">엔드에 있습니다</span></li>
</ul>

<div class="callout">
  <h3>이미 가본 곳에는 없습니다</h3>
  <p>지형이 생성될 때 함께 만들어지는 구조물이라 <b>7월 26일 이후 처음 가는 지역</b>에만 나타납니다. <code>/locate</code>가 못 찾는다고 하거나 아주 먼 좌표를 주면 그게 정상입니다. 안 가본 방향으로 나가세요. 한번 미개척지에 들어가면 500블록쯤마다 하나씩 있어서 꽤 자주 보입니다.</p>
</div>

<p class="body">관장은 체육관 안에 고정되어 있습니다. 야생 트레이너와 달리 레벨과 상관없이 언제든 도전할 수 있습니다.</p>

<h2>상대 레벨은 내 파티를 따라옵니다</h2>

<div class="bands">
  <div class="band">
    <p class="band__k">내 파티 최고 레벨</p>
    <p class="band__v">30</p>
    <p class="band__arrow">상대는</p>
    <p class="band__r">23 <span>~</span> 37</p>
  </div>
  <div class="band">
    <p class="band__k">내 파티 최고 레벨</p>
    <p class="band__v">60</p>
    <p class="band__arrow">상대는</p>
    <p class="band__r">45 <span>~</span> 75</p>
    <p class="band__sub">대부분 49 ~ 64</p>
  </div>
</div>

<div class="callout callout--tip">
  <h3>너무 어려우면 박스에 넣으세요</h3>
  <p>계산에 들어가는 것은 <b>손에 든 6마리뿐</b>입니다. PC 박스는 세지 않습니다. 제일 센 포켓몬을 박스에 넣어두면 내 기준 레벨이 내려가고 상대도 함께 약해집니다. 육성 중인 팀으로만 다니면 난이도가 알아서 맞춰집니다.</p>
</div>

<h2>새로 들어온 모드</h2>
<div class="tablewrap">
<table>
  <thead><tr><th>모드</th><th>내용</th></tr></thead>
  <tbody>
    <tr><td>Radical Gyms &amp; Structures</td><td>칸토 체육관 8곳과 엔드의 칸토 리그. 관장은 건물 안에 고정 배치됩니다</td></tr>
    <tr><td>CobbleFurnies</td><td>포켓몬 테마 가구</td></tr>
    <tr><td>Athena</td><td>블록 텍스처를 이어 붙입니다. CobbleFurnies가 요구하는 부품입니다</td></tr>
  </tbody>
</table>
</div>
<p class="body">접속하면 AutoModpack이 알아서 받아줍니다. 다 받은 뒤에는 <b>게임을 껐다 켜야</b> 적용됩니다.</p>

<h2>칸토를 다 깨면 다른 지방으로</h2>
<p class="body">칸토가 끝이 아닙니다. 신오와 언바운드로 갈아탈 수 있습니다. 미리 <b>트레이너 카드</b>를 만들어 가방에 넣고 다니세요. 카드가 없으면 안내 NPC가 오지 않습니다.</p>

<div class="recipe">
  <div class="grid3" role="img" aria-label="트레이너 카드 조합법. 첫째 줄 종이 종이 종이, 둘째 줄 이름표 유리판 레드스톤, 셋째 줄 종이 종이 종이.">
    <span>종이</span><span>종이</span><span>종이</span>
    <span>이름표</span><span>유리판</span><span>레드스톤</span>
    <span>종이</span><span>종이</span><span>종이</span>
  </div>
  <ol class="steps">
    <li>카드를 가방에 넣고 다닙니다.</li>
    <li>칸토를 다 깨면 트레이너 협회 NPC가 알아서 찾아옵니다.</li>
    <li>우클릭하면 주민과 똑같은 거래창이 열립니다. 지방이 카드 모양으로 진열되고 이름, 소개, 별로 표시된 난이도까지 적혀 있습니다.</li>
    <li>빈 카드를 넣고 원하는 지방 카드를 꺼내면 전환이 끝납니다.</li>
  </ol>
</div>

<p class="body">카드는 없어지지 않습니다. 이름 없는 카드가 칸토라고 적힌 카드로 바뀔 뿐이고, 횟수 제한도 없습니다.</p>

<h2>그 밖에</h2>
<p class="body">체육관 관장이 커맨드 블록으로 소환되기 때문에 커맨드 블록을 켰습니다. 관장이 거의 안 나오던 문제는 서버 설정 실수였고 지금은 정상입니다. 야생 포켓몬은 먼저 공격하지 않지만 때리면 반격합니다.</p>
`
},

{
  id: "2026-07-26-help",
  date: "2026-07-26",
  cat: "안내",
  pinned: false,
  title: "문제 해결 안내",
  summary: "트레이너가 안 보이거나 체육관을 못 찾을 때 먼저 볼 목록입니다.",
  body: `
<dl class="faq">
  <dt>트레이너가 아예 안 보여요</dt>
  <dd>칸토 지방 설정 명령어를 실행하지 않았을 가능성이 큽니다. 체육관 패치 글의 1번 명령어를 확인하세요.</dd>

  <dt>너무 약하거나 너무 센 상대만 나와요</dt>
  <dd>진행도 맞추기 명령어를 실행했는지 확인하고, 파티 구성을 바꿔보세요. 상대 레벨은 손에 든 6마리의 최고 레벨을 따라옵니다.</dd>

  <dt>체육관을 못 찾겠어요</dt>
  <dd>안 가본 방향으로 더 멀리 나가야 합니다. 지형이 생성될 때 함께 만들어지는 구조물이라 이미 탐사한 지역에는 생성되지 않습니다.</dd>

  <dt>모드가 적용이 안 된 것 같아요</dt>
  <dd>AutoModpack 다운로드가 끝난 뒤 게임을 완전히 껐다 켜야 적용됩니다. 다운로드 중에 창을 닫았다면 다시 접속해서 받아주세요.</dd>

  <dt>서버가 안 떠요</dt>
  <dd>아무도 없으면 자동으로 꺼집니다. 디스코드 채널에 말씀해 주시면 켜드립니다. 1~2분 걸립니다.</dd>

  <dt>접속이 안 되거나 튕겨요</dt>
  <dd>스크린샷과 함께 디스코드 채널에 올려주세요. 메모리를 4GB 이상 할당했는지도 같이 확인해 주세요.</dd>
</dl>
`
},

{
  id: "2026-07-25-trainers",
  date: "2026-07-25",
  cat: "패치",
  pinned: false,
  title: "트레이너 NPC, 환상의 포켓몬 업데이트",
  summary: "야생에 트레이너가 돌아다니고, 반쪽만 들어가 있던 환상의 포켓몬이 제대로 작동합니다.",
  body: `
<h2>Radical Cobblemon Trainers</h2>
<p class="body">야생에 트레이너 NPC가 돌아다닙니다. 말을 걸면 배틀이 시작되고 이기면 보상을 줍니다. 등록된 트레이너는 1559명이고, 플레이어 한 명당 주변에 최대 12명까지 나타납니다. <b>먼저 말을 걸어야 배틀이 시작됩니다.</b> 쳐다보기만 해도 끌려가는 설정은 껐으니 안 싸우고 지나가도 됩니다.</p>

<h2>Myths and Legends</h2>
<p class="body">그동안 데이터팩만 있고 모드 본체가 빠져 있어서 전용 아이템이 아예 존재하지 않았습니다. 본체를 넣었습니다. 하늘의 피리, 근성의 구슬, 오로라 티켓 등 <b>키 아이템 82종</b>이 추가되고 이것들이 특정 전설과 환상 포켓몬의 스폰 조건이 됩니다. 어둠의 족자와 물의 족자로 쿠부에서 우라오스 진화가 가능해지고, 멜탄에서 멜메탈 진화도 정상 작동합니다.</p>

<h2>전투 동작이 바뀌었습니다</h2>
<div class="tablewrap">
<table>
  <thead><tr><th></th><th>전</th><th>후</th></tr></thead>
  <tbody>
    <tr><td>야생 포켓몬이 먼저 공격</td><td>안 함</td><td>안 함 (그대로)</td></tr>
    <tr><td>야생 포켓몬이 반격</td><td>거의 안 함</td><td><b>반격합니다</b></td></tr>
    <tr><td>내 포켓몬이 같이 싸움</td><td>안 함</td><td><b>같이 싸웁니다</b></td></tr>
  </tbody>
</table>
</div>
<p class="body">야생 포켓몬은 여전히 먼저 때리지 않습니다. 다만 때리면 반격합니다. 그동안 레벨이 낮은 포켓몬은 반격하지 않도록 막혀 있었는데 그 제한을 풀었습니다. 내보낸 포켓몬도 주인을 도와 함께 싸웁니다. Poke Staff를 들고 키를 누르면 원하는 대상에게 특정 기술을 지시할 수 있습니다.</p>

<h2>레벨 제한 없습니다</h2>
<p class="body">RCT는 원래 트레이너를 순서대로 이겨야 포켓몬 레벨 상한이 올라가고, 상한에 닿으면 경험치가 아예 들어오지 않습니다. 기본값이 레벨 15였습니다. 이 서버는 그 제한을 껐습니다. 트레이너는 원할 때 싸우는 추가 콘텐츠일 뿐이고, 안 싸워도 성장에 지장이 없습니다.</p>

<h2>안내문 정정</h2>
<p class="body">안내문에 적혀 있던 "야생 포켓몬이 먼저 공격합니다"는 잘못된 설명이었습니다. 확인해 보니 원래부터 그런 설정이 아니었고 지금도 먼저 공격하지 않습니다.</p>

<h2>바뀌지 않은 것</h2>
<p class="body">모드팩 버전은 1.7.3 그대로라 Modrinth에서 다시 설치할 필요가 없습니다. 월드, 인벤토리, 포켓몬 전부 그대로이고 기존 모드 74개는 하나도 건드리지 않았습니다. Path to Legends, Mega Showdown, 교배, 상점도 그대로입니다.</p>
`
}

];
