import React, { useState } from "react";
import { Bell, Eye, EyeOff, ChevronDown, SquarePen, QrCode, User, Wallet, FileText, Plus, Home, CreditCard, MoreHorizontal, Signal, Wifi, BatteryFull } from "lucide-react";

const GREEN = "#0a6b3d";

const SUCCESS = "#2e9e4f";
const BG = "#f1f2f5";

interface Transaction {
  id: number;
  name: string;
  date: string;
  desc: string;
  amount: string;
  kind: "fonepay" | "interbank";
}

const transactions: Transaction[] = [
  { id: 1, name: "GADGETS 360.HP", date: "04 Aug, 2026 10:51 AM", desc: "Paid for Mobile Convergent", amount: "5650.0", kind: "fonepay" },
  { id: 2, name: "Fonepay Interbank", date: "04 Aug, 2026 10:14 AM", desc: "Paid for Fonepay Interbank", amount: "38000.0", kind: "interbank" },
  { id: 3, name: "S. S. COFFEE BREWERY", date: "30 Jul, 2026 03:30 PM", desc: "Paid for Mobile Convergent", amount: "590.0", kind: "fonepay" },
  { id: 4, name: "Mo Mo Centre", date: "29 Jul, 2026 12:22 PM", desc: "Paid for Mobile Convergent", amount: "345.0", kind: "fonepay" },
  { id: 5, name: "Mo Mo Centre", date: "28 Jul, 2026 01:04 PM", desc: "Paid for Mobile Convergent", amount: "345.0", kind: "fonepay" },
];

type NavTab = "Home" | "Payments" | "Send Money" | "More";

const TxLogo: React.FC<{ kind: Transaction["kind"] }> = ({ kind }) => {
  if (kind === "interbank")
    return (
      <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#0f7a6e", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 17, flexShrink: 0 }}>F</div>
    );
 return (
  <div style={{ width: 40, height: 40, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
    <img
      src="images/images.png"
      alt="fonepay"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);
};

interface SectionProps {
  title: string;
  onViewAll?: () => void;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, onViewAll, children }) => (
  <div style={{ padding: "16px 16px 0" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
      <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 700, color: "#111" }}>{title}</h3>
      <button
        onClick={onViewAll}
        style={{ background: "none", border: "none", padding: 0, fontSize: 13, fontWeight: 600, color: GREEN, display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}
      >
        View All <ChevronDown size={14} style={{ transform: "rotate(-90deg)" }} />
      </button>
    </div>
    {children}
  </div>
);

interface NavItemProps {
  icon: React.ReactNode;
  label: NavTab;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{ background: "none", border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, fontSize: 10, color: active ? GREEN : "#999", cursor: "pointer", padding: 4 }}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const BankHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>("Home");
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div style={{ maxWidth: 402, margin: "0 auto", background: BG, minHeight: "100vh", fontFamily: "-apple-system, 'SF Pro Text', Roboto, sans-serif" }}>
      {/* Status bar */}
      <div style={{ background: GREEN, color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px 6px", fontSize: 15, fontWeight: 600 }}>
        <span>1:36</span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Signal size={15} />
          <Wifi size={15} />
          <BatteryFull size={18} />
        </div>
      </div>

      {/* Header */}
      <div style={{ background: GREEN, padding: "8px 16px 36px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgb(255, 255, 255)", overflow: "hidden" }}>
  <img
    src="images/logo.png"
    alt="logo"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>
            <div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.2 }}>Good Afternoon</div>
              <div style={{ fontWeight: 700, fontSize: 17, letterSpacing: 0.5, lineHeight: 1.2 }}>KUSHAL</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              onClick={() => setNotifOpen((v) => !v)}
              aria-label="Notifications"
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 0, display: "flex" }}
            >
              <Bell size={22} strokeWidth={1.8} />
            </button>
            <button
              onClick={() => alert("Profile menu")}
              style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #fff", background: "none", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, cursor: "pointer", padding: 0 }}
            >
              KP
            </button>
          </div>
        </div>
        {notifOpen && (
          <div style={{ marginTop: 10, background: "#fff", color: "#333", borderRadius: 8, padding: 12, fontSize: 12.5 }}>
            No new notifications.
          </div>
        )}
      </div>
      <div style={{ 
  height: 8, 
  background: "#800000", 
  width: "100%", 
  marginTop: 3 
}} />

      {/* Account card */}
      <div style={{ background: "#fff", margin: "-28px 16px 0", borderRadius: 4, padding: "14px 16px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)",}}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "#333", fontWeight: 500 }}>
          <Wallet size={15} color="#555" />
          {balanceVisible ? "General Savings" : "XXXX XXXX XXXXX"}
        </div>
        <div style={{ fontSize: 12, color: "#777", margin: "2px 0 6px" }}>
          {balanceVisible ? "0210705571603019" : "XXXXXXXXX"}
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#111", display: "flex", alignItems: "center", gap: 8 }}>
          {balanceVisible ? "NPR 8,44,510.42" : (
            <span>
              <span style={{ fontWeight: 400 }}>XXX </span>XXX.XX
            </span>
          )}
          <button
            onClick={() => setBalanceVisible((v) => !v)}
            aria-label="Toggle balance visibility"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
          >
            {balanceVisible ? <Eye size={16} color={GREEN} /> : <EyeOff size={16} color={GREEN} />}
          </button>
        </div>
      </div>

      {/* Quick menu */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, padding: "16px 16px 0" }}>
        {[
          { label: "My Profile", icon: <User size={20} strokeWidth={1.8} color={GREEN} /> },
          { label: "My Accounts", icon: <Wallet size={20} strokeWidth={1.8} color={GREEN} /> },
          { label: "Statement", icon: <FileText size={20} strokeWidth={1.8} color={GREEN} /> },
        ].map((m) => (
          <button
            key={m.label}
            onClick={() => alert(m.label)}
            style={{ background: "#fff", border: "none", borderRadius: 4, padding: "12px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", cursor: "pointer" }}
          >
            <div style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${GREEN}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {m.icon}
            </div>
            <span style={{ fontSize: 10.5, color: "#222", textAlign: "center", lineHeight: 1.2 }}>{m.label}</span>
          </button>
        ))}
        <button
          onClick={() => alert("Dish Home TV")}
          style={{ background: "#fff", border: "none", borderRadius: 4, padding: "12px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", cursor: "pointer" }}
        >
          <div style={{ width: 36, height: 36, borderRadius: 8, overflow: "hidden" }}>
  <img
    src="images/unnamed.png"
    alt="Dish Home TV"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>
<span style={{ fontSize: 10.5, color: "#222", textAlign: "center", lineHeight: 1.2 }}>
  Dish Home TV
</span>
        </button>
      </div>

      {/* chevron + edit */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 0" }}>
        <button
          onClick={() => alert("Show more menu items")}
          aria-label="Show more menu"
          style={{ width: 30, height: 30, borderRadius: "50%", background: "#fff", border: "none", boxShadow: "0 1px 3px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronDown size={18} color="#888" />
        </button>
        <button
          onClick={() => alert("Edit menu")}
          style={{ background: GREEN, color: "#fff", fontSize: 13.5, fontWeight: 600, padding: "9px 16px", borderRadius: 6, border: "none", display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}
        >
          <SquarePen size={15} /> Edit Menu
        </button>
      </div>

      {/* Digital Transactions */}
      <Section title="Digital Transactions" onViewAll={() => alert("View all digital transactions")}>
        <div style={{ background: "#fff", borderRadius: 4, overflow: "hidden" }}>
          {transactions.map((tx, i) => (
            <div
              key={tx.id}
              onClick={() => alert(`${tx.name}\n${tx.desc}\nAmount: ${tx.amount}`)}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px", borderBottom: i !== transactions.length - 1 ? "1px solid #eee" : "none", cursor: "pointer" }}
            >
              <TxLogo kind={tx.kind} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5, color: "#111" }}>{tx.name}</div>
                <div style={{ fontSize: 11, color: "#777" }}>{tx.date}</div>
                <div style={{ fontSize: 11, color: "#777" }}>{tx.desc}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111" }}>- {tx.amount}</div>
                <span style={{ display: "inline-block", background: SUCCESS, color: "#fff", fontSize: 9.5, fontWeight: 500, borderRadius: 4, padding: "2px 6px", marginTop: 4 }}>SUCCESS</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Send Money */}
      <Section title="Send Money" onViewAll={() => alert("View all send money contacts")}>
        <button
          onClick={() => alert("Add a new send-money contact")}
          style={{ background: "#fff", border: "none", borderRadius: 4, padding: 16, width: 92, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        >
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: SUCCESS, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Plus size={22} />
          </div>
          <span style={{ fontSize: 11.5, color: "#222" }}>Add</span>
        </button>
      </Section>

      {/* Recent Payments */}
      <Section title="Recent Payments" onViewAll={() => alert("View all recent payments")}>
        <button
          onClick={() => alert("ESEWA")}
          style={{ background: "#fff", border: "none", borderRadius: 4, padding: 16, width: 92, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" , boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}
        >
          <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden" }}>
  <img
    src="images/esewa.png"
    alt="ESEWA"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>
<span style={{ fontSize: 11, color: "#222", fontWeight: 500 }}>
  ESEWA
</span>
        </button>
      </Section>

      <div style={{ height: 96 }} />

      {/* Bottom nav */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 402, background: "#fff", borderTop: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "8px 0 calc(8px + env(safe-area-inset-bottom))" }}>
        <NavItem icon={<Home size={22} />} label="Home" active={activeTab === "Home"} onClick={() => setActiveTab("Home")} />
        <NavItem icon={<span style={{ fontWeight: 700, fontSize: 15 }}>रु</span>} label="Payments" active={activeTab === "Payments"} onClick={() => setActiveTab("Payments")} />
        <button
          onClick={() => alert("Open QR scanner")}
          aria-label="Scan QR"
          style={{ width: 56, height: 56, borderRadius: "50%", background: GREEN, color: "#fff", border: "none", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -32, boxShadow: "0 2px 8px rgba(0,0,0,0.3)", cursor: "pointer" }}
        >
          <QrCode size={24} />
        </button>
        <NavItem icon={<CreditCard size={20} />} label="Send Money" active={activeTab === "Send Money"} onClick={() => setActiveTab("Send Money")} />
        <NavItem icon={<MoreHorizontal size={22} />} label="More" active={activeTab === "More"} onClick={() => setActiveTab("More")} />
      </div>
    </div>
  );
};

export default BankHome;