import StoriesModalCard from "../StoriesModal/StoriesModalCard";

// Feck Stories
const stories = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: "John Smith",
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: "Jiny Sonhara",
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: "Md Jahid Khan"
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: "Khalid Khan"
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: "Johir Khan"
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: "Holid Aliases"
    },
]

const StoriesCard = () => {

    return (
        <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'>
            {
                stories.map(s => (
                    <StoriesModalCard key={s.id} story={s} />
                ))
            }
        </div>
    );
};

export default StoriesCard;