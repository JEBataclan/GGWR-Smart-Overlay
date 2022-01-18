import styled from "styled-components";

export const Container = styled.div`
    width: 1920px;
    height: 1080px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
`;

export const BarContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 150px;
    width: 100%;
`;

export const TeamInfoContainer = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    color: #D4AF37;
`;

export const TeamInitials = styled.div`
    font-family: Akira Expanded;
    font-size: 65px;
    line-height: 65px;
    text-transform: uppercase;
`;

export const TeamName = styled.div`
    font: 600 12px "Montserrat", sans-serif;
    letter-spacing: 14px;
    text-transform: uppercase;
`;

export const Game = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
`;
export const Round = styled.div`
    font-size: 20px;
`;

export const Timer = styled.div`
    font-size: 60px;
`;

export const TimerContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

export const GameInfo = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: #BBA151;
`;

export const PhaseInfoText = styled.div``;

export const Score = styled.div`
    color: #D4AF37;
    font-size: 100px;
    font-weight: 500;
`;

export const Blue = styled.div`
    width: 45%;
    height: inherit;
    background: linear-gradient(90deg, rgba(9,12,13,1) 0%, rgba(18,23,26,1) 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > ${TeamInfoContainer} {
        margin-left: 40px;
    }
    
    & > ${Score} {
        margin-right: 50px;
    }
`;

export const Red = styled.div`
    width: 45%;
    height: inherit;
    direction: rtl;
    background: linear-gradient(-90deg, rgba(9,12,13,1) 0%, rgba(18,23,26,1) 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > ${TeamInfoContainer} {
        margin-right: 40px;
    }

    & > ${Score} {
        margin-left: 50px;
    }
`;

export const Pick = styled.div`
    & {
        position: relative;
        width: 100%;
        flex: 1;
        transition: 2s;
    }

    &:after {
        content: "";
        position: absolute;
        height: 1px;
        background: rgba(255, 255, 255, .25);
        top: 100%;
        width: 450px;
        z-index: 1;
    }

     ${({phase}) => phase === 'three-big-two-small' ? (`
        &:nth-child(n+1) {
            flex: 3 1 0;
        }

        &:nth-child(n+4) {
            flex: 1 1 0;
        }
    `) : phase === 'three-small-two-big' && (`
        &:nth-child(n+1) {
            flex: 1 1 0;
        }

        &:nth-child(n+4) {
            flex: 3 1 0;
        }
    `)}
`;

export const ChampionPickSplash = styled.div`
    height: 100%;
    width: 100%;

    transition: background-color 0.5s ease, opacity 0.75s;

    border-width: 0px;

    ${({ blank }) => blank ? 
    `
        background-size: 15%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    `
    : 
    `
        background-size: 100%;
        background-position: 20% 25%;
    `}

    ${({ active }) => active === true &&
    `
        animation: pick-shadow 3s infinite;
        
        @keyframes pick-shadow {
            50% {box-shadow: inset 0 -150px 100px -100px rgb(219, 200, 93);}
        }
    `}
`;

export const ChampionName = styled.div`
    color: white;
    font-weight: 500;
    position: absolute;
    left: 10px;
    bottom: 35px;
`;

export const PlayerName = styled.div`
    color: white;
    font-weight: 700;
    font-type: italic;
    font-size: 30px;
    position: absolute;
    left: 10px;
    bottom: 0;
`;

export const PicksContainer = styled.div`
    position: absolute;
    top: 150px;
    ${({team}) => team === "blue" ? `left: 0;` : `right: 0;`}
    width: 500px;
    height: 800px;

    display: flex;
    flex-direction: column;

    background-color: rgba(18,23,26,.9);

    & > ${Pick} > ${PlayerName},${ChampionName} {
        ${({team}) => team === "blue" ?
        `
            right: 10px;
            text-align: right;
        ` :
        `
            left: 10px;
            text-align:left;
        `}
    }

    & > ${Pick} > ${PlayerName},${ChampionName} {
        ${({team}) => team === "blue" ?
        `
            right: 10px;
            text-align: right;
        ` :
        `
            left: 10px;
            text-align:left;
        `}
    }

    ${({team}) => team === 'red' && (`
        ${Pick}:after {
            right: 0px;
        }   
    `)}
`;

export const Ban = styled.div`
    flex: 1;
    max-height: 100px;
    transition: 2s;
    overflow: hidden;
    box-sizing: border-box;
    height: inherit;
`;

export const ChampionBanSplash = styled.div`
    display: flex;
    background-repeat: no-repeat;
    flex-shrink: 0;
    transition: filter 0.5s ease-in-out;

    ${({ blank }) => blank ?
    `
        background-size: 25%;
        background-position: 50% 50% !important;
        height: 100% !important;
        width: 100%;

        &:after {
            content:"";
            border-top:1px solid rgb(255, 255, 255);
            width: 50px;
            transform: rotate(45deg);
            transform-origin: -50% 55%;
        }
    `
    :
    `
        background-size: 300px;
        background-position: 50% 10% !important;
        height: 100%;
        width: 100%;
    `}

    ${({ active }) => active === true &&
    `
        animation: ban-shadow 3s infinite;
        
        @keyframes ban-shadow {
            50% {box-shadow: inset 0px 0px 30px 0px rgb(219, 200, 93);}
        }
    `}

    ${({active, blank}) => (!active && !blank) &&
    `
        filter: grayscale(100%);
    `}
`;

export const BlueBansContainer = styled.div`
    overflow: hidden;
    position: absolute;
    top: 950px;
    width: 500px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color:rgba(9,12,13, .9);

    & > ${Ban}:nth-child(n+2)::after {
        content: "";
        position: absolute;
        height: 50%;
        background: rgb(153, 153, 153);
        top: 25%;
        width: 1px;
        z-index: 1;
    }
`;

export const RedBansContainer = styled.div`
    overflow: hidden;
    position: absolute;
    top: 950px;
    width: 500px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    right: 0;
    flex-direction: row-reverse;
    background-color:rgba(9,12,13, .9);

    & > ${Ban}:nth-child(-n+4)::after {
        content: "";
        position: absolute;
        height: 50%;
        background: rgb(153, 153, 153);
        top: 25%;
        width: 1px;
        z-index: 1;
    }
`;

export const BanSymbol = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: 25%;
    background-position: 50% 50% !important;
    height: 100% !important;
    width: 100%;
`