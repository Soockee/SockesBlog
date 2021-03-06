import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import prism from '../styles/prism';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import Thesis from '../../static/pdf/thesis.pdf';

const WrapperProfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${prism};
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1.15rem;
    line-height: 2;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: black;
    box-shadow: inset 0 -2px 0 ${props => props.theme.colors.primary.base};
    border-bottom: 1px solid ${props => props.theme.colors.primary.base};
    transition: ${props => props.theme.transitions.default.transition};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => props.theme.colors.primary.base};
      color: black;
    }
  }
  h1 {
    margin-top: 3rem;
  }
  h2 {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
`;
const WrapperText = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  padding: 5px;
`;

const InformationText = styled.div`
  position: relative;
  margin: 5px;
`;

const Profil = () => {
  return (
    <StaticQuery
      query={graphql`
        query Profileimage {
          file(relativePath: { eq: "profil.png" }) {
            childImageSharp {
              fixed(width: 256, height: 256) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <Wrapper>
          <Img fixed={data.file.childImageSharp.fixed}></Img>
          <WrapperProfil>
            <h2 className="AboutName">Simon Stockhause</h2>
          </WrapperProfil>
          <WrapperText>
            <InformationText>
              <ul>
                <li>
                  Bachelorabschluss an der Technischen Hochschule Mittelhessen
                </li>
                <ul>
                  <li>
                    Abschlussarbeit: Generierung und Ordnung von Events{' '}
                    <br></br>in verteilten Systemen mit asynchroner
                    Kommunikation
                  </li>
                  <li>
                    <a href={Thesis}> Link zur Bachelorarbeit</a>
                  </li>
                </ul>
                <li>
                  Masterstudent an der Technischen Hochschule Mittelhessen
                </li>
              </ul>
            </InformationText>
            <InformationText>
              <ul>
                <li>Das mach ich ab und zu...</li>
                <ul>
                  <li>Cloudcomputing</li>
                  <li>Infrastructure as Code</li>
                  <li>Observability von (verteilten) Computersystemen</li>
                  <li>Computer Vision</li>
                  <li>Unreal Engine </li>
                  <li>Gaming</li>
                  <li>Okinawa Goju Ryu Karate / Jiu Jitsu / Hapkido</li>
                  <li>Bass / Gitarre</li>
                </ul>
              </ul>
            </InformationText>
          </WrapperText>
        </Wrapper>
      )}
    />
  );
};
export default Profil;
