import React, { memo } from "react";
import styled from "styled-components";
import { Text, Link } from "@hackthenorth/north";

import siteCopy from "copy";
import { isWhiteSpaceLike } from "typescript";

const goldSponsors = siteCopy.sponsorsSection.sponsors.filter(
  sponsor => sponsor.tier === "gold"
);
const silverSponsors = siteCopy.sponsorsSection.sponsors.filter(
  sponsor => sponsor.tier === "silver"
);
const bronzeAndStartupSponsors = siteCopy.sponsorsSection.sponsors.filter(
  sponsor => sponsor.tier === "bronze" || sponsor.tier === "startup"
);
const platinumSponsors = siteCopy.sponsorsSection.sponsors.filter(
  sponsor => sponsor.tier === "platinum"
);

const partners = siteCopy.sponsorsSection.sponsors.filter(
  sponsor => sponsor.tier === "partner"
);

const sponsorHeights = {
  platinum: {
    h: 115,
    wm: 80
  },
  gold: {
    h: 100,
    wm: 70
  },
  silver: {
    h: 85,
    wm: 65
  },
  bronzeAndStartup: {
    h: 45,
    wm: 35
  },
  partner: {
    h: 45,
    wm: 35
  }
};

const SponsorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  box-sizing: inherit;

  margin: 30px 0;
`;

const SponsorItem = styled(Link)<{ tier: string }>`
  display: flex;
  position: relative;
  height: ${props => sponsorHeights[props.tier].h}px;
  width: ${props => (props.tier === "gold" ? "100%" : "unset")};
  padding: 40px;
  cursor: pointer;

  transition: opacity 250ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  ${props => props.theme.mediaQueries.tabletMobile`
    width: ${sponsorHeights[props.tier].wm}%;
    padding: 25px 0;
  `}
`;

const SponsorImg = styled.img`
  margin: auto;
  height: 100%;
  max-width: 100%;

  ${props => props.theme.mediaQueries.tabletMobile`
    height: unset;
    max-height: 100%;
  `}
`;

const SponsorsList = () => (
  <>
    <Text as="h3" variant="subheading" id="sponsors">
     <strong><big> Our sponsors</big></strong>
    </Text>

    <Text as="h1" variant="subheading">
    <h4> <small>Platinum sponsors</small> </h4>
  </Text>
    <SponsorContainer>
      {platinumSponsors.map(sponsor => (
        <SponsorItem key={sponsor.name} href={sponsor.link} newTab tier="platinum">
          <SponsorImg
            src={sponsor.imgSrc}
            alt={sponsor.name}
            title={sponsor.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
    <Text as="h1" variant="subheading">
    <h4><small>Gold sponsors </small></h4>
  </Text>
    <SponsorContainer>
      {goldSponsors.map(sponsor => (
        <SponsorItem key={sponsor.name} href={sponsor.link} newTab tier="gold">
          <SponsorImg
            src={sponsor.imgSrc}
            alt={sponsor.name}
            title={sponsor.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
    <SponsorContainer>
      {silverSponsors.map(sponsor => (
        <SponsorItem
          key={sponsor.name}
          href={sponsor.link}
          newTab
          tier="silver"
        >
          <SponsorImg
            src={sponsor.imgSrc}
            alt={sponsor.name}
            title={sponsor.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
    <SponsorContainer>
      {bronzeAndStartupSponsors.map(sponsor => (
        <SponsorItem
          key={sponsor.name}
          href={sponsor.link}
          newTab
          tier="bronzeAndStartup"
        >
          <SponsorImg
            src={sponsor.imgSrc}
            alt={sponsor.name}
            title={sponsor.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>

    
    <SponsorContainer>
      {partners.map(partner => (
        <SponsorItem
          key={partner.name}
          href={partner.link}
          newTab
          tier="partner"
        >
          <SponsorImg
            src={partner.imgSrc}
            alt={partner.name}
            title={partner.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
  </>
);

export default memo(SponsorsList);
