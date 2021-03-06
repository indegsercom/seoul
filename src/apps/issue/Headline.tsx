import styled from "@emotion/styled";
import { mq } from "common/theme";
import { Issue } from "global.types";
import { colors } from "style.types";

const Box = styled.div`
  padding: 20px 0;

  ${mq("sm")} {
    padding: 20px 0;
  }

  padding-top: 0;
`;

const Title = styled.h1`
  color: ${colors.textBlack};
  font-size: 15px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.1px;
  margin: 0;
  word-break: keep-all;
`;

interface Props {
  issue: Issue;
}

const Headline: React.FC<Props> = ({ issue }) => {
  const { title } = issue;

  return (
    <Box>
      <Title>{title}</Title>
    </Box>
  );
};

export default Headline;
