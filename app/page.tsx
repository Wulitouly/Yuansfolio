"use client";

import { useEffect, useState } from "react";

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

const education = [
  ["2026 — 至今", "悉尼大学", "计算机科学 · 硕士"],
  ["2024 — 2026", "圣莫妮卡学院", "数据科学 · Associate · GPA 4.0"],
  ["2016 — 2020", "烟台大学", "汉语言文学 · 学士 · 专业前 5%"],
];

export default function Home() {
  const [activeCase, setActiveCase] = useState("inventory");
  const [aboutMode, setAboutMode] = useState<"work" | "life">("work");
  const [activeSection, setActiveSection] = useState("top");
  const [copied, setCopied] = useState(false);
  const selectedCase = lyzCases.find((item) => item.id === activeCase) ?? lyzCases[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-38% 0px -52%", threshold: 0 },
    );
    outline.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const copyWechat = async () => {
    await navigator.clipboard.writeText("yolohhly");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <nav className="topbar" aria-label="主导航">
        <div className="topbar-inner">
          <a className="brand" href="#top"><span />LIU YUAN</a>
          <div className="top-links">
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
          <h1>刘渊</h1>
          <blockquote>用文科生的温度去共情世界，<br />持理科生的清醒去解构问题。</blockquote>
        </div>
        <div className="hero-motion" aria-label="个人 IP 玩偶入场动画">
          <div className="motion-portal" aria-hidden="true">
            <span>WELCOME</span>
            <i />
          </div>
          <div className="motion-depth one" aria-hidden="true" />
          <div className="motion-depth two" aria-hidden="true" />
          <video
            className="hero-video"
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/hero-3d-poster.webp"
            disablePictureInPicture
          >
            <source src="/hero-3d.webm" type="video/webm" />
          </video>
          <span className="motion-caption">HELLO · NICE TO MEET YOU</span>
        </div>
      </section>

      <section className="work shell section" id="work">
        <header className="section-head">
          <div><p className="section-id">01 / EXPERIENCE</p><h2>先看我做过什么。</h2></div>
          <p>从业务现场发现问题，用数据、工具与持续迭代，把重复劳动变成能真正运行的解决方案。</p>
        </header>

        <article className="experience-card featured">
          <header className="company-head">
            <div className="company-index">01</div>
            <div><p>2026.03 — 至今</p><h3>LYZ FOOD Ltd</h3><span>用户运营 · 兼职</span></div>
            <p className="company-summary">负责老人餐业务的客户承接、日常运营与转化，参与配送、库存和发票等业务流程；结合一线操作识别效率瓶颈，并推动自动化方案落地。</p>
          </header>

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
              <div className="case-character">
                <div className="character-halo" />
                <img key={selectedCase.id} src={selectedCase.image} alt={`IP 玩偶演示${selectedCase.label}案例`} />
              </div>
            </div>
          </div>
          <p className="recognition">因稳定完成客户承接与日常运营，并持续推动流程优化，获得负责人认可，受邀以居家办公方式继续参与后续业务。</p>
        </article>

        <article className="experience-card hz-card">
          <header className="company-head compact">
            <div className="company-index">02</div>
            <div><p>2020.06 — 2023.09</p><h3>杭州好成绩教育科技有限公司</h3><span>用户运营 · 后晋升小组长</span></div>
            <p className="company-summary">围绕用户获取、激活、留存和转化开展运营工作，参与搭建 50 万+私域用户池，后期承担团队协作与新人培养。</p>
          </header>
          <div className="achievement-grid">
            {hzAchievements.map((item, index) => (
              <div className="achievement" key={item.title}>
                <span>0{index + 1}</span><strong>{item.metric}</strong><h4>{item.title}</h4><p>{item.text}</p>
              </div>
            ))}
          </div>
        </article>
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
