import useFootnote from "./Footnote.hooks";
import HashLink from "common/atoms/link/HashLink";

import styled from "@emotion/styled";
import { colors } from "style.types";

const Layout = styled.span`
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  color: ${colors.linkPrimary};
`;

const FootnoteReference = () => {
  const { index, refId, defId } = useFootnote();
  if (!index) return null;

  return (
    <Layout id={refId}>
      <HashLink href={`#${defId}`}>
        <sup>{index}</sup>
      </HashLink>
    </Layout>
  );
};

export default FootnoteReference;
