export interface Project {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  technologies: string[];
  description: string;
  problemSolved?: string;
  personalKnowledge?: string;
  image?: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  isEnterprise?: boolean;
  architectureDetails?: {
    systemOverview: string;
    backendArchitecture: string;
    frontendArchitecture: string;
    databaseDesign: string;
    qaTesting?: string;
  };
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "LE HOAI NAM",
    title: "Software Engineer",
    roleTag: "Backend & Full-Stack Focus",
    location: "Ho Chi Minh City, Vietnam",
    phone: "+84 937 712 338",
    email: "naml75803@gmail.com",
    github: "https://github.com/lehoainamvn",
    githubUsername: "lehoainamvn",
    status: "Available for Software Engineer roles",
    bio: "Backend-focused developer building reliable web systems, automation workflows, and AI-enabled applications.",
    education: {
      university: "Thu Dau Mot University",
      degree: "B.S. Information Technology",
      period: "2022 – 2027",
      gpa: "8.51 / 10",
      scholarships: ["Academic Achievement Scholarship (2022)", "Academic Achievement Scholarship (2025)"]
    }
  },

  heroSnippets: [
    {
      id: "architecture",
      filename: "system-tree.sh",
      language: "bash",
      title: "Repository Architecture",
      code: `nam@dev-station:~/projects$ tree -L 2
.
├── backend-services/
│   ├── java-spring-boot (JWT, Spring Security, JPA)
│   └── python-fastapi (YOLO26, LLM Engine, Audio STT)
├── frontend-applications/
│   ├── angular-standalone (Signals State, RxJS, Tailwind)
│   └── react-dashboard (Socket.IO, REST APIs, Tailwind)
└── test-automation/
    └── playwright-e2e (TypeScript, Page Object Model)

6 directories, 246 source files`
    },
    {
      id: "backend",
      filename: "JwtAuthFilter.java",
      language: "java",
      title: "Spring Security Auth Filter",
      code: `package com.vocario.config;

@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtTokenProvider tokenProvider;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            if (tokenProvider.validateToken(token)) {
                String username = tokenProvider.getUsernameFromJWT(token);
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken authentication = 
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
        filterChain.doFilter(request, response);
    }
}`
    },
    {
      id: "testing",
      filename: "playwright-e2e-pom.ts",
      language: "typescript",
      title: "Playwright E2E POM Test",
      code: `import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { BoardingHouseDashboard } from '../page-objects/BoardingHouseDashboard';

test.describe('VNPT Enterprise Workflow - Contract Management E2E', () => {
  let loginPage: LoginPage;
  let dashboard: BoardingHouseDashboard;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboard = new BoardingHouseDashboard(page);
    await loginPage.navigate();
    await loginPage.loginWithCredentials(process.env.TEST_USER, process.env.TEST_PASS);
  });

  test('should create new tenant contract and verify automated billing calculation', async () => {
    await dashboard.navigateToContracts();
    await dashboard.createNewContract({ roomNumber: '102', tenantName: 'Nguyen Van A', deposit: 3000000 });
    await expect(dashboard.contractStatusBadge).toHaveText('ACTIVE');
  });
});`
    },
    {
      id: "ai-vision",
      filename: "yolo-cascade-vision.py",
      language: "python",
      title: "3-Tier Vision Cascade Engine",
      code: `class HybridVisionService:
    def __init__(self, yolo_core: YoloCoreService, open_vocab: OpenVocabService, gemini_vision: GeminiVisionService):
        self.yolo_core = yolo_core
        self.open_vocab = open_vocab
        self.gemini_vision = gemini_vision

    async def detect_cascade(self, image_bytes: bytes) -> UnifiedDetectionResult:
        # Tier 1: YOLO Core Verification Filter (Anti-False-Positive Layer)
        tier1_res = await self.yolo_core.detect_with_verification(image_bytes)
        if tier1_res.passed_verification and tier1_res.confidence >= 0.70:
            return UnifiedDetectionResult(tier="Core AI", detections=tier1_res.detections)

        # Tier 2: Open-Vocabulary Scene Candidate Engine
        tier2_res = await self.open_vocab.detect_scene_context(image_bytes)
        if tier2_res.has_candidates:
            return UnifiedDetectionResult(tier="Open Vocabulary", detections=tier2_res.detections)

        # Tier 3: Gemini Vision AI Deep Analysis Fallback
        return await self.gemini_vision.analyze_deep_visuals(image_bytes)`
    }
  ],

  projects: [
    {
      id: "vocario",
      number: "01",
      name: "Vocario – AI-Powered Object Scanner & English Platform",
      subtitle: "Camera-Based Object Recognition & Spaced Repetition Platform",
      category: "Computer Vision & Applied Machine Learning",
      period: "Apr 2026 – Present",
      role: "Lead Software Architect & AI Developer",
      technologies: ["Python (FastAPI)", "PyTorch", "YOLO26", "OpenCV", "Java 21 (Spring Boot)", "Angular 17", "PostgreSQL", "Docker", "Gemini API"],
      description: "Building a camera-based platform that transforms real-world physical objects into contextual English learning content in real-time.",
      problemSolved: "Building a camera-based platform that transforms real-world physical objects into contextual English learning content.",
      personalKnowledge: "Fine-tuned YOLO models on custom datasets (88.81% Recall, 62.66% mAP50); Developed confidence & geometric verification mechanisms to eliminate false positive detections; Built REST APIs connecting Spring Boot with FastAPI and Gemini AI; Implemented SuperMemo SM-2 algorithm in Java for personalized review queues.",
      highlights: [
        "Problem Solved: Building a camera-based platform that transforms real-world objects into contextual English learning content.",
        "AI Model Development: Fine-tuned YOLO models on custom datasets, achieving 88.81% Recall and 62.66% mAP50.",
        "Vision Pipeline: Developed confidence and geometric verification mechanisms to reduce false detections and integrated AI vision fallback approaches.",
        "Backend & AI Integration: Built REST APIs connecting Spring Boot with FastAPI and integrated AI APIs for vocabulary generation.",
        "Learning System: Implemented the SuperMemo SM-2 algorithm for personalized vocabulary review."
      ],
      githubUrl: "https://github.com/lehoainamvn/vocario",
      liveUrl: "https://vocario.demo.app",
      architectureDetails: {
        systemOverview: "Vocario kết hợp camera nhận diện vật thể thời gian thực với khoa học ghi nhớ lặp lại ngắt quãng. Xử lý chia làm 2 backend: Spring Boot REST API và FastAPI AI microservice.",
        backendArchitecture: "Spring Boot 3 REST APIs quản lý tiến trình và thuật toán SM-2; FastAPI microservice chạy PyTorch inference YOLO26, OpenCV và Gemini Vision API.",
        frontendArchitecture: "Angular Standalone architecture với Signals state management và Web Audio API visualizer.",
        databaseDesign: "PostgreSQL schema quản lý `vocabularies`, `user_vocabulary_progress`, `spaced_repetition_logs`."
      }
    },
    {
      id: "english-ascension",
      number: "02",
      name: "English Ascension",
      subtitle: "AI-Powered English Learning Platform (RPG & Gamification)",
      category: "Full-Stack & LLM Integration",
      period: "2026 – Present",
      role: "Lead Full-Stack Developer & AI Systems Engineer",
      image: "/images/english-ascension.png",
      technologies: ["Angular 21", "Spring Boot 3.5", "PostgreSQL", "Spring Security", "JWT", "Google OAuth2", "PhaserJS", "Groq API (Llama 3.3 70B)", "Tailwind CSS"],
      description: "Nền tảng học tiếng Anh ứng dụng AI kết hợp nhập vai RPG và Gamification. Người học thiết kế nhân vật riêng, chinh phục 6 vùng đất học thuật trên World Map, tăng cấp, tiến hóa nhân vật và vượt qua các mốc CEFR/TOEIC thông qua lộ trình cá nhân hóa.",
      problemSolved: "Khắc phục sự nhàm chán và thiếu động lực khi học từ vựng/ngữ pháp tiếng Anh bằng cách kết hợp nhập vai RPG (World Map, Cửa hàng RPG, Tiến hóa nhân vật 6 cấp, Trận đấu từ vựng Word Battle) và tích hợp AI (Groq Llama 3.3 70B) tự động phân tích tài liệu PDF/DOCX/TXT để sinh Flashcards, Quiz tùy chỉnh và Lộ trình cá nhân hóa CEFR/TOEIC.",
      personalKnowledge: "Chủ trì xây dựng toàn bộ hệ thống (Full-Stack Architect): Lập trình Angular 21 Standalone + PhaserJS minigame; Xây dựng Spring Boot 3.5 RESTful APIs; Thiết kế bảo mật Spring Security JWT & Google OAuth2, OTP Mail; Tối ưu hóa lược đồ PostgreSQL từ 29 bảng xuống 9 bảng cốt lõi; Prompt engineering Groq API và trích xuất tài liệu qua Apache PDFBox/POI.",
      highlights: [
        "Hệ thống RPG & Level Up: Tự do tùy chỉnh ngoại hình nhân vật, tiến hóa qua 6 cấp độ (Novice -> Language Legend), tích hợp Cửa hàng RPG (/shop) mua trang phục và Thẻ bảo toàn chuỗi (Streak Freeze).",
        "AI Assessment & Roadmap: Bài kiểm tra đầu vào 4 kỹ năng (Placement Test), phân tích điểm mạnh/yếu, ước lượng điểm TOEIC và tạo Lộ trình học 6 vùng đất RPG (Beginner Village -> TOEIC Kingdom).",
        "AI Document Processing: Tải lên tài liệu PDF/DOCX/TXT, trích xuất văn bản tự động và dùng Groq API (Llama 3.3 70B) tạo Flashcard & Quiz trắc nghiệm/điền từ/hỗn hợp tùy chỉnh.",
        "Lớp học & Thi đấu (Classroom): Tạo lớp qua mã 6 chữ số, quản lý thành viên, giao bài tập Class Quiz và Bảng xếp hạng Lớp học real-time.",
        "Admin Management: Giao diện quản trị CRUD các Preset Roadmap chuẩn CEFR/TOEIC bảo mật chặt chẽ bằng Route Guard và @PreAuthorize('hasRole(\"ADMIN\")')."
      ],
      githubUrl: "https://github.com/lehoainamvn/english-ascension",
      liveUrl: "https://english-ascension.demo.app",
      architectureDetails: {
        systemOverview: "English Ascension quản lý tiến trình học tập đa người dùng, tạo đề thi tự động từ AI và xử lý xếp hạng real-time. Hệ thống kết hợp Angular 21 frontend với Spring Boot 3.5 backend qua các stateless RESTful APIs.",
        backendArchitecture: "Spring Boot 3.5.14 với bộ lọc Spring Security JWT, Google Sign-In Identity Services, JavaMailSender gửi mã OTP khôi phục mật khẩu, HTTP client giao tiếp Groq API (Llama 3.3 70B) và thư viện Apache PDFBox / Apache POI.",
        frontendArchitecture: "Angular 21 Standalone Components, Signals state management, Tailwind CSS 4 Glassmorphism UI, PhaserJS minigame engine, và RxJS pipelines.",
        databaseDesign: "Cơ sở dữ liệu PostgreSQL được tối ưu hóa từ 29 bảng xuống 9 bảng cốt lõi: `users`, `player_characters`, `learning_roadmaps`, `learning_modules`, `flashcards`, `study_contents`, `questions`, `user_progress`, `user_documents`."
      }
    },
    {
      id: "smart-boarding-house",
      number: "03",
      name: "Nathustay – Smart Boarding House System",
      subtitle: "Property Management Software with AI Financial Analytics & Chatbot",
      category: "Real-World Business Systems & AI Analytics",
      period: "2026",
      role: "Full-Stack Developer & AI Solutions Engineer",
      image: "/images/nathustay-dashboard.png",
      technologies: ["React 19", "Vite", "Node.js", "Express.js", "SQL Server", "Socket.IO", "Groq SDK", "Random Forest ML", "Tailwind CSS", "VNPay API"],
      description: "Hệ thống quản lý nhà trọ và căn hộ dịch vụ tự động hóa dành cho chủ trọ và người thuê, tích hợp Trợ lý AI Chatbot thông minh (Text-to-SQL tự động truy vấn DB) và mô hình Machine Learning dự báo tài chính.",
      problemSolved: "Giải quyết bài toán quản lý vận hành nhà trọ/căn hộ dịch vụ phức tạp, tính toán thủ công hóa đơn điện nước hàng tháng, đồng thời cung cấp Trợ lý AI Chatbot thông minh (Text-to-SQL tự động truy vấn database SQL Server, tư vấn 3-5 giải pháp tăng doanh thu) và mô hình Machine Learning Random Forest để dự báo doanh thu & thu chi bất thường.",
      personalKnowledge: "Xây dựng hệ thống Web Full-Stack bằng React 19, Vite, Tailwind CSS kết hợp Node.js Express & SQL Server; Tích hợp Socket.io cho nhắn tin & thông báo thời gian thực; Phát triển Trợ lý AI Chatbot dựa trên Groq SDK (Llama 3/Mixtral) tự động truy vấn cơ sở dữ liệu và huấn luyện mô hình dự báo tài chính Random Forest trong Python.",
      highlights: [
        "Quản lý nhà trọ & phòng trọ: Quản lý tòa nhà, hợp đồng thuê, theo dõi trạng thái phòng (Trống, Đã cho thuê, Bảo trì), tự động tính hóa đơn điện/nước/dịch vụ.",
        "Trợ lý AI Smart Chatbot (Mới nâng cấp): Hỗ trợ Text-to-SQL (hỏi đáp bằng tiếng Việt tự nhiên AI tự truy vấn SQL Server), cảnh báo hóa đơn/hợp đồng quá hạn, và phân tích tài chính đưa ra 3-5 tư vấn tăng doanh thu.",
        "Phân tích & Dự báo tài chính: Tích hợp mô hình Machine Learning Random Forest để dự báo doanh thu tương lai và phát hiện điểm thu/chi bất thường.",
        "Xác thực & Thanh toán: Đăng nhập Google OAuth 2.0 chọn vai trò (Chủ trọ / Người thuê), OTP Email, tích hợp thanh toán cổng VNPay và gửi hóa đơn Zalo/Email.",
        "Real-time Communication: Nhắn tin nội bộ tức thời và thông báo hệ thống tự động qua Socket.io."
      ],
      githubUrl: "https://github.com/lehoainamvn/boarding-house-management",
      liveUrl: "https://boarding-house.demo.app",
      architectureDetails: {
        systemOverview: "Nathustay là giải pháp quản lý tài sản trọn gói chia làm 2 cổng riêng biệt cho Chủ trọ và Người thuê. Tích hợp AI Chatbot trực tiếp tương tác với dữ liệu SQL Server.",
        backendArchitecture: "Node.js Express backend kết hợp mssql connection pool, JWT middleware, Groq SDK tích hợp AI Llama 3/Mixtral, Socket.io WebSocket server, Nodemailer và VNPay signature checkout.",
        frontendArchitecture: "React 19 single-page app built with Vite v7, Tailwind CSS v4 Glassmorphism UI, Chart.js & Recharts visualizer, React Router v7, và Socket.io client.",
        databaseDesign: "SQL Server 2022 normalized relational schema: `Properties`, `Rooms`, `Tenants`, `LeaseContracts`, `Invoices`, `Payments`, `Messages`, `AI_Logs`."
      }
    },
    {
      id: "iot-fire-detection",
      number: "04",
      name: "IoT Fire Detection System & AI Benchmark",
      subtitle: "ESP32-S3 Hardware + MQTT + Computer Vision Benchmark Research",
      category: "IoT Systems & Computer Vision AI",
      period: "2026",
      role: "Embedded Systems, IoT & AI Research Engineer",
      image: "/images/fire-detection-chart.png",
      technologies: ["ESP32-S3", "MQTT Broker", "Python", "SQLite", "YOLOv8", "ResNet18", "MobileNetV2", "Flutter", "Web Dashboard"],
      description: "Hệ thống Cảnh báo cháy thông minh dựa trên ESP32-S3, cảm biến nhiệt độ DHT22 & khói MQ-2 kết hợp nghiên cứu thực nghiệm đánh giá mô hình AI Computer Vision (YOLOv8 vs ResNet18 vs MobileNetV2) trên tập 49,264 ảnh.",
      problemSolved: "Phát hiện sớm nguy cơ hỏa hoạn kết hợp dữ liệu cảm biến phần cứng (DHT22, MQ-2, ESP32-S3, MQTT Broker) và đánh giá thực nghiệm mô hình AI Computer Vision (YOLOv8 vs ResNet18 vs MobileNetV2) trên tập dữ liệu 49,264 ảnh để tìm ra mô hình nhẹ nhất và chính xác nhất cho hệ thống báo cháy (YOLOv8n đạt Precision 95.30%, F1-score 88.93%).",
      personalKnowledge: "Lập trình Firmware ESP32-S3 (C++), thiết lập giao thức MQTT (Mosquitto/EMQX) kết nối Web Dashboard (WebSocket) & App Flutter; Xây dựng Python SQLite Logger; Đánh giá thực nghiệm so sánh hiệu năng các mô hình nhận diện học sâu (YOLOv8n vs ResNet18 vs MobileNetV2) phục vụ báo chí/báo cáo khoa học.",
      highlights: [
        "Phần cứng ESP32-S3 & Cảm biến: Đọc dữ liệu nhiệt độ/độ ẩm (DHT22), mức khói (MQ-2), tính toán điểm nguy cơ (riskScore) và kích hoạt cảnh báo LED/RGB WS2812.",
        "Truyền dữ liệu MQTT Realtime: Gửi định dạng JSON qua MQTT Broker (Mosquitto/EMQX), hiển thị realtime trên Web Dashboard (WebSocket) và ứng dụng di động Flutter App.",
        "Python SQLite Logger: Lắng nghe MQTT Broker và lưu vết dữ liệu theo múi giờ Việt Nam vào SQLite Database.",
        "Thực nghiệm AI Computer Vision Benchmark: So sánh 3 mô hình học sâu trên 49,264 ảnh (30,511 Fire & 18,506 Smoke). YOLOv8n đạt Precision 95.30%, Recall 83.36%, F1-Score 88.93% áp đảo ResNet18 (15.59%) và MobileNetV2 (34.27%)."
      ],
      githubUrl: "https://github.com/fate1105/iot_fire_detection",
      liveUrl: "https://github.com/fate1105/iot_fire_detection",
      architectureDetails: {
        systemOverview: "Hệ thống 3 tầng kết hợp IoT Edge Device (ESP32-S3), MQTT Broker trung gian, Python SQLite Persistence Server và ứng dụng quan sát Web/Flutter.",
        backendArchitecture: "Firmware C++ trên ESP32-S3 mã hóa JSON payload, Python MQTT Client subscriber tự động lưu SQLite, và MQTT WebSocket server cho Web Dashboard.",
        frontendArchitecture: "Web Dashboard HTML5/JS giao tiếp MQTT WebSocket port 8083, giao diện đổi màu tự động theo mức cảnh báo (Safe/Warning/Danger), ứng dụng Flutter App cross-platform.",
        databaseDesign: "SQLite Database với bảng log theo vết thời gian `fire_logs(id, timestamp, temp, humidity, smoke, risk_score, level)`."
      }
    }
  ] as Project[],

  experience: [
    {
      id: "vnpt",
      period: "Jun 2026 – Jul 2026",
      role: "Software Development Intern",
      company: "VNPT Ho Chi Minh City – Information Technology Center",
      location: "Ho Chi Minh City, Vietnam",
      type: "Internship",
      highlights: [
        "Analyzed system workflows and business requirements, and prepared 4 Software Requirements Specifications (SRS) covering lesson management, content reuse, and student account creation.",
        "Optimized responsive Angular interfaces to resolve layout and content overflow issues across desktop, tablet, and mobile devices, including mathematical content rendering.",
        "Designed and built a reusable Playwright + TypeScript E2E testing framework using Page Object Model (POM) to support regression testing.",
        "Developed automated E2E test scenarios for 16+ business use cases, including authentication, authorization, AI features, and core system workflows.",
        "Developed utilities for UI/Network exploration, Google Sheets test-case synchronization, and automated test reporting to improve testing and debugging.",
        "Developed an automated Playwright agent to scan AI-generated learning content in Production, detect incomplete or incorrectly rendered content, and trigger content regeneration when errors were found."
      ],
      technologies: ["Angular", "TypeScript", "Playwright", "Page Object Model (POM)", "E2E Testing", "SRS", "AI Agent", "Docker"]
    }
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: "BACKEND",
      description: "Core strength in Java enterprise & Spring Boot services",
      skills: [
        { name: "Java", level: "Primary", highlight: true },
        { name: "Spring Boot", level: "Primary", highlight: true },
        { name: "Spring Security", level: "Primary", highlight: true },
        { name: "REST API", level: "Primary", highlight: true },
        { name: "JWT", level: "Primary", highlight: true }
      ]
    },
    {
      title: "FRONTEND",
      description: "Building responsive web interfaces with Angular & React",
      skills: [
        { name: "Angular", level: "Primary", highlight: true },
        { name: "React.js", level: "Proficient", highlight: true },
        { name: "HTML", level: "Proficient" },
        { name: "CSS", level: "Proficient" },
        { name: "JavaScript", level: "Proficient" }
      ]
    },
    {
      title: "DATABASE",
      description: "Relational database management and data persistence",
      skills: [
        { name: "PostgreSQL", level: "Primary", highlight: true },
        { name: "SQL Server", level: "Proficient" },
        { name: "MongoDB (basic)", level: "Basic" }
      ]
    },
    {
      title: "TOOLS",
      description: "Development tools, version control, and containerization",
      skills: [
        { name: "Git", level: "Primary", highlight: true },
        { name: "GitHub", level: "Primary", highlight: true },
        { name: "Docker", level: "Proficient", highlight: true },
        { name: "Postman", level: "Proficient" }
      ]
    },
    {
      title: "TESTING",
      description: "Automated software testing & QA framework development",
      skills: [
        { name: "Playwright", level: "Proficient", highlight: true },
        { name: "E2E Testing", level: "Proficient", highlight: true },
        { name: "Page Object Model (POM)", level: "Proficient", highlight: true }
      ]
    },
    {
      title: "SYSTEM DESIGN",
      description: "Distributed architectures, caching, and message queues",
      skills: [
        { name: "Microservices (basic)", level: "Basic" },
        { name: "Redis (basic)", level: "Basic" },
        { name: "RabbitMQ (basic)", level: "Basic" }
      ]
    }
  ] as SkillCategory[],

  engineeringPrinciples: [
    {
      number: "01",
      title: "Understand the system",
      description: "Analyze software requirements, domain workflows, security constraints, and user roles thoroughly before writing code."
    },
    {
      number: "02",
      title: "Build for maintainability",
      description: "Apply clean architecture, modular component boundaries, strict API contracts, clear database schemas, and explicit error handling."
    },
    {
      number: "03",
      title: "Validate before delivery",
      description: "Use automated testing (Playwright E2E), performance profiling, manual verification, and regression checks to verify software behavior."
    }
  ],

  achievements: [
    {
      title: "Academic Achievement Scholarships",
      detail: "Thu Dau Mot University (Academic Years 2022, 2025)",
      category: "Scholarship"
    },
    {
      title: "Smart Fire Detection System",
      detail: "Real-time IoT alert system built with YOLOv8 Computer Vision (2026)",
      category: "AI Research"
    },
    {
      title: "Digital Library with Chatbot",
      detail: "Backend REST API developed using Python Flask & Chatbot integration (2025)",
      category: "Project"
    },
    {
      title: "TDMU Programming Contest",
      detail: "Active participant in algorithmic programming competitions (2022, 2023)",
      category: "Competition"
    }
  ]
};
