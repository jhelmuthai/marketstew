export interface Stock {
  ticker: string;
  name: string;
  sector: string;
  price: number;
  change: number;
  changePct: number;
  marketCap: string;
  peRatio: number | null;
  yearHigh: number;
  yearLow: number;
  aiRelevance: string;
  description: string;
}

export const SECTORS = [
  { id: 'semiconductors', name: 'Semiconductors & Equipment', icon: '⚡' },
  { id: 'data-center-reits', name: 'Data Center REITs & Infrastructure', icon: '🏢' },
  { id: 'networking', name: 'Networking & Interconnects', icon: '🔗' },
  { id: 'power-cooling', name: 'Power & Cooling', icon: '🔋' },
  { id: 'construction', name: 'Construction & Engineering', icon: '🏗️' },
  { id: 'servers', name: 'Servers & Storage', icon: '🖥️' },
  { id: 'hyperscalers', name: 'Hyperscalers & Cloud', icon: '☁️' },
] as const;

// ============================================================
// SAMPLE DATA — prices are illustrative, not live market data.
// Will be replaced by live API feeds (Alpha Vantage / yfinance).
// ============================================================

export const SAMPLE_STOCKS: Stock[] = [

  // ────────────────────────────────────────────────────────────
  // SEMICONDUCTORS & EQUIPMENT (20 stocks)
  // ────────────────────────────────────────────────────────────

  {
    ticker: 'NVDA', name: 'NVIDIA Corporation', sector: 'semiconductors',
    price: 138.25, change: 3.42, changePct: 2.54, marketCap: '$3.38T', peRatio: 54.2, yearHigh: 153.13, yearLow: 75.61,
    aiRelevance: 'Dominant AI GPU supplier controlling ~80% of data center AI accelerator market. H100 and B200 GPUs power the vast majority of AI training infrastructure globally.',
    description: 'NVIDIA designs GPUs and system-on-chip units. The undisputed leader in AI accelerator hardware, its products are the foundation of virtually every major AI training cluster worldwide.',
  },
  {
    ticker: 'AVGO', name: 'Broadcom Inc.', sector: 'semiconductors',
    price: 228.50, change: -1.30, changePct: -0.57, marketCap: '$1.07T', peRatio: 38.1, yearHigh: 251.88, yearLow: 122.34,
    aiRelevance: 'Critical supplier of custom AI accelerators (XPUs) for Google and Meta. Also provides networking ASICs essential for connecting GPU clusters in AI data centers.',
    description: 'Broadcom designs, develops, and supplies semiconductor and infrastructure software solutions serving data center, networking, broadband, and wireless markets.',
  },
  {
    ticker: 'AMD', name: 'Advanced Micro Devices', sector: 'semiconductors',
    price: 119.80, change: 2.15, changePct: 1.83, marketCap: '$194B', peRatio: 42.5, yearHigh: 187.28, yearLow: 93.12,
    aiRelevance: 'Primary competitor to NVIDIA in AI accelerators with MI300X GPUs. Gaining share in AI inference workloads. Also supplies EPYC server CPUs powering AI-capable data center servers.',
    description: 'AMD designs and sells microprocessors, GPUs, and adaptive SoC products for data centers, PCs, and gaming. Increasingly positioned as the #2 AI accelerator supplier.',
  },
  {
    ticker: 'TSM', name: 'Taiwan Semiconductor', sector: 'semiconductors',
    price: 196.40, change: 1.85, changePct: 0.95, marketCap: '$1.02T', peRatio: 28.6, yearHigh: 212.60, yearLow: 127.00,
    aiRelevance: 'Manufactures virtually every advanced AI chip in the world. NVIDIA, AMD, Broadcom, Apple, and Qualcomm all depend on TSMC\'s leading-edge foundry nodes.',
    description: 'TSMC is the world\'s largest dedicated semiconductor foundry, manufacturing chips for the world\'s leading fabless semiconductor companies at advanced process nodes.',
  },
  {
    ticker: 'ASML', name: 'ASML Holding', sector: 'semiconductors',
    price: 726.30, change: -4.20, changePct: -0.57, marketCap: '$291B', peRatio: 32.8, yearHigh: 1110.09, yearLow: 605.10,
    aiRelevance: 'Sole manufacturer of EUV lithography machines required to produce advanced AI chips. Without ASML\'s equipment, no company on Earth can manufacture leading-edge GPUs.',
    description: 'ASML provides photolithography systems for the semiconductor industry. Its extreme ultraviolet (EUV) technology is essential for manufacturing chips at 7nm and below.',
  },
  {
    ticker: 'MRVL', name: 'Marvell Technology', sector: 'semiconductors',
    price: 88.40, change: 3.10, changePct: 3.63, marketCap: '$76.5B', peRatio: 65.2, yearHigh: 97.50, yearLow: 56.20,
    aiRelevance: 'Designs custom AI accelerators and high-speed interconnects for hyperscalers. Key supplier of PAM4 DSPs and electro-optics for AI data center networking at 800G and beyond.',
    description: 'Marvell develops semiconductor solutions for data infrastructure including data centers, enterprise networking, carrier infrastructure, and consumer markets.',
  },
  {
    ticker: 'INTC', name: 'Intel Corporation', sector: 'semiconductors',
    price: 22.45, change: -0.35, changePct: -1.53, marketCap: '$96.8B', peRatio: null, yearHigh: 38.18, yearLow: 18.84,
    aiRelevance: 'Foundry ambitions could make Intel a second source for AI chip manufacturing. Gaudi AI accelerators compete in inference. Xeon CPUs still dominate data center server market by installed base.',
    description: 'Intel designs and manufactures semiconductor chips. The company is undergoing a major transformation to become a contract chipmaker while competing in AI accelerators.',
  },
  {
    ticker: 'MU', name: 'Micron Technology', sector: 'semiconductors',
    price: 97.60, change: 1.45, changePct: 1.51, marketCap: '$108B', peRatio: 22.4, yearHigh: 157.54, yearLow: 79.15,
    aiRelevance: 'Leading supplier of HBM (High Bandwidth Memory) chips critical for AI GPUs. Every NVIDIA H100/B200 requires HBM stacks. Memory is a key bottleneck in AI infrastructure scaling.',
    description: 'Micron produces memory and storage solutions including DRAM, NAND, and HBM. Its high-bandwidth memory products are essential components in AI accelerator packages.',
  },
  {
    ticker: 'LRCX', name: 'Lam Research', sector: 'semiconductors',
    price: 76.80, change: 0.92, changePct: 1.21, marketCap: '$99.8B', peRatio: 24.1, yearHigh: 110.51, yearLow: 69.70,
    aiRelevance: 'Supplies critical etch and deposition equipment for manufacturing AI chips and HBM memory. Increased AI chip complexity drives higher equipment spending per wafer.',
    description: 'Lam Research provides wafer fabrication equipment and services to the semiconductor industry, specializing in etch, deposition, and clean technologies.',
  },
  {
    ticker: 'AMAT', name: 'Applied Materials', sector: 'semiconductors',
    price: 176.30, change: 2.05, changePct: 1.18, marketCap: '$143B', peRatio: 21.5, yearHigh: 254.39, yearLow: 150.82,
    aiRelevance: 'World\'s largest semiconductor equipment maker. Supplies deposition, etch, and inspection tools essential for manufacturing AI chips at leading-edge nodes.',
    description: 'Applied Materials provides manufacturing equipment, services, and software to the semiconductor industry. Its tools are used in nearly every chip fabrication facility worldwide.',
  },
  {
    ticker: 'KLAC', name: 'KLA Corporation', sector: 'semiconductors',
    price: 714.50, change: 5.30, changePct: 0.75, marketCap: '$96.4B', peRatio: 28.3, yearHigh: 896.32, yearLow: 580.60,
    aiRelevance: 'Dominates semiconductor process control and inspection. As AI chips become more complex, defect detection becomes more critical — KLA\'s equipment is essential for yield management.',
    description: 'KLA designs and manufactures process control, yield management, and inspection systems for the semiconductor and related nanoelectronics industries.',
  },
  {
    ticker: 'ARM', name: 'Arm Holdings', sector: 'semiconductors',
    price: 158.20, change: 4.60, changePct: 2.99, marketCap: '$166B', peRatio: 188.5, yearHigh: 188.75, yearLow: 87.50,
    aiRelevance: 'Designs CPU architectures used in AI inference chips, mobile AI, and custom AI accelerators. NVIDIA\'s Grace CPU and many custom hyperscaler chips are built on Arm architecture.',
    description: 'Arm designs and licenses CPU architectures and related technologies. Its energy-efficient designs are increasingly central to AI inference and edge computing.',
  },
  {
    ticker: 'SNPS', name: 'Synopsys Inc.', sector: 'semiconductors',
    price: 502.40, change: 3.80, changePct: 0.76, marketCap: '$77.6B', peRatio: 52.1, yearHigh: 629.38, yearLow: 432.78,
    aiRelevance: 'Provides EDA (electronic design automation) tools used to design every AI chip. No AI accelerator — from NVIDIA GPUs to custom hyperscaler ASICs — can be designed without Synopsys tools.',
    description: 'Synopsys provides electronic design automation software, IP, and services used to design and verify semiconductor chips and electronic systems.',
  },
  {
    ticker: 'CDNS', name: 'Cadence Design Systems', sector: 'semiconductors',
    price: 283.70, change: 1.95, changePct: 0.69, marketCap: '$77.4B', peRatio: 67.3, yearHigh: 328.98, yearLow: 240.50,
    aiRelevance: 'EDA duopoly partner with Synopsys. Cadence tools are essential for AI chip physical design, verification, and packaging — including advanced 3D chiplet architectures.',
    description: 'Cadence Design Systems provides software, hardware, and IP for electronic design automation. Its tools are critical for designing complex semiconductor devices.',
  },
  {
    ticker: 'QCOM', name: 'Qualcomm Inc.', sector: 'semiconductors',
    price: 162.30, change: -0.75, changePct: -0.46, marketCap: '$181B', peRatio: 18.2, yearHigh: 230.63, yearLow: 143.10,
    aiRelevance: 'Leads in edge AI inference chips for mobile and automotive. Snapdragon X platform enables on-device AI. Growing data center AI inference ambitions with Cloud AI 100 chips.',
    description: 'Qualcomm develops and licenses wireless technology and designs semiconductors for mobile devices, automotive, IoT, and computing platforms.',
  },
  {
    ticker: 'ON', name: 'onsemi', sector: 'semiconductors',
    price: 49.80, change: 0.65, changePct: 1.32, marketCap: '$21.2B', peRatio: 15.8, yearHigh: 79.78, yearLow: 42.50,
    aiRelevance: 'Supplies power management semiconductors for data center infrastructure. SiC (silicon carbide) power devices improve energy efficiency in AI data center power delivery systems.',
    description: 'onsemi provides intelligent power and sensing technologies for automotive, industrial, and cloud/data center markets, with growing focus on silicon carbide power solutions.',
  },
  {
    ticker: 'MPWR', name: 'Monolithic Power Systems', sector: 'semiconductors',
    price: 612.40, change: 8.50, changePct: 1.41, marketCap: '$29.8B', peRatio: 62.4, yearHigh: 898.18, yearLow: 505.60,
    aiRelevance: 'Critical power management IC supplier for AI server platforms. Provides voltage regulators that deliver precise power to GPUs and AI accelerators inside server racks.',
    description: 'Monolithic Power Systems designs and provides high-performance power management solutions for data centers, automotive, industrial, and consumer applications.',
  },
  {
    ticker: 'ONTO', name: 'Onto Innovation', sector: 'semiconductors',
    price: 168.30, change: 2.40, changePct: 1.45, marketCap: '$8.3B', peRatio: 35.6, yearHigh: 248.02, yearLow: 134.50,
    aiRelevance: 'Provides advanced inspection and metrology tools for semiconductor manufacturing. Specializes in process control for advanced packaging used in AI chip assemblies like HBM stacks.',
    description: 'Onto Innovation provides process control solutions for advanced semiconductor manufacturing, including lithography, packaging, and inspection tools.',
  },
  {
    ticker: 'COHU', name: 'Cohu Inc.', sector: 'semiconductors',
    price: 28.60, change: 0.45, changePct: 1.60, marketCap: '$1.4B', peRatio: 42.1, yearHigh: 36.50, yearLow: 20.10,
    aiRelevance: 'Supplies semiconductor test and inspection equipment. Growing demand for testing advanced AI chips and HBM memory drives higher utilization of Cohu\'s test handlers.',
    description: 'Cohu provides semiconductor test equipment, thermal solutions, and inspection systems used in the manufacturing and testing of semiconductor devices.',
  },
  {
    ticker: 'ACLS', name: 'Axcelis Technologies', sector: 'semiconductors',
    price: 94.50, change: 1.20, changePct: 1.29, marketCap: '$3.1B', peRatio: 18.7, yearHigh: 157.80, yearLow: 72.30,
    aiRelevance: 'Provides ion implantation equipment for semiconductor fabrication. Increased AI chip production drives higher demand for implant tools at leading-edge fabs.',
    description: 'Axcelis Technologies designs, manufactures, and services ion implantation systems for the semiconductor industry, a critical step in chip manufacturing.',
  },

  // ────────────────────────────────────────────────────────────
  // DATA CENTER REITs & INFRASTRUCTURE (8 stocks)
  // ────────────────────────────────────────────────────────────

  {
    ticker: 'EQIX', name: 'Equinix Inc.', sector: 'data-center-reits',
    price: 895.20, change: 5.60, changePct: 0.63, marketCap: '$85.7B', peRatio: null, yearHigh: 960.00, yearLow: 693.40,
    aiRelevance: 'World\'s largest data center and colocation provider with 260+ facilities globally. Strategic interconnection hub where AI workloads, cloud services, and enterprise networks converge.',
    description: 'Equinix operates as a global digital infrastructure company providing data center colocation, interconnection, and related services across 72 metros worldwide.',
  },
  {
    ticker: 'DLR', name: 'Digital Realty Trust', sector: 'data-center-reits',
    price: 172.30, change: -0.90, changePct: -0.52, marketCap: '$55.2B', peRatio: null, yearHigh: 185.50, yearLow: 128.75,
    aiRelevance: 'Largest pure-play data center REIT by capacity. Provides the physical buildings housing AI infrastructure. Record leasing activity driven by hyperscaler demand for AI-capable facilities.',
    description: 'Digital Realty owns, acquires, develops, and operates data centers worldwide, providing colocation and interconnection solutions for domestic and international customers.',
  },
  {
    ticker: 'IRM', name: 'Iron Mountain', sector: 'data-center-reits',
    price: 118.40, change: 1.30, changePct: 1.11, marketCap: '$34.7B', peRatio: null, yearHigh: 128.85, yearLow: 72.80,
    aiRelevance: 'Rapidly expanding data center business with 30+ MW of AI-ready capacity under development. Unique advantage in converting secure, powered facilities into data centers.',
    description: 'Iron Mountain provides information management, data center, and asset lifecycle management services. Its data center segment is the fastest-growing part of the business.',
  },
  {
    ticker: 'AMT', name: 'American Tower', sector: 'data-center-reits',
    price: 196.80, change: -1.20, changePct: -0.61, marketCap: '$91.2B', peRatio: null, yearHigh: 232.60, yearLow: 175.30,
    aiRelevance: 'Largest global tower REIT with growing data center and edge computing footprint. Critical infrastructure for AI inference at the network edge and 5G AI applications.',
    description: 'American Tower owns and operates wireless communications and broadcast infrastructure worldwide, with an expanding digital infrastructure portfolio including data centers.',
  },
  {
    ticker: 'CCI', name: 'Crown Castle International', sector: 'data-center-reits',
    price: 102.50, change: 0.40, changePct: 0.39, marketCap: '$44.4B', peRatio: null, yearHigh: 120.70, yearLow: 86.30,
    aiRelevance: 'Largest US tower company with extensive fiber network assets. Fiber infrastructure is critical for connecting data centers and enabling low-latency AI workload distribution.',
    description: 'Crown Castle owns and operates cell towers and fiber optic infrastructure across the United States, providing critical connectivity for wireless and data center networks.',
  },
  {
    ticker: 'SBAC', name: 'SBA Communications', sector: 'data-center-reits',
    price: 218.60, change: -0.85, changePct: -0.39, marketCap: '$23.6B', peRatio: null, yearHigh: 258.30, yearLow: 190.40,
    aiRelevance: 'Tower infrastructure supports the wireless backbone needed for edge AI and distributed AI inference. Increased data demand from AI applications drives carrier network expansion.',
    description: 'SBA Communications is a leading independent owner and operator of wireless communications infrastructure, primarily cell towers across the Americas.',
  },
  {
    ticker: 'CONE', name: 'CyrusOne (Pending)', sector: 'data-center-reits',
    price: 0, change: 0, changePct: 0, marketCap: '—', peRatio: null, yearHigh: 0, yearLow: 0,
    aiRelevance: 'Acquired by KKR/GIP in 2022. Now operates as a private data center platform focused on hyperscale AI-ready facilities. Key example of private capital flowing into AI infrastructure.',
    description: 'CyrusOne was a publicly traded data center REIT acquired by KKR and Global Infrastructure Partners. It continues to operate as a major private data center platform.',
  },
  {
    ticker: 'QTS', name: 'QTS Realty Trust (Private)', sector: 'data-center-reits',
    price: 0, change: 0, changePct: 0, marketCap: '—', peRatio: null, yearHigh: 0, yearLow: 0,
    aiRelevance: 'Acquired by Blackstone in 2021 for $10B. Now Blackstone\'s flagship data center platform with massive AI-ready expansion pipeline. Illustrates the value private markets place on AI infrastructure.',
    description: 'QTS Realty Trust was a data center REIT acquired by Blackstone. It operates as one of the largest private data center platforms with significant hyperscale development activity.',
  },

  // ────────────────────────────────────────────────────────────
  // NETWORKING & INTERCONNECTS (10 stocks)
  // ────────────────────────────────────────────────────────────

  {
    ticker: 'ANET', name: 'Arista Networks', sector: 'networking',
    price: 98.50, change: 1.85, changePct: 1.91, marketCap: '$120.3B', peRatio: 42.6, yearHigh: 115.00, yearLow: 62.10,
    aiRelevance: 'Dominant supplier of high-speed ethernet switches for AI/ML clusters. Hyperscalers use Arista\'s 800G switches to connect thousands of GPUs in AI training networks.',
    description: 'Arista Networks provides cloud networking solutions using software-driven, cognitive cloud networking for large data center and campus environments.',
  },
  {
    ticker: 'CSCO', name: 'Cisco Systems', sector: 'networking',
    price: 60.20, change: 0.45, changePct: 0.75, marketCap: '$241B', peRatio: 18.5, yearHigh: 64.30, yearLow: 44.50,
    aiRelevance: 'Largest networking equipment company. Silicon One chips and Nexus switches power AI data center fabrics. Massive installed base drives upgrade cycle to AI-ready networking infrastructure.',
    description: 'Cisco designs, manufactures, and sells networking equipment, security, and collaboration solutions for enterprise and service provider markets worldwide.',
  },
  {
    ticker: 'JNPR', name: 'Juniper Networks', sector: 'networking',
    price: 38.60, change: 0.20, changePct: 0.52, marketCap: '$12.8B', peRatio: 24.3, yearHigh: 40.20, yearLow: 28.50,
    aiRelevance: 'AI-native networking OS and campus/data center switching. Being acquired by HPE — combined entity strengthens AI networking capabilities across campus and data center.',
    description: 'Juniper Networks provides AI-driven enterprise networking solutions including switches, routers, and security products for campus, branch, and data center environments.',
  },
  {
    ticker: 'CIEN', name: 'Ciena Corporation', sector: 'networking',
    price: 72.40, change: 1.60, changePct: 2.26, marketCap: '$10.6B', peRatio: 30.2, yearHigh: 83.50, yearLow: 40.80,
    aiRelevance: 'Leading optical networking equipment supplier. Provides coherent optical solutions for high-bandwidth data center interconnects. AI training clusters require massive optical transport capacity.',
    description: 'Ciena provides networking systems, services, and software for optical and packet networking, enabling high-capacity data transport for data center and telecom operators.',
  },
  {
    ticker: 'LITE', name: 'Lumentum Holdings', sector: 'networking',
    price: 78.50, change: 2.30, changePct: 3.02, marketCap: '$5.3B', peRatio: null, yearHigh: 91.20, yearLow: 38.70,
    aiRelevance: 'Manufactures lasers and photonic components for data center optical transceivers. Every high-speed connection between AI servers requires Lumentum\'s optical technology.',
    description: 'Lumentum designs and manufactures optical and photonic products for telecommunications, data center, and industrial applications.',
  },
  {
    ticker: 'COHR', name: 'Coherent Corp.', sector: 'networking',
    price: 88.20, change: 3.45, changePct: 4.07, marketCap: '$13.8B', peRatio: null, yearHigh: 100.50, yearLow: 43.80,
    aiRelevance: 'Major supplier of optical transceivers (800G/1.6T) and VCSELs for AI data center connectivity. Datacom revenue surging as AI cluster builds require exponentially more optical interconnects.',
    description: 'Coherent provides optical and photonic solutions including transceivers, lasers, and engineered materials for data center, telecom, and industrial markets.',
  },
  {
    ticker: 'INFN', name: 'Infinera Corporation', sector: 'networking',
    price: 6.85, change: 0.15, changePct: 2.24, marketCap: '$1.5B', peRatio: null, yearHigh: 7.80, yearLow: 3.90,
    aiRelevance: 'Designs vertically integrated optical engines for high-capacity networks. Being acquired by Nokia — strengthens optical networking for AI-driven bandwidth demands.',
    description: 'Infinera provides semiconductor-based optical networking systems for data center interconnect, metro, and long-haul transport networks.',
  },
  {
    ticker: 'CALX', name: 'Calix Inc.', sector: 'networking',
    price: 37.80, change: 0.55, changePct: 1.48, marketCap: '$2.5B', peRatio: null, yearHigh: 45.60, yearLow: 27.30,
    aiRelevance: 'Provides cloud-based networking platforms for broadband service providers. AI-driven network analytics and edge computing support growing demand for rural broadband and data distribution.',
    description: 'Calix provides cloud and software platforms, systems, and managed services for broadband service providers to simplify operations and optimize subscriber experiences.',
  },
  {
    ticker: 'FFIV', name: 'F5 Inc.', sector: 'networking',
    price: 268.40, change: -1.80, changePct: -0.67, marketCap: '$16.1B', peRatio: 26.8, yearHigh: 285.60, yearLow: 159.30,
    aiRelevance: 'Application delivery and security for AI workloads. Load balancing and traffic management become more critical as AI inference is distributed across multiple endpoints.',
    description: 'F5 provides application security and delivery solutions that ensure applications are fast, available, and secure across multi-cloud and hybrid environments.',
  },
  {
    ticker: 'AAOI', name: 'Applied Optoelectronics', sector: 'networking',
    price: 28.90, change: 1.85, changePct: 6.84, marketCap: '$1.1B', peRatio: null, yearHigh: 35.60, yearLow: 9.80,
    aiRelevance: 'Manufactures fiber-optic transceivers for data center interconnects. Pure-play beneficiary of AI data center optical networking buildout with 400G and 800G transceiver ramp.',
    description: 'Applied Optoelectronics designs and manufactures fiber-optic networking products including optical transceivers, lasers, and components for data center and CATV applications.',
  },

  // ────────────────────────────────────────────────────────────
  // POWER & COOLING (13 stocks)
  // ────────────────────────────────────────────────────────────

  {
    ticker: 'VRT', name: 'Vertiv Holdings', sector: 'power-cooling',
    price: 118.75, change: 4.20, changePct: 3.67, marketCap: '$44.5B', peRatio: 45.8, yearHigh: 132.00, yearLow: 52.30,
    aiRelevance: 'Leading provider of liquid cooling and power management for AI data centers. Direct beneficiary of GPU power density requiring advanced thermal solutions like rear-door heat exchangers and direct-to-chip liquid cooling.',
    description: 'Vertiv designs critical digital infrastructure technologies for data centers including power management, thermal management, and IT infrastructure solutions.',
  },
  {
    ticker: 'ETN', name: 'Eaton Corporation', sector: 'power-cooling',
    price: 325.40, change: 2.10, changePct: 0.65, marketCap: '$130.1B', peRatio: 34.5, yearHigh: 355.00, yearLow: 230.50,
    aiRelevance: 'Leading supplier of UPS systems, switchgear, and power distribution units for data centers. Every AI server rack requires Eaton\'s electrical infrastructure for reliable power delivery.',
    description: 'Eaton is a power management company providing energy-efficient solutions for electrical, hydraulic, and mechanical applications across data center and industrial markets.',
  },
  {
    ticker: 'EMR', name: 'Emerson Electric', sector: 'power-cooling',
    price: 118.60, change: 0.85, changePct: 0.72, marketCap: '$68.4B', peRatio: 28.7, yearHigh: 128.30, yearLow: 90.50,
    aiRelevance: 'Provides automation, power, and cooling solutions for data center infrastructure. Copeland compressor technology is used in precision cooling systems for AI compute facilities.',
    description: 'Emerson Electric provides automation solutions and commercial/residential technology for data centers, industrial, and building markets worldwide.',
  },
  {
    ticker: 'GEV', name: 'GE Vernova', sector: 'power-cooling',
    price: 378.50, change: 5.60, changePct: 1.50, marketCap: '$104B', peRatio: 58.2, yearHigh: 410.20, yearLow: 115.00,
    aiRelevance: 'Major gas turbine and grid equipment manufacturer. AI data centers require massive power generation — a single large AI campus can consume 100+ MW, driving orders for GE Vernova turbines and grid infrastructure.',
    description: 'GE Vernova provides power generation, wind energy, and electrification equipment and services. Spun off from General Electric to focus on the energy transition.',
  },
  {
    ticker: 'VST', name: 'Vistra Corp.', sector: 'power-cooling',
    price: 148.20, change: 3.80, changePct: 2.63, marketCap: '$50.5B', peRatio: 17.4, yearHigh: 174.82, yearLow: 48.50,
    aiRelevance: 'Largest competitive power generator in the US with nuclear assets. Signing long-term power purchase agreements (PPAs) directly with hyperscalers for AI data center baseload power.',
    description: 'Vistra is an integrated retail electricity and power generation company operating across the US, with a growing portfolio of nuclear, natural gas, and renewable assets.',
  },
  {
    ticker: 'CEG', name: 'Constellation Energy', sector: 'power-cooling',
    price: 262.80, change: 4.50, changePct: 1.74, marketCap: '$83.4B', peRatio: 28.6, yearHigh: 313.48, yearLow: 119.00,
    aiRelevance: 'Largest US nuclear fleet operator. Signed landmark 20-year PPA to restart Three Mile Island Unit 1 for Microsoft AI data center power. Nuclear provides 24/7 carbon-free baseload for AI workloads.',
    description: 'Constellation Energy is the nation\'s largest producer of carbon-free energy, operating the largest US fleet of nuclear power plants alongside solar, wind, and natural gas assets.',
  },
  {
    ticker: 'NRG', name: 'NRG Energy', sector: 'power-cooling',
    price: 92.30, change: 1.20, changePct: 1.32, marketCap: '$19.8B', peRatio: 15.3, yearHigh: 102.40, yearLow: 60.20,
    aiRelevance: 'Integrated power company with generation assets positioned near major data center markets. Provides behind-the-meter power solutions for data center operators.',
    description: 'NRG Energy is an integrated energy company producing and selling electricity and related products to residential, commercial, and industrial customers.',
  },
  {
    ticker: 'NEE', name: 'NextEra Energy', sector: 'power-cooling',
    price: 73.40, change: 0.30, changePct: 0.41, marketCap: '$150.8B', peRatio: 21.5, yearHigh: 86.10, yearLow: 60.50,
    aiRelevance: 'World\'s largest generator of wind and solar energy. Hyperscalers demand renewable PPAs for sustainability commitments — NextEra is primary supplier of renewable energy to data center campuses.',
    description: 'NextEra Energy generates, transmits, distributes, and sells electric power. It is the world\'s largest generator of renewable energy from wind and sun.',
  },
  {
    ticker: 'GNRC', name: 'Generac Holdings', sector: 'power-cooling',
    price: 158.70, change: -1.40, changePct: -0.87, marketCap: '$9.4B', peRatio: 22.8, yearHigh: 185.40, yearLow: 106.20,
    aiRelevance: 'Supplies backup power systems including generators and energy storage for data center resilience. AI workloads demand 99.999% uptime — backup power is non-negotiable infrastructure.',
    description: 'Generac designs and manufactures power generation equipment, energy storage systems, and related technologies for residential, commercial, and industrial applications.',
  },
  {
    ticker: 'POWL', name: 'Powell Industries', sector: 'power-cooling',
    price: 248.60, change: 6.40, changePct: 2.64, marketCap: '$2.9B', peRatio: 18.9, yearHigh: 310.00, yearLow: 98.50,
    aiRelevance: 'Manufactures custom switchgear and power control equipment for data centers. Record backlog driven by AI data center construction requiring medium-voltage power distribution.',
    description: 'Powell Industries designs, manufactures, and services custom-engineered equipment for electrical power distribution, control, and monitoring in industrial facilities.',
  },
  {
    ticker: 'AES', name: 'AES Corporation', sector: 'power-cooling',
    price: 15.80, change: 0.25, changePct: 1.61, marketCap: '$10.6B', peRatio: 9.8, yearHigh: 21.30, yearLow: 12.10,
    aiRelevance: 'Renewable energy and energy storage developer supplying clean power to data centers. Partnering with hyperscalers on co-located renewable + storage solutions for AI facilities.',
    description: 'AES Corporation is a diversified energy company that generates and distributes electric power, with a growing focus on renewable energy and battery storage.',
  },
  {
    ticker: 'FSLR', name: 'First Solar', sector: 'power-cooling',
    price: 186.40, change: -2.80, changePct: -1.48, marketCap: '$19.9B', peRatio: 14.2, yearHigh: 306.77, yearLow: 140.10,
    aiRelevance: 'Largest US solar panel manufacturer. Data center developers increasingly pair solar installations with AI campuses. Domestic manufacturing provides supply chain security for US data center power.',
    description: 'First Solar manufactures solar photovoltaic modules using advanced thin-film semiconductor technology, primarily serving utility-scale solar projects in the US.',
  },
  {
    ticker: 'CARR', name: 'Carrier Global', sector: 'power-cooling',
    price: 72.80, change: 0.55, changePct: 0.76, marketCap: '$61.2B', peRatio: 26.4, yearHigh: 78.50, yearLow: 52.30,
    aiRelevance: 'Commercial HVAC leader with data center cooling solutions. Chiller and air handling technology supports traditional and hybrid cooling approaches for high-density AI compute.',
    description: 'Carrier Global provides HVAC, refrigeration, fire, and security solutions worldwide. Its commercial HVAC systems are widely used in data center cooling applications.',
  },

  // ────────────────────────────────────────────────────────────
  // CONSTRUCTION & ENGINEERING (8 stocks)
  // ────────────────────────────────────────────────────────────

  {
    ticker: 'PWR', name: 'Quanta Services', sector: 'construction',
    price: 312.80, change: 1.45, changePct: 0.47, marketCap: '$46.2B', peRatio: 28.3, yearHigh: 340.00, yearLow: 215.60,
    aiRelevance: 'Largest US electrical infrastructure contractor. Builds power transmission lines, substations, and electrical systems for AI data centers. Record backlog driven by data center power interconnection.',
    description: 'Quanta Services provides specialty contracting services for electric power, underground utility, and infrastructure, serving utilities, renewable energy, and commercial/industrial markets.',
  },
  {
    ticker: 'EME', name: 'EMCOR Group', sector: 'construction',
    price: 448.60, change: 3.20, changePct: 0.72, marketCap: '$21.2B', peRatio: 22.5, yearHigh: 490.30, yearLow: 292.00,
    aiRelevance: 'Electrical and mechanical construction contractor with major data center practice. Installs power distribution, cooling systems, and fire protection in AI data center facilities.',
    description: 'EMCOR Group provides electrical and mechanical construction, industrial, and building services for commercial, industrial, utility, and institutional customers.',
  },
  {
    ticker: 'MTZ', name: 'MasTec Inc.', sector: 'construction',
    price: 142.30, change: 1.80, changePct: 1.28, marketCap: '$10.9B', peRatio: 25.6, yearHigh: 158.70, yearLow: 86.40,
    aiRelevance: 'Infrastructure contractor building telecommunications networks, power lines, and renewable energy facilities that support AI data center development and connectivity.',
    description: 'MasTec is a leading infrastructure engineering and construction company serving telecommunications, energy, utility, and government customers across North America.',
  },
  {
    ticker: 'FIX', name: 'Comfort Systems USA', sector: 'construction',
    price: 420.50, change: 5.40, changePct: 1.30, marketCap: '$15.1B', peRatio: 30.2, yearHigh: 465.20, yearLow: 240.50,
    aiRelevance: 'HVAC and mechanical contractor specializing in data center cooling installations. Installs chilled water systems, air handlers, and liquid cooling infrastructure for AI compute facilities.',
    description: 'Comfort Systems USA provides mechanical, electrical, and plumbing installation, maintenance, and related services for commercial and industrial buildings including data centers.',
  },
  {
    ticker: 'DY', name: 'Dycom Industries', sector: 'construction',
    price: 178.90, change: 2.10, changePct: 1.19, marketCap: '$5.1B', peRatio: 20.8, yearHigh: 196.40, yearLow: 114.60,
    aiRelevance: 'Largest specialty contractor for fiber optic cable installation. Every data center requires high-capacity fiber connections — Dycom builds the physical fiber networks linking AI infrastructure.',
    description: 'Dycom Industries provides specialty contracting services for telecommunications providers, installing, maintaining, and connecting fiber optic and copper cable networks.',
  },
  {
    ticker: 'APG', name: 'APi Group', sector: 'construction',
    price: 36.80, change: 0.30, changePct: 0.82, marketCap: '$8.8B', peRatio: 28.4, yearHigh: 42.50, yearLow: 29.80,
    aiRelevance: 'Fire protection and safety services contractor with growing data center specialization. AI data centers require advanced fire suppression systems to protect billions in GPU infrastructure.',
    description: 'APi Group provides safety and specialty services including fire protection, HVAC, and infrastructure services for commercial and industrial buildings.',
  },
  {
    ticker: 'MYRG', name: 'MYR Group', sector: 'construction',
    price: 148.20, change: 1.60, changePct: 1.09, marketCap: '$2.5B', peRatio: 18.5, yearHigh: 186.40, yearLow: 116.20,
    aiRelevance: 'Electrical construction contractor building substations and power distribution for data centers. Backlog growing as utilities rush to add capacity for AI data center power demands.',
    description: 'MYR Group provides electrical construction services to utilities, commercial, and industrial customers, specializing in transmission, distribution, and substation work.',
  },
  {
    ticker: 'PRIM', name: 'Primoris Services', sector: 'construction',
    price: 62.40, change: 0.80, changePct: 1.30, marketCap: '$3.4B', peRatio: 15.2, yearHigh: 68.50, yearLow: 36.80,
    aiRelevance: 'Infrastructure contractor providing power delivery, underground utilities, and industrial construction. Supports data center site development and electrical infrastructure buildout.',
    description: 'Primoris Services provides infrastructure construction and maintenance services for utilities, energy, and civil markets across the United States and Canada.',
  },

  // ────────────────────────────────────────────────────────────
  // SERVERS & STORAGE (8 stocks)
  // ────────────────────────────────────────────────────────────

  {
    ticker: 'SMCI', name: 'Super Micro Computer', sector: 'servers',
    price: 34.80, change: 1.90, changePct: 5.78, marketCap: '$20.5B', peRatio: 14.2, yearHigh: 118.81, yearLow: 17.25,
    aiRelevance: 'Leading AI server manufacturer with the fastest time-to-market for NVIDIA GPU-based server platforms. Ships pre-configured AI server racks with integrated liquid cooling. Speed advantage in a supply-constrained market.',
    description: 'Super Micro Computer designs and manufactures high-performance server and storage solutions optimized for AI, cloud, and enterprise workloads with a focus on green computing.',
  },
  {
    ticker: 'DELL', name: 'Dell Technologies', sector: 'servers',
    price: 118.60, change: 2.40, changePct: 2.06, marketCap: '$83.2B', peRatio: 22.8, yearHigh: 179.70, yearLow: 91.50,
    aiRelevance: 'Major enterprise AI server supplier with PowerEdge platforms for NVIDIA GPUs. Dell\'s enterprise sales relationships and services capabilities make it a preferred AI infrastructure vendor for enterprises.',
    description: 'Dell Technologies provides servers, storage, networking, PCs, and related services. Its Infrastructure Solutions Group is a leading supplier of enterprise AI server platforms.',
  },
  {
    ticker: 'HPE', name: 'Hewlett Packard Enterprise', sector: 'servers',
    price: 20.80, change: 0.35, changePct: 1.71, marketCap: '$28.6B', peRatio: 14.5, yearHigh: 24.60, yearLow: 15.50,
    aiRelevance: 'ProLiant servers and Cray supercomputer heritage position HPE for large-scale AI deployments. GreenLake cloud platform delivers AI infrastructure as a service to enterprises.',
    description: 'Hewlett Packard Enterprise provides servers, storage, networking, and edge-to-cloud solutions for enterprise IT, including high-performance computing and AI platforms.',
  },
  {
    ticker: 'IBM', name: 'International Business Machines', sector: 'servers',
    price: 258.40, change: -1.20, changePct: -0.46, marketCap: '$239B', peRatio: 32.5, yearHigh: 264.80, yearLow: 164.30,
    aiRelevance: 'Enterprise AI platform with WatsonX and hybrid cloud infrastructure. Power10 processors and Z-series mainframes handle critical AI inference workloads for regulated industries.',
    description: 'IBM provides hybrid cloud, AI, consulting, and infrastructure solutions. Its enterprise AI platform and consulting services help organizations deploy AI at scale.',
  },
  {
    ticker: 'NTAP', name: 'NetApp Inc.', sector: 'servers',
    price: 112.30, change: 0.90, changePct: 0.81, marketCap: '$23.5B', peRatio: 22.6, yearHigh: 132.50, yearLow: 90.40,
    aiRelevance: 'Enterprise storage leader with AI-optimized data management. AI training requires massive datasets — NetApp provides the storage infrastructure and data pipelines feeding AI workloads.',
    description: 'NetApp provides cloud-led, data-centric software and systems for storage and data management across hybrid and multi-cloud environments.',
  },
  {
    ticker: 'PSTG', name: 'Pure Storage', sector: 'servers',
    price: 58.40, change: 1.60, changePct: 2.82, marketCap: '$18.9B', peRatio: 95.4, yearHigh: 70.30, yearLow: 38.50,
    aiRelevance: 'All-flash storage arrays optimized for AI workloads. FlashBlade provides the high-throughput, low-latency storage AI training pipelines need. NVIDIA DGX SuperPOD reference architecture includes Pure Storage.',
    description: 'Pure Storage provides all-flash data storage hardware and software products, delivering fast, reliable storage solutions optimized for AI, analytics, and modern applications.',
  },
  {
    ticker: 'DDN', name: 'DataDirect Networks', sector: 'servers',
    price: 0, change: 0, changePct: 0, marketCap: '—', peRatio: null, yearHigh: 0, yearLow: 0,
    aiRelevance: 'Private company providing AI-optimized parallel file storage. Powers some of the world\'s largest AI training clusters. NVIDIA\'s DGX SuperPOD reference architecture includes DDN storage.',
    description: 'DDN is a private company providing high-performance data storage and management solutions for AI, HPC, and enterprise workloads at massive scale.',
  },
  {
    ticker: 'WDC', name: 'Western Digital', sector: 'servers',
    price: 54.20, change: 0.70, changePct: 1.31, marketCap: '$18.8B', peRatio: 18.5, yearHigh: 80.50, yearLow: 40.30,
    aiRelevance: 'Major storage drive manufacturer. AI data lakes require petabytes of capacity — Western Digital HDDs and SSDs provide the bulk storage layer in AI data center architectures.',
    description: 'Western Digital provides data storage solutions including HDDs and SSDs for data centers, client devices, and consumer applications.',
  },

  // ────────────────────────────────────────────────────────────
  // HYPERSCALERS & CLOUD (8 stocks)
  // ────────────────────────────────────────────────────────────

  {
    ticker: 'MSFT', name: 'Microsoft Corporation', sector: 'hyperscalers',
    price: 415.60, change: 2.80, changePct: 0.68, marketCap: '$3.09T', peRatio: 34.8, yearHigh: 468.35, yearLow: 385.58,
    aiRelevance: 'Largest AI infrastructure investor globally. Azure cloud is the primary platform for OpenAI\'s GPT models. Spending $80B+ annually on AI-capable data center construction and GPU procurement.',
    description: 'Microsoft provides cloud computing (Azure), productivity software, and AI services. Its partnership with OpenAI makes Azure the leading platform for large-scale AI deployment.',
  },
  {
    ticker: 'AMZN', name: 'Amazon.com Inc.', sector: 'hyperscalers',
    price: 228.30, change: 3.10, changePct: 1.38, marketCap: '$2.41T', peRatio: 38.5, yearHigh: 242.52, yearLow: 171.00,
    aiRelevance: 'AWS is the world\'s largest cloud platform by revenue. Building custom AI chips (Trainium, Inferentia) and offering NVIDIA GPU instances. Investing $75B+ in AI infrastructure annually.',
    description: 'Amazon operates AWS, the world\'s largest cloud computing platform, alongside e-commerce and digital advertising. AWS provides the infrastructure for a massive portion of global AI workloads.',
  },
  {
    ticker: 'GOOGL', name: 'Alphabet Inc.', sector: 'hyperscalers',
    price: 188.40, change: 1.50, changePct: 0.80, marketCap: '$2.32T', peRatio: 22.6, yearHigh: 207.05, yearLow: 150.22,
    aiRelevance: 'Google Cloud Platform and custom TPU AI chips. Designs its own AI accelerators in-house and operates one of the largest AI research operations globally. Massive data center expansion for Gemini AI models.',
    description: 'Alphabet is the parent company of Google, operating the Google Cloud Platform, Google Search, YouTube, and Waymo alongside leading AI research through DeepMind.',
  },
  {
    ticker: 'META', name: 'Meta Platforms', sector: 'hyperscalers',
    price: 612.50, change: 4.20, changePct: 0.69, marketCap: '$1.55T', peRatio: 24.8, yearHigh: 638.40, yearLow: 414.50,
    aiRelevance: 'Building one of the world\'s largest AI training infrastructures. Committed to open-source Llama models requiring massive GPU clusters. Planning 2GW+ data center campus — among the largest ever built.',
    description: 'Meta Platforms operates Facebook, Instagram, WhatsApp, and is investing heavily in AI and metaverse technologies, building one of the world\'s largest AI computing infrastructures.',
  },
  {
    ticker: 'ORCL', name: 'Oracle Corporation', sector: 'hyperscalers',
    price: 178.50, change: 2.60, changePct: 1.48, marketCap: '$497B', peRatio: 38.2, yearHigh: 198.31, yearLow: 112.00,
    aiRelevance: 'Fastest-growing cloud infrastructure provider driven by AI demand. Building hyperscale AI data centers with NVIDIA GPU supercluster architecture. Cloud capex accelerating rapidly.',
    description: 'Oracle provides cloud infrastructure, database, and enterprise software. Oracle Cloud Infrastructure (OCI) is gaining share in AI workloads with competitive GPU cloud pricing.',
  },
  {
    ticker: 'CRM', name: 'Salesforce Inc.', sector: 'hyperscalers',
    price: 332.40, change: -2.10, changePct: -0.63, marketCap: '$319B', peRatio: 48.5, yearHigh: 364.70, yearLow: 215.40,
    aiRelevance: 'Enterprise AI platform with Einstein and Agentforce products. Largest enterprise SaaS company deploying AI agents — drives downstream demand for cloud infrastructure and GPU compute.',
    description: 'Salesforce provides cloud-based CRM and enterprise AI solutions. Its Agentforce platform is driving enterprise adoption of AI agents across sales, service, and marketing.',
  },
  {
    ticker: 'SNOW', name: 'Snowflake Inc.', sector: 'hyperscalers',
    price: 178.20, change: 3.40, changePct: 1.95, marketCap: '$58.2B', peRatio: null, yearHigh: 237.24, yearLow: 107.13,
    aiRelevance: 'Data cloud platform enabling enterprise AI by providing the unified data layer AI models need. Cortex AI features let enterprises run LLMs directly on their Snowflake data without moving it.',
    description: 'Snowflake provides a cloud-based data platform for data warehousing, data lakes, data engineering, and AI/ML workloads across multiple clouds.',
  },
  {
    ticker: 'DDOG', name: 'Datadog Inc.', sector: 'hyperscalers',
    price: 132.60, change: 1.80, changePct: 1.38, marketCap: '$43.8B', peRatio: 285.0, yearHigh: 155.40, yearLow: 98.50,
    aiRelevance: 'Observability platform monitoring AI infrastructure performance. As companies deploy AI workloads, they need Datadog to monitor GPU utilization, model latency, and infrastructure health.',
    description: 'Datadog provides cloud-scale monitoring and analytics for infrastructure, applications, logs, and AI workloads, enabling organizations to optimize their cloud and AI deployments.',
  },
];

// ── Helper functions ───────────────────────────────────────────

export function getStockByTicker(ticker: string): Stock | undefined {
  return SAMPLE_STOCKS.find(s => s.ticker === ticker.toUpperCase());
}

export function getStocksBySector(sectorId: string): Stock[] {
  return SAMPLE_STOCKS.filter(s => s.sector === sectorId);
}

export function getActiveStocks(): Stock[] {
  return SAMPLE_STOCKS.filter(s => s.price > 0);
}

export function getSectorStats(sectorId: string) {
  const stocks = getStocksBySector(sectorId).filter(s => s.price > 0);
  if (stocks.length === 0) return { count: 0, avgChange: 0 };
  const avgChange = stocks.reduce((acc, s) => acc + s.changePct, 0) / stocks.length;
  return { count: stocks.length, avgChange };
}
