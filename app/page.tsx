"use client";

import { useEffect, useRef, useState } from "react";
import { BookHeart, ChevronDown, ImagePlus, Mail, MessageCircle, Phone } from "lucide-react";

const outline = [
  ["top", "00", "首页"],
  ["work", "01", "工作经历"],
  ["about", "02", "关于我"],
  ["background", "03", "学习与能力"],
  ["contact", "04", "联系我"],
];

const lyzCases = [
  {
    id: "inventory",
    label: "库存自动化",
    number: "01",
    title: "让出库从等待变成即时",
    problem: "数据清洗、出库处理与系统更新依赖人工重复操作，单次需要 30–60 分钟。",
    action: "使用 Python 与 AI 编程工具开发自动化程序，并接入飞书 API 串联处理流程。",
    result: "约 2 分钟",
    note: "完成一次完整出库流程",
    tools: ["Python", "飞书 API", "Codex"],
    image: "/ip-laptop.webp",
  },
  {
    id: "route",
    label: "配送路线",
    number: "02",
    title: "把 30 单配送变成清晰路线",
    problem: "需要人工比较客户地址、配送顺序与点位，每次路线规划约需 30–40 分钟。",
    action: "设计路线规划工具，将地址与配送点位可视化，生成可结合实际情况调整的方案。",
    result: "约 10 分钟",
    note: "完成约 30 单路线规划",
    tools: ["数据可视化", "AI 辅助开发", "业务校准"],
    image: "/ip-map.webp",
  },
  {
    id: "invoice",
    label: "发票处理",
    number: "03",
    title: "让重复制作变成批量处理",
    problem: "复制原始发票、修改内容并生成机构发票，单张制作时间约为 3 分钟。",
    action: "开发批量复制和内容更新脚本，把重复步骤整理成稳定、可复用的自动化流程。",
    result: "10–20 秒",
    note: "完成单张发票处理",
    tools: ["自动化脚本", "批量处理", "流程设计"],
    image: "/ip-files.webp",
  },
];

const hzAchievements = [
  {
    title: "增长漏斗优化",
    metric: "2.8% → 20%",
    text: "拆解曝光、点击、阅读、扫码与添加好友的增长链路，通过内容和承接流程测试，在大流量期承接近 5 万新增用户。",
  },
  {
    title: "用户价值提升",
    metric: "+21.5%",
    text: "参与搭建 50 万+私域用户池；7 天转化社群下单率达到 10%，单用户价值由 5.2 元提升至 6.32 元。",
  },
  {
    title: "数据复盘机制",
    metric: "可复用方法",
    text: "建立标签、指标跟踪和复盘机制，结合红包、接龙与短链接设置数据埋点，让后续迭代有据可依。",
  },
  {
    title: "团队管理",
    metric: "晋升小组长",
    text: "承担团队协作、新人面试、入职考核与业务培训，推动工作流程和运营方法标准化。",
  },
];

const featuredExperiences = [
  {
    id: "lyz",
    shortName: "LYZ FOOD",
    period: "2026.03 — 至今",
    company: "LYZ FOOD Ltd",
    role: "用户运营 · 兼职",
    location: "澳大利亚",
    summary: "从一线业务里识别效率瓶颈，把配送、库存和发票中的重复操作转化为可运行的自动化工具。",
  },
  {
    id: "haochengji",
    shortName: "好成绩",
    period: "2020.06 — 2023.09",
    company: "杭州好成绩教育科技有限公司",
    role: "用户运营 · 后晋升小组长",
    location: "杭州",
    summary: "围绕用户获取、激活、留存和转化开展运营工作，参与搭建 50 万+私域用户池，并承担团队协作与新人培养。",
  },
  {
    id: "kuaishou",
    shortName: "快手",
    period: "2019.11 — 2020.04",
    company: "北京快手科技有限公司",
    role: "行政助理实习生",
    location: "北京",
    summary: "在行政与内部传播场景中，完成知识库从 0 到 1、内容撰写与数据支持，建立对组织流程和信息效率的理解。",
  },
  {
    id: "mint",
    shortName: "薄荷阅读",
    period: "2019.01 — 2019.02",
    company: "成都超有爱科技有限公司 · 薄荷阅读",
    role: "用户运营实习生",
    location: "北京运营组",
    summary: "负责四个付费用户群的用户交付，在高密度社群服务中积累用户沟通、节奏管理与体验优化经验。",
  },
];

const careerTimeline = [
  { period: "2017.06–09", company: "Dunkin’ Donuts", role: "Crew Member", location: "Massachusetts" },
  { period: "2018.08", company: "山东海之子教育", role: "暑期英语老师", location: "山东" },
  { period: "2018.08–12", company: "山木培训", role: "兼职英语老师", location: "山东" },
  { period: "2019.01–02", company: "薄荷阅读", role: "用户运营实习生", location: "北京", featuredId: "mint" },
  { period: "2019.06–08", company: "凯顿儿童美语", role: "中教实习生", location: "烟台" },
  { period: "2019.11–2020.04", company: "快手", role: "行政助理实习生", location: "北京", featuredId: "kuaishou" },
  { period: "2020.06–2023.09", company: "好成绩", role: "用户运营", location: "杭州", featuredId: "haochengji" },
  { period: "2024.05–07", company: "SMEAG 语言学校", role: "学生经理", location: "菲律宾" },
  { period: "2024.09–2025.08", company: "Matcha Village", role: "店员", location: "洛杉矶" },
  { period: "2025.08–2026.02", company: "贰万猪脚饭", role: "后厨店员", location: "洛杉矶" },
  { period: "2026.03–至今", company: "LYZ FOOD", role: "用户运营", location: "澳大利亚", featuredId: "lyz" },
];

const kuaishouHighlights = [
  { title: "知识库从 0 到 1", text: "负责行政部门知识库的组织与维护，完成信息结构梳理，并协助“小当家”线上系统落地。" },
  { title: "50+ 篇内容交付", text: "修改或撰写日常通知、活动文案等五十余篇，保持内容准确与稳定，多次获得领导肯定。" },
  { title: "内部传播协作", text: "协助宣传组进行公众号运营、推文与通知审核，并参与内部活动策划。" },
  { title: "数据与项目支持", text: "支持新职场预算、会议室与工位使用率统计等工作，为行政决策提供基础信息。" },
];

const mintHighlights = [
  { title: "付费社群交付", text: "独立负责四个付费用户群，每个群约 200 人，围绕课程节奏完成提醒、答疑与日常用户维护。" },
  { title: "用户体验反馈", text: "持续观察群内问题与参与状态，及时回应用户需求，保障短周期阅读产品的服务体验。" },
  { title: "好评率第一", text: "实习接近尾声时，在老师好评率评比中获得第一，用户服务质量得到直接验证。" },
];

const photoArchive = [
  { period: "2017", title: "Massachusetts", note: "Dunkin’ Donuts · 工作与生活" },
  { period: "2018", title: "英语教学", note: "海之子教育 · 山木培训" },
  { period: "2019", title: "薄荷阅读", note: "社群运营 · 用户反馈" },
  { period: "2019—2020", title: "北京快手", note: "知识库 · 内容作品 · 职场项目" },
  { period: "2020—2023", title: "杭州好成绩", note: "增长活动 · 数据复盘 · 团队协作" },
  { period: "2024", title: "菲律宾", note: "SMEAG · 学生管理与跨文化生活" },
  { period: "2024—2026", title: "洛杉矶", note: "Matcha Village · 贰万猪脚饭" },
  { period: "2026", title: "澳大利亚", note: "LYZ FOOD · 业务现场与工具成果" },
];

const education = [
  ["2026 — 至今", "悉尼大学", "计算机科学 · 硕士"],
  ["2024 — 2026", "圣莫妮卡学院", "数据科学 · Associate · GPA 4.0"],
  ["2016 — 2020", "烟台大学", "汉语言文学 · 学士 · 专业前 5%"],
];

export default function Home() {
  const [activeCase, setActiveCase] = useState("inventory");
  const [activeExperience, setActiveExperience] = useState(0);
  const [aboutMode, setAboutMode] = useState<"work" | "life">("work");
  const [activeSection, setActiveSection] = useState("top");
  const [copied, setCopied] = useState(false);
  const [characterActive, setCharacterActive] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const experienceCarousel = useRef<HTMLDivElement | null>(null);
  const experienceStage = useRef<HTMLDivElement | null>(null);
  const timelineScrollIndicator = useRef<HTMLSpanElement | null>(null);
  const timelineScrollTimer = useRef<number | null>(null);
  const carouselDrag = useRef<{ pointerId: number; startX: number; startScrollLeft: number; moved: boolean } | null>(null);
  const carouselScrollFrame = useRef<number | null>(null);
  const suppressCarouselClick = useRef(false);
  const selectedCase = lyzCases.find((item) => item.id === activeCase) ?? lyzCases[0];

  const revealTimelineScrollbar = (scroller: HTMLDivElement) => {
    const indicator = timelineScrollIndicator.current;
    if (!indicator) return;
    const scrollableWidth = scroller.scrollWidth - scroller.clientWidth;
    const thumbWidth = Math.max(12, (scroller.clientWidth / scroller.scrollWidth) * 100);
    const progress = scrollableWidth > 0 ? scroller.scrollLeft / scrollableWidth : 0;
    indicator.style.setProperty("--timeline-thumb-width", `${thumbWidth}%`);
    indicator.style.setProperty("--timeline-thumb-x", `${progress * (100 - thumbWidth)}%`);
    indicator.classList.add("is-visible");
    if (timelineScrollTimer.current !== null) window.clearTimeout(timelineScrollTimer.current);
    timelineScrollTimer.current = window.setTimeout(() => {
      indicator.classList.remove("is-visible");
      timelineScrollTimer.current = null;
    }, 650);
  };

  const centerExperience = (index: number, behavior: ScrollBehavior = "smooth") => {
    const carousel = experienceCarousel.current;
    const card = carousel?.querySelector<HTMLElement>(`[data-experience-index="${index}"]`);
    if (!carousel || !card) return;
    carousel.scrollTo({ left: card.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2, behavior });
  };

  useEffect(() => {
    const preloadTimer = window.setTimeout(() => {
      const hoverAnimation = new Image();
      hoverAnimation.src = "/hero-3d-hover.webp";
    }, 1200);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-38% 0px -52%", threshold: 0 },
    );
    outline.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => {
      window.clearTimeout(preloadTimer);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => centerExperience(activeExperience, "auto"));
    const handleResize = () => {
      const current = experienceCarousel.current?.querySelector<HTMLElement>(".experience-slide.is-active");
      const index = Number(current?.dataset.experienceIndex ?? 0);
      centerExperience(index, "auto");
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const copyWechat = async () => {
    await navigator.clipboard.writeText("yolohhly");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const showExperience = (index: number) => {
    setActiveExperience(index);
    window.requestAnimationFrame(() => centerExperience(index));
  };

  const moveExperience = (delta: number) => {
    showExperience(Math.min(featuredExperiences.length - 1, Math.max(0, activeExperience + delta)));
  };

  const showTimelineExperience = (featuredId?: string) => {
    if (!featuredId) return;
    const index = featuredExperiences.findIndex((item) => item.id === featuredId);
    if (index >= 0) {
      showExperience(index);
      window.setTimeout(() => {
        experienceStage.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  };

  return (
    <main>
      <nav className="topbar" aria-label="主导航">
        <div className="topbar-inner">
          <a className="brand" href="#top"><span />LIU YUAN</a>
          <div className="top-links">
            <a href="#top">首页</a>
            <a href="#work">工作经历</a>
            <a href="#about">关于我</a>
            <a href="#background">学习与能力</a>
          </div>
          <a className="contact-pill" href="#contact">和我聊聊 <span>↗</span></a>
        </div>
      </nav>

      <aside className="outline-nav" aria-label="页面目录">
        <p>CONTENTS</p>
        {outline.map(([id, number, label]) => (
          <a className={activeSection === id ? "active" : ""} href={`#${id}`} key={id}>
            <span>{number}</span><b>{label}</b>
          </a>
        ))}
      </aside>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="hero-title" aria-label="数据、产品与人工智能，刘渊">
            <p>Data, product &amp; AI</p>
            <h1>刘渊</h1>
          </div>
          <p className="hero-path">从用户运营出发，走向数据与 AI</p>
          <p className="hero-statement">有温度地理解，<br />有逻辑地行动。</p>
          <p className="hero-identity"><span aria-hidden="true" /><strong>悉尼大学</strong><i>计算机科学硕士在读</i></p>
          <div className="hero-actions">
            <a className="hero-cta" href="#work"><span>查看工作经历</span><b>↓</b></a>
            <div className="hero-socials" aria-label="联系方式">
              <button type="button" onClick={copyWechat} aria-label="复制微信号" data-label="WeChat">
                <MessageCircle size={16} strokeWidth={1.6} />
              </button>
              <a href="mailto:2229409057@qq.com" aria-label="发送邮件" data-label="邮箱">
                <Mail size={16} strokeWidth={1.6} />
              </a>
              <a href="#contact" aria-label="查看小红书联系方式" data-label="小红书">
                <BookHeart size={16} strokeWidth={1.6} />
              </a>
              <a href="tel:17616185335" aria-label="拨打电话" data-label="电话">
                <Phone size={16} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-motion" aria-label="个人 IP 玩偶互动动画">
          <div className="motion-portal" aria-hidden="true">
            <div className="motion-grid" />
            <div className="motion-nodes"><i /><i /><i /><i /></div>
            <div className="motion-links"><i /><i /><i /></div>
            <span>理解人，看懂数据，用好 AI</span>
            <b />
          </div>
          <div className="hero-tags" aria-label="职业关键词">
            <span>数据思维</span>
            <span>解决问题</span>
            <span>持续探索</span>
          </div>
          <div className="motion-depth one" aria-hidden="true" />
          <div className="motion-depth two" aria-hidden="true" />
          <button
            className="hero-character"
            type="button"
            aria-label="播放人物互动动画"
            aria-pressed={characterActive}
            onMouseEnter={() => setCharacterActive(true)}
            onMouseLeave={() => setCharacterActive(false)}
            onFocus={() => setCharacterActive(true)}
            onBlur={() => setCharacterActive(false)}
            onClick={() => setCharacterActive(true)}
          >
            <img
              key={characterActive ? "active" : "intro"}
              className="hero-animation"
              src={characterActive ? "/hero-3d-hover.webp" : "/hero-3d-animation.webp"}
              alt={characterActive ? "个人 IP 玩偶微笑挥手" : "个人 IP 玩偶走近并挥手"}
            />
          </button>
        </div>
        <div className="hero-stats" aria-label="个人经历摘要">
          <div><strong>3 年+</strong><span>工作经验</span></div>
          <div><strong>50 万+</strong><span>私域用户池实践</span></div>
          <div><strong>计算机科学</strong><span>硕士在读</span></div>
          <div><strong>数据与 AI</strong><span>当前方向</span></div>
        </div>
        <a className="hero-transition" href="#work"><span>继续了解我的经历</span><b>↓</b></a>
      </section>

      <section className="work shell section" id="work">
        <header className="section-head">
          <div><p className="section-id">工作经历 / Experience</p><h2>经历很多，重点讲结果。</h2></div>
          <p>从业务现场发现问题，用数据、工具与持续迭代，把重复劳动变成能真正运行的解决方案。</p>
        </header>

        <div className="career-overview">
          <div className="career-overview-head">
            <div><strong>完整时间线</strong><span>2017 — 现在</span></div>
            <p><span />重点节点可以点击，下方将展开详细成果。</p>
          </div>
          <div className="career-timeline-interaction">
            <div className="timeline-puller-art" aria-hidden="true">
              <img src="/media/career-puller-static.png" alt="" />
            </div>
            <div
              className="timeline-scroller"
              aria-label="完整工作经历时间线"
              onScroll={(event) => revealTimelineScrollbar(event.currentTarget)}
            >
              <div className="career-timeline">
              <i className="timeline-snake" aria-hidden="true">
                {Array.from({ length: 10 }, (_, index) => <span key={index} />)}
              </i>
              {careerTimeline.map((item) => {
                const featuredIndex = item.featuredId ? featuredExperiences.findIndex((experience) => experience.id === item.featuredId) : -1;
                const isActive = featuredIndex === activeExperience;
                const content = (
                  <>
                    <span className="timeline-copy">
                      <small>{item.period}</small>
                      <strong>{item.company}</strong>
                      <em>{item.role}</em>
                      <b>{item.location}</b>
                    </span>
                    <i className="timeline-dot" aria-hidden="true" />
                  </>
                );
                return item.featuredId ? (
                  <button
                    className={`timeline-item is-featured ${isActive ? "is-active" : ""}`}
                    type="button"
                    aria-label={`查看重点经历：${item.company}`}
                    aria-pressed={isActive}
                    data-timeline-index={careerTimeline.indexOf(item)}
                    onClick={() => showTimelineExperience(item.featuredId)}
                    key={`${item.period}-${item.company}`}
                  >
                    {content}
                  </button>
                ) : (
                  <div className="timeline-item" data-timeline-index={careerTimeline.indexOf(item)} key={`${item.period}-${item.company}`}>
                    {content}
                  </div>
                );
              })}
              <span className="timeline-continue" aria-hidden="true">未完待续...</span>
              </div>
            </div>
            <span className="timeline-scroll-indicator" ref={timelineScrollIndicator} aria-hidden="true"><i /></span>
          </div>
        </div>

        <div className="experience-stage" ref={experienceStage}>
          <div className="experience-toolbar">
            <div className="experience-heading">
              <span>重点经历</span>
              <strong>{String(activeExperience + 1).padStart(2, "0")} / {String(featuredExperiences.length).padStart(2, "0")}</strong>
            </div>
            <div className="experience-pager" role="tablist" aria-label="重点工作经历">
              {featuredExperiences.map((item, index) => (
                <button
                  className={index === activeExperience ? "active" : ""}
                  type="button"
                  role="tab"
                  aria-selected={index === activeExperience}
                  onClick={() => showExperience(index)}
                  key={item.id}
                >
                  {item.shortName}
                </button>
              ))}
            </div>
            <p className="experience-hint">滑动卡片，浏览经历</p>
          </div>

          <div
            className="experience-card-shell"
            ref={experienceCarousel}
            role="region"
            aria-label="重点经历选片式轮播，可左右拖动切换"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return;
              if (event.key === "ArrowLeft") moveExperience(-1);
              if (event.key === "ArrowRight") moveExperience(1);
            }}
            onPointerDown={(event) => {
              if ((event.target as HTMLElement).closest("button, a")) return;
              suppressCarouselClick.current = false;
              carouselDrag.current = {
                pointerId: event.pointerId,
                startX: event.clientX,
                startScrollLeft: event.currentTarget.scrollLeft,
                moved: false,
              };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const drag = carouselDrag.current;
              if (!drag || drag.pointerId !== event.pointerId) return;
              const distance = event.clientX - drag.startX;
              if (Math.abs(distance) > 4) {
                drag.moved = true;
                suppressCarouselClick.current = true;
              }
              event.currentTarget.scrollLeft = drag.startScrollLeft - distance;
            }}
            onPointerUp={(event) => {
              const drag = carouselDrag.current;
              if (!drag || drag.pointerId !== event.pointerId) return;
              carouselDrag.current = null;
              event.currentTarget.releasePointerCapture(event.pointerId);
              const carouselCenter = event.currentTarget.scrollLeft + event.currentTarget.clientWidth / 2;
              const cards = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("[data-experience-index]"));
              const nearest = cards.reduce((best, card, index) => {
                const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - carouselCenter);
                return distance < best.distance ? { index, distance } : best;
              }, { index: activeExperience, distance: Number.POSITIVE_INFINITY });
              showExperience(nearest.index);
            }}
            onPointerCancel={() => { carouselDrag.current = null; }}
            onScroll={(event) => {
              if (carouselScrollFrame.current !== null) return;
              const carousel = event.currentTarget;
              carouselScrollFrame.current = window.requestAnimationFrame(() => {
                carouselScrollFrame.current = null;
                const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
                const cards = Array.from(carousel.querySelectorAll<HTMLElement>("[data-experience-index]"));
                const nearest = cards.reduce((best, card, index) => {
                  const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - carouselCenter);
                  return distance < best.distance ? { index, distance } : best;
                }, { index: activeExperience, distance: Number.POSITIVE_INFINITY });
                setActiveExperience(nearest.index);
              });
            }}
          >
            {featuredExperiences.map((experience, experienceIndex) => (
              <article
                className={`experience-card experience-slide ${experienceIndex === activeExperience ? "is-active" : ""}`}
                data-experience-index={experienceIndex}
                aria-current={experienceIndex === activeExperience ? "true" : undefined}
                key={experience.id}
                onClick={() => {
                  if (suppressCarouselClick.current) {
                    suppressCarouselClick.current = false;
                    return;
                  }
                  if (experienceIndex !== activeExperience) showExperience(experienceIndex);
                }}
              >
                <header className="company-head experience-company-head">
                  <div className="company-index">{String(experienceIndex + 1).padStart(2, "0")}</div>
                  <div>
                    <p>{experience.period} · {experience.location}</p>
                    <h3>{experience.company}</h3>
                    <span>{experience.role}</span>
                  </div>
                  <p className="company-summary">{experience.summary}</p>
                </header>

                {experience.id === "lyz" && (
                  <>
                    <div className="impact-strip">
                      <div><span>出库流程</span><strong>30–60 min → 2 min</strong></div>
                      <div><span>路线规划</span><strong>30–40 min → 10 min</strong></div>
                      <div><span>单张发票</span><strong>3 min → 10–20 sec</strong></div>
                    </div>
                    <div className="case-workbench">
                      <div className="case-tabs" role="tablist" aria-label="LYZ FOOD 成果案例">
                        <p>成果案例</p>
                        {lyzCases.map((item) => (
                          <button
                            key={item.id}
                            role="tab"
                            aria-selected={activeCase === item.id}
                            className={activeCase === item.id ? "active" : ""}
                            onClick={() => setActiveCase(item.id)}
                          >
                            <span>{item.number}</span>{item.label}<i>→</i>
                          </button>
                        ))}
                      </div>
                      <div className="case-panel" role="tabpanel">
                        <div className="case-copy">
                          <p className="case-kicker">{selectedCase.label} / CASE {selectedCase.number}</p>
                          <h4>{selectedCase.title}</h4>
                          <div className="case-flow">
                            <div><span>发现的问题</span><p>{selectedCase.problem}</p></div>
                            <div><span>我做了什么</span><p>{selectedCase.action}</p></div>
                          </div>
                          <div className="tool-row">{selectedCase.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                          <div className="case-result"><span>最终结果</span><strong>{selectedCase.result}</strong><p>{selectedCase.note}</p></div>
                        </div>
                      </div>
                    </div>
                    <p className="recognition">因稳定完成客户承接与日常运营，并持续推动流程优化，获得负责人认可，受邀以居家办公方式继续参与后续业务。</p>
                  </>
                )}

                {experience.id === "haochengji" && (
                  <div className="achievement-grid">
                    {hzAchievements.map((item, index) => (
                      <div className="achievement" key={item.title}>
                        <span>0{index + 1}</span><strong>{item.metric}</strong><h4>{item.title}</h4><p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {experience.id === "kuaishou" && (
                  <>
                    <div className="impact-strip story-impact">
                      <div><span>信息建设</span><strong>知识库 0 → 1</strong></div>
                      <div><span>内容交付</span><strong>50+ 篇</strong></div>
                      <div><span>工作方式</span><strong>内容 · 数据 · 协作</strong></div>
                    </div>
                    <div className="experience-story-grid">
                      {kuaishouHighlights.map((item, index) => (
                        <div className="story-point" key={item.title}>
                          <span>0{index + 1}</span><h4>{item.title}</h4><p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {experience.id === "mint" && (
                  <>
                    <div className="impact-strip story-impact">
                      <div><span>付费社群</span><strong>4 个</strong></div>
                      <div><span>服务规模</span><strong>约 800 人</strong></div>
                      <div><span>用户评价</span><strong>好评率第 1</strong></div>
                    </div>
                    <div className="experience-story-grid mint-grid">
                      {mintHighlights.map((item, index) => (
                        <div className="story-point" key={item.title}>
                          <span>0{index + 1}</span><h4>{item.title}</h4><p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className={`experience-gallery ${galleryOpen ? "open" : ""}`}>
          <button className="gallery-toggle" type="button" aria-expanded={galleryOpen} onClick={() => setGalleryOpen((current) => !current)}>
            <span className="gallery-title"><strong>经历影集</strong><small>工作、教学与海外生活，都值得被看见。</small></span>
            <span className="gallery-action">{galleryOpen ? "收起影集" : "查看照片档案"}<ChevronDown size={18} strokeWidth={1.4} /></span>
          </button>
          <div className="gallery-panel" aria-hidden={!galleryOpen}>
            <div className="gallery-note">
              <p>照片不再依附某一张工作卡，而是沿着整条经历时间线组织。</p>
              <span>后续每个阶段建议放 1–3 张：现场、人物、作品或能说明当时状态的细节。</span>
            </div>
            <div className="gallery-grid">
              {photoArchive.map((item, index) => (
                <div className={`gallery-placeholder item-${index + 1}`} key={`${item.period}-${item.title}`}>
                  <ImagePlus size={22} strokeWidth={1.3} aria-hidden="true" />
                  <span>{item.period}</span>
                  <strong>{item.title}</strong>
                  <small>{item.note}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about shell section" id="about">
        <header className="section-head">
          <div><p className="section-id">02 / ABOUT</p><h2>工作之外，仍是同一个我。</h2></div>
          <p>靠谱，是我的职场名片；探索，是我的生活姿态。它们共享同一种认真与好奇。</p>
        </header>
        <div className="about-stage">
          <div className="about-switch" role="tablist" aria-label="关于我的两种状态">
            <button className={aboutMode === "work" ? "active" : ""} onClick={() => setAboutMode("work")} role="tab" aria-selected={aboutMode === "work"}>
              <span>WORK MODE</span><strong>靠谱</strong><p>把问题想清楚，再让方案跑起来。</p>
            </button>
            <button className={aboutMode === "life" ? "active" : ""} onClick={() => setAboutMode("life")} role="tab" aria-selected={aboutMode === "life"}>
              <span>LIFE MODE</span><strong>探索</strong><p>去陌生的地方，收集新的答案。</p>
            </button>
          </div>
          <div className="about-panel" role="tabpanel">
            <div className="about-text">
              <p className="about-lead">{aboutMode === "work" ? "可靠不是口号，是让每件事都有回应。" : "保持移动，也保持对世界的感受力。"}</p>
              <h3>{aboutMode === "work" ? "对结果负责，\n也对协作负责。" : "背包走过 10 多个国家，\n仍期待下一次出发。"}</h3>
              <p>{aboutMode === "work" ? "这里将继续补充我的工作原则、协作方式，以及我如何面对复杂问题。先留一个位置，等我用真实经历慢慢写满。" : "这里将记录旅行、日常观察和工作之外的兴趣。在不同文化与陌生环境中，我学会快速理解信息，也学会用不同方式与人沟通。"}</p>
              <div className="traits">{(aboutMode === "work" ? ["对结果负责", "用数据说话", "让协作有回应"] : ["跨文化沟通", "独立解决问题", "对未知保持好奇"]).map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <div className={`about-character ${aboutMode}`}>
              <img key={aboutMode} src={aboutMode === "work" ? "/ip-wave.webp" : "/ip-music.webp"} alt={aboutMode === "work" ? "挥手问候的 IP 玩偶" : "戴耳机听音乐的 IP 玩偶"} />
            </div>
          </div>
        </div>
      </section>

      <section className="background shell section" id="background">
        <header className="section-head">
          <div><p className="section-id">03 / BACKGROUND</p><h2>从文字、运营，走向数据与技术。</h2></div>
          <p>跨学科不是绕路。它让我既能理解人的感受，也能理解系统如何运转。</p>
        </header>
        <div className="background-grid">
          <div className="education-list">
            <p className="mini-title">学习轨迹</p>
            {education.map(([year, school, major]) => <div key={school}><span>{year}</span><strong>{school}</strong><p>{major}</p></div>)}
          </div>
          <div className="capability-card">
            <p className="mini-title">能力组合</p>
            <h3>懂用户，也能把想法变成工具。</h3>
            <div className="skill-groups">
              <div><span>数据</span><p>Excel · SQL · Tableau</p></div>
              <div><span>自动化</span><p>Python · API · AI Tools</p></div>
              <div><span>沟通</span><p>中文 · 英语 · 跨文化协作</p></div>
            </div>
            <img src="/ip-celebrate.webp" alt="庆祝完成学习目标的 IP 玩偶" />
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="section-id">04 / SAY HELLO</p>
            <h2>有一个值得<br />认真聊聊的问题？</h2>
            <p>欢迎交流运营、数据、AI 工具，或者任何还没被定义清楚的有趣想法。</p>
            <a className="contact-mail" href="mailto:2229409057@qq.com">2229409057@qq.com <span>↗</span></a>
          </div>
          <div className="contact-lines">
            <a href="tel:+8617616185335"><span>电话</span><strong>176 1618 5335</strong><i>↗</i></a>
            <button onClick={copyWechat}><span>微信</span><strong>yolohhly</strong><i>{copied ? "已复制 ✓" : "复制"}</i></button>
          </div>
          <img className="contact-character" src="/ip-wave.webp" alt="挥手告别的 IP 玩偶" />
        </div>
      </section>

      <footer className="footer shell"><p>© 2026 刘渊</p><p>有温度地理解 · 有逻辑地行动</p><a href="#top">回到顶部 ↑</a></footer>
      <div className={`toast ${copied ? "show" : ""}`} role="status" aria-live="polite">微信号已复制</div>
    </main>
  );
}
