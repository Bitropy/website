# TODO - Website Development

## Subpages to Create

### Use Cases Pages
- [ ] **Use Cases Main Page** (`/use-cases`)
  - Overview of different use cases for the services
  - Grid layout showcasing different scenarios
  - Clear navigation to individual use case pages

- [ ] **Individual Use Case Pages** (`/use-cases/[slug]`)
  - Fractional CTO services
  - Security auditing and compliance
  - Web3 and blockchain consulting
  - Technical due diligence
  - Architecture and system design
  - Team scaling and recruitment

### Services Pages
- [ ] **Services Main Page** (`/services`)
  - Comprehensive overview of all services offered
  - Service categories and descriptions
  - Pricing models or consultation information
  - Call-to-action for each service

- [ ] **Individual Service Pages** (`/services/[slug]`)
  - **Fractional CTO Services**
    - Strategic technology leadership
    - Technical roadmap development
    - Team management and hiring
  - **Security & Compliance**
    - SOC2 Type I & II auditing
    - Security assessments
    - Compliance consulting
  - **Web3 & Blockchain**
    - Smart contract auditing
    - DeFi protocol security
    - Tokenomics consulting
  - **Technical Consulting**
    - Architecture reviews
    - Code audits
    - Performance optimization
  - **Due Diligence**
    - Technical assessment for investments
    - Risk analysis
    - Technology stack evaluation

## Implementation Tasks

### Page Structure
- [ ] Create `/app/use-cases/page.tsx` - main use cases page
- [ ] Create `/app/use-cases/[slug]/page.tsx` - dynamic use case pages
- [ ] Create `/app/services/page.tsx` - main services page
- [ ] Create `/app/services/[slug]/page.tsx` - dynamic service pages

### Content Management
- [ ] Create MDX content files in `/content/use-cases/`
- [ ] Create MDX content files in `/content/services/`
- [ ] Update `lib/mdx.ts` to handle use-cases and services content
- [ ] Add metadata and SEO optimization for each page

### Navigation & UX
- [ ] Update main navigation to include Use Cases and Services
- [ ] Add breadcrumb navigation for subpages
- [ ] Create consistent page layouts and components
- [ ] Add cross-linking between related use cases and services

### Components to Create
- [ ] `ServiceCard.tsx` - for displaying service summaries
- [ ] `UseCaseCard.tsx` - for displaying use case previews
- [ ] `ServiceHero.tsx` - hero section for service pages
- [ ] `UseCaseHero.tsx` - hero section for use case pages
- [ ] `CallToAction.tsx` - reusable CTA component
- [ ] `ServiceComparison.tsx` - comparison table for services

### Content Strategy
- [ ] Write compelling copy for each use case
- [ ] Define clear service offerings and benefits
- [ ] Create case studies and examples
- [ ] Add testimonials and social proof
- [ ] Include pricing information or consultation CTAs

### SEO & Marketing
- [ ] Optimize meta descriptions and titles
- [ ] Add structured data markup
- [ ] Create social media preview images
- [ ] Set up analytics tracking for new pages
- [ ] Plan internal linking strategy

## Future Enhancements
- [ ] Add filtering and search functionality
- [ ] Create service calculator or estimator
- [ ] Add client portal or service request forms
- [ ] Implement booking system for consultations
- [ ] Add blog integration for related content

## Notes
- Consider the current brand colors (purple #7700FF, pink #FF009D)
- Maintain consistency with existing design system
- Ensure mobile responsiveness for all new pages
- Follow existing file structure and naming conventions
- Use the existing UI components where possible
