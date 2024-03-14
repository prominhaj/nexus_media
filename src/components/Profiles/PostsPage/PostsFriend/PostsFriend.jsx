import Image from 'next/image';
import Link from 'next/link';


// Feck Friends
const friends = [
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

const PostsFriend = () => {
    return (
        <div className='bg-white dark:bg-[#293145] rounded-md shadow-lg p-3'>
            <div className='flex flex-wrap items-start justify-between'>
                <div>
                    <h2 className='text-xl font-medium text-light-text dark:text-dark-text'>Friends</h2>
                    <span className='text-sm font-normal text-light-text dark:text-dark-text'>20 Friends</span>
                </div>
                <Link href={`/profile/1/friends`} className='block py-1 rounded-md hover:bg-light-bg-hover duration-250 transition-all px-2 dark:hover:bg-dark-bg-hover text-[#0064D1] dark:text-[#5AA7FF]'>See All Friends</Link>
            </div>
            <div className='grid grid-cols-3 gap-2 pt-3'>
                {
                    friends.map((friend, index) => <Link href={`/friends/1`} className='relative block before:z-0 before:absolute before:w-full before:h-full before:bg-light-bg dark:before:bg-gray-500/50 max-h-32' key={friend.id}>
                        <Image src={friend.image} width={80} height={80} className='object-cover w-full h-full rounded-md' alt={`Photo ${index}`} />
                        <div className='absolute bottom-0 z-10 w-full text-center'>
                            <span className=' text-light-text dark:text-dark-text text-[0.75rem]'>{friend.name}</span>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default PostsFriend;