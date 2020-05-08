import styled from '@emotion/styled'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 48px;

  @media (max-width: 840px) {
    & {
      padding: 0 32px;
    }
  }

  @media (max-width: 640px) {
    & {
      padding: 0 16px;
    }
  }
`

export default PageContainer
