import StatItemWrapper from '../assets/wrappers/StatItemWrapper';

const StatsItem = ({ count, title, icon, color, bcg }) => {
    return (
        <StatItemWrapper color={color} bcg={bcg}>
            <header>
                <span className='count'>{count}</span>
                <span className='icon'>{icon}</span>
            </header>
            <h5 className='title'>{title}</h5>
        </StatItemWrapper>
    );
};

export default StatsItem;
