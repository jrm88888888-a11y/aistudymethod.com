// ============================================
// AI Study Method — Language toggle (English / 简体中文)
// Default language is English. Chinese strings live in I18N.zh below.
// Elements carry data-i18n (textContent) or data-i18n-html (innerHTML).
// The toggle button carries data-lang-toggle.
// ============================================
(function () {
  const STORAGE_KEY = 'aism-lang';

  const I18N = {
    zh: {
      // ---- Navigation ----
      'nav.activities': '学习活动',
      'nav.method': '丝绒学习法',
      'nav.lab': 'AI 实验室',
      'nav.books': '提示词手册',
      'nav.about': '关于我们',

      // ---- Velvet step names ----
      'velvet.view': '纵览',
      'velvet.evaluate': '评估',
      'velvet.learn': '学习',
      'velvet.verify': '检验',
      'velvet.explore': '探索',
      'velvet.transform': '升华',

      // ---- Subjects ----
      'subject.physics': '物理',
      'subject.chemistry': '化学',
      'subject.biology': '生物',
      'subject.maths': '数学',
      'subject.history': '历史',
      'subject.psychology': '心理学',
      'subject.economics': '经济学',
      'subject.geography': '地理',
      'subject.compsci': '计算机科学',
      'subject.english': '英语语言',

      // ---- Homepage ----
      'home.hero.label': '六步式 AI 学习框架',
      'home.hero.h1': '学会把 AI 当作<em style="font-style:normal;background:var(--velvet-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">学习伙伴</em>——而非走捷径的工具。',
      'home.hero.p': '丝绒学习法是一套六步框架，教学生如何使用 ChatGPT、Claude 或 Gemini，让思考始终属于自己。它建立在<strong style="color:var(--text-primary);font-weight:700;">提取练习</strong>、<strong style="color:var(--text-primary);font-weight:700;">间隔重复</strong>与<strong style="color:var(--text-primary);font-weight:700;">图式理论</strong>之上——这些都是认知科学证实真正有效的方法。一份面向学生与教师的免费开放资源，涵盖任何学科、任何水平。',
      'home.hero.cta1': '探索学习活动 →',
      'home.hero.cta2': '了解学习法 →',
      'home.wheel.center': '学习法',

      'home.how.label': '运作方式',
      'home.how.title': '六个步骤。一套<em>系统</em>。涵盖所有学科。',
      'home.how.body': '丝绒学习法以图式理论、提取练习、布鲁姆分类法和元认知研究为基础，借助 AI 让每位学生都能用上这些原理。点击字母，看看每一步带来什么。',
      'home.step1.label': '第 1 步 · 纵览',
      'home.step1.desc': '在开始学习之前先梳理整个考纲，让一切尽在掌握。',
      'home.step2.label': '第 2 步 · 评估',
      'home.step2.desc': '用 AI 做诊断，准确找出你的薄弱环节。',
      'home.step3.label': '第 3 步 · 学习',
      'home.step3.desc': '用最容易记住的方式填补空缺——游戏、角色扮演、费曼技巧。',
      'home.step4.label': '第 4 步 · 检验',
      'home.step4.desc': '通过考试式题目和即时的考官式反馈，证明你真的掌握了。',
      'home.step5.label': '第 5 步 · 探索',
      'home.step5.desc': '迈向高分思维：应用、分析、应对陌生题目。',
      'home.step6.label': '第 6 步 · 升华',
      'home.step6.desc': '反思、规划下一次学习，并用间隔重复巩固记忆。',
      'home.how.cta': '探索完整学习法 →',

      'home.teach.label': '面向教师与学校',
      'home.teach.title': '一套现成的方法，教学生<em style="font-style:normal;background:var(--velvet-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">借助</em> AI 学习——而非绕开它。',
      'home.teach.body': '本网站上的每一项活动、提示词手册和模拟工具，都可免费用于课堂和讲座。它们以认知科学为基础，由合格教师设计，旨在向学生展示 AI 如何支持自主学习，而不是取而代之。',
      'home.teach.cta': '浏览资源 →',
      'home.teach.note': '可免费用于课堂',

      'home.subjects.label': '免费资源',
      'home.subjects.title': '每个学科。<br><em>每种形式。</em>',
      'home.subjects.all': '查看全部学科 →',

      'home.why.label': '为何有效',
      'home.why.title': '建立在<em>真正的科学</em>之上。<br>由真正的教育者讲授。',
      'home.why.schema.t': '图式理论',
      'home.why.schema.d': '“纵览”这一步在学习内容之前先搭建心智框架——新知识便能更牢固地依附于已有结构。',
      'home.why.testing.t': '测试效应',
      'home.why.testing.d': '“检验”步骤中的提取练习，是认知科学中最稳健的发现之一——远比反复阅读有效。',
      'home.why.bloom.t': '布鲁姆分类法',
      'home.why.bloom.d': '“探索”步骤针对高阶思维——应用与分析——而这正是拉开分数差距的关键。',
      'home.why.meta.t': '元认知学习',
      'home.why.meta.d': '约翰·哈蒂的研究表明，自我调控是影响力最高的教育干预手段之一。',

      'home.cta.label': '免费开放 · 无需注册',
      'home.cta.title': '准备好更聪明地学习了吗？',
      'home.cta.body': '探索数百款免费游戏、词汇工具、提示词手册和 AI 学习活动——每一项都基于丝绒学习法。',
      'home.cta.btn1': '探索学习活动 →',
      'home.cta.btn2': '了解学习法',

      // ---- Footer ----
      'footer.tagline': '一套面向各阶段学生的六步式 AI 学习系统——以认知科学为基础，为真实世界而设计。',
      'footer.subjects': '学科',
      'footer.sciences': '理科',
      'footer.maths': '数学',
      'footer.humanities': '人文学科',
      'footer.allsubjects': '全部学科 →',
      'footer.learn': '学习',
      'footer.resources': '活动与资源',
      'footer.info': '信息',
      'footer.copyright': '© 2026 AI Study Method · 丝绒学习法™ · 免费教育资源',
      'footer.powered': '由 <span>丝绒学习法™</span> 提供支持',

      // ---- The Velvet Method page ----
      'vm.label': '学习方法论',
      'vm.h1': '<em>丝绒</em>学习法',
      'vm.p': '一套以认知科学为基础的六步式 AI 学习框架，旨在改变学生的学习方式——适用于任何学科、任何水平、任何考试局。',
      'vm.cta': '探索学习活动 →',
      'vm.bottom.title': '准备好用丝绒学习法来学习了吗？',
      'vm.bottom.body': '浏览本网站上数百项免费活动、模拟工具和提示词手册——每一项都将丝绒学习法的各个步骤付诸实践。',
      'vm.bottom.cta': '探索学习活动 →',

      // ---- AI Lab page ----
      'lab.badge': 'AI 实验室',
      'lab.h1': '从提示<br>到<em>构建。</em>',
      'lab.p1': '大多数学生用 AI 来获取答案。AI 实验室教的是更具雄心的事——如何用 AI 来构建。一次性的学习资源。可复用的学习系统。能为任何学科、任何主题、任何水平生成无限内容的引擎。',
      'lab.p2': '本网站上的所有资源都是在这里构建的。现在，学着构建你自己的。',
      'lab.cta.title': '想构建你自己的引擎吗？',
      'lab.cta.body': '丝绒学习法深入讲解了第一层和第二层。第三层的引擎构建在进阶部分介绍——展示如何架构可复用的系统，大规模生成学习内容。',
      'lab.cta.btn': '了解学习法 →',

      // ---- About page ----
      'about.label': '关于我们',
      'about.h1': '由教育者打造。<br><em>由 AI 驱动。</em>',
      'about.p': 'AI Study Method 由一位物理学者、教师兼 AI 爱好者创立，他希望让每位学生都能获得以往只有负担得起私人导师的人才能享有的那种个性化、结构化的学习。',
      'about.cta.title': '想把丝绒学习法带进你的学校吗？',
      'about.cta.body': '本网站上的所有活动与资源均可免费用于课堂和讲座。欢迎教育者在课程和讲座中使用丝绒学习法。',
      'about.cta.btn': '浏览资源 →',

      // ---- Prompt Books page ----
      'books.badge': '免费提示词手册',
      'books.h1': '每个学科 100 条 AI 提示词——<br><em>丝绒学习法的实践。</em>',
      'books.p1': '免费 PDF 提示词手册，涵盖 GCSE、A-Level、IB 文凭课程以及完整的 AP 系列，每个学科一本。每条提示词都围绕丝绒六步——纵览、评估、学习、检验、探索、升华——重新编写，让学生不再用 ChatGPT 代替思考，而是用它来训练思考。',
      'books.p2': '把它们打印出来，或粘贴进 ChatGPT 或 Claude，学生就拥有了一位随时在身边的学习教练，在复习的每个阶段都会提出恰当的问题。',
      'books.principle': '<strong>基于</strong> 提取练习 · 间隔重复 · 图式理论',

      // ---- Activities (subjects) page ----
      'subjects.badge': '免费资源',
      'subjects.h1': '每个学科。<br><em>每个丝绒步骤。</em>',
      'subjects.p': '迷你课程、概念图、问答游戏、角色扮演故事和竞赛——全部将丝绒学习法付诸实践。按学科、水平或步骤筛选，精准找到所需。'
    }
  };

  function applyLang(lang) {
    const useZh = lang === 'zh';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (el.dataset.origText === undefined) el.dataset.origText = el.textContent;
      if (useZh && I18N.zh[key] != null) el.textContent = I18N.zh[key];
      else el.textContent = el.dataset.origText;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (el.dataset.origHtml === undefined) el.dataset.origHtml = el.innerHTML;
      if (useZh && I18N.zh[key] != null) el.innerHTML = I18N.zh[key];
      else el.innerHTML = el.dataset.origHtml;
    });

    document.documentElement.lang = useZh ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = useZh ? 'EN' : '中文';
      btn.setAttribute('aria-label', useZh ? 'Switch to English' : '切换到中文');
    });
  }

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) { return 'en'; }
  }
  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function init() {
    applyLang(getLang());
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(getLang() === 'zh' ? 'en' : 'zh');
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
