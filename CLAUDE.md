# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **INERVET Company Website** project - a corporate website for INERVET Co., Ltd, an AI pet healthcare service company. The project is currently in the **planning phase** with comprehensive documentation but no implementation yet.

**Company**: INERVET Co., Ltd (주식회사 이너벳)
**Product**: AI PetDoctor (AI 펫닥터) - Digital AI Pet Healthcare Service
**Target Audience**: Pet owners (general users) and investors

## Project Status

**Current Phase**: Planning & Documentation
**Next Phase**: Development (awaiting technology stack selection and implementation start)

## Key Documents

### 1. Website Planning Document
**Location**: `docs/inervet_website_plan.md`

This is the **primary reference document** containing:
- Complete sitemap structure
- Detailed page-by-page content specifications
- Target audience analysis (pet owners vs investors)
- Design direction and brand guidelines
- SEO and marketing strategy
- Development roadmap (Phase 1-3)
- All IR (Investor Relations) data and metrics

**Key IR Metrics to Use**:
- 18,000 consultations completed
- 98% satisfaction rate
- 25% retention rate
- TAM: 2.16 trillion KRW
- Target: 4x ROI within 3 years (400%)
- BEP projection: August 2026 (58x growth)

### 2. IR Presentation
**Location**: `docs/AI펫닥터-2.0_IR_3.4.1.1.pdf`

Original investor relations deck. The planning document (`inervet_website_plan.md`) has already extracted and organized all key information from this PDF.

## Website Structure (From Planning Doc)

```
Home
├── Service
│   ├── AI PetDoctor Overview
│   ├── Features (24/7 AI Vet, Nutrition, AIoT, DTx)
│   ├── Pricing Plans (4 tiers: 3,000 ~ 50,000 KRW/month)
│   └── App Download
├── Case Studies
├── Partnership (B2B)
├── About Us (Team & Vision)
├── Investor Relations (IR)
│   ├── Investment Highlights
│   ├── Market Analysis
│   ├── Business Model
│   ├── Traction & MVP Results
│   ├── Financial Projections
│   └── Roadmap (2024-2029)
├── News & Media
└── Contact
```

## Development Guidelines

### Dual-Target Approach
The website must serve **two distinct audiences** with different needs:

1. **General Users (Pet Owners)**
   - Focus: Service benefits, ease of use, trust building
   - CTA: App download, free trial signup
   - Tone: Friendly, reassuring, accessible

2. **Investors**
   - Focus: Data, metrics, ROI, market opportunity
   - CTA: IR deck download, meeting request
   - Tone: Professional, data-driven, growth-focused

### Design Principles
- **Primary Color**: Blue (#1E3A8A, #3B82F6) - trust, technology
- **Mobile-First**: Responsive design required
- **Data Visualization**: Heavy use of charts, graphs, infographics for IR section
- **Multilingual**: Korean primary, prepare for English/Japanese expansion

### Content Strategy
When writing content:
- Use data from `inervet_website_plan.md` (already extracted from IR deck)
- Pet-related content should emphasize 24/7 availability and personalized AI care
- Investor content should lead with metrics (98% satisfaction, 18K consultations, etc.)
- Emphasize "Software 3.0" positioning (AI revolution following Amazon/Airbnb model)

## Technology Stack Considerations

**Not yet decided** - when implementing, consider:
- SEO is critical (Korean market)
- Need CMS for blog/news sections
- IR dashboard should be interactive
- Forms needed: Contact, Investment inquiry, Partner application
- Analytics integration required (GA4, etc.)

## File Organization

```
inervet-web/
├── docs/                          # Documentation
│   ├── inervet_website_plan.md   # Master planning document
│   └── AI펫닥터-2.0_IR_3.4.1.1.pdf # Original IR deck
├── CLAUDE.md                      # This file
└── readme.md                      # (Currently empty)
```

## Common Questions

**Q: Where do I find content for the homepage?**
A: See `docs/inervet_website_plan.md` → "3. 페이지별 핵심 콘텐츠" → "1. 메인 페이지 (Home)"

**Q: What are the service pricing tiers?**
A: Four plans - Standard (3K), Standard+ (9.9K), Premium (25K), Premium+ (50K) KRW/month. Full details in planning doc → Service section.

**Q: What metrics should I highlight for investors?**
A: Priority order: 98% satisfaction → 18K consultations → 3-year 5x ROI → TAM 2.16T KRW → 58x growth to BEP

**Q: Is this website B2C or B2B?**
A: Both. B2C for pet owners, B2B for hospital/apartment partnerships, and IR for investors.

## Development Phases (Recommended)

From planning document:

**Phase 1 (1-2 months)**: MVP
- Home, Service, Pricing, Contact pages
- Mobile responsive
- Basic SEO

**Phase 2 (2-3 months)**: Growth
- IR section (critical for fundraising)
- Partnership pages
- Blog/CMS

**Phase 3 (3-4 months)**: Scale
- Team page
- Multilingual (EN/JP)
- Customer dashboard
- Chatbot integration

## Important Notes

- **No code exists yet** - this is a greenfield project
- All specifications are in Korean in the planning doc
- The planning doc is the single source of truth
- Company contact: dslee@inervet.com, 041-562-1118
- Website domain (planned): www.inervet.com
