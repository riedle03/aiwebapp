import { TutorialSectionData } from './types';

export const HOME_SECTION: TutorialSectionData = {
  id: 'home',
  title: '교실 속 아이디어를 현실로, AI 웹앱 개발 첫걸음',
  steps: [{ 
    title: '가이드 소개: 무엇을 배우고 무엇을 만드나요?',
    text: `**강의 소개**
이 가이드는 AI 기술을 활용한 웹 애플리케이션을 직접 만들고 배포하고자 하는 선생님들을 위한 실습 중심의 개발 환경 설정 안내서입니다. 복잡한 설치 과정 없이 클라우드 기반 도구를 사용하여 누구나 쉽게 따라 할 수 있도록 구성되었습니다.

**학습 목표**
이 가이드를 통해 선생님들은 최신 웹 기술과 AI를 접목하는 과정을 경험하게 됩니다. 단순히 코드를 따라 치는 것을 넘어, '왜' 이 도구를 사용하고 '어떻게' 아이디어를 실제 웹 서비스로 만들어내는지 이해하는 것을 목표로 합니다.

**이 과정을 마치면 무엇을 할 수 있나요?**
- GitHub를 통해 코드를 관리하고 협업의 기초를 다질 수 있습니다.
- 클라우드 개발 환경(Codespaces)에서 프로젝트를 설정하고 개발할 수 있습니다.
- Vite와 React를 사용하여 반응형 웹 애플리케이션의 뼈대를 만들 수 있습니다.
- Google Gemini와 같은 강력한 AI 모델을 웹 애플리케이션에 연동할 수 있습니다.
- Netlify를 통해 자신의 웹 애플리케이션을 전 세계에 공개하고 공유할 수 있습니다.

**학습 순서**
왼쪽의 메뉴를 따라 다음 순서로 학습을 진행하게 됩니다.
1. ##ICON:BookOpen## **GitHub 회원가입**: 버전 관리 시스템인 GitHub에 가입합니다.
2. ##ICON:Code## **Repository 개설**: 코드를 저장하고 관리할 온라인 공간을 만듭니다.
3. ##ICON:Terminal## **Codespaces 실행**: 브라우저에서 바로 코딩할 수 있는 클라우드 개발 환경을 시작합니다.
4. ##ICON:Zap## **Vite 설치하기**: 최신 기술을 사용하여 웹 프로젝트를 설정하고 필요한 라이브러리를 설치합니다.
5. ##ICON:Cloud## **Netlify 회원가입**: 웹 애플리케이션을 배포하기 위한 서비스에 가입합니다.
6. ##ICON:Github## **프로젝트 가져오기**: GitHub의 프로젝트를 Netlify와 연결합니다.
7. ##ICON:KeyRound## **API 키 설정**: Gemini AI를 사용하기 위한 비밀 키를 안전하게 설정합니다.
8. ##ICON:Rocket## **배포하기**: 단 몇 번의 클릭으로 나의 웹 애플리케이션을 인터넷에 공개합니다.
9. ##ICON:LayoutGrid## **결과물**: 이 가이드를 통해 만들 수 있는 다양한 AI 앱 예시를 둘러봅니다.
10. ##ICON:User## **저자 소개**: 이 가이드를 만든 사람에 대해 알아봅니다.` 
  }]
};

export const TUTORIAL_SECTIONS: TutorialSectionData[] = [
  {
    id: 'github-signup',
    title: 'GitHub 회원가입',
    steps: [
      {
        title: '1. GitHub 사이트 접속',
        text: '먼저, 웹 브라우저를 열고 [github.com](https://github.com)으로 이동합니다. 우측 상단의 "Sign up" 버튼을 클릭하세요.',
        image: 'images/github-signup-1.png',
      },
      {
        title: '2. 계정 정보 입력',
        text: '이메일 주소, 사용자 이름, 비밀번호를 입력합니다. 화면의 지시에 따라 가입 절차를 완료하세요.',
        image: 'images/github-signup-2.png',
      },
      {
        title: '3. 이메일 인증',
        text: '가입 시 입력한 이메일 주소로 인증 메일이 발송됩니다. 메일을 확인하여 계정을 활성화하세요.',
      },
    ],
  },
  {
    id: 'create-repo',
    title: 'Repository 개설',
    steps: [
      {
        title: '1. 새 Repository 생성',
        text: '로그인 후, 우측 상단의 + 아이콘을 클릭하고 "New repository"를 선택합니다.',
        image: 'images/create-repo-1.png',
      },
      {
        title: '2. Repository 정보 입력',
        text: 'Repository 이름을 입력합니다 (예: `my-first-app`). Public으로 설정하고, "Add a README file" 옵션을 체크해야 합니다.',
        image: 'images/create-repo-2.png',
      },
      {
        title: '3. 생성 완료',
        text: '"Create repository" 버튼을 클릭하여 Repository 생성을 완료합니다. 이제 온라인 코드 저장소가 준비되었습니다.',
        image: 'images/create-repo-3.png',
      },
    ],
  },
  {
    id: 'codespaces-run',
    title: 'Codespaces 실행',
    steps: [
      {
        title: '1. Codespace 시작하기',
        text: '생성한 Repository 페이지에서 녹색 "<> Code" 버튼을 클릭합니다. 그 다음 "Codespaces" 탭을 선택하고 "Create codespace on main" 버튼을 클릭하세요.',
        image: 'images/codespaces-run-1.png',
      },
      {
        title: '2. 개발 환경 준비',
        text: 'GitHub가 클라우드에서 당신을 위한 개발 환경을 설정하는 동안 잠시 기다립니다. 이 과정은 몇 분 정도 소요될 수 있습니다.',
        image: 'images/codespaces-run-2.png',
      },
      {
        title: '3. VS Code 편집기',
        text: '준비가 완료되면 웹 브라우저에서 바로 VS Code 편집기가 열립니다. 이제 별도의 설치 없이 코딩을 시작할 수 있습니다.',
        image: 'images/codespaces-run-3.png',
      },
    ],
  },
  {
    id: 'vite-install',
    title: 'Vite 설치하기',
    steps: [
      {
        title: '1. 터미널 열기',
        text: 'Codespaces의 VS Code 편집기에서 상단 메뉴의 "Terminal" > "New Terminal"을 클릭하여 터미널을 엽니다.',
      },
      {
        title: '2. Vite 프로젝트 생성 실행',
        text: '아래 명령어를 터미널에 입력하고 엔터를 눌러 Vite 설치를 시작합니다. 명령어 마지막의 `.`은 현재 폴더에 프로젝트를 생성하라는 의미입니다.',
        code: 'npm create vite@latest .',
        language: 'bash',
      },
      {
        title: '3. 설치 옵션 선택하기',
        text: '명령어를 실행하면 나타나는 질문에 아래 예시처럼 답변해주세요. 각 단계는 코드 블록 내의 주석으로 설명되어 있습니다.',
        code: `
# 1. 진행 여부 확인
# "Ok to proceed? (y)" 라는 질문이 나오면 y 를 입력하고 엔터를 누릅니다.
? Ok to proceed? (y) › y

# 2. 기존 파일 제거 확인 (현재 디렉토리가 비어있지 않은 경우)
# "Current directory is not empty..." 메시지가 보이면,
# 키보드 화살표를 이용해 'Remove existing files and continue' 를 선택하고 엔터를 누릅니다.
? Current directory is not empty. Remove existing files and continue?
› Remove existing files and continue

# 3. 프레임워크 선택
# "Select a framework:" 에서는 'React' 를 선택하고 엔터를 누릅니다.
? Select a framework:
› React

# 4. 변형(variant) 선택
# "Select a variant:" 에서는 'TypeScript' 를 선택하고 엔터를 누릅니다.
? Select a variant:
› TypeScript
`.trim(),
        language: 'bash',
      },
      {
        title: '4. 프로젝트 의존성 설치',
        text: `\`npm install\`은 프로젝트에 필요한 모든 재료를 한 번에 가져오는 마법 같은 명령어입니다.

이전 단계에서 Vite가 만들어준 \`package.json\` 파일은 '요리 레시피에 필요한 재료 목록'과 같습니다. 이 목록에는 \`react\`, \`react-dom\` 등 우리 앱을 만드는 데 꼭 필요한 핵심 부품들이 이미 적혀있습니다.

\`npm install\` 명령어를 실행하면, \`npm\`이라는 이름의 똑똑한 장바구니 로봇이 이 목록을 보고 인터넷(npm 레지스트리라는 거대한 창고)에서 모든 재료를 찾아서 다운로드합니다. 그리고 \`node_modules\`라는 폴더를 만들어 그 안에 차곡차곡 정리해 둡니다.

**간단히 말해, \`npm install\`은:**
1. \`package.json\` (재료 목록)을 확인합니다.
2. 목록에 있는 모든 패키지(재료)를 다운로드합니다.
3. \`node_modules\` (재료 보관함) 폴더에 저장합니다.

덕분에 우리는 \`react\`나 \`react-dom\` 같은 패키지를 일일이 설치할 필요 없이, 이 명령어 하나로 프로젝트 준비를 끝낼 수 있습니다.

아래 명령어를 터미널에 입력하여 프로젝트에 필요한 모든 패키지를 설치하세요.`,
        code: 'npm install',
        language: 'bash',
      },
      {
        title: '5. Google AI 패키지 설치',
        text: 'AI 기능을 사용하기 위한 Google AI SDK를 설치합니다. 이 패키지를 통해 Gemini API와 통신할 수 있습니다.',
        code: 'npm install @google/genai',
        language: 'bash',
      },
      {
        title: '6. 차트 라이브러리 설치',
        text: '애플리케이션에 데이터 시각화를 위한 차트를 추가하기 위해 `recharts` 라이브러리를 설치합니다. 이 라이브러리를 사용하면 다양한 종류의 차트를 쉽게 만들 수 있습니다.',
        code: 'npm install recharts',
        language: 'bash',
      },
      {
        title: '7. 아이콘 라이브러리 설치',
        text: '사용자 인터페이스를 더 직관적으로 만들기 위해 아이콘을 사용합니다. `react-icons`는 다양한 아이콘들을 모아놓은 편리한 라이브러리입니다.',
        code: 'npm install react-icons',
        language: 'bash',
      },
      {
        title: '8. 마크다운 렌더링 라이브러리 설치',
        text: '텍스트를 아름답게 보여주는 것은 중요합니다. `react-markdown`은 마크다운 형식의 텍스트를 HTML로 안전하게 변환해주는 라이브러리입니다. `remark-gfm` 플러그인과 함께 사용하면, 표, 취소선, 자동 링크 등 GitHub 스타일의 마크다운을 손쉽게 웹 페이지에 표시할 수 있습니다.',
        code: 'npm install react-markdown remark-gfm',
        language: 'bash',
      },
      {
        title: '9. Tailwind CSS 및 관련 도구 설치',
        text: 'Vite 프로젝트에서 Tailwind CSS를 사용하기 위한 패키지들을 설치합니다. `-D` 옵션은 이 패키지들이 개발 과정에서만 필요하다는 것을 의미합니다.\n\n- `tailwindcss`: 핵심적인 스타일링 프레임워크입니다.\n- `postcss`, `autoprefixer`: CSS 코드를 여러 브라우저에서 잘 동작하도록 자동으로 변환해주는 도구들입니다.',
        code: 'npm install -D tailwindcss@3.4.17 postcss autoprefixer',
        language: 'bash',
      },
      {
        title: '10. Tailwind CSS 설정 파일 생성',
        text: 'Tailwind CSS를 프로젝트에서 사용하기 위한 설정 파일을 생성합니다. 이 명령어를 실행하면 `tailwind.config.js`와 `postcss.config.js` 파일이 만들어집니다. 이 파일들은 Tailwind의 동작을 세밀하게 조정하는 데 사용됩니다.',
        code: 'npx tailwindcss init -p',
        language: 'bash',
      },
      {
        title: '11. 개발 서버 실행',
        text: '다음 명령어로 개발 서버를 실행합니다. Codespaces는 자동으로 포트를 포워딩하고, 웹 앱을 미리 볼 수 있는 팝업을 띄워줍니다.',
        code: 'npm run dev',
        language: 'bash',
      },
    ],
  },
  {
    id: 'netlify-signup',
    title: 'Netlify 회원가입',
    steps: [
      {
        title: '1. Netlify 사이트 접속 및 가입',
        text: '웹 브라우저에서 [app.netlify.com](https://app.netlify.com)으로 이동합니다. "Sign up" 버튼을 클릭하여 회원가입을 시작하세요.',
        image: 'images/netlify-signup-1.png',
      },
      {
        title: '2. GitHub 계정으로 가입',
        text: '여러 가입 옵션 중 "Sign up with GitHub"를 선택하는 것이 가장 편리합니다. GitHub 계정으로 Netlify에 접근 권한을 부여하세요.',
        image: 'images/netlify-signup-2.png',
      },
      {
        title: '3. 가입 완료',
        text: '몇 가지 간단한 질문에 답하면 Netlify 대시보드로 이동하게 됩니다. 이제 배포 준비가 되었습니다.',
        image: 'images/netlify-signup-3.png',
      },
    ],
  },
  {
    id: 'netlify-import',
    title: 'GitHub에서 프로젝트 가져오기',
    steps: [
      {
        title: '1. 새 사이트 추가',
        text: 'Netlify 대시보드에서 "Add new project" 드롭다운을 클릭하고 "Import an existing project"를 선택합니다.',
        image: 'images/netlify-import-1.png',
      },
      {
        title: '2. Git 공급자 선택',
        text: 'Let’s deploy your project with에서 GitHub를 클릭합니다.',
        image: 'images/netlify-import-2.png',
      },
      {
        title: '3. Repository 선택',
        text: 'Netlify가 접근할 수 있는 Repository 목록이 표시됩니다. 이전에 생성했던 Repository(예: `my-first-app`)를 찾아 선택하세요. 만약 목록에 보이지 않는다면, "Configure the Netlify app on GitHub" 링크를 클릭하여 권한을 설정해야 할 수 있습니다.',
        image: 'images/netlify-import-3.png',
      },
      {
        title: '4. 프로젝트 이름 설정',
        text: '배포 설정 페이지 상단에서 프로젝트 이름을 설정할 수 있습니다. 이 이름은 웹사이트의 기본 주소(URL)가 됩니다. 예를 들어, `my-cool-teacher-app`이라고 입력하면 주소는 `my-cool-teacher-app.netlify.app`이 됩니다. 입력하지 않으면 Netlify가 무작위로 생성해줍니다.',
        image: 'images/netlify-import-4.png',
      },
    ],
  },
  {
    id: 'netlify-env-vars',
    title: 'Gemini API 키 설정',
    steps: [
      {
        title: '1. 환경 변수 섹션으로 이동',
        text: '프로젝트 가져오기 마지막 단계에서 프로젝트 이름을 설정한 후, 같은 페이지에서 아래로 스크롤하여 **Environment variables** 섹션을 찾습니다. **Add environment variables** 버튼을 클릭하세요.',
        image: 'images/netlify-env-import1.png',
      },
      {
        title: '2. .env 파일에서 가져오기 선택',
        text: '나타나는 드롭다운 메뉴에서 **Import from a .env file** 항목을 선택합니다. 이 방법을 사용하면 여러 환경 변수를 한 번에 편리하게 추가할 수 있습니다.',
      },
      {
        title: '3. API 키 내용 입력 및 가져오기',
        text: '`Import environment variables` 팝업창에서 `Contents of .env file` 입력란에 아래와 같이 API 키 정보를 입력하세요. `YOUR_API_KEY` 부분은 **반드시 Google AI Studio에서 발급받은 본인의 실제 API 키로 교체**해야 합니다.\n\n다른 옵션(Secret, Scopes 등)은 기본값을 그대로 두고, **Import variables** 버튼을 클릭하여 저장합니다.',
        code: 'GEMINI_API_KEY=YOUR_API_KEY',
        language: 'text',
        image: 'images/netlify-env-import2.png',
      },
      {
        title: '참고: Gemini API 키 발급받기',
        text: 'Gemini API 키가 아직 없다면 [Google AI Studio](https://aistudio.google.com/app/apikey)에서 무료로 발급받을 수 있습니다. Google 계정으로 로그인하고 "Create API key" 버튼을 눌러 새 키를 생성하세요.',
      },
    ],
  },
  {
    id: 'netlify-deploy',
    title: '배포하기',
    steps: [
      {
        title: '1. 배포 시작하기',
        text: '모든 설정이 완료되었습니다. 이제 페이지 하단의 **Deploy project** 버튼을 클릭하여 전 세계에 당신의 웹 애플리케이션을 공개하세요. Netlify가 GitHub의 코드를 가져와 빌드하고 배포하는 모든 과정을 자동으로 처리해줍니다.',
        image: 'images/netlify-deploy-1.png',
      },
      {
        title: '2. 배포 진행 상황 확인',
        text: '버튼을 클릭하면 Netlify가 배포를 시작합니다. 잠시 후 `Production` 라벨과 함께 녹색으로 사이트 주소가 표시되면 배포가 성공적으로 완료된 것입니다. 이 과정은 보통 1-2분 정도 소요됩니다.',
        image: 'images/netlify-deploy-2.png',
      },
      {
        title: '3. 나의 웹 앱 확인하기!',
        text: '이제 녹색으로 표시된 사이트 주소를 클릭하여 인터넷에 공개된 당신의 첫 AI 웹 애플리케이션을 확인해보세요! 축하합니다!',
        image: 'images/netlify-deploy-3.png',
      },
    ],
  },
  {
    id: 'results',
    title: 'AI 웹앱 예시',
    steps: [
      {
        title: '프로필 페이지',
        text: '[바로가기](https://aicreatorz.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=Profile+Page'
      },
      {
        title: '생성형 AI를 활용한 공동 조사보고서 1',
        text: '[바로가기](https://3team-korean.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=AI+Report+1'
      },
      {
        title: '생성형 AI를 활용한 공동 조사보고서 2',
        text: '[바로가기](https://koreanlanguage-report-4team.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=AI+Report+2'
      },
      {
        title: '생성형 AI를 활용한 공동 조사보고서 3',
        text: '[바로가기](https://team2koreansite.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=AI+Report+3'
      },
      {
        title: 'AI 픽셀 아트 생성기',
        text: '[바로가기](https://pixelartmk.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=AI+Pixel+Art'
      },
      {
        title: '레트로 제미나이',
        text: '[바로가기](https://retrogem.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=Retro+Gemini'
      },
      {
        title: '기초학력과 게이미피케이션',
        text: '[바로가기](https://edu-gamification.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=Edu+Gamification'
      },
      {
        title: '디지털 글쓰기 에듀테크 소개',
        text: '[바로가기](https://dw-dashboard.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=Digital+Writing'
      },
      {
        title: '디지털 글쓰기 역량 살펴보기',
        text: '[바로가기](https://digitalwriting.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=Writing+Analytics'
      },
      {
        title: '당신의 사고를 돕는 GPT',
        text: '[바로가기](https://chatbot-vite-netlify.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=Thinking+Helper'
      },
      {
        title: '사회관계망 분석 도구',
        text: '[바로가기](https://sna-vis-tool.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=SNA+Tool'
      },
      {
        title: '그래프 해석 및 분석 도구',
        text: '[바로가기](https://mathisfun-jy.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=Graph+Analyzer'
      },
      {
        title: 'STEAM 베스트셀러 동향 분석',
        text: '[바로가기](https://steam-chart-network.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=STEAM+Trends'
      },
      {
        title: '사회정서 성장스토리',
        text: '[바로가기](https://selstory.netlify.app/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=SEL+Story'
      },
    ]
  },
  {
    id: 'author-info',
    title: '저자 소개 및 저서/강의 안내',
    steps: [
      {
        title: '요즘 교사를 위한 AI 디지털 수업 설계 가이드(한빛미디어)',
        text: '[자세히 보기](https://trpd.me/aibook)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=AI+Lesson+Design+Guide'
      },
      {
        title: 'AI와 ChatGPT 200% 활용법(비바샘 원격교육연수원)',
        text: '[자세히 보기](https://t.vivasam.com/mdvs/menu01sub?lcode=t25-001)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=AI+%26+ChatGPT+Course'
      },
      {
        title: 'AI 코스웨어 & 디지털교과서 바로 알기(교육사랑연수원)',
        text: '[자세히 보기](https://www.edulove.co.kr/main/subject_view.asp?gcode=s0907&inx=1)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=AI+Courseware+Course'
      },
      {
        title: 'AI 디지털교과서 활용 수업혁신(서울시교육청교육연수원)',
        text: '[자세히 보기](https://www.seti.go.kr/)',
        image: 'https://placehold.co/1280x720/e2e8f0/4a5568?text=AI+Textbook+Course'
      },
    ]
  }
];