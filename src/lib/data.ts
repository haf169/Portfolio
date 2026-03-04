// Portfolio data - Centralized data management
// Easy to update projects, skills, and experience

export const personalInfo = {
   name: {
      first: "Nguyễn Hữu",
      last: "Trần Hà",
      full: "Nguyễn Hữu Trần Hà",
   },
   title: "Software Engineer",
   location: "Da Nang, Vietnam",
   email: "itsmetranha16@gmail.com",
   phone: "081 4004 777",
   github: "https://github.com/haf169",
   bio: {
      vi: "Software Engineer đang làm việc tại Rikai Technology, phát triển ứng dụng full-stack với Ruby on Rails và NextJS. Có kinh nghiệm tích hợp API, deploy với Docker Compose và vận hành hệ thống trên Linux Ubuntu.",
      en: "Software Engineer at Rikai Technology, building full-stack applications with Ruby on Rails, NextJS. Experienced in API integration, Docker Compose deployment, and Linux Ubuntu server operations.",
      ja: "Rikai TechnologyでRuby on Rails、NextJSを使用したフルスタック開発に従事するソフトウェアエンジニア。API統合、Docker Composeデプロイ、Linux Ubuntu運用の経験を持つ。",
   },
};

export const skills = {
   programming: ["Java", "JavaScript", "TypeScript", "Ruby", "SQL"],
   frontend: ["ReactJS", "NextJS", "Tailwind CSS", "Framer Motion"],
   backend: ["Ruby on Rails", "Spring Boot", "NodeJS (Express)", "RESTful API", "ASP.NET Core"],
   databases: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"],
   tools: ["Docker Compose", "Linux Ubuntu", "Git", "GitHub", "GitLab", "Jira", "AWS", "Vercel"],
   methodologies: ["Agile", "Scrum", "Clean Code", "Design Patterns"],
};

export const projects = [
   {
      id: "edusphere",
      title: "Edusphere",
      subtitle: {
         vi: "Hệ thống quản lý sinh viên & hoạt động",
         en: "Student & Activity Management System",
         ja: "学生・活動管理システム",
      },
      description: {
         vi: "Nền tảng web giúp các tổ chức giáo dục quản lý sinh viên, lớp học, câu lạc bộ và hoạt động ngoại khóa trong một hệ thống tập trung.",
         en: "A web-based platform that helps educational institutions manage students, classes, clubs, and extracurricular activities in a centralized system.",
         ja: "教育機関が学生、クラス、クラブ、課外活動を一元管理できるWebベースのプラットフォーム。",
      },
      technologies: ["ReactJS", "ASP.NET Core", "SQL Server", "AWS", "Netlify"],
      period: "Aug 2025 – Dec 2025",
      teamSize: 5,
      liveUrl: "https://edusphere-dev.netlify.app/",
      image: "/images/Animation1.gif",
      highlights: {
         vi: [
            "Dẫn dắt phát triển frontend sử dụng ReactJS",
            "Thiết kế và triển khai các module quản lý sinh viên, lớp học, câu lạc bộ",
            "Xây dựng workflow sự kiện hỗ trợ nộp bài và giải đấu thể thao",
            "Deploy backend trên AWS, frontend trên Netlify",
         ],
         en: [
            "Led frontend development using ReactJS",
            "Designed and implemented student, class, and club management modules",
            "Built event workflows supporting submissions and sports tournaments",
            "Deployed backend on AWS, frontend on Netlify",
         ],
         ja: [
            "ReactJSを使用したフロントエンド開発をリード",
            "学生、クラス、クラブ管理モジュールを設計・実装",
            "提出物とスポーツ大会をサポートするイベントワークフローを構築",
            "AWSにバックエンド、Netlifyにフロントエンドをデプロイ",
         ],
      },
   },
];

export const experience = [
   {
      id: "rikai-technology",
      company: "Rikai Technology",
      position: {
         vi: "Software Engineer (Full-stack)",
         en: "Software Engineer (Full-stack)",
         ja: "ソフトウェアエンジニア（フルスタック）",
      },
      period: "Jan 2026 – Present",
      description: {
         vi: [
            "Phát triển backend với Ruby on Rails, xây dựng và bảo trì RESTful API",
            "Phát triển frontend với NextJS, đảm bảo UI/UX nhất quán",
            "Tích hợp và kết nối các dịch vụ API bên thứ ba",
            "Deploy và vận hành ứng dụng bằng Docker Compose trên Linux Ubuntu",
         ],
         en: [
            "Backend development with Ruby on Rails, building and maintaining RESTful APIs",
            "Frontend development with ReactJS / NextJS, ensuring consistent UI/UX",
            "API integration and third-party service connectivity",
            "Application deployment and operation using Docker Compose on Linux Ubuntu",
         ],
         ja: [
            "Ruby on Railsでバックエンド開発、RESTful APIの構築・保守",
            "ReactJS / NextJSでフロントエンド開発、UI/UXの一貫性を確保",
            "APIインテグレーションとサードパーティサービス連携",
            "Docker ComposeとLinux Ubuntuを用いたアプリケーションのデプロイ・運用",
         ],
      },
   },
   {
      id: "fpt-software",
      company: "FPT Software",
      position: {
         vi: "Thực tập sinh phát triển phần mềm",
         en: "Software Development Intern",
         ja: "ソフトウェア開発インターン",
      },
      period: "Sep 2024 – Jan 2025",
      description: {
         vi: [
            "Phát triển và bảo trì ứng dụng web full-stack theo quy trình Agile/Scrum",
            "Sử dụng Spring Boot cho backend và ReactJS cho frontend",
            "Áp dụng Clean Code và Design Patterns",
            "Đóng góp vào các dự án enterprise thực tế",
         ],
         en: [
            "Developed and maintained full-stack web applications following Agile/Scrum",
            "Used Spring Boot for backend and ReactJS for frontend",
            "Applied Clean Code principles and Design Patterns",
            "Contributed to real-world enterprise projects",
         ],
         ja: [
            "Agile/Scrum手法に従ってフルスタックWebアプリケーションを開発・保守",
            "バックエンドにSpring Boot、フロントエンドにReactJSを使用",
            "Clean CodeとDesign Patternsを適用",
            "実際のエンタープライズプロジェクトに貢献",
         ],
      },
   },
];

export const education = {
   school: "FPT University",
   degree: {
      vi: "Cử nhân Kỹ thuật Phần mềm",
      en: "Bachelor of Software Engineering",
      ja: "ソフトウェアエンジニアリング学士",
   },
   period: "2021 – 2025",
   gpa: "7.3",
   achievements: {
      vi: ["Sinh viên giỏi học kỳ SU2025"],
      en: ["Outstanding Student - Summer 2025"],
      ja: ["2025年夏学期優秀学生"],
   },
};

export const languages = [
   { name: "English", level: { vi: "Trung cấp", en: "Intermediate", ja: "中級" } },
   { name: "Japanese", level: { vi: "Sơ cấp", en: "Basic", ja: "初級" } },
   { name: "Vietnamese", level: { vi: "Bản ngữ", en: "Native", ja: "ネイティブ" } },
];

export type Language = "vi" | "en" | "ja";
