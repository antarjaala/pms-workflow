import { useState } from "react";

const COLORS = {
  navy: "#0A1628",
  navyLight: "#112240",
  teal: "#00BFA5",
  tealDim: "#00897B",
  amber: "#FFB300",
  red: "#EF5350",
  blue: "#1565C0",
  blueLight: "#1E88E5",
  gray: "#B0BEC5",
  grayDark: "#546E7A",
  white: "#F0F4F8",
  cardBg: "#152030",
};

const Badge = ({ color, children }) => (
  <span style={{
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: 4,
    padding: "2px 10px",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
  }}>{children}</span>
);

const Arrow = ({ label }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2px 0" }}>
    <div style={{ width: 2, height: 18, background: COLORS.teal + "88" }} />
    <div style={{ borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: `10px solid ${COLORS.teal}` }} />
    {label && <span style={{ fontSize: 10, color: COLORS.gray, marginTop: 3, letterSpacing: 0.5 }}>{label}</span>}
  </div>
);

const Step = ({ number, title, owner, ownerColor, details, badge, badgeColor, highlight }) => (
  <div style={{
    background: highlight ? COLORS.teal + "11" : COLORS.cardBg,
    border: `1px solid ${highlight ? COLORS.teal : COLORS.navyLight}`,
    borderLeft: `4px solid ${ownerColor || COLORS.teal}`,
    borderRadius: 8,
    padding: "14px 18px",
    width: "100%",
    boxSizing: "border-box",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
      <div style={{
        background: ownerColor || COLORS.teal,
        color: "#000",
        borderRadius: "50%",
        width: 26, height: 26,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 900, fontSize: 12, flexShrink: 0,
      }}>{number}</div>
      <span style={{ fontWeight: 700, color: COLORS.white, fontSize: 14, fontFamily: "Georgia, serif" }}>{title}</span>
      {badge && <Badge color={badgeColor || COLORS.amber}>{badge}</Badge>}
    </div>
    {owner && <div style={{ fontSize: 11, color: ownerColor || COLORS.teal, fontWeight: 600, marginBottom: 5, letterSpacing: 0.5 }}>▸ {owner}</div>}
    <div style={{ fontSize: 12, color: COLORS.gray, lineHeight: 1.7 }}>{details}</div>
  </div>
);

const SectionTitle = ({ children, color }) => (
  <div style={{
    fontSize: 10, fontWeight: 800, letterSpacing: 3,
    color: color || COLORS.tealDim, textTransform: "uppercase",
    marginBottom: 8, marginTop: 4,
    paddingBottom: 4, borderBottom: `1px solid ${(color || COLORS.teal) + "33"}`,
  }}>{children}</div>
);

const InfoCard = ({ title, color, children }) => (
  <div style={{
    background: COLORS.cardBg,
    border: `1px solid ${color}33`,
    borderTop: `3px solid ${color}`,
    borderRadius: 8,
    padding: "14px 16px",
    flex: 1,
    minWidth: 200,
  }}>
    <div style={{ fontWeight: 700, color, fontSize: 13, marginBottom: 10, fontFamily: "Georgia, serif" }}>{title}</div>
    {children}
  </div>
);

const Li = ({ color, children }) => (
  <div style={{ display: "flex", gap: 8, marginBottom: 5, fontSize: 12, color: COLORS.gray, lineHeight: 1.5 }}>
    <span style={{ color, flexShrink: 0, marginTop: 1 }}>◆</span>
    <span>{children}</span>
  </div>
);

export default function App() {
  const [tab, setTab] = useState("workflow");

  return (
    <div style={{
      minHeight: "100vh",
      background: COLORS.navy,
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: COLORS.white,
      padding: "32px 20px",
    }}>
      {/* Header */}
      <div style={{ maxWidth: 820, margin: "0 auto 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 4, color: COLORS.teal, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>
              HappiestMinds Technologies · Happiest Health
            </div>
            <h1 style={{ margin: 0, fontSize: 26, fontFamily: "Georgia, serif", fontWeight: 700, color: COLORS.white, lineHeight: 1.2 }}>
              PMS L2 Support
            </h1>
            <div style={{ fontSize: 15, color: COLORS.gray, marginTop: 4, fontStyle: "italic" }}>
              Patient Management System — Team Briefing & Workflow
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <Badge color={COLORS.teal}>Internal L2 Reference</Badge>
            <div style={{ fontSize: 11, color: COLORS.grayDark, marginTop: 6 }}>ServiceNow · Jira · PAS Board</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginTop: 22, borderBottom: `1px solid ${COLORS.navyLight}` }}>
          {[["workflow", "Workflow Diagram"], ["briefing", "Team Briefing"], ["reference", "Quick Reference"]].map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)} style={{
              background: tab === key ? COLORS.teal : "transparent",
              color: tab === key ? "#000" : COLORS.gray,
              border: "none",
              borderRadius: "6px 6px 0 0",
              padding: "8px 18px",
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              letterSpacing: 0.5,
            }}>{label}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto" }}>

        {/* ── WORKFLOW TAB ── */}
        {tab === "workflow" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>

            <SectionTitle color={COLORS.blueLight}>Initiation — Client Side</SectionTitle>

            <Step number="1" title="Client Raises Issue via Email"
              owner="Caller (Client User) → happiestminds@service-now.com"
              ownerColor={COLORS.blue}
              details="Client using PMS faces an issue and sends an email to the IT Service Desk address. This auto-triggers ServiceNow ticket creation. The email becomes the incident record. Caller identity is captured from the sender." />

            <Arrow label="Auto-triggers" />

            <Step number="2" title="ServiceNow Incident Creation"
              owner="L1 Team"
              ownerColor={COLORS.blueLight}
              badge="Auto" badgeColor={COLORS.blueLight}
              details={<>Incident Number assigned (e.g., <b style={{color:COLORS.amber}}>INC0252317</b>). Fields set: Caller, Priority, Impact, Urgency. Email notification sent to Caller confirming ticket creation. Initial state: <b style={{color:COLORS.teal}}>In Progress</b>.</>} />

            <Arrow />

            <SectionTitle color={COLORS.amber}>L1 — Healthcare IT Support</SectionTitle>

            <Step number="3" title="L1 Triage & Assignment"
              owner="L1 Team · Assignment Group: Healthcare IT Support"
              ownerColor={COLORS.amber}
              details='L1 telecallers review the ticket. They set Priority, Impact, and Urgency fields. Assignment Group is set to "PMS L2 Support" to escalate. Caller receives email notification that the ticket is assigned and In Progress.' />

            <Arrow label="Escalates to L2" />

            <SectionTitle color={COLORS.teal}>L2 — PMS L2 Support (Our Team)</SectionTitle>

            <Step number="4" title="Business Analyst: First Look"
              owner="BA · PMS L2 Support"
              ownerColor={COLORS.teal}
              highlight
              details="BA receives the ticket in ServiceNow under Assignment Group 'PMS L2 Support'. BA reviews the incident details, description, and any attachments. BA owns all ServiceNow updates from this point onward." />

            <Arrow />

            <div style={{ width: "100%", display: "flex", gap: 12, marginBottom: 2 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                <div style={{ background: COLORS.amber+"22", border: `1px dashed ${COLORS.amber}55`, borderRadius: 6, padding: "10px 14px", width: "100%", boxSizing: "border-box" }}>
                  <div style={{ fontSize: 12, color: COLORS.amber, fontWeight: 700, marginBottom: 4 }}>⟳ If Clarity Needed</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, lineHeight: 1.6 }}>
                    BA adds <b style={{color:COLORS.white}}>Work Notes</b> in ServiceNow asking for details.<br/>
                    Ticket state → <b style={{color:COLORS.amber}}>On Hold</b>.<br/>
                    Assigned back to <b style={{color:COLORS.white}}>Healthcare IT Support</b>.<br/>
                    L1 contacts Caller via call/email.<br/>
                    Once info received, ticket re-assigned to PMS L2 Support.
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                <div style={{ background: COLORS.teal+"11", border: `1px dashed ${COLORS.teal}55`, borderRadius: 6, padding: "10px 14px", width: "100%", boxSizing: "border-box" }}>
                  <div style={{ fontSize: 12, color: COLORS.teal, fontWeight: 700, marginBottom: 4 }}>✓ If Clarity Sufficient</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, lineHeight: 1.6 }}>
                    BA proceeds to assess the nature of request.<br/>
                    Determines: <b style={{color:COLORS.white}}>Access Request</b> or <b style={{color:COLORS.white}}>Tech Change</b>.<br/>
                    Routes accordingly (see below).
                  </div>
                </div>
              </div>
            </div>

            <Arrow label="Assessed & Routed" />

            <div style={{ width: "100%", display: "flex", gap: 12, marginBottom: 2 }}>
              {/* Branch A */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ background: COLORS.cardBg, border: `2px solid ${COLORS.teal}55`, borderTop: `3px solid ${COLORS.teal}`, borderRadius: 8, padding: "14px 16px", width: "100%", boxSizing: "border-box" }}>
                  <Badge color={COLORS.teal}>Access Request</Badge>
                  <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: COLORS.white, fontFamily: "Georgia, serif" }}>BA Handles Directly</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 6, lineHeight: 1.6 }}>
                    BA grants/modifies access in PMS system.<br/>
                    Updates ServiceNow with resolution notes.<br/>
                    Ticket state → <b style={{color:COLORS.teal}}>Resolved</b>.
                  </div>
                </div>
              </div>
              {/* Branch B */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ background: COLORS.cardBg, border: `2px solid ${COLORS.blueLight}55`, borderTop: `3px solid ${COLORS.blueLight}`, borderRadius: 8, padding: "14px 16px", width: "100%", boxSizing: "border-box" }}>
                  <Badge color={COLORS.blueLight}>Tech Change</Badge>
                  <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: COLORS.white, fontFamily: "Georgia, serif" }}>BA Creates Jira Ticket</div>
                  <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 6, lineHeight: 1.6 }}>
                    BA logs ticket in <b style={{color:COLORS.white}}>Jira → PAS Project</b><br/>
                    Board: <b style={{color:COLORS.amber}}>"PMS (All Specialities)"</b><br/>
                    Assigns to Frontend or Backend Engineer based on scope.
                  </div>
                </div>
              </div>
            </div>

            <Arrow />

            <Step number="5" title="Engineers Work the Jira Ticket"
              owner="Frontend / Backend Engineers · PMS L2 Support"
              ownerColor={COLORS.blueLight}
              details="Engineers update Jira as they work. BA monitors progress and updates ServiceNow ticket with status/notes as needed. Engineers do NOT update ServiceNow directly." />

            <Arrow label="On completion" />

            <Step number="6" title="Resolution & ServiceNow Closure"
              owner="BA · PMS L2 Support"
              ownerColor={COLORS.teal}
              highlight
              details="Once work is done, BA updates ServiceNow with resolution details. Ticket state → Resolved / Closed. Caller receives notification. ServiceNow is the single source of truth for the client-facing ticket lifecycle." />

          </div>
        )}

        {/* ── BRIEFING TAB ── */}
        {tab === "briefing" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            <div style={{ background: COLORS.teal+"11", border: `1px solid ${COLORS.teal}33`, borderRadius: 8, padding: "16px 20px" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, marginBottom: 8, color: COLORS.teal }}>Team Overview</div>
              <div style={{ fontSize: 13, color: COLORS.gray, lineHeight: 1.8 }}>
                We are <b style={{color:COLORS.white}}>PMS L2 Support</b> under HappiestMinds Technologies, supporting the client <b style={{color:COLORS.white}}>Happiest Health</b>.
                Our product is the <b style={{color:COLORS.white}}>Patient Management System (PMS)</b>. When client users encounter issues,
                they escalate through a structured ServiceNow → L1 → L2 → Jira pipeline. Our team sits at the resolution layer.
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <InfoCard title="🎯 Business Analyst" color={COLORS.teal}>
                <Li color={COLORS.teal}>First point of contact when tickets land in L2</Li>
                <Li color={COLORS.teal}>Sole owner of all ServiceNow updates from L2 side</Li>
                <Li color={COLORS.teal}>Triages: access request vs tech change</Li>
                <Li color={COLORS.teal}>Handles all access-related requests directly</Li>
                <Li color={COLORS.teal}>Creates and manages Jira tickets for tech changes</Li>
                <Li color={COLORS.teal}>Uses Work Notes in ServiceNow to request clarity via L1</Li>
              </InfoCard>

              <InfoCard title="⚙️ Engineers (FE / BE)" color={COLORS.blueLight}>
                <Li color={COLORS.blueLight}>Receive work via Jira — never directly from ServiceNow</Li>
                <Li color={COLORS.blueLight}>Update Jira tickets as they progress</Li>
                <Li color={COLORS.blueLight}>Coordinate with BA on blockers or scope questions</Li>
                <Li color={COLORS.blueLight}>Do NOT update ServiceNow independently</Li>
                <Li color={COLORS.blueLight}>Work under PAS project board: "PMS (All Specialities)"</Li>
              </InfoCard>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <InfoCard title="🔧 Tools We Use" color={COLORS.amber}>
                <Li color={COLORS.amber}><b style={{color:COLORS.white}}>ServiceNow</b> — Client-facing incident tracking. BA updates only.</Li>
                <Li color={COLORS.amber}><b style={{color:COLORS.white}}>Jira (PAS Project)</b> — Internal dev task tracking. Engineers update.</Li>
                <Li color={COLORS.amber}><b style={{color:COLORS.white}}>Email</b> — happiestminds@service-now.com is the intake channel.</Li>
              </InfoCard>

              <InfoCard title="📋 Ticket States in ServiceNow" color={COLORS.gray}>
                <Li color={COLORS.teal}><b style={{color:COLORS.teal}}>In Progress</b> — Actively being worked</Li>
                <Li color={COLORS.amber}><b style={{color:COLORS.amber}}>On Hold</b> — Awaiting info from caller</Li>
                <Li color={COLORS.red}><b style={{color:COLORS.red}}>Canceled</b> — Request rejected / invalid</Li>
                <Li color={COLORS.blueLight}><b style={{color:COLORS.blueLight}}>Resolved/Closed</b> — Work completed</Li>
              </InfoCard>
            </div>

            <InfoCard title="📌 Key Rules for Our Team" color={COLORS.teal}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
                <Li color={COLORS.teal}>Only BA touches ServiceNow on L2 side</Li>
                <Li color={COLORS.teal}>Engineers work only via Jira</Li>
                <Li color={COLORS.teal}>Never contact the client directly — go through L1</Li>
                <Li color={COLORS.teal}>Use Work Notes (not comments) for internal communication in SNOW</Li>
                <Li color={COLORS.teal}>Always re-assign to Healthcare IT Support when needing caller info</Li>
                <Li color={COLORS.teal}>Access requests → BA resolves, no Jira ticket needed</Li>
              </div>
            </InfoCard>
          </div>
        )}

        {/* ── QUICK REFERENCE TAB ── */}
        {tab === "reference" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <InfoCard title="Assignment Groups" color={COLORS.blueLight}>
                <Li color={COLORS.blueLight}><b style={{color:COLORS.white}}>Healthcare IT Support</b> — L1 Telecallers</Li>
                <Li color={COLORS.blueLight}><b style={{color:COLORS.white}}>PMS L2 Support</b> — Our team (BA + Engineers)</Li>
              </InfoCard>
              <InfoCard title="Priority Levels" color={COLORS.amber}>
                <Li color={COLORS.red}><b style={{color:COLORS.red}}>1 - Critical</b> — System down, urgent</Li>
                <Li color={COLORS.amber}><b style={{color:COLORS.amber}}>2 - High</b> — Major impact</Li>
                <Li color={COLORS.gray}><b style={{color:COLORS.gray}}>3 - Moderate</b> — Normal flow impacted</Li>
                <Li color={COLORS.grayDark}><b style={{color:COLORS.grayDark}}>4 - Low</b> — Minor inconvenience</Li>
              </InfoCard>
            </div>

            <InfoCard title="Sample Incident Notification" color={COLORS.tealDim}>
              <div style={{ background: COLORS.navy, border: `1px solid ${COLORS.navyLight}`, borderRadius: 6, padding: "14px 16px", fontSize: 12, color: COLORS.gray, fontFamily: "monospace", lineHeight: 2 }}>
                <div style={{color:COLORS.teal, fontWeight:700}}>Subject: INC0252317 - PMS Update Required – Immediate Action Needed</div>
                <div>An incident has been assigned to PMS L2 Support</div>
                <div><b style={{color:COLORS.white}}>Incident Caller:</b> Chandana</div>
                <div><b style={{color:COLORS.white}}>Incident State:</b> <span style={{color:COLORS.teal}}>In Progress</span></div>
                <div><b style={{color:COLORS.white}}>Incident Priority:</b> <span style={{color:COLORS.gray}}>3 - Moderate</span></div>
                <div style={{color:COLORS.blueLight, textDecoration:"underline"}}>Click here to view Incident: INC0252317</div>
              </div>
            </InfoCard>

            <InfoCard title="Decision Tree: What does the BA do with the ticket?" color={COLORS.teal}>
              <div style={{ fontSize: 12, color: COLORS.gray, lineHeight: 2 }}>
                <div>① Ticket lands in <b style={{color:COLORS.white}}>PMS L2 Support</b> → BA reviews</div>
                <div style={{paddingLeft:16}}>↳ Need more info? → Work Notes in SNOW → Reassign to <b style={{color:COLORS.white}}>Healthcare IT Support</b> → State: <b style={{color:COLORS.amber}}>On Hold</b></div>
                <div style={{paddingLeft:16}}>↳ Clear enough to proceed?</div>
                <div style={{paddingLeft:32}}>→ <b style={{color:COLORS.teal}}>Access Request</b>: BA handles → Update SNOW → <b style={{color:COLORS.teal}}>Resolved</b></div>
                <div style={{paddingLeft:32}}>→ <b style={{color:COLORS.blueLight}}>Tech Change</b>: BA creates Jira in PAS → Assigns to FE/BE Engineer → Monitors → Updates SNOW → <b style={{color:COLORS.teal}}>Resolved</b></div>
              </div>
            </InfoCard>

            <InfoCard title="Jira Project Info" color={COLORS.amber}>
              <Li color={COLORS.amber}><b style={{color:COLORS.white}}>Project Key:</b> PAS</Li>
              <Li color={COLORS.amber}><b style={{color:COLORS.white}}>Board:</b> PMS (All Specialities)</Li>
              <Li color={COLORS.amber}><b style={{color:COLORS.white}}>Created by:</b> BA only</Li>
              <Li color={COLORS.amber}><b style={{color:COLORS.white}}>Updated by:</b> Assigned FE or BE Engineer</Li>
            </InfoCard>

          </div>
        )}

      </div>
    </div>
  );
}