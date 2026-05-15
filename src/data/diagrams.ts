const COLORS = {
  BG: "#FAF9F6",
  CARD: "#FFFFFF",
  BORDER: "#E0DDD6",
  PRIMARY: "#768A76",
  ACCENT: "#B8905B",
  TEXT: "#2D3531",
  MUTED: "#79837D",
  LIGHT_GREEN: "#F0F4F0",
  LIGHT_BROWN: "#F7F3EE"
};

export const SharedResponsibilityDiagram = `
<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
  <rect width="700" height="340" fill="${COLORS.BG}" rx="10"/>
  <text x="350" y="30" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">SHARED RESPONSIBILITY MODEL</text>
  
  <rect x="20" y="50" width="320" height="260" rx="10" fill="${COLORS.LIGHT_BROWN}" stroke="${COLORS.ACCENT}" stroke-width="1.5"/>
  <text x="180" y="75" text-anchor="middle" fill="${COLORS.ACCENT}" font-size="12" font-weight="700" font-family="monospace">CUSTOMER: Security IN the Cloud</text>
  <line x1="40" y1="85" x2="320" y2="85" stroke="${COLORS.BORDER}" stroke-width="1"/>
  ${["Customer Data & Encryption", "IAM (Users, Groups, Roles)", "OS Patching (EC2)", "App Configuration", "Network & Firewall Config", "Client-side Data Protection"].map((t, i) => `
    <g transform="translate(40, ${95 + i * 26})">
      <rect width="280" height="22" rx="4" fill="${COLORS.CARD}" opacity="0.6"/>
      <text x="10" y="15" fill="${COLORS.TEXT}" font-size="11" font-family="monospace">● ${t}</text>
    </g>
  `).join('')}

  <rect x="360" y="50" width="320" height="260" rx="10" fill="${COLORS.LIGHT_GREEN}" stroke="${COLORS.PRIMARY}" stroke-width="1.5"/>
  <text x="520" y="75" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="12" font-weight="700" font-family="monospace">AWS: Security OF the Cloud</text>
  <line x1="380" y1="85" x2="660" y2="85" stroke="${COLORS.BORDER}" stroke-width="1"/>
  ${["Physical Data Centers", "Hardware / Global Network", "Virtualization Layer", "Managed Service Patching", "Regional Infrastructure", "Edge Locations"].map((t, i) => `
    <g transform="translate(380, ${95 + i * 26})">
      <rect width="280" height="22" rx="4" fill="${COLORS.CARD}" opacity="0.6"/>
      <text x="10" y="15" fill="${COLORS.TEXT}" font-size="11" font-family="monospace">● ${t}</text>
    </g>
  `).join('')}
  <text x="350" y="330" text-anchor="middle" fill="${COLORS.MUTED}" font-size="10" font-family="monospace">Shared responsibility varies by service (IaaS vs PaaS vs SaaS)</text>
</svg>
`;

export const WellArchitecturedDiagram = `
<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
  <rect width="700" height="240" fill="${COLORS.BG}" rx="10"/>
  <text x="350" y="30" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">6 PILLARS OF WELL-ARCHITECTED</text>
  
  ${[{ label: "Operational", sub: "Excellence", icon: "⚙" }, { label: "Security", sub: "", icon: "🔒" }, { label: "Reliability", sub: "", icon: "✓" }, { label: "Performance", sub: "Efficiency", icon: "⚡" }, { label: "Cost", sub: "Optimization", icon: "$" }, { label: "Sustainability", sub: "", icon: "🌱" }].map((p, i) => {
    const x = 20 + i * 112;
    return (`
      <g transform="translate(${x}, 50)">
        <rect width="100" height="150" rx="8" fill="${COLORS.CARD}" stroke="${COLORS.PRIMARY}" stroke-width="1"/>
        <text x="50" y="40" text-anchor="middle" font-size="28">${p.icon}</text>
        <text x="50" y="75" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="11" font-weight="700" font-family="monospace">${p.label}</text>
        <text x="50" y="90" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="11" font-weight="700" font-family="monospace">${p.sub}</text>
        <rect x="20" y="105" width="60" height="2" rx="1" fill="${COLORS.ACCENT}" opacity="0.3"/>
      </g>
    `);
  }).join('')}
  <text x="350" y="225" text-anchor="middle" fill="${COLORS.MUTED}" font-size="10" font-family="monospace">A consistent set of best practices for cloud architects</text>
</svg>
`;

export const CAFDiagram = `
<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
  <rect width="700" height="260" fill="${COLORS.BG}" rx="10"/>
  <text x="350" y="30" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">CLOUD ADOPTION FRAMEWORK (CAF) 3.0</text>
  
  ${[{ name: "Business", icon: "💼", desc: "Strategy & Value" }, { name: "People", icon: "👥", desc: "Culture & Skills" }, { name: "Governance", icon: "⚖️", desc: "Risk & Compliance" }, { name: "Platform", icon: "🏗️", desc: "Infrastructure" }, { name: "Security", icon: "🔐", desc: "Data Protection" }, { name: "Operations", icon: "⚙️", desc: "Health & Monitoring" }].map((p, i) => {
    const col = i % 3, row = Math.floor(i / 3), x = 35 + col * 220, y = 55 + row * 85;
    return (`
      <g transform="translate(${x}, ${y})">
        <rect width="200" height="70" rx="8" fill="${COLORS.CARD}" stroke="${COLORS.PRIMARY}" stroke-width="1"/>
        <text x="15" y="30" font-size="20">${p.icon}</text>
        <text x="45" y="28" fill="${COLORS.PRIMARY}" font-size="13" font-weight="700" font-family="monospace">${p.name}</text>
        <text x="15" y="52" fill="${COLORS.MUTED}" font-size="11" font-family="monospace">${p.desc}</text>
      </g>
    `)}).join('')}
  
  <text x="350" y="245" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="11" font-weight="700" font-family="monospace">Envision → Align → Launch → Scale</text>
</svg>
`;

export const GlobalInfrastructureDiagram = `
<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
  <rect width="700" height="300" fill="${COLORS.BG}" rx="10"/>
  <text x="350" y="30" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">GLOBAL INFRASTRUCTURE HIERARCHY</text>
  
  <rect x="50" y="50" width="600" height="210" rx="12" fill="${COLORS.CARD}" stroke="${COLORS.BORDER}" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="350" y="72" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="13" font-weight="700" font-family="monospace">REGION (e.g., us-east-1)</text>

  <!-- AZ 1 -->
  <rect x="80" y="90" width="250" height="150" rx="10" fill="${COLORS.LIGHT_GREEN}" stroke="${COLORS.PRIMARY}" stroke-width="1"/>
  <text x="205" y="110" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="11" font-weight="700" font-family="monospace">Availability Zone A</text>
  <rect x="100" y="125" width="210" height="45" rx="6" fill="${COLORS.CARD}" stroke="${COLORS.BORDER}"/>
  <text x="205" y="145" text-anchor="middle" fill="${COLORS.TEXT}" font-size="10" font-family="monospace">🏢 Data Center 1</text>
  <rect x="100" y="180" width="210" height="45" rx="6" fill="${COLORS.CARD}" stroke="${COLORS.BORDER}"/>
  <text x="205" y="200" text-anchor="middle" fill="${COLORS.TEXT}" font-size="10" font-family="monospace">🏢 Data Center 2</text>

  <!-- AZ 2 -->
  <rect x="370" y="90" width="250" height="150" rx="10" fill="${COLORS.LIGHT_BROWN}" stroke="${COLORS.ACCENT}" stroke-width="1"/>
  <text x="495" y="110" text-anchor="middle" fill="${COLORS.ACCENT}" font-size="11" font-weight="700" font-family="monospace">Availability Zone B</text>
  <rect x="390" y="125" width="210" height="45" rx="6" fill="${COLORS.CARD}" stroke="${COLORS.BORDER}"/>
  <text x="495" y="145" text-anchor="middle" fill="${COLORS.TEXT}" font-size="10" font-family="monospace">🏢 Data Center 3</text>
  <rect x="390" y="180" width="210" height="45" rx="6" fill="${COLORS.CARD}" stroke="${COLORS.BORDER}"/>
  <text x="495" y="200" text-anchor="middle" fill="${COLORS.TEXT}" font-size="10" font-family="monospace">🏢 Data Center 4</text>

  <text x="350" y="285" text-anchor="middle" fill="${COLORS.ACCENT}" font-size="11" font-family="monospace">📡 +450 Edge Locations for Content Delivery (CDN)</text>
</svg>
`;

export const S3StorageClassesDiagram = `
<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
  <rect width="700" height="300" fill="${COLORS.BG}" rx="10"/>
  <text x="350" y="30" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">S3 STORAGE CLASSES</text>
  
  ${[{ name: "S3 Standard", use: "Frequent Access", cost: "$$$" }, { name: "S3 Intelligent-Tiering", use: "Unknown Pattern", cost: "$$" }, { name: "S3 Standard-IA", use: "Infrequent", cost: "$" }, { name: "S3 One Zone-IA", use: "Non-critical IA", cost: "$" }, { name: "S3 Glacier Instant", use: "Archive (ms)", cost: "0.01$" }, { name: "S3 Glacier Flexible", use: "Archive (min/hr)", cost: "0.005$" }, { name: "S3 Glacier Deep Archive", use: "Archive (12hr+)", cost: "0.001$" }].map((c, i) => {
    const y = 50 + i * 34;
    return (`
      <g transform="translate(50, ${y})">
        <rect width="600" height="28" rx="6" fill="${COLORS.CARD}" stroke="${COLORS.BORDER}" stroke-width="1"/>
        <text x="15" y="18" fill="${COLORS.PRIMARY}" font-size="11" font-weight="700" font-family="monospace">${c.name}</text>
        <text x="300" y="18" text-anchor="middle" fill="${COLORS.TEXT}" font-size="10" font-family="monospace">${c.use}</text>
        <text x="585" y="18" text-anchor="end" fill="${COLORS.ACCENT}" font-size="10" font-weight="700" font-family="monospace">${c.cost}</text>
      </g>
    `)
  })}
  <text x="350" y="290" text-anchor="middle" fill="${COLORS.MUTED}" font-size="10" font-family="monospace">Availability: 99.9% - 99.99% | Durability: 11 Nines (99.999999999%)</text>
</svg>
`;

export const PricingModelsDiagram = `
<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
  <rect width="700" height="280" fill="${COLORS.BG}" rx="10"/>
  <text x="350" y="30" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">EC2 PRICING MODELS</text>
  
  ${["MODEL", "SAVINGS", "USE CASE"].map((h, i) => `<text x="${[40, 220, 400][i]}" y="60" fill="${COLORS.MUTED}" font-size="11" font-weight="700" font-family="monospace">${h}</text>`).join('')}
  <line x1="30" y1="70" x2="670" y2="70" stroke="${COLORS.BORDER}" stroke-width="1"/>

  ${[{ name: "On-Demand", sav: "None", use: "Short-term, Unpredictable" }, { name: "Savings Plans", sav: "66%", use: "Flexible Compute spend" }, { name: "Reserved Instances", sav: "72%", use: "Steady-state, 1-3 years" }, { name: "Spot Instances", sav: "90%", use: "Fault-tolerant, Batch" }, { name: "Dedicated Hosts", sav: "BYOL", use: "Compliance, Licenses" }].map((m, i) => {
    const y = 80 + i * 38;
    return (`
      <g transform="translate(30, ${y})">
        <rect width="640" height="32" rx="6" fill="${COLORS.CARD}" stroke="${COLORS.BORDER}" stroke-width="1"/>
        <rect width="4" height="32" rx="2" fill="${COLORS.PRIMARY}"/>
        <text x="15" y="20" fill="${COLORS.PRIMARY}" font-size="12" font-weight="700" font-family="monospace">${m.name}</text>
        <text x="190" y="20" fill="${COLORS.ACCENT}" font-size="12" font-weight="700" font-family="monospace">${m.sav}</text>
        <text x="370" y="20" fill="${COLORS.TEXT}" font-size="11" font-family="monospace">${m.use}</text>
      </g>
    `)
  })}
</svg>
`;

export const IAMDiagram = `
<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
  <rect width="700" height="260" fill="${COLORS.BG}" rx="10"/>
  <text x="350" y="30" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">IAM ENTITY RELATIONSHIPS</text>
  
  <!-- Policy at Top -->
  <g transform="translate(250, 50)">
    <rect width="200" height="60" rx="10" fill="${COLORS.CARD}" stroke="${COLORS.PRIMARY}" stroke-width="2"/>
    <text x="100" y="28" text-anchor="middle" font-size="22">📄</text>
    <text x="100" y="50" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="13" font-weight="700" font-family="monospace">POLICY (JSON)</text>
  </g>

  <!-- Connectors -->
  <path d="M350 110 L150 160 M350 110 L350 160 M350 110 L550 160" stroke="${COLORS.BORDER}" stroke-width="2" fill="none" stroke-dasharray="5,3"/>

  <!-- Entities -->
  ${[[80, 160, "👤 USER", "Individual identity"], [280, 160, "👥 GROUP", "Collection of users"], [480, 160, "🎭 ROLE", "Service / Temporary"]].map(([x, y, label, sub]) => `
    <g transform="translate(${x}, ${y})">
      <rect width="140" height="60" rx="10" fill="${COLORS.CARD}" stroke="${COLORS.ACCENT}" stroke-width="1.5"/>
      <text x="70" y="30" text-anchor="middle" fill="${COLORS.ACCENT}" font-size="13" font-weight="700" font-family="monospace">${label}</text>
      <text x="70" y="48" text-anchor="middle" fill="${COLORS.MUTED}" font-size="10" font-family="monospace">${sub}</text>
    </g>
  `).join('')}
  
  <text x="350" y="245" text-anchor="middle" fill="${COLORS.MUTED}" font-size="10" font-family="monospace">Principle of Least Privilege: Grant ONLY necessary permissions.</text>
</svg>
`;

export const ComputeModelsDiagram = `
<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
  <rect width="700" height="280" fill="${COLORS.BG}" rx="10"/>
  <text x="350" y="30" text-anchor="middle" fill="${COLORS.PRIMARY}" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">COMPUTE ABSTRACTION MODELS</text>
  
  <!-- Arrows/Lines -->
  <path d="M350 60 L350 80 M350 80 L120 80 L120 110 M350 80 L350 110 M350 80 L580 80 L580 110" stroke="${COLORS.BORDER}" stroke-width="2" fill="none"/>

  ${[{ x: 20, y: 110, title: "VIRTUAL SERVERS", type: "IaaS", service: "Amazon EC2", icon: "💻", desc: "Full OS Control", color: COLORS.PRIMARY },
  { x: 250, y: 110, title: "CONTAINERS", type: "CaaS", service: "ECS / EKS / Fargate", icon: "📦", desc: "App Packaging", color: COLORS.ACCENT },
  { x: 480, y: 110, title: "SERVERLESS", type: "FaaS", service: "AWS Lambda", icon: "⚡", desc: "Code Only", color: COLORS.PRIMARY }].map(m => `
    <g transform="translate(${m.x}, ${m.y})">
      <rect width="200" height="130" rx="12" fill="${COLORS.CARD}" stroke="${m.color}" stroke-width="1.5"/>
      <text x="100" y="35" text-anchor="middle" font-size="24">${m.icon}</text>
      <text x="100" y="65" text-anchor="middle" fill="${m.color}" font-size="12" font-weight="700" font-family="monospace">${m.title}</text>
      <text x="100" y="82" text-anchor="middle" fill="${COLORS.MUTED}" font-size="10" font-family="monospace">(${m.type})</text>
      <rect x="20" y="92" width="160" height="24" rx="4" fill="${COLORS.BG}"/>
      <text x="100" y="108" text-anchor="middle" fill="${COLORS.TEXT}" font-size="11" font-weight="700" font-family="monospace">${m.service}</text>
    </g>
  `).join('')}
</svg>
`;
