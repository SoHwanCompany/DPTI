export const imgMatching = (name?: string, id?: number) => {
  if (
    name === "웹 개발자" ||
    name === "프론트엔드 개발자" ||
    name === "웹 퍼블리셔" ||
    id === 873 ||
    id === 669 ||
    id === 939
  ) {
    return "frontend";
  } else if (
    name === "서버 개발자" ||
    name === "DevOps / 시스템 관리자" ||
    id === 872 ||
    id === 674
  ) {
    return "server";
  } else if (
    name === "자바 개발자" ||
    name === "C,C++ 개발자" ||
    name === "파이썬 개발자" ||
    name === "Node.js 개발자" ||
    name === "PHP 개발자" ||
    id === 660 ||
    id === 900 ||
    id === 899 ||
    id === 895 ||
    id === 893
  ) {
    return "backend";
  } else if (
    name === "소프트웨어 엔지니어" ||
    name === "QA,테스트 엔지니어" ||
    name === "프로덕트 매니저" ||
    name === "블록체인 플랫폼 엔지니어" ||
    name === "DBA" ||
    name === "ERP전문가" ||
    id === 10110 ||
    id === 676 ||
    id === 876 ||
    id === 1027 ||
    id === 10231 ||
    id === 10230
  ) {
    return "default";
  } else if (
    name === "안드로이드 개발자" ||
    name === "ios개발자" ||
    name === "크로스플랫폼 앱 개발자" ||
    id === 677 ||
    id === 678 ||
    id === 10111
  ) {
    return "mobile";
  } else if (name === "머신러닝 엔지니어" || id === 1634) {
    return "ai";
  } else if (
    name === "데이터 엔지니어" ||
    name === "데이터 사이언티스트" ||
    name === "빅데이터 엔지니어" ||
    id === 655 ||
    id === 1024 ||
    id === 1025
  ) {
    return "data";
  } else if (
    name === "시스템,네트워크 관리자" ||
    name === ".NET 개발자" ||
    id === 665 ||
    id === 661
  ) {
    return "network";
  } else if (
    name === "임베디드 개발자" ||
    name === "하드웨어 엔지니어" ||
    name === "보안 엔지니어" ||
    id === 658 ||
    id === 672 ||
    id === 671
  ) {
    return "embedded";
  } else if (
    name === "게임 클라이언트 개발자" ||
    name === "유니티 개발자" ||
    name === "언리얼 개발자" ||
    name === "모바일 게임 개발자" ||
    name === "게임 서버 개발자" ||
    id === 961 ||
    id === 878 ||
    id === 897 ||
    id === 962 ||
    id === 960
  ) {
    return "game";
  } else if (
    name === "그래픽스 엔지니어" ||
    name === "VR 엔지니어" ||
    name === "UX 디자이너" ||
    name === "UI,GUI 디자이너" ||
    name === "웹 디자이너" ||
    name === "그래픽 디자이너" ||
    name === "모바일 디자이너" ||
    name === "캐릭터 디자이너" ||
    name === "게임 그래픽 디자이너" ||
    id === 961 ||
    id === 878 ||
    id === 897 ||
    id === 962 ||
    id === 960 ||
    id === 898 ||
    id === 10112 ||
    id === 599 ||
    id === 597 ||
    id === 594 ||
    id === 592 ||
    id === 595 ||
    id === 951 ||
    id === 880
  ) {
    return "design";
  } 
  else {
    return "default"
  }
};
