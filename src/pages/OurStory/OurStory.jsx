import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";
import { extraSmall, large, small, tiny } from "../../breakpoints";
import Title from "../../components/Title";
import Navigation from "../../Layout/Navigation/Navigation";
import SharedDetails from "../../components/Details";
import theme from "../../theme";

const Page = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
`;

const Content = styled.div`
  text-align: center;
  z-index: 10;
  margin-top: 61px;
  max-width: ${({ contentWidth }) =>
    contentWidth ? `${contentWidth}px` : "75%"};
`;

const BgColor = styled.div`
  background-color: ${theme.colors.purple};
  position: absolute;
  top: 0;
  height: ${(props) => props.height}px;
  width: 100%;
`;

const Details = styled(SharedDetails)`
  text-align: justify;
  width: 100%;
`;

export default function OurStory() {
  const [picOffset, setPicOffset] = useState(0);
  const isLargeScreen = useMediaQuery({ minWidth: large });
  const isSmallScreen = useMediaQuery({ minWidth: small });
  const isExtraSmallScreen = useMediaQuery({ minWidth: extraSmall });
  const isTinyScreen = useMediaQuery({ minWidth: tiny });

  const getContentWidth = () => {
    if (isLargeScreen) return 980;

    if (isSmallScreen) return 768;

    if (isExtraSmallScreen) return 550;

    return null;
  };

  const getPictureWidth = () => {
    if (isLargeScreen) return 980;

    if (isSmallScreen) return 768;

    if (isExtraSmallScreen) return 550;

    if (isTinyScreen) return 300;

    return 250;
  };

  const getPictureHeight = () => {
    if (isSmallScreen) return 550;

    return 350;
  };

  useEffect(() => {
    setPicOffset(document.getElementById("picture").offsetTop);
  });

  return (
    <Page>
      <BgColor height={picOffset + getPictureHeight() / 2} id="bgcolor" />
      <Navigation />
      <Content contentWidth={getContentWidth()}>
        <Title>Our Story</Title>
        <Details>
          They met in the fall of 2018. Rachel likes to tell the story that
          Jerridan opened the door for her on the first day of Bible study, and
          was immediately star struck. By the following spring, they were
          texting each other every day and going to &quot;group&quot; yoga
          classes each week. After one such class, Jerridan made the excuse that
          he had to pick up some things along Rachel&apos;s route, and offered
          to walk with her. Having no game at all, he told her straight out that
          he had a big crush on her. Rachel admitted she felt the same way. And
          so begins this love story.
        </Details>
        <CloudinaryImage publicId="engagement-shoot-18" id="picture">
          <Transformation
            height={getPictureHeight()}
            width={getPictureWidth()}
            crop="fill"
            gravity="faces"
            quality="100"
          />
        </CloudinaryImage>
        <Details>
          Throughout 2019, Rachel and Jerridan went on many adventures. From
          spending time on day hikes and portaging with friends, to watching
          movies (always alternating between rom-coms and sci-fi), to a magical
          trip to Disney World, time between them was never dull. When the
          pandemic hit in March 2020, they spent even more time together - and
          this showed them that they could really see a life shared together, no
          matter how mundane and locked-down life gets.
        </Details>
        <Details>
          On July 31, 2020, Rachel and Jerridan decided to take a day off work
          and go to a lake for some hiking and swimming (little did Rachel know,
          Jerridan had a ring hidden in his bag). When it was time to go home,
          Jerridan insisted that they hike a little more. Upon finding a quiet
          spot by a river, he pulled out his... phone and showed her a website
          he created with a timeline of their dating story. It ended with a
          caption saying “What will we do next?” Jerridan then pulled out the
          ring, got down on one knee and asked Rachel, &quot;will you marry
          me?&quot; Well, you all know the answer. Rachel was ecstatic and said
          a huge &quot;YES!&quot;.
        </Details>
        <Details>
          And now comes their wedding. They are so thankful for all their family
          and friends who are able to share in the day, whether in person or
          virtually. Planning during this time has been a bit of a struggle for
          the couple, but they are excited that no matter what the wedding day
          throws at them, it will be a fun and joyful day of celebrating their
          marriage and the rest of their lives together.
        </Details>
      </Content>
    </Page>
  );
}
