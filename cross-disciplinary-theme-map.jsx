import { useState } from "react";

// Apple x Gucci: Precision meets luxury
// Gucci palette: Deep green, signature red, gold, cream, noir
// Apple DNA: Whitespace, glass morphism, fluid transitions, system typography precision

const DISCIPLINES = {
  history: {
    label: "History",
    color: "#006B3F",
    accent: "#004D2C",
    bg: "rgba(0,107,63,0.04)",
    glow: "rgba(0,107,63,0.15)",
  },
  philosophy: {
    label: "Philosophy",
    color: "#1D1D1F",
    accent: "#3A3A3C",
    bg: "rgba(29,29,31,0.04)",
    glow: "rgba(29,29,31,0.1)",
  },
  psychology: {
    label: "Psychology",
    color: "#C8102E",
    accent: "#9B0C23",
    bg: "rgba(200,16,46,0.04)",
    glow: "rgba(200,16,46,0.12)",
  },
  analytics: {
    label: "Analytics",
    color: "#B8860B",
    accent: "#8B6914",
    bg: "rgba(184,134,11,0.05)",
    glow: "rgba(184,134,11,0.12)",
  },
  essayGuide: {
    label: "Essay Strategies",
    color: "#6B5B3E",
    accent: "#4A3F2B",
    bg: "rgba(107,91,62,0.04)",
    glow: "rgba(107,91,62,0.1)",
  },
};

const PATTERNS = [
  {
    id: "thesis",
    num: "01",
    title: "The Thesis as Compass",
    subtitle: "Universal requirement, discipline-shaped meaning",
    summary:
      "Every discipline demands a clear thesis \u2014 but what \u2018thesis\u2019 means shifts across fields. The thesis is always your paper\u2019s promise to the reader, yet each field shapes that promise differently.",
    disciplines: {
      history: {
        quote: "Declare it to your reader in clear, succinct prose in your thesis statement.",
        insight: "Thesis = an interpretive claim about selected evidence. You enter an ongoing debate among scholars by taking a position on how to read the past.",
        actionable: "Frame your thesis as a historiographic intervention: \u2018Scholars have said X, but the evidence suggests Y.\u2019",
      },
      philosophy: {
        quote: "State your thesis clearly and concisely in your introduction so that your reader understands what your paper sets out to achieve.",
        insight: "Thesis = a precise logical position you will defend with stepwise argument. It can be a negative claim (refuting someone else) or positive (advancing your own view).",
        actionable: "Write your thesis so it implies its own argument structure \u2014 e.g., \u2018I will refute X by showing it trades on an ambiguity.\u2019",
      },
      psychology: {
        quote: "Your thesis statement should present some conclusion about the research on that topic \u2014 a statement that summarizes, integrates, or reinterprets the data.",
        insight: "Thesis = a research-backed conclusion that synthesizes empirical findings. It must go beyond summary to add your own insight or perspective.",
        actionable: "Test: Does your thesis make a claim that could be contradicted by data? If not, it\u2019s a topic, not a thesis.",
      },
      analytics: {
        quote: "Does the adoption of descriptive analytics impact online retailer performance, and if so, how?",
        insight: "Thesis = a causal hypothesis tested with rigorous methodology. The entire paper is structured around proving or disproving this specific question.",
        actionable: "In quantitative work, your thesis often takes the form of a testable hypothesis with clear operationalization.",
      },
      essayGuide: {
        quote: "A thesis is your paper\u2019s central claim \u2014 the point you are trying to make.",
        insight: "The meta-guide ties it together: thesis is always a promise and a position. It must be arguable, specific, and evolving as your paper develops.",
        actionable: "Use the \u2018So what?\u2019 test. If your thesis doesn\u2019t answer why anyone should care, revise it.",
      },
    },
    forBella:
      "For your MA thesis bridging health communication and technology: your thesis needs to function simultaneously as an empirical hypothesis (psychology/analytics mode) and a theoretical contribution (philosophy mode). Practice stating it both ways.",
  },
  {
    id: "evidence",
    num: "02",
    title: "Evidence Means Radically Different Things",
    subtitle: "The biggest cross-disciplinary divergence",
    summary:
      "Each discipline has fundamentally different standards for what counts as \u2018evidence.\u2019 Understanding this is critical when you work across fields like health communication, ed psych, and marketing research.",
    disciplines: {
      history: {
        quote: "Sources provide raw materials (straw and clay) that scholars fashion into evidence (bricks) to assemble a historical argument (structure).",
        insight: "Evidence = interrogated sources. You must ask: Who produced this? When? Why? For whom? Sources don\u2019t speak for themselves.",
        actionable: "Always interrogate: Is this source representative? What agenda might the author have had?",
      },
      philosophy: {
        quote: "A request for evidence for a claim is generally a request for an argument, or for a better argument.",
        insight: "Evidence = logical argument. Philosophers use hypothetical examples, thought experiments, reductio ad absurdum, and appeal to intuition \u2014 not empirical data.",
        actionable: "Construct hypothetical scenarios that isolate the variable you care about.",
      },
      psychology: {
        quote: "In psychology, evidence for one\u2019s conclusions should rely on data, rather than people\u2019s opinions.",
        insight: "Evidence = empirical data ONLY. Direct quotes, opinions, and unsubstantiated claims are explicitly rejected.",
        actionable: "Never write \u2018X is true\u2019 without citing empirical support. Even widely accepted facts need references.",
      },
      analytics: {
        quote: "We use the synthetic difference-in-differences method to analyze the staggered adoption of a retail analytics dashboard.",
        insight: "Evidence = causal identification. Not just data, but data analyzed with methods that can distinguish correlation from causation.",
        actionable: "In your marketing research course: always ask what identification strategy supports a causal claim.",
      },
      essayGuide: {
        quote: "The body paragraph explains, expands on, and/or provides evidence for the claim.",
        insight: "Evidence always serves the claim \u2014 it never just sits there. Every piece of evidence needs analysis connecting it to your argument.",
        actionable: "Use the Evidence \u2192 Analysis \u2192 Connection sandwich in every body paragraph.",
      },
    },
    forBella:
      "Your interdisciplinary position is a superpower here. Health communication research needs to satisfy psychology\u2019s empirical standards while drawing on philosophy\u2019s logical rigor. Know which \u2018evidence mode\u2019 you\u2019re operating in.",
  },
  {
    id: "counterargument",
    num: "03",
    title: "The Counterargument Imperative",
    subtitle: "Escalating rigor across disciplines",
    summary:
      "All disciplines require engaging with opposing views, but the depth and formality of this engagement escalates dramatically. This pattern reveals how each field constructs credibility.",
    disciplines: {
      history: {
        quote: "Make sure to consider reasonable counterarguments to your thesis.",
        insight: "Counterargument = acknowledging that other scholars have interpreted the same evidence differently. Address contradictions rather than ignoring them.",
        actionable: "Identify 2\u20133 scholars who would disagree with your interpretation. Explain why your reading is more convincing.",
      },
      philosophy: {
        quote: "You should always raise and reply to the strongest objections you can think of rather than making up unconvincing objections.",
        insight: "Philosophy makes counterargument STRUCTURAL. You must steel-man the opposition. If you can\u2019t answer an objection, you may need to change your thesis.",
        actionable: "The \u2018strongest objection\u2019 test: if your counterargument is easy to dismiss, you picked a weak one.",
      },
      psychology: {
        quote: "What evidence runs contrary to your claim and how do you reconcile that with your claim?",
        insight: "Counterargument = contradictory empirical evidence. You must explain discrepancies between your predictions and your findings.",
        actionable: "In your Discussion section, always address: What would it mean if the opposite were true?",
      },
      analytics: {
        quote: "We address endogeneity concerns using instrumental variables...",
        insight: "In quantitative research, counterargument takes the form of robustness checks and alternative explanations.",
        actionable: "For every causal claim, list the top 3 alternative explanations and show how your design addresses them.",
      },
      essayGuide: {
        quote: "Counterargument functions as a way to address potential objections.",
        insight: "The guide devotes an entire chapter to counterargument, treating it as a structural feature of strong essays across all disciplines.",
        actionable: "Place your counterargument after your strongest evidence \u2014 defend your position at its most vulnerable point.",
      },
    },
    forBella:
      "For PhD applications: demonstrating you can steel-man opposing views is one of the strongest signals of intellectual maturity. Your writing sample\u2019s counterargument section should genuinely challenge your thesis.",
  },
  {
    id: "voice",
    num: "04",
    title: "Voice & Authority on a Spectrum",
    subtitle: "How disciplines construct credibility through language",
    summary:
      "Each discipline has distinct conventions around authorial voice, use of \u2018I,\u2019 quotation, and citation style. These aren\u2019t arbitrary \u2014 they reflect fundamentally different theories of where scholarly authority comes from.",
    disciplines: {
      history: {
        quote: "Avoid using the first or second person. Phrases such as \u2018I think\u2019 or \u2018in my opinion\u2019 are redundant in expository writing.",
        insight: "Authority comes from the evidence, not the author. Write in past tense. Use Chicago/footnotes. The historian effaces themselves behind their sources.",
        actionable: "Your authority = your command of primary sources. Let the evidence carry the argument.",
      },
      philosophy: {
        quote: "Use first person pronouns freely; signpost. Phrases such as \u2018I will argue that...\u2019 are an extremely useful aid.",
        insight: "Authority comes from the transparency of your reasoning. \u2018I\u2019 is encouraged because the reader needs to track YOUR argument.",
        actionable: "Signpost relentlessly: \u2018I will show... My objection is... As I have argued...\u2019 This isn\u2019t ego \u2014 it\u2019s clarity.",
      },
      psychology: {
        quote: "Writers of psychology almost never directly quote a source. Instead, they distill the essence of the idea or finding.",
        insight: "Authority comes from data and methodological rigor. Use APA style. Avoid direct quotes. Be precise and literal.",
        actionable: "Distill, don\u2019t paraphrase. Capture the finding\u2019s essence in your own words, then cite.",
      },
      analytics: {
        quote: "We use the synthetic difference-in-differences method...",
        insight: "Authority comes from methodological transparency. Credibility is established through detailed methodology and robustness checks.",
        actionable: "In quantitative writing, your Methods section IS your credibility. Be exhaustively transparent.",
      },
      essayGuide: {
        quote: "Your introduction should explain what is at stake in your essay and suggest why the reader should care.",
        insight: "Voice across all disciplines serves one function: orienting the reader. The reader should never wonder \u2018why am I reading this?\u2019",
        actionable: "Regardless of discipline: the reader should never wonder \u2018why am I reading this paragraph?\u2019",
      },
    },
    forBella:
      "As you move between EdPsych, Advertising, and Marketing Research courses, you\u2019ll need to code-switch between these voice conventions. Map each assignment to its discipline\u2019s voice rules before you start writing.",
  },
  {
    id: "structure",
    num: "05",
    title: "The Hourglass Unifies Everything",
    subtitle: "Broad \u2192 Narrow \u2192 Broad across all fields",
    summary:
      "The hourglass structure \u2014 start broad with context, narrow to your specific contribution, then broaden again to implications \u2014 appears in every document. Psychology names it explicitly; others embed it implicitly.",
    disciplines: {
      history: {
        quote: "Find a way to enter the conversation... Start big, begin with a meaty question.",
        insight: "History uses the broad-to-narrow pattern implicitly: start with the historiographic debate, narrow to your evidence, then conclude with significance.",
        actionable: "Open with the scholarly conversation you\u2019re entering. Close with what your argument changes.",
      },
      philosophy: {
        quote: "Begin by formulating your precise thesis... Make an argument... Briefly conclude.",
        insight: "Philosophy\u2019s hourglass is compressed: minimal opening, extensive middle argument, brief zoom-out conclusion.",
        actionable: "In philosophy, the hourglass is bottom-heavy. Spend most of your space on the argument, not the setup.",
      },
      psychology: {
        quote: "Think of Bem\u2019s metaphor of an hourglass \u2014 you start out with a broad introduction, narrow your focus... then broaden the paper again.",
        insight: "Psychology names the pattern explicitly: Introduction (broad \u2192 narrow), Method/Results (narrow), Discussion (narrow \u2192 broad).",
        actionable: "Your Introduction should move from \u2018why this topic matters\u2019 to \u2018here is my specific hypothesis\u2019 in a smooth narrowing.",
      },
      analytics: {
        quote: "Marketers are often encouraged to invest in analytics-driven decisions...",
        insight: "The paper exemplifies the hourglass: broad lit review \u2192 specific research question \u2192 methodology \u2192 findings \u2192 broad implications.",
        actionable: "Study this paper\u2019s structure as a template. Notice how each section transition narrows or broadens the lens.",
      },
      essayGuide: {
        quote: "Introductions move from the general to the specific... Conclusions move from the specific back to the general.",
        insight: "The guide makes the universal essay architecture explicit across its chapters on introductions and conclusions.",
        actionable: "Draft your introduction and conclusion in parallel. They should mirror each other.",
      },
    },
    forBella:
      "The hourglass is your structural anchor across every course and your thesis. When you feel lost in a draft, check: Am I in the broad part, the narrow part, or the broadening-back-out part?",
  },
];

const GucciStripe = () => (
  <div className="flex items-center" style={{ gap: "2px" }}>
    <div style={{ width: "24px", height: "2px", backgroundColor: "#006B3F" }} />
    <div style={{ width: "24px", height: "2px", backgroundColor: "#C8102E" }} />
    <div style={{ width: "24px", height: "2px", backgroundColor: "#006B3F" }} />
  </div>
);

const GoldLine = () => (
  <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
);

const PatternNav = ({ pattern, isActive, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "baseline",
      gap: "12px",
      padding: "16px 20px",
      width: "100%",
      textAlign: "left",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      backgroundColor: isActive ? "rgba(212,175,55,0.06)" : "transparent",
      borderLeft: isActive ? "2px solid #D4AF37" : "2px solid transparent",
    }}
  >
    <span
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "11px",
        letterSpacing: "0.1em",
        color: isActive ? "#D4AF37" : "#AEAEB2",
        fontWeight: "400",
        minWidth: "20px",
      }}
    >
      {pattern.num}
    </span>
    <div>
      <p
        style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontSize: "14px",
          fontWeight: isActive ? "600" : "400",
          color: isActive ? "#1D1D1F" : "#636366",
          letterSpacing: "-0.01em",
          margin: 0,
          lineHeight: "1.3",
        }}
      >
        {pattern.title}
      </p>
      <p
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "11px",
          color: "#AEAEB2",
          fontStyle: "italic",
          margin: "3px 0 0 0",
          lineHeight: "1.3",
        }}
      >
        {pattern.subtitle}
      </p>
    </div>
  </button>
);

const DisciplineChip = ({ id, active, onClick }) => {
  const d = DISCIPLINES[id];
  return (
    <button
      onClick={() => onClick(id)}
      style={{
        padding: "6px 16px",
        border: active ? "none" : "1px solid #E5E5EA",
        borderRadius: "100px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontSize: "12px",
        fontWeight: "500",
        letterSpacing: "0.02em",
        cursor: "pointer",
        transition: "all 0.25s ease",
        backgroundColor: active ? d.color : "white",
        color: active ? "white" : "#636366",
      }}
    >
      {d.label}
    </button>
  );
};

const DetailView = ({ pattern, activeDiscipline, setActiveDiscipline }) => {
  const discData = activeDiscipline ? pattern.disciplines[activeDiscipline] : null;
  const disc = activeDiscipline ? DISCIPLINES[activeDiscipline] : null;

  return (
    <div style={{ padding: "40px" }}>
      {/* Pattern Header */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "12px",
              letterSpacing: "0.15em",
              color: "#D4AF37",
              textTransform: "uppercase",
            }}
          >
            Pattern {pattern.num}
          </span>
          <GucciStripe />
        </div>
        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "28px",
            fontWeight: "400",
            color: "#1D1D1F",
            letterSpacing: "-0.02em",
            margin: "0 0 12px 0",
            lineHeight: "1.2",
          }}
        >
          {pattern.title}
        </h2>
        <p
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: "15px",
            color: "#636366",
            lineHeight: "1.65",
            maxWidth: "580px",
            margin: 0,
          }}
        >
          {pattern.summary}
        </p>
      </div>

      {/* Discipline Chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
        {Object.keys(pattern.disciplines).map((id) => (
          <DisciplineChip
            key={id}
            id={id}
            active={activeDiscipline === id}
            onClick={(id) => setActiveDiscipline(activeDiscipline === id ? null : id)}
          />
        ))}
      </div>

      {/* Discipline Detail */}
      {discData && disc ? (
        <div
          style={{
            backgroundColor: disc.bg,
            borderRadius: "16px",
            padding: "32px",
            border: `1px solid ${disc.glow}`,
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: disc.color,
              marginBottom: "16px",
              fontWeight: "400",
            }}
          >
            {disc.label}
          </p>

          {/* Quote */}
          <div
            style={{
              borderLeft: `2px solid ${disc.color}`,
              paddingLeft: "20px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "15px",
                fontStyle: "italic",
                color: "#48484A",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {`\u201C${discData.quote}\u201D`}
            </p>
          </div>

          {/* Insight */}
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#AEAEB2",
                marginBottom: "6px",
                fontWeight: "600",
              }}
            >
              Key Insight
            </p>
            <p
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: "14px",
                color: "#1D1D1F",
                lineHeight: "1.65",
                margin: 0,
              }}
            >
              {discData.insight}
            </p>
          </div>

          <GoldLine />

          {/* Actionable */}
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "6px",
                fontWeight: "600",
              }}
            >
              Actionable Framework
            </p>
            <p
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: "14px",
                color: "#1D1D1F",
                lineHeight: "1.65",
                margin: 0,
              }}
            >
              {discData.actionable}
            </p>
          </div>
        </div>
      ) : (
        <div
          style={{
            borderRadius: "16px",
            padding: "24px",
            backgroundColor: "#FAFAFA",
            border: "1px solid #F2F2F7",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "13px",
              color: "#AEAEB2",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Select a discipline to reveal its unique perspective
          </p>
        </div>
      )}

      {/* For Bella - Personal Note */}
      <div
        style={{
          background: "linear-gradient(135deg, #FDFCFB 0%, #F9F7F4 100%)",
          borderRadius: "16px",
          padding: "24px 28px",
          border: "1px solid #E8E2D8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#D4AF37" }} />
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#B8860B",
              margin: 0,
            }}
          >
            For Your Trajectory &mdash; MA &rarr; PhD
          </p>
        </div>
        <p
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: "14px",
            color: "#48484A",
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          {pattern.forBella}
        </p>
      </div>
    </div>
  );
};

const EvolutionView = () => {
  const stages = [
    { label: "History", color: "#006B3F", items: ["Interrogated sources", "No \u2018I\u2019, past tense", "Command of archives", "Interpretive, narrative"] },
    { label: "Philosophy", color: "#1D1D1F", items: ["Logical argument", "\u2018I\u2019 encouraged", "Transparency of reasoning", "Deductive, precise"] },
    { label: "Psychology", color: "#C8102E", items: ["Empirical data only", "No quotes, distill", "Methodological rigor", "Hypothesis-driven"] },
    { label: "Analytics", color: "#B8860B", items: ["Causal identification", "Technical, \u2018we\u2019", "Statistical robustness", "Causal inference"] },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
        <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "12px", letterSpacing: "0.15em", color: "#D4AF37", textTransform: "uppercase" }}>
          Evolution
        </span>
        <GucciStripe />
      </div>
      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "24px", fontWeight: "400", color: "#1D1D1F", letterSpacing: "-0.02em", margin: "0 0 40px 0" }}>
        The Spectrum of Scholarly Rigor
      </h2>

      {/* Timeline */}
      <div style={{ position: "relative", padding: "0 20px" }}>
        <div style={{ position: "absolute", top: "6px", left: "20px", right: "20px", height: "1px", background: "linear-gradient(90deg, #006B3F, #1D1D1F, #C8102E, #B8860B)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {stages.map((s, i) => (
            <div key={i}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: s.color, border: "3px solid white", boxShadow: "0 0 0 1px " + s.color, position: "relative", zIndex: 1, marginBottom: "20px" }} />
              <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "14px", fontWeight: "400", color: s.color, marginBottom: "12px" }}>{s.label}</p>
              {s.items.map((item, j) => (
                <p key={j} style={{ fontFamily: "-apple-system, sans-serif", fontSize: "12px", color: "#636366", lineHeight: "1.6", margin: "0 0 4px 0" }}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "32px", padding: "0 20px" }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "11px", letterSpacing: "0.1em", color: "#AEAEB2", textTransform: "uppercase" }}>Interpretive</span>
        <div style={{ flex: 1, margin: "0 16px", height: "1px", background: "linear-gradient(90deg, #AEAEB2, transparent, #AEAEB2)" }} />
        <span style={{ fontFamily: "Georgia, serif", fontSize: "11px", letterSpacing: "0.1em", color: "#AEAEB2", textTransform: "uppercase" }}>Empirical</span>
      </div>
    </div>
  );
};

const CheatSheet = () => {
  const rules = [
    { tag: "Universal", color: "#D4AF37", rule: "Apply the hourglass: Broad \u2192 Narrow \u2192 Broad" },
    { tag: "Universal", color: "#D4AF37", rule: "Steel-man your counterargument \u2014 pick the strongest objection" },
    { tag: "EdPsych", color: "#C8102E", rule: "Evidence = data. No opinions, no direct quotes. Distill and cite." },
    { tag: "Advertising", color: "#006B3F", rule: "Bridge philosophy\u2019s logical rigor with psychology\u2019s empirical standards" },
    { tag: "Mkt Research", color: "#B8860B", rule: "Every causal claim needs an identification strategy and robustness checks" },
    { tag: "MA Thesis", color: "#1D1D1F", rule: "State your thesis as both a theoretical contribution AND a testable hypothesis" },
    { tag: "PhD App", color: "#6B5B3E", rule: "Writing sample should demonstrate cross-disciplinary fluency and intellectual maturity" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
        <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "12px", letterSpacing: "0.15em", color: "#D4AF37", textTransform: "uppercase" }}>
          Reference
        </span>
        <GucciStripe />
      </div>
      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "24px", fontWeight: "400", color: "#1D1D1F", letterSpacing: "-0.02em", margin: "0 0 32px 0" }}>
        Quick-Reference Cheat Sheet
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#F2F2F7", borderRadius: "12px", overflow: "hidden" }}>
        {rules.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", backgroundColor: "white" }}>
            <span
              style={{
                fontFamily: "-apple-system, sans-serif",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: r.color,
                minWidth: "80px",
                flexShrink: 0,
              }}
            >
              {r.tag}
            </span>
            <span style={{ fontFamily: "-apple-system, sans-serif", fontSize: "14px", color: "#1D1D1F", lineHeight: "1.5" }}>
              {r.rule}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ThemeMap() {
  const [activePattern, setActivePattern] = useState(PATTERNS[0].id);
  const [activeDiscipline, setActiveDiscipline] = useState(null);
  const [view, setView] = useState("explore");

  const currentPattern = PATTERNS.find((p) => p.id === activePattern);

  const navItems = [
    { id: "explore", label: "Explore" },
    { id: "evolution", label: "Evolution" },
    { id: "cheatsheet", label: "Reference" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid #F2F2F7",
          padding: "28px 40px 0 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
              <GucciStripe />
            </div>
            <h1
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "22px",
                fontWeight: "400",
                color: "#1D1D1F",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Cross-Disciplinary Theme Map
            </h1>
            <p
              style={{
                fontFamily: "-apple-system, sans-serif",
                fontSize: "12px",
                color: "#AEAEB2",
                marginTop: "4px",
                letterSpacing: "0.02em",
              }}
            >
              5 patterns across 6 Harvard documents
            </p>
          </div>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#D4AF37",
            }}
          >
            Bella Kang &middot; UT Austin MA &rarr; PhD
          </div>
        </div>

        {/* Tab Nav */}
        <div style={{ display: "flex", gap: "0" }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              style={{
                padding: "10px 20px",
                border: "none",
                borderBottom: view === item.id ? "2px solid #1D1D1F" : "2px solid transparent",
                backgroundColor: "transparent",
                cursor: "pointer",
                fontFamily: "-apple-system, sans-serif",
                fontSize: "13px",
                fontWeight: view === item.id ? "600" : "400",
                color: view === item.id ? "#1D1D1F" : "#AEAEB2",
                letterSpacing: "0.01em",
                transition: "all 0.2s ease",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {view === "explore" && (
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", minHeight: "calc(100vh - 120px)" }}>
          {/* Sidebar */}
          <div
            style={{
              borderRight: "1px solid #F2F2F7",
              backgroundColor: "#FAFAFA",
              paddingTop: "8px",
            }}
          >
            {PATTERNS.map((p) => (
              <PatternNav
                key={p.id}
                pattern={p}
                isActive={activePattern === p.id}
                onClick={() => {
                  setActivePattern(p.id);
                  setActiveDiscipline(null);
                }}
              />
            ))}

            {/* Gucci stripe at bottom of sidebar */}
            <div style={{ padding: "24px 20px" }}>
              <GoldLine />
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "10px",
                  color: "#AEAEB2",
                  fontStyle: "italic",
                  textAlign: "center",
                  marginTop: "12px",
                  lineHeight: "1.5",
                }}
              >
                Sources: Harvard Writing Center Guides<br />
                Berman & Israeli (2021)
              </p>
            </div>
          </div>

          {/* Main Panel */}
          <div style={{ overflow: "auto" }}>
            {currentPattern && (
              <DetailView
                pattern={currentPattern}
                activeDiscipline={activeDiscipline}
                setActiveDiscipline={setActiveDiscipline}
              />
            )}
          </div>
        </div>
      )}

      {view === "evolution" && <EvolutionView />}
      {view === "cheatsheet" && <CheatSheet />}
    </div>
  );
}
