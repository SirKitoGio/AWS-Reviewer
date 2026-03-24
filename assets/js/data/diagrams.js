export const SharedResponsibilityDiagram = `
  <svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
    <rect width="700" height="340" fill="#0D1117" rx="10"/>
    <text x="350" y="30" text-anchor="middle" fill="#FF9900" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">SHARED RESPONSIBILITY MODEL</text>
    
    <!-- Customer Section -->
    <rect x="20" y="50" width="320" height="260" rx="10" fill="#58A6FF10" stroke="#58A6FF" stroke-width="2"/>
    <text x="180" y="75" text-anchor="middle" fill="#58A6FF" font-size="12" font-weight="700" font-family="monospace">CUSTOMER: Security IN the Cloud</text>
    <line x1="40" y1="85" x2="320" y2="85" stroke="#58A6FF" stroke-width="1" opacity="0.3"/>
    ${["Customer Data & Encryption","IAM (Users, Groups, Roles)","OS Patching (EC2)","App Configuration","Network & Firewall Config","Client-side Data Protection"].map((t,i)=>`
      <g transform="translate(40, ${95+i*26})">
        <rect width="280" height="22" rx="4" fill="#58A6FF15"/>
        <text x="10" y="15" fill="#E6EDF3" font-size="11" font-family="monospace">● ${t}</text>
      </g>
    `).join('')}

    <!-- AWS Section -->
    <rect x="360" y="50" width="320" height="260" rx="10" fill="#FF990010" stroke="#FF9900" stroke-width="2"/>
    <text x="520" y="75" text-anchor="middle" fill="#FF9900" font-size="12" font-weight="700" font-family="monospace">AWS: Security OF the Cloud</text>
    <line x1="380" y1="85" x2="660" y2="85" stroke="#FF9900" stroke-width="1" opacity="0.3"/>
    ${["Physical Data Centers","Hardware / Global Network","Virtualization Layer","Managed Service Patching","Regional Infrastructure","Edge Locations"].map((t,i)=>`
      <g transform="translate(380, ${95+i*26})">
        <rect width="280" height="22" rx="4" fill="#FF990015"/>
        <text x="10" y="15" fill="#E6EDF3" font-size="11" font-family="monospace">● ${t}</text>
      </g>
    `).join('')}
    <text x="350" y="330" text-anchor="middle" fill="#8B949E" font-size="10" font-family="monospace">Shared responsibility varies by service (IaaS vs PaaS vs SaaS)</text>
  </svg>
`;

export const WellArchitecturedDiagram = `
  <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
    <rect width="700" height="240" fill="#0D1117" rx="10"/>
    <text x="350" y="30" text-anchor="middle" fill="#FF9900" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">6 PILLARS OF WELL-ARCHITECTED</text>
    
    ${[{label:"Operational",sub:"Excellence",color:"#FF9900",icon:"⚙"},{label:"Security",sub:"",color:"#F85149",icon:"🔒"},{label:"Reliability",sub:"",color:"#3FB950",icon:"✓"},{label:"Performance",sub:"Efficiency",color:"#58A6FF",icon:"⚡"},{label:"Cost",sub:"Optimization",color:"#BC8CFF",icon:"$"},{label:"Sustainability",sub:"",color:"#39D353",icon:"🌱"}].map((p,i)=>{
      const x=20+i*112;
      return (`
        <g transform="translate(${x}, 50)">
          <rect width="100" height="150" rx="8" fill="${p.color}10" stroke="${p.color}" stroke-width="1.5"/>
          <text x="50" y="40" text-anchor="middle" font-size="28">${p.icon}</text>
          <text x="50" y="75" text-anchor="middle" fill="${p.color}" font-size="11" font-weight="700" font-family="monospace">${p.label}</text>
          <text x="50" y="90" text-anchor="middle" fill="${p.color}" font-size="11" font-weight="700" font-family="monospace">${p.sub}</text>
          <rect x="20" y="105" width="60" height="2" rx="1" fill="${p.color}" opacity="0.3"/>
        </g>
      `);
    }).join('')}
    <text x="350" y="225" text-anchor="middle" fill="#8B949E" font-size="10" font-family="monospace">A consistent set of best practices for cloud architects</text>
  </svg>
`;

export const CAFDiagram = `
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
    <rect width="700" height="260" fill="#0D1117" rx="10"/>
    <text x="350" y="30" text-anchor="middle" fill="#FF9900" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">CLOUD ADOPTION FRAMEWORK (CAF) 3.0</text>
    
    ${[{name:"Business",icon:"💼",color:"#FF9900",desc:"Strategy & Value"},{name:"People",icon:"👥",color:"#58A6FF",desc:"Culture & Skills"},{name:"Governance",icon:"⚖️",color:"#3FB950",desc:"Risk & Compliance"},{name:"Platform",icon:"🏗️",color:"#BC8CFF",desc:"Infrastructure"},{name:"Security",icon:"🔐",color:"#F85149",desc:"Data Protection"},{name:"Operations",icon:"⚙️",color:"#39D353",desc:"Health & Monitoring"}].map((p,i)=>{
      const col=i%3, row=Math.floor(i/3), x=35+col*220, y=55+row*85;
      return(`
        <g transform="translate(${x}, ${y})">
          <rect width="200" height="70" rx="8" fill="${p.color}10" stroke="${p.color}" stroke-width="1.5"/>
          <text x="15" y="30" font-size="20">${p.icon}</text>
          <text x="45" y="28" fill="${p.color}" font-size="13" font-weight="700" font-family="monospace">${p.name}</text>
          <text x="15" y="52" fill="#8B949E" font-size="11" font-family="monospace">${p.desc}</text>
        </g>
      `)}).join('')}
    
    <text x="350" y="245" text-anchor="middle" fill="#FF9900" font-size="11" font-weight="700" font-family="monospace">Envision → Align → Launch → Scale</text>
  </svg>
`;

export const GlobalInfrastructureDiagram = `
  <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
    <rect width="700" height="300" fill="#0D1117" rx="10"/>
    <text x="350" y="30" text-anchor="middle" fill="#FF9900" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">GLOBAL INFRASTRUCTURE HIERARCHY</text>
    
    <rect x="50" y="50" width="600" height="210" rx="12" fill="#FF990005" stroke="#FF9900" stroke-width="2" stroke-dasharray="6,4"/>
    <text x="350" y="72" text-anchor="middle" fill="#FF9900" font-size="13" font-weight="700" font-family="monospace">REGION (e.g., us-east-1)</text>

    <!-- AZ 1 -->
    <rect x="80" y="90" width="250" height="150" rx="10" fill="#58A6FF10" stroke="#58A6FF" stroke-width="1.5"/>
    <text x="205" y="110" text-anchor="middle" fill="#58A6FF" font-size="11" font-weight="700" font-family="monospace">Availability Zone A</text>
    <rect x="100" y="125" width="210" height="45" rx="6" fill="#161B22" stroke="#58A6FF40"/>
    <text x="205" y="145" text-anchor="middle" fill="#E6EDF3" font-size="10" font-family="monospace">🏢 Data Center 1</text>
    <rect x="100" y="180" width="210" height="45" rx="6" fill="#161B22" stroke="#58A6FF40"/>
    <text x="205" y="200" text-anchor="middle" fill="#E6EDF3" font-size="10" font-family="monospace">🏢 Data Center 2</text>

    <!-- AZ 2 -->
    <rect x="370" y="90" width="250" height="150" rx="10" fill="#3FB95010" stroke="#3FB950" stroke-width="1.5"/>
    <text x="495" y="110" text-anchor="middle" fill="#3FB950" font-size="11" font-weight="700" font-family="monospace">Availability Zone B</text>
    <rect x="390" y="125" width="210" height="45" rx="6" fill="#161B22" stroke="#3FB95040"/>
    <text x="495" y="145" text-anchor="middle" fill="#E6EDF3" font-size="10" font-family="monospace">🏢 Data Center 3</text>
    <rect x="390" y="180" width="210" height="45" rx="6" fill="#161B22" stroke="#3FB95040"/>
    <text x="495" y="200" text-anchor="middle" fill="#E6EDF3" font-size="10" font-family="monospace">🏢 Data Center 4</text>

    <text x="350" y="285" text-anchor="middle" fill="#BC8CFF" font-size="11" font-family="monospace">📡 +450 Edge Locations for Content Delivery (CDN)</text>
  </svg>
`;

export const S3StorageClassesDiagram = `
  <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
    <rect width="700" height="300" fill="#0D1117" rx="10"/>
    <text x="350" y="30" text-anchor="middle" fill="#FF9900" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">S3 STORAGE CLASSES</text>
    
    ${[{name:"S3 Standard",use:"Frequent Access",color:"#FF9900",cost:"$$$"},{name:"S3 Intelligent-Tiering",use:"Unknown Pattern",color:"#58A6FF",cost:"$$"},{name:"S3 Standard-IA",use:"Infrequent",color:"#3FB950",cost:"$"},{name:"S3 One Zone-IA",use:"Non-critical IA",color:"#BC8CFF",cost:"$"},{name:"S3 Glacier Instant",use:"Archive (ms)",color:"#F85149",cost:"0.01$"},{name:"S3 Glacier Flexible",use:"Archive (min/hr)",color:"#39D353",cost:"0.005$"},{name:"S3 Glacier Deep Archive",use:"Archive (12hr+)",color:"#8B949E",cost:"0.001$"}].map((c,i)=>{
      const y=50+i*34;
      return(`
        <g transform="translate(50, ${y})">
          <rect width="600" height="28" rx="6" fill="${c.color}15" stroke="${c.color}" stroke-width="1"/>
          <text x="15" y="18" fill="${c.color}" font-size="11" font-weight="700" font-family="monospace">${c.name}</text>
          <text x="300" y="18" text-anchor="middle" fill="#E6EDF3" font-size="10" font-family="monospace">${c.use}</text>
          <text x="585" y="18" text-anchor="end" fill="${c.color}" font-size="10" font-weight="700" font-family="monospace">${c.cost}</text>
        </g>
      `)})}
    <text x="350" y="290" text-anchor="middle" fill="#8B949E" font-size="10" font-family="monospace">Availability: 99.9% - 99.99% | Durability: 11 Nines (99.999999999%)</text>
  </svg>
`;

export const PricingModelsDiagram = `
  <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
    <rect width="700" height="280" fill="#0D1117" rx="10"/>
    <text x="350" y="30" text-anchor="middle" fill="#FF9900" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">EC2 PRICING MODELS</text>
    
    ${["MODEL","SAVINGS","USE CASE"].map((h,i)=>`<text x="${[40,220,400][i]}" y="60" fill="#8B949E" font-size="11" font-weight="700" font-family="monospace">${h}</text>`).join('')}
    <line x1="30" y1="70" x2="670" y2="70" stroke="#21262D" stroke-width="1"/>

    ${[{name:"On-Demand",sav:"None",use:"Short-term, Unpredictable",color:"#58A6FF"},{name:"Savings Plans",sav:"66%",use:"Flexible Compute spend",color:"#3FB950"},{name:"Reserved Instances",sav:"72%",use:"Steady-state, 1-3 years",color:"#FF9900"},{name:"Spot Instances",sav:"90%",use:"Fault-tolerant, Batch",color:"#BC8CFF"},{name:"Dedicated Hosts",sav:"BYOL",use:"Compliance, Licenses",color:"#F85149"}].map((m,i)=>{
      const y=80+i*38;
      return(`
        <g transform="translate(30, ${y})">
          <rect width="640" height="32" rx="6" fill="${m.color}10"/>
          <rect width="4" height="32" rx="2" fill="${m.color}"/>
          <text x="15" y="20" fill="${m.color}" font-size="12" font-weight="700" font-family="monospace">${m.name}</text>
          <text x="190" y="20" fill="#3FB950" font-size="12" font-weight="700" font-family="monospace">${m.sav}</text>
          <text x="370" y="20" fill="#E6EDF3" font-size="11" font-family="monospace">${m.use}</text>
        </g>
      `)})}
  </svg>
`;

export const IAMDiagram = `
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
    <rect width="700" height="260" fill="#0D1117" rx="10"/>
    <text x="350" y="30" text-anchor="middle" fill="#FF9900" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">IAM ENTITY RELATIONSHIPS</text>
    
    <!-- Policy at Top -->
    <g transform="translate(250, 50)">
      <rect width="200" height="60" rx="10" fill="#FF990020" stroke="#FF9900" stroke-width="2"/>
      <text x="100" y="28" text-anchor="middle" font-size="22">📄</text>
      <text x="100" y="50" text-anchor="middle" fill="#FF9900" font-size="13" font-weight="700" font-family="monospace">POLICY (JSON)</text>
    </g>

    <!-- Connectors -->
    <path d="M350 110 L150 160 M350 110 L350 160 M350 110 L550 160" stroke="#FF990040" stroke-width="2" fill="none" stroke-dasharray="5,3"/>

    <!-- Entities -->
    ${[[80,160,"#58A6FF","👤 USER","Individual identity"],[280,160,"#3FB950","👥 GROUP","Collection of users"],[480,160,"#BC8CFF","🎭 ROLE","Service / Temporary"]].map(([x,y,color,label,sub])=>`
      <g transform="translate(${x}, ${y})">
        <rect width="140" height="60" rx="10" fill="${color}15" stroke="${color}" stroke-width="2"/>
        <text x="70" y="30" text-anchor="middle" fill="${color}" font-size="13" font-weight="700" font-family="monospace">${label}</text>
        <text x="70" y="48" text-anchor="middle" fill="#8B949E" font-size="10" font-family="monospace">${sub}</text>
      </g>
    `).join('')}
    
    <text x="350" y="245" text-anchor="middle" fill="#8B949E" font-size="10" font-family="monospace">Principle of Least Privilege: Grant ONLY necessary permissions.</text>
  </svg>
`;

export const SupportPlansDiagram = `
  <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:10px">
    <rect width="700" height="240" fill="#0D1117" rx="10"/>
    <text x="350" y="30" text-anchor="middle" fill="#FF9900" font-size="14" font-weight="700" font-family="monospace" letter-spacing="2">AWS SUPPORT PLANS</text>
    
    ${["PLAN","PRICE","RESPONSE","TAM"].map((h,i)=>`<text x="${[30,160,330,550][i]}" y="60" fill="#8B949E" font-size="11" font-weight="700" font-family="monospace">${h}</text>`).join('')}
    <line x1="20" y1="70" x2="680" y2="70" stroke="#21262D" stroke-width="1"/>

    ${[{name:"Basic",price:"Free",resp:"N/A",tam:"No",color:"#8B949E"},{name:"Developer",price:"$29/mo",resp:"12-24h",tam:"No",color:"#3FB950"},{name:"Business",price:"$100/mo",resp:"< 1h (⚡)",tam:"No",color:"#FF9900"},{name:"Enterprise",price:"$15k/mo",resp:"< 15m (🚀)",tam:"YES",color:"#58A6FF"}].map((p,i)=>{
      const y=80+i*38;
      return(`
        <g transform="translate(20, ${y})">
          <rect width="660" height="32" rx="6" fill="${p.color}10"/>
          <text x="10" y="21" fill="${p.color}" font-size="13" font-weight="700" font-family="monospace">${p.name}</text>
          <text x="140" y="21" fill="#E6EDF3" font-size="11" font-family="monospace">${p.price}</text>
          <text x="310" y="21" fill="${i>=2?"#3FB950":"#8B949E"}" font-size="11" font-family="monospace">${p.resp}</text>
          <text x="530" y="21" fill="${i===3?"#58A6FF":"#8B949E"}" font-size="11" font-weight="${i===3?700:400}" font-family="monospace">${p.tam}</text>
        </g>
      `)})}
  </svg>
`;
