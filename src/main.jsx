
import React,{useState} from 'react'
import {createRoot} from 'react-dom/client'
import {
  Activity, ArrowRight, ArrowUpRight, Award, BadgeCheck, BarChart3, Boxes, CheckCircle2,
  ChevronRight, CircleDot, Code2, Database, Download, ExternalLink,
  Gauge, GitBranch, Layers3, Link2, Network, Play, Search, Server,
  Settings, ShieldCheck, Sparkles, Target, Users, Workflow, Zap
} from 'lucide-react'
import './styles.css'

const linkedin='https://www.linkedin.com/in/lohith-a-s/'

const capabilityGroups=[
 {title:'DATA ENGINEERING & FABRIC',icon:Workflow,accent:'cyan',items:['Microsoft Fabric','Dataflows Gen2','Pipelines','Lakehouse','Warehouse','Data Integration','Incremental Processing','Data Engineering']},
 {title:'DATA WAREHOUSING',icon:Server,accent:'purple',items:['ETL / ELT','Data Warehousing','Star Schema','Fact & Dimension Design','Source-to-Target Mapping','Data Quality','Data Validation','Analytical Structures']},
 {title:'DATA & DATABASES',icon:Database,accent:'mint',items:['Oracle SQL','PostgreSQL','MS SQL','MongoDB','Dimensional Modeling','Query Optimization','Performance Tuning','Data Validation']},
 {title:'ANALYTICS ENGINEERING',icon:Layers3,accent:'purple',items:['Semantic Models','DAX','Power Query (M)','Calculation Groups','Aggregations','Incremental Refresh','Reusable Measures','KPI Logic']},
 {title:'BUSINESS INTELLIGENCE',icon:BarChart3,accent:'gold',items:['Power BI','Dashboard Design','Data Visualization','Executive Reporting','Operational Analytics','KPI Design','Decision Support','Storytelling']},
 {title:'AUTOMATION & LOW CODE',icon:Zap,accent:'orange',items:['Power Apps','Power Automate','Python','Playwright','Workflow Automation','Approval Flows','Testing Automation','Release Automation']},
 {title:'OBSERVABILITY & GOVERNANCE',icon:Activity,accent:'mint',items:['Grafana','Prometheus','Splunk','ServiceNow','Jira','ITSM Analytics','Data Governance','REST APIs']}
]

const tools=[
 ['Power BI','bi'],['Microsoft Fabric','fabric'],['SQL','sql'],['DAX','dax'],['Power Query','pq'],
 ['Power Apps','apps'],['Power Automate','flow'],['Python','python'],['Grafana','grafana'],['Prometheus','prom'],
 ['Splunk','splunk'],['ServiceNow','snow'],['Jira','jira'],['SharePoint','share'],['Confluence','conf']
]

// Add future credentials here: place the badge in /public/certifications and add one object with its badge path.
const certifications=[
 {id:'dp203',code:'DP-203',title:'Azure Data Engineer Associate',issuer:'Microsoft',type:'CERTIFICATION',family:'DATA ENGINEERING',accent:'cyan',badge:'/certifications/microsoft-certified-associate-badge.svg',summary:'Data engineering credential focused on designing and implementing data solutions across Azure.',topics:['Azure data services','Data integration','Data transformation','Data pipelines']},
 {id:'az900',code:'AZ-900',title:'Azure Fundamentals',issuer:'Microsoft',type:'CERTIFICATION',family:'CLOUD FUNDAMENTALS',accent:'blue',badge:'/certifications/microsoft-certified-fundamentals-badge.svg',summary:'Foundational Azure credential covering cloud concepts, core Azure services, security, governance and pricing.',topics:['Cloud concepts','Azure architecture','Security & governance','Azure services']},
 {id:'ai900',code:'AI-900',title:'Azure AI Fundamentals',issuer:'Microsoft',type:'CERTIFICATION',family:'AI FUNDAMENTALS',accent:'purple',badge:'/certifications/microsoft-certified-fundamentals-badge.svg',summary:'Foundational AI credential covering common AI workloads and core machine learning concepts on Azure.',topics:['AI workloads','Machine learning','Computer vision','Natural language']},
 {id:'dp600',code:'DP-600',title:'Fabric Analytics Engineer Associate',issuer:'Microsoft',type:'CERTIFICATION',family:'ANALYTICS & FABRIC',accent:'mint',badge:'/certifications/microsoft-certified-associate-badge.svg',summary:'Analytics engineering credential aligned with Microsoft Fabric, semantic models and enterprise-scale analytics.',topics:['Microsoft Fabric','Semantic models','Analytics','Power BI']},
 {id:'gcp-genai',code:'GCP GEN AI',title:'Generative AI',issuer:'Google Cloud',type:'SKILL BADGE',family:'GENERATIVE AI',accent:'orange',badge:'/certifications/gcp-generative-ai-leader.png',summary:'Google Cloud skill badge demonstrating foundational understanding of generative AI concepts and applications.',topics:['Generative AI','LLMs','AI applications','Responsible AI']},
 {id:'gcp-leader',code:'GCP CLOUD LEADER',title:'Cloud Digital Leader',issuer:'Google Cloud',type:'CERTIFICATION',family:'CLOUD LEADERSHIP',accent:'gold',badge:'/certifications/gcp-cloud-digital-leader.png',summary:'Cloud credential covering cloud transformation, data and AI, infrastructure, security and business value.',topics:['Cloud strategy','Data & AI','Infrastructure','Business value']}
]

const modelTables={
 Fact_Incidents:{type:'FACT',grain:'One incident record',fields:['incident_id','created_date','resolved_date','closed_date','team_key','priority_key'],logic:['Total Incidents','P1 Incidents','SLA Compliance %','MTTR']},
 Dim_Date:{type:'DIM',grain:'One calendar date',fields:['date_key','date','year','quarter','month','week'],logic:['Created Date Analysis','Resolved Date Analysis']},
 Dim_Team:{type:'DIM',grain:'One team',fields:['team_key','team_name','organization','region'],logic:['Team Incident Count','Team SLA %']},
 Dim_Priority:{type:'DIM',grain:'One priority',fields:['priority_key','priority','severity_order'],logic:['P1 Incidents','Priority Mix %']},
 Dim_Service:{type:'DIM',grain:'One service',fields:['service_key','service_name','service_group'],logic:['Service Incident Count','Service MTTR']}
}

const underHood=[
 ['Query Folding','Optimize performance by delegating compatible transformations to the data source.',Code2],
 ['VertiPaq Engine','In-memory columnar storage makes compression and cardinality important.',Database],
 ['Incremental Refresh','Process only new or changed data instead of refreshing everything.',Zap],
 ['Performance Analyzer','Identify visual, DAX and rendering bottlenecks before optimizing.',Gauge],
 ['Calculation Groups','Centralize reusable calculation logic and time-intelligence patterns.',Layers3],
 ['Aggregation Tables','Use pre-aggregated data for common high-volume query patterns.',Boxes]
]

function App(){
 const [selectedTable,setSelectedTable]=useState('Fact_Incidents')
 const [videoOpen,setVideoOpen]=useState(false)
 const [selectedCert,setSelectedCert]=useState(certifications[0])
 const [certFilter,setCertFilter]=useState('ALL')
 return <div className="app">
  <div className="grid-bg"/>
  <header className="nav">
   <a className="brand" href="#home"><span className="name-text">LOHITH&nbsp;&nbsp;A&nbsp;&nbsp;S</span><span>.</span><small>DATA ENGINEERING · ANALYTICS · BI</small></a>
   <nav>
    <a className="active" href="#home">Home</a><a href="#work">Work</a><a href="#stack">Stack</a><a href="#certifications">Certifications</a>
    <a href="#architecture">Architecture</a><a href="#model">Model</a><a href="#powerbi">Power BI</a>
    <a href="#experience">Experience</a><a href="#contact">Contact</a>
   </nav>
   <a className="linkedin" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a>
  </header>

  <main id="home">
   <section className="hero shell">
    <div className="hero-copy">
      <div className="availability"><span/> AVAILABLE FOR DATA ENGINEERING / ANALYTICS ENGINEERING / BI OPPORTUNITIES</div>
      <h1>Data & Analytics Engineer<br/><em>focused on building the systems behind</em><br/><strong>reliable decisions.</strong></h1>
      <p>I build data pipelines, analytical models and decision-ready platforms across <b>Microsoft Fabric, Azure, SQL, Python and Power BI</b> — from ingestion and transformation through warehousing, semantic modeling and analytics.</p>
      <div className="hero-actions"><a className="primary" href="#work">Explore My Work <ArrowRight size={16}/></a><a className="secondary" href="#stack">View My Stack <Boxes size={16}/></a></div>
    </div>
    <Pipeline/>
   </section>

   <section className="stats shell">
    <Stat icon={Users} value="06+" text="Years Experience"/>
    <Stat icon={BarChart3} value="20+" text="Dashboards in Production"/>
    <Stat icon={Activity} value="250+" text="Monthly Hours Automated"/>
    <Stat icon={Users} value="30+" text="Cross-functional Teams"/>
    <Stat icon={Users} value="100+" text="Active Users (Leadership)"/>
   </section>
   <section className="role-focus shell">
    <span>ROLE FOCUS</span><b>Data Engineering</b><i>•</i><b>Analytics Engineering</b><i>•</i><b>Data Warehousing</b><i>•</i><b>Business Intelligence</b><i>•</i><b>Data & AI</b>
   </section>

   <section className="panel shell architecture-section" id="architecture">
    <SectionHead title="DATA ENGINEERING — END TO END"/>
    <div className="architecture-intro"><span className="eyebrow">ENGINEERING FLOW</span><h2>From source systems to <em>trusted analytics.</em></h2><p>I think about the full data path: where data originates, how it moves, how it is transformed and stored, and how the final model serves analytics.</p></div>
    <div className="workflow">
     {[
      ['01','SOURCE','Oracle, SQL, APIs, ITSM, files & operational systems',Database,'cyan'],
      ['02','INGEST','Bring data into controlled pipelines and repeatable ingestion flows',Workflow,'purple'],
      ['03','TRANSFORM','Clean, validate and transform using SQL, Python, Power Query & Fabric',Settings,'cyan'],
      ['04','STORE','Lakehouse and warehouse patterns for reliable analytical storage',Server,'purple'],
      ['05','MODEL','Facts, dimensions, relationships and reusable semantic logic',Boxes,'purple'],
      ['06','CONSUME','Power BI, DAX and analytics turn trusted data into decisions',BarChart3,'mint'],
      ['07','AUTOMATE','Refreshes, alerts and workflows keep the data product moving',Zap,'orange']
     ].map((x,i)=><React.Fragment key={x[0]}><WorkflowStep data={x}/>{i<6&&<div className="flow-arrow"><ArrowRight size={15}/></div>}</React.Fragment>)}
    </div>
   </section>

   <section className="panel shell" id="stack">
    <SectionHead title="TECHNOLOGY ECOSYSTEM"/>
    <div className="capability-grid">{capabilityGroups.map(g=><Capability key={g.title} group={g}/>)}</div>
   </section>

   <section className="panel shell certifications-section" id="certifications">
    <div className="cert-header">
      <div>
       <div className="cert-eyebrow"><Award size={14}/> CREDENTIALS & CONTINUOUS LEARNING</div>
       <h2>Proof of <em>capability.</em></h2>
       <p>A growing set of Microsoft and Google Cloud credentials supporting a data engineering path across cloud platforms, modern analytics, AI and BI.</p>
      </div>
      <div className="cert-count"><strong>{certifications.length}</strong><span>CREDENTIALS<br/>AND BADGES</span></div>
    </div>
    <div className="cert-controls" role="tablist" aria-label="Certification filters">
     {['ALL','MICROSOFT','GOOGLE CLOUD'].map(f=><button type="button" key={f} className={certFilter===f?'active':''} onClick={()=>setCertFilter(f)}>{f}</button>)}
    </div>
    <div className="cert-layout">
      <div className="cert-grid">
       {certifications.filter(c=>certFilter==='ALL'||(certFilter==='MICROSOFT'&&c.issuer==='Microsoft')||(certFilter==='GOOGLE CLOUD'&&c.issuer==='Google Cloud')).map(c=>
        <button type="button" key={c.id} className={`cert-card ${c.accent} ${selectedCert.id===c.id?'selected':''}`} onClick={()=>setSelectedCert(c)}>
         <div className="cert-card-top"><span>{c.code}</span><BadgeCheck size={16}/></div>
         <div className="cert-mark"><img src={c.badge} alt={`${c.title} badge`} /></div>
         <span className="cert-family">{c.family}</span>
         <h3>{c.title}</h3>
         <p>{c.issuer}</p>
         <div className="cert-card-foot"><span>VIEW CREDENTIAL</span><ChevronRight size={14}/></div>
        </button>
       )}
      </div>
      <div className={`cert-detail ${selectedCert.accent}`}>
       <div className="cert-detail-top"><span className="detail-label">SELECTED CREDENTIAL</span><span className="detail-status"><BadgeCheck size={13}/> {selectedCert.type}</span></div>
       <div className="cert-emblem"><img src={selectedCert.badge} alt={`${selectedCert.title} badge`} /></div>
       <div className="cert-type">{selectedCert.type}</div>
       <span className="cert-family">{selectedCert.family}</span>
       <h3>{selectedCert.code}</h3>
       <h4>{selectedCert.title}</h4>
       <div className="cert-issuer">{selectedCert.issuer}</div>
       <p>{selectedCert.summary}</p>
       <div className="cert-topics">{selectedCert.topics.map(t=><span key={t}>{t}</span>)}</div>
       <div className="cert-detail-note"><Sparkles size={15}/><span>Credentials are part of an ongoing learning path — from cloud fundamentals to data engineering, Fabric analytics and generative AI.</span></div>
      </div>
    </div>
   </section>



   <section className="three-panels shell" id="work">
    <div className="mini-panel featured">
      <PanelTitle title="FEATURED WORK"/>
      <div className="dashboard-window video-only">
       <div className="dash-bar"><span>◀ IT OPERATIONS COMMAND CENTER · POWER BI DEMO</span><span>● LIVE WALKTHROUGH</span></div>
       <video src="/media/Reporting_Dashboard.mp4" controls muted playsInline preload="metadata"/>
       <div className="video-progress"><span><i/></span><small>37 sec · Dashboard walkthrough</small></div>
      </div>
      <p>A unified view of incident performance, SLA, MTTR and team productivity enabling faster operational decisions.</p>
      <button className="text-link" onClick={()=>setVideoOpen(true)}>View Case Study <ArrowRight size={14}/></button>
    </div>

    <div className="mini-panel" id="model">
      <PanelTitle title="INTERACTIVE DATA MODEL"/>
      <div className="model-preview model-preview-rich">
       <div className="model-orbit orbit-a"/><div className="model-orbit orbit-b"/>
       <ModelChip name="Dim_Date" cls="md-date" selected={selectedTable} set={setSelectedTable}/>
       <ModelChip name="Dim_Team" cls="md-team" selected={selectedTable} set={setSelectedTable}/>
       <ModelChip name="Fact_Incidents" cls="md-fact" selected={selectedTable} set={setSelectedTable}/>
       <ModelChip name="Dim_Priority" cls="md-priority" selected={selectedTable} set={setSelectedTable}/>
       <ModelChip name="Dim_Service" cls="md-service" selected={selectedTable} set={setSelectedTable}/>
       <div className="model-line ml1"/><div className="model-line ml2"/><div className="model-line ml3"/><div className="model-line ml4"/>
       <div className="data-pulse p1"/><div className="data-pulse p2"/><div className="data-pulse p3"/>
      </div>
      <div className="model-detail"><span className="tag">{modelTables[selectedTable].type}</span><b>{selectedTable}</b><span>Grain: {modelTables[selectedTable].grain}</span></div>
      <div className="model-inspector">
        <div><small>KEY FIELDS</small>{modelTables[selectedTable].fields.slice(0,4).map(f=><code key={f}>{f}</code>)}</div>
        <div><small>MEASURES / LOGIC</small>{modelTables[selectedTable].logic.map(x=><span key={x}>ƒx {x}</span>)}</div>
      </div>
      <button className="text-link" onClick={()=>document.getElementById('model-full').scrollIntoView({behavior:'smooth'})}>Explore Data Model <ArrowRight size={14}/></button>
    </div>

    <div className="mini-panel" id="powerbi">
      <PanelTitle title="ANALYTICS ENGINEERING"/>
      <div className="topic-list">{underHood.map(([t,d,I])=><div className="topic" key={t}><span className="topic-icon"><I size={16}/></span><div><b>{t}</b><p>{d}</p></div></div>)}</div>
      <a className="text-link" href="#powerbi-full">Explore Concepts <ArrowRight size={14}/></a>
    </div>
   </section>

   <section className="three-panels shell">
    <div className="mini-panel tools"><PanelTitle title="TOOLS I WORK WITH"/><div className="tool-grid">{tools.map(([n,k])=><Tool name={n} key={n} kind={k}/>)}</div></div>
    <div className="mini-panel" id="experience"><PanelTitle title="EXPERIENCE HIGHLIGHTS"/><ul className="highlights">
      <li><Users size={18}/> Designing enterprise dashboards used by leadership across 100+ active users monthly</li>
      <li><Activity size={18}/> Automated reporting & workflows saving <b>250+ hours</b> every month</li>
      <li><BarChart3 size={18}/> Built <b>14+ production dashboards</b> with scalable semantic models</li>
      <li><Network size={18}/> Collaborated with <b>12+ cross-functional teams</b> across IT & business</li>
    </ul><a className="text-link" href="#experience-detail">View Full Experience <ArrowRight size={14}/></a></div>
    <div className="mini-panel contact" id="contact"><PanelTitle title="LET'S BUILD IMPACTFUL SOLUTIONS"/><p>Open to opportunities in Data Engineering, Analytics Engineering and BI roles.</p><a className="primary full" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a><a className="secondary full" href="#experience-detail">Explore Experience <ArrowRight size={15}/></a><div className="icon-ribbon">{tools.slice(0,10).map(([n,k])=><Tool key={n} name={n} kind={k} compact/>)}</div></div>
   </section>

   <section className="panel shell experience-detail" id="experience-detail">
    <SectionHead title="EXPERIENCE — ROLE ALIGNMENT"/>
    <div className="role-grid">
      <RoleCard icon={Workflow} title="DATA ENGINEERING" text="Data ingestion, transformation, pipelines, lakehouse and warehouse patterns, integration workflows and automation around data movement." tags={['Fabric','Pipelines','Dataflows','Lakehouse']}/>
      <RoleCard icon={Server} title="DATA WAREHOUSING" text="Fact and dimension modeling, star schemas, ETL / ELT concepts, source-to-target thinking and analytical data structures." tags={['ETL / ELT','Dimensional Modeling','Star Schema','Warehousing']}/>
      <RoleCard icon={Layers3} title="ANALYTICS ENGINEERING" text="Semantic models, reusable measures, DAX, Power Query and analytical logic that turns curated data into a reliable consumption layer." tags={['Semantic Models','DAX','Power Query','Analytics']}/>
      <RoleCard icon={BarChart3} title="BUSINESS INTELLIGENCE" text="Power BI dashboards, KPI design, executive reporting and operational analytics built on trusted analytical data." tags={['Power BI','KPI Design','Reporting','Decision Support']}/>
    </div>
   </section>

   <section className="panel shell detail-section" id="model-full">
    <SectionHead title="DATA MODEL — DEEP DIVE"/>
    <div className="model-deep">
      <div className="deep-diagram">
        <div className="data-orbit orbit-a"></div><div className="data-orbit orbit-b"></div>
        <span className="data-particle p1"></span><span className="data-particle p2"></span><span className="data-particle p3"></span><span className="data-particle p4"></span>
        <div className="big-table fact"><b>FACT_INCIDENTS</b><span>incident_id</span><span>created_date</span><span>team_key</span><span>priority_key</span><span>service_key</span></div>
        <div className="big-table d1"><b>DIM_DATE</b><span>date_key</span><span>year</span><span>month</span><span>quarter</span></div>
        <div className="big-table d2"><b>DIM_TEAM</b><span>team_key</span><span>team_name</span><span>organization</span></div>
        <div className="big-table d3"><b>DIM_PRIORITY</b><span>priority_key</span><span>priority</span><span>severity_order</span></div>
        <div className="big-table d4"><b>DIM_SERVICE</b><span>service_key</span><span>service_name</span><span>service_group</span></div>
        <div className="deep-connector dc1"></div><div className="deep-connector dc2"></div><div className="deep-connector dc3"></div><div className="deep-connector dc4"></div>
        <div className="model-live"><span></span> LIVE MODEL</div>
      </div>
      <div className="deep-copy"><span className="eyebrow">MODEL DESIGN</span><h2>Grain first.<br/><em>Then relationships.</em></h2><p>Define what one row means, establish clear dimensions, and build reusable measures on top of a predictable semantic model.</p><div className="design-points"><div><CheckCircle2/> Fact table at event grain</div><div><CheckCircle2/> Conformed date dimension</div><div><CheckCircle2/> Single-direction star relationships</div><div><CheckCircle2/> Measures separated from raw columns</div></div></div>
    </div>
   </section>

   <section className="panel shell" id="powerbi-full">
    <SectionHead title="ANALYTICS ENGINEERING — TECHNICAL DEPTH"/>
    <div className="technical-grid">{underHood.map(([t,d,I],i)=><div className="technical-card" key={t}><span>0{i+1}</span><I size={22}/><h3>{t}</h3><p>{d}</p></div>)}</div>
   </section>
  </main>

  <footer><b>LOHITH A S</b><span>BI · Analytics · Data</span><span>© 2026 Lohith A S. All rights reserved.</span><span>Designed & Built with <strong>♥</strong> and lots of coffee ☕</span></footer>

  {videoOpen&&<div className="modal" onClick={()=>setVideoOpen(false)}><div className="modal-video" onClick={e=>e.stopPropagation()}><button onClick={()=>setVideoOpen(false)}>×</button><video src="/media/Reporting_Dashboard.mp4" controls autoPlay playsInline/></div></div>}
 </div>
}

function Pipeline(){
 const nodes=[['SOURCE','Oracle · SQL','APIs · ITSM','Files · Logs',Database,'cyan'],['INGEST','Dataflows','Pipelines','',Workflow,'purple'],['TRANSFORM','SQL · Power Query','Python','Fabric',Settings,'cyan'],['STORE','Lakehouse','Warehouse','',Server,'purple'],['MODEL','Facts · Dims','Semantic Model','',Boxes,'purple'],['CONSUME','DAX · Power BI','Analytics','',BarChart3,'mint']]
 return <div className="pipeline"><div className="pipeline-head"><span>ANALYTICS PIPELINE</span></div><div className="pipeline-grid animated-pipeline">{nodes.map(([t,a,b,c,I,color],i)=><React.Fragment key={t}><div className={`pipe-node ${color}`}><I size={36}/><b>{t}</b><span>{a}</span><span>{b}</span>{c&&<span>{c}</span>}</div>{i<5&&<ArrowRight className="pipe-arrow" size={15}/>}</React.Fragment>)}</div><div className="pipeline-outcome"><Target size={38}/><div><small>OUTCOME</small><p>Trusted data products that drive operational excellence<br/>and business outcomes.</p></div></div></div>
}
function Stat({icon:I,value,text}){return <div className="stat"><I size={24}/><div><b>{value}</b><span>{text}</span></div></div>}
function SectionHead({title}){return <div className="section-head"><h2>{title}</h2></div>}
function Capability({group}){const I=group.icon;return <div className={`capability ${group.accent}`}><div className="cap-title"><I size={24}/><b>{group.title}</b></div><div className="cap-items">{group.items.map(x=><span key={x}><I size={13}/>{x}</span>)}</div></div>}
function WorkflowStep({data}){const [n,t,d,I,c]=data;return <div className="workflow-step"><div className={`step-icon ${c}`}><I size={21}/></div><span>{n}</span><b>{t}</b><p>{d}</p></div>}
function PanelTitle({title}){return <h3 className="panel-title">{title}<span/></h3>}
function Kpi({n,t}){return <div><b>{n}</b><span>{t}</span></div>}
function ModelChip({name,cls,selected,set}){return <button className={`model-chip ${cls} ${selected===name?'selected':''}`} onClick={()=>set(name)}><span>{modelTables[name].type}</span>{name}</button>}
function Tool({name,kind,compact}){return <div className={`tool ${kind} ${compact?'compact':''}`} title={name}><ToolMark kind={kind}/><span>{compact?'':name}</span></div>}
function ToolMark({kind}){const map={bi:'▥',fabric:'F',sql:'▤',dax:'D',pq:'◈',apps:'◆',flow:'➤',python:'⌘',grafana:'◉',prom:'◌',splunk:'>',snow:'◒',jira:'◆',share:'S',conf:'C'};return <b>{map[kind]||'•'}</b>}

function RoleCard({icon:I,title,text,tags}){return <div className="role-card"><div className="role-card-icon"><I size={21}/></div><span className="role-kicker">ROLE ALIGNMENT</span><h3>{title}</h3><p>{text}</p><div className="role-tags">{tags.map(t=><span key={t}>{t}</span>)}</div></div>}

createRoot(document.getElementById('root')).render(<App/>)
