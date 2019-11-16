import React from 'react'
import styled from 'styled-components'
import { IoIosMenu } from 'react-icons/io'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 0 15px 0 15px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  width: 100%;
`;

const HeaderLogo = () => {
  return (
    <div style={{ margin: '0 20px 0 0' }}>
      <img src='kyslogo_no_margin.svg' />
    </div>
  )
}

const RightIcons = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ float: 'right' }}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.649 13.156c.098.049.187.12.258.214a106.382 106.382 0 0 1 3.645 5.057c.087.13.129.276.129.42 0 1.364 1.028 2.903 1.511 2.903a.75.75 0 1 1 0 1.5c-1.372 0-2.808-2.013-2.991-3.985-.151.01-.333.021-.54.037-.652.051-1.304.124-1.909.222-1.052.17-1.84.402-2.18.649-.645.469-.913 1.18-.796 2.246a.75.75 0 1 1-1.491.162c-.172-1.57.295-2.816 1.406-3.622.589-.428 1.547-.71 2.822-.916a24.433 24.433 0 0 1 1.802-.217 103.309 103.309 0 0 0-2.395-3.278C2.538 14.377 1.75 13.466 1.75 12c0-1.059.451-1.818 1.203-2.234.208-.116.417-.196.623-.25C3.803 3.893 6.973.75 11.998.75c5.028 0 8.199 3.142 8.426 8.766.206.054.415.134.623.25.751.416 1.203 1.175 1.203 2.234 0 1.466-.789 2.377-2.17 2.548a103.31 103.31 0 0 0-2.396 3.278c.614.052 1.225.124 1.803.217 1.274.206 2.233.488 2.821.916 1.111.806 1.578 2.051 1.407 3.622a.75.75 0 1 1-1.491-.162c.116-1.066-.151-1.777-.797-2.246-.34-.247-1.128-.48-2.18-.65a23.623 23.623 0 0 0-1.91-.22 28.03 28.03 0 0 0-.538-.038c-.184 1.972-1.62 3.985-2.992 3.985a.75.75 0 1 1 0-1.5c.484 0 1.512-1.539 1.512-2.902 0-.145.041-.292.129-.421a106.382 106.382 0 0 1 3.644-5.057.749.749 0 0 1 .574-.294c.806-.023 1.084-.302 1.084-1.076 0-.83-.443-1.076-1.063-1.076a.75.75 0 0 1-.75-.75c0-.411-.016-.807-.047-1.187-1.7.041-3.213-.454-4.26-1.423-1.723 1.293-5.214 2.09-7.344 1.459a.75.75 0 0 1 .427-1.438c1.876.556 5.468-.423 6.381-1.556a.75.75 0 0 1 1.186.023c.677.911 1.9 1.432 3.389 1.438-.763-3.462-3.121-5.24-6.671-5.24-4.372 0-6.936 2.7-6.936 7.924a.75.75 0 0 1-.75.75c-.62 0-1.062.245-1.062 1.076 0 .774.278 1.053 1.084 1.076a.747.747 0 0 1 .325.085z" fill="black" fillRule="evenodd"></path>
        </svg>
        <svg style={{ marginLeft: '20px' }} width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.75 7.755v-.257a5.248 5.248 0 0 1 5.248-5.248 5.252 5.252 0 0 1 5.252 5.252v.746a.754.754 0 0 1-.012.135.75.75 0 0 1-.74.884L2.962 9.25l2.577 10.309a.25.25 0 0 0 .243.19h12.438a.25.25 0 0 0 .243-.19l2.577-10.31H19a.75.75 0 1 1 0-1.5h3a.75.75 0 0 1 .728.931l-2.811 11.243a1.75 1.75 0 0 1-1.698 1.325H5.781a1.75 1.75 0 0 1-1.698-1.325L1.273 8.68A.75.75 0 0 1 2 7.748l4.749.007zm1.5.002l7.5.01v-.265A3.752 3.752 0 0 0 12 3.75a3.749 3.749 0 0 0-3.75 3.748v.259z" fill="black" fillRule="evenodd"></path>
        </svg>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <StyledHeader>
      {/* <IoIosMenu style={{ width: '40px', height: '40px' }} /> */}
      <HeaderLogo />
      <RightIcons />
    </StyledHeader>
  )
}

export default Header