import React, { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../context/appContext';
import ChartsContainerWrapper from '../assets/wrappers/ChartsContainerWrapper';

const ChartsContainer = () => {
    const [barChart, setBarChart] = useState(true);
    const { monthlyApplications: data } = useAppContext();
    return (
        <ChartsContainerWrapper>
            <h4>Monthly Applications</h4>
            <button type='button' onClick={() => setBarChart(!barChart)}>
                {barChart ? 'Area Chart' : 'Bar Chart'}
            </button>
            {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
        </ChartsContainerWrapper>
    );
};

export default ChartsContainer;
