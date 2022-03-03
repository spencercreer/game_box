import Dice from './Dice'
import ScoreCard from './ScoreCard'

const Page = ({ currentPage }) => {

    return (
        <>
            {
                currentPage === 'dice' ? <Dice />
                :
                <ScoreCard />
            }
        </>
    )
}

export default Page