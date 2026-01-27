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
      vi: "Software Engineer tốt nghiệp từ FPT University với kinh nghiệm thực tế trong phát triển full-stack web. Có nền tảng vững chắc về Java, JavaScript/TypeScript và các framework hiện đại như ReactJS, NextJS, Spring Boot.",
      en: "Software Engineering graduate from FPT University with hands-on experience in full-stack web development. Strong background in Java, JavaScript/TypeScript, and modern frameworks such as ReactJS, NextJS, Spring Boot.",
      ja: "FPT大学でソフトウェアエンジニアリングを専攻し、フルスタックWeb開発の実践経験があります。Java、JavaScript/TypeScript、ReactJS、NextJS、Spring Bootなどのモダンなフレームワークに精通しています。",
   },
};

export const skills = {
   programming: ["Java", "JavaScript", "TypeScript", "SQL"],
   frontend: ["ReactJS", "NextJS", "Tailwind CSS", "Framer Motion"],
   backend: ["NodeJS (Express)", "Spring Boot", "RESTful API", "ASP.NET Core"],
   databases: ["SQL Server", "MySQL", "MongoDB"],
   tools: ["Git", "GitHub", "GitLab", "Jira", "AWS", "Netlify", "Vercel"],
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
      image: "/images/edusphere.png",
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
   {
      id: "omgmart",
      title: "OMGMart",
      subtitle: {
         vi: "Hệ thống quản lý siêu thị mini",
         en: "Mini Mart Management System",
         ja: "ミニマート管理システム",
      },
      description: {
         vi: "Hệ thống quản lý full-stack hỗ trợ hoạt động hàng ngày của siêu thị bao gồm kho hàng, bán hàng, khuyến mãi và thanh toán online.",
         en: "A full-stack management system that supports daily supermarket operations including inventory, sales, promotions, and online payments.",
         ja: "在庫、販売、プロモーション、オンライン決済を含むスーパーマーケットの日常業務をサポートするフルスタック管理システム。",
      },
      technologies: ["NextJS", "NodeJS (Express)", "MongoDB", "AWS"],
      period: "Feb 2025 – Jun 2025",
      teamSize: 5,
      liveUrl: null,
      image: "/images/omgmart.png",
      highlights: {
         vi: [
            "Phát triển ứng dụng web full-stack từ kho đến bán hàng",
            "Triển khai quản lý kho và cập nhật dữ liệu real-time",
            "Xây dựng tính năng mã giảm giá và chiến dịch khuyến mãi",
            "Tích hợp thanh toán online",
         ],
         en: [
            "Developed full-stack web application from warehousing to sales",
            "Implemented inventory management with real-time data updates",
            "Built discount codes and promotional campaign features",
            "Integrated online payment functionality",
         ],
         ja: [
            "倉庫から販売までのフルスタックWebアプリケーションを開発",
            "リアルタイムデータ更新による在庫管理を実装",
            "割引コードとプロモーションキャンペーン機能を構築",
            "オンライン決済機能を統合",
         ],
      },
   },
];

export const experience = [
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
      vi: ["Sinh viên xuất sắc học kỳ SU2025"],
      en: ["Honorable Student for SU2025"],
      ja: ["2025年夏学期優秀学生賞"],
   },
};

export const languages = [
   { name: "English", level: { vi: "Trung cấp", en: "Intermediate", ja: "中級" } },
   { name: "Japanese", level: { vi: "Sơ cấp", en: "Basic", ja: "初級" } },
   { name: "Vietnamese", level: { vi: "Bản ngữ", en: "Native", ja: "ネイティブ" } },
];

export type Language = "vi" | "en" | "ja";
