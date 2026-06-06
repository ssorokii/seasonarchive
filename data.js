// ✏️ 계절 정의
const seasons = {
  spring: {
    label: "봄", en: "SPRING",
    gradient: "linear-gradient(135deg,#f8c8d4 0%,#fde8c8 50%,#e8f4d4 100%)",
    accent: "#e8758a", text: "#5a2d3a", tag: "#f0a8b8", tagText: "#8b3a4a",
    emoji: "🌸", desc: "설레고 따뜻한 계절의 작품들"
  },
  summer: {
    label: "여름", en: "SUMMER",
    gradient: "linear-gradient(135deg,#c8e8f8 0%,#d4f0e8 50%,#f8f0c8 100%)",
    accent: "#2a8ab8", text: "#1a3a5a", tag: "#a8d8f0", tagText: "#1a5a7a",
    emoji: "🌊", desc: "뜨겁고 생동감 넘치는 작품들"
  },
  autumn: {
    label: "가을", en: "AUTUMN",
    gradient: "linear-gradient(135deg,#f8e8c8 0%,#f0c8a8 50%,#e8d8c8 100%)",
    accent: "#c86820", text: "#4a2a10", tag: "#f0c898", tagText: "#7a3a10",
    emoji: "🍂", desc: "깊고 사색적인 계절의 작품들"
  },
  winter: {
    label: "겨울", en: "WINTER",
    gradient: "linear-gradient(135deg,#d8e8f8 0%,#e8eef8 50%,#f0f4f8 100%)",
    accent: "#3a5888", text: "#1a2a4a", tag: "#b8cce8", tagText: "#2a4a78",
    emoji: "❄️", desc: "고요하고 서정적인 작품들"
  },
};

// ✏️ 카테고리 정의
const categories = [
  { key: "영화", emoji: "🎬" },
  { key: "드라마", emoji: "📺" },
  { key: "책", emoji: "📚" },
];

const typeColors = {
  "영화": { bg: "#fff0f5", text: "#c0406a" },
  "드라마": { bg: "#f0f5ff", text: "#4060c0" },
  "책": { bg: "#f0fff5", text: "#208050" },
};

// ✏️ 무드 목록 (관리자 화면에서도 수정 가능)
let moodList = ["설렘", "위로", "몽환", "열정", "유쾌", "그리움", "서사", "치유", "성찰", "따뜻함", "판타지", "철학"];

// ✏️ 작품 데이터
let works = {
  spring: [
    { id: 1, title: "벚꽃 동화", type: "영화", year: "2023", mood: ["설렘"], note: "봄날의 첫사랑 같은 영화", poster: "" },
    { id: 2, title: "나의 해방일지", type: "드라마", year: "2022.04 ~ 2022.05", mood: ["위로"], note: "봄처럼 천천히 피어나는 이야기", poster: "" },
    { id: 3, title: "채식주의자", type: "책", year: "2007", mood: ["몽환"], note: "한강 작가의 섬세한 봄의 감각", poster: "" },
  ],
  summer: [
    { id: 4, title: "콜 미 바이 유어 네임", type: "영화", year: "2017", mood: ["열정"], note: "이탈리아 여름의 뜨거운 감정", poster: "" },
    { id: 5, title: "이상한 변호사 우영우", type: "드라마", year: "2022.06 ~ 2022.08", mood: ["유쾌"], note: "여름처럼 활기차고 따뜻한", poster: "" },
    { id: 6, title: "노르웨이의 숲", type: "책", year: "1987", mood: ["그리움"], note: "무라카미 하루키의 여름 청춘", poster: "" },
  ],
  autumn: [
    { id: 7, title: "가을의 전설", type: "영화", year: "1994", mood: ["서사"], note: "가을처럼 깊고 장엄한 이야기", poster: "" },
    { id: 8, title: "나의 아저씨", type: "드라마", year: "2018.03 ~ 2018.05", mood: ["치유"], note: "가을의 무게감이 느껴지는 드라마", poster: "" },
    { id: 9, title: "82년생 김지영", type: "책", year: "2016", mood: ["성찰"], note: "가을처럼 묵직하게 남는 이야기", poster: "" },
  ],
  winter: [
    { id: 10, title: "러브 액츄얼리", type: "영화", year: "2003", mood: ["따뜻함"], note: "겨울 밤 보기 딱 좋은 영화", poster: "" },
    { id: 11, title: "도깨비", type: "드라마", year: "2016.12 ~ 2017.01", mood: ["판타지"], note: "눈 내리는 겨울과 어울리는 로맨스", poster: "" },
    { id: 12, title: "데미안", type: "책", year: "1919", mood: ["철학"], note: "겨울 긴 밤에 읽기 좋은 고전", poster: "" },
  ],
};
