"use client";

import { useState } from "react";

const cases = [
  {
    index: "01",
    category: "流程自动化",
    title: "让出库流程从等待变成即时",
    summary:
      "从一线操作中定位重复劳动，用 Python 与飞书 API 串联数据清洗、处理和系统更新。",
    metric: "2 min",
    before: "原需 30–60 分钟 / 次",
    tone: "rose",
  },
  {
    index: "02",
    category: "运营工具",
    title: "把 30 单配送变成一张清晰路线图",
    summary:
      "把地址和配送点位可视化，生成可调整的路线方案，让规划更快，也更贴近真实配送场景。",
    metric: "10 min",
    before: "原需 30–40 分钟 / 次",
    tone: "blue",
  },
  {
    index: "03",
    category: "用户增长",
    title: "沿着漏斗找到真正的增长杠杆",
    summary:
      "拆解曝光、点击、阅读、扫码与添加好友链路，用持续测试推动内容与承接流程迭代。",
    metric: "2.8% → 20%",
    before: "大流量期承接近 5 万新增用户",
    tone: "plum",
  },
];

const experiences = [
  {
    period: "2026.03 — NOW",
    company: "LYZ FOOD Ltd",
    role: "用户运营 · 兼职",
    detail:
      "参与客户承接、配送、库存和发票等业务流程，并以 AI 辅助开发与流程自动化持续改善日常运营效率。",
  },
  {
    period: "2020.06 — 2023.09",
    company: "杭州好成绩教育科技有限公司",
    role: "用户运营 · 后晋升小组长",
    detail:
      "参与搭建 50 万+私域用户池，负责增长链路优化、用户价值提升、数据复盘，以及团队协作与新人培养。",
  },
];

const education = [
  ["2026 — NOW", "悉尼大学", "计算机科学 · 硕士"],
  ["2024 — 2026", "圣莫妮卡学院", "数据科学 · Associate · GPA 4.0"],
  ["2016 — 2020", "烟台大学", "汉语言文学 · 学士 · 专业前 5%"],
];

export default function Home() {
  const [aboutMode, setAboutMode] = useState<"work" | "life">("work");
  const [copied, setCopied] = useState(false);

  const copyWechat = async () => {
    await navigator.clipboard.writeText("yolohhly");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <nav className="nav-shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-dot" />
          LIU YUAN
        </a>
        <div className="nav-links">
          <a href="#about">关于我</a>
          <a href="#cases">案例</a>
          <a href="#experience">经历</a>
        </div>
        <a className="nav-contact" href="#contact">
          和我聊聊 <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>HELLO, I&apos;M</span><i /></p>
          <h1>刘渊</h1>
          <p className="hero-role">运营分析 · 数据运营 · 业务分析</p>
          <p className="hero-statement">
            用文科生的温度去共情世界，<br />
            持理科生的清醒去解构问题。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#cases">看看我做过什么 <span>↓</span></a>
            <a className="text-link" href="#about">先认识我 <span>↗</span></a>
          </div>
          <div className="hero-footnote">
            <span className="pulse" />
            <span>在悉尼学习与生活 · 对新的问题保持开放</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="刘渊的个人 IP 玩偶形象">
          <div className="sun-spot" />
          <div className="image-frame">
            <img src="/liuyuan-ip-main.jpg" alt="戴粉色帽子和耳机、穿紫灰色工装裤的个人 IP 玩偶" />
          </div>
          <div className="float-tag tag-top">理性拆解 <span>✦</span></div>
          <div className="float-tag tag-bottom"><span>☼</span> 感性观察</div>
          <div className="scribble" aria-hidden="true">nice to meet you</div>
        </div>

        <a className="scroll-cue" href="#about" aria-label="向下浏览">
          <span>SCROLL TO KNOW ME</span><i>↓</i>
        </a>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading">
          <p className="section-number">01 / ABOUT</p>
          <h2>两种状态，<br />同一个我。</h2>
          <p>工作与生活不是截然不同的两面，它们共享同一种认真与好奇。</p>
        </div>

        <div className="about-card">
          <div className="mode-tabs" role="tablist" aria-label="查看工作或生活状态">
            <button
              role="tab"
              aria-selected={aboutMode === "work"}
              className={aboutMode === "work" ? "active" : ""}
              onClick={() => setAboutMode("work")}
            >
              <small>WORK MODE</small>
              靠谱，是我的职场名片
            </button>
            <button
              role="tab"
              aria-selected={aboutMode === "life"}
              className={aboutMode === "life" ? "active" : ""}
              onClick={() => setAboutMode("life")}
            >
              <small>LIFE MODE</small>
              探索，是我的生活姿态
            </button>
          </div>

          <div className="mode-content" role="tabpanel">
            <div className="mode-image">
              <img
                key={aboutMode}
                src={aboutMode === "work" ? "/liuyuan-ip-main.jpg" : "/liuyuan-ip-explore.jpg"}
                alt={aboutMode === "work" ? "工作状态的个人 IP 玩偶" : "穿牛仔套装、表现探索状态的个人 IP 玩偶"}
              />
              <span className="mode-badge">{aboutMode === "work" ? "ON DUTY" : "OUT THERE"}</span>
            </div>
            <div className="mode-copy">
              <p className="mode-kicker">{aboutMode === "work" ? "可靠不是口号，是把事情做完。" : "保持移动，也保持对世界的感受力。"}</p>
              <h3>{aboutMode === "work" ? "把问题想清楚，\n再让方案跑起来。" : "去陌生的地方，\n收集新的答案。"}</h3>
              <p className="placeholder-copy">
                {aboutMode === "work"
                  ? "这里将补充我的工作原则、协作方式，以及我如何面对复杂问题。先留一个位置，等我用真实经历慢慢写满。"
                  : "这里将记录旅行、日常观察和工作之外的兴趣。背包走过 10 多个国家之后，我仍然期待下一次出发。"}
              </p>
              <div className="trait-list">
                {(aboutMode === "work"
                  ? ["对结果负责", "用数据说话", "让协作有回应"]
                  : ["跨文化沟通", "独立解决问题", "对未知保持好奇"]
                ).map((trait) => <span key={trait}>{trait}</span>)}
              </div>
              <p className="edit-note"><i /> 内容待我继续补充</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cases section-shell" id="cases">
        <div className="cases-heading">
          <div>
            <p className="section-number">02 / SELECTED CASES</p>
            <h2>不是展示任务，<br />而是展示改变。</h2>
          </div>
          <p className="cases-intro">从业务现场找到问题，用数据、工具与持续迭代，把重复劳动变成可复用的解决方案。</p>
        </div>

        <div className="case-grid">
          {cases.map((item) => (
            <article className={`case-card ${item.tone}`} key={item.index}>
              <div className="case-top">
                <span>{item.index}</span>
                <span>{item.category}</span>
              </div>
              <div className="metric-orbit">
                <span className="orbit-dot" />
                <strong>{item.metric}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="case-bottom">
                <span>{item.before}</span>
                <span className="case-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
        <p className="cases-note">更多完整作品与项目复盘将在这里持续更新。</p>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="experience-main">
          <p className="section-number">03 / JOURNEY</p>
          <h2>从文字、运营，<br />走向数据与技术。</h2>
          <p className="journey-intro">跨学科不是绕路。它让我既能理解人的感受，也能理解系统如何运转。</p>

          <div className="timeline">
            {experiences.map((item) => (
              <details key={item.company}>
                <summary>
                  <span className="timeline-period">{item.period}</span>
                  <span><strong>{item.company}</strong><em>{item.role}</em></span>
                  <i aria-hidden="true">＋</i>
                </summary>
                <p>{item.detail}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="education-card">
          <span className="paperclip" aria-hidden="true">⌁</span>
          <p className="hand-note">keep learning!</p>
          <h3>学习轨迹</h3>
          <div className="education-list">
            {education.map(([year, school, major]) => (
              <div key={school}>
                <span>{year}</span>
                <strong>{school}</strong>
                <p>{major}</p>
              </div>
            ))}
          </div>
          <div className="skill-cloud">
            {['Excel', 'SQL', 'Tableau', 'Python', 'AI Tools', 'English'].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </aside>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="section-number">04 / SAY HELLO</p>
            <h2>有一个值得<br />认真聊聊的问题？</h2>
            <p>欢迎交流运营、数据、AI 工具，或者任何还没被定义清楚的有趣想法。</p>
            <a className="mail-link" href="mailto:2229409057@qq.com">给我发邮件 <span>↗</span></a>
          </div>
          <div className="contact-panel">
            <a href="mailto:2229409057@qq.com"><span>邮箱</span><strong>2229409057@qq.com</strong><i>↗</i></a>
            <a href="tel:+8617616185335"><span>电话</span><strong>176 1618 5335</strong><i>↗</i></a>
            <button onClick={copyWechat}><span>微信</span><strong>yolohhly</strong><i>{copied ? "✓" : "复制"}</i></button>
          </div>
          <div className="contact-avatar">
            <img src="/liuyuan-ip-main.jpg" alt="刘渊的个人 IP 玩偶向访客告别" />
          </div>
          <p className="contact-doodle">let&apos;s make something useful</p>
        </div>
      </section>

      <footer className="footer section-shell">
        <p>© 2026 刘渊</p>
        <p>有温度地理解 · 有逻辑地行动</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>

      <div className={`toast ${copied ? "show" : ""}`} role="status" aria-live="polite">微信号已复制</div>
    </main>
  );
}
