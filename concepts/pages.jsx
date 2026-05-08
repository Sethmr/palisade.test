/* Standalone landing-page wrappers — full scrollable flow per concept */

const PageWrap = ({ children }) => (
  <div style={{ width: 1440, margin: '0 auto', background: '#F2EFE9', minHeight: '100vh' }}>
    {children}
  </div>
);

const PageA = () => (
  <PageWrap>
    <ConceptA_HeroDesktop />
    <ConceptA_StatBand />
    <ConceptA_Services />
    <ConceptA_Reviews />
    <ConceptA_Why />
    <PalFooter />
  </PageWrap>
);

const PageB = () => (
  <PageWrap>
    <ConceptB_HeroDesktop />
    <ConceptB_StatStrip />
    <ConceptB_PhotoStrip />
    <ConceptB_QA />
    <ConceptB_OwnerNote />
    <ConceptB_CompareTable />
    <ConceptB_Reviews />
    <PalFooter />
  </PageWrap>
);

const PageC = () => (
  <PageWrap>
    <ConceptC_HeroDesktop />
    <ConceptC_StatBand />
    <ConceptC_DuringInstall />
    <ConceptC_Services />
    <PalFooter />
  </PageWrap>
);

const PageD = () => (
  <PageWrap>
    <ConceptD_HeroDesktop />
    <ConceptD_StatBand />
    <ConceptD_Promise />
    <ConceptD_Reviews />
    <PalFooter />
  </PageWrap>
);

const PageE = () => (
  <PageWrap>
    <ConceptE_HeroDesktop />
    <ConceptE_Editorial />
    <ConceptE_CompareTable />
    <PalFooter />
  </PageWrap>
);

Object.assign(window, { PageA, PageB, PageC, PageD, PageE });
