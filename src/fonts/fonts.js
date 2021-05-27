import { createGlobalStyle } from 'styled-components';

import Cornerstone from './Cornerstone.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Cornerstone';
        src: local('Cornerstone'),
        url(${Cornerstone}) format('woff');
    }
`;