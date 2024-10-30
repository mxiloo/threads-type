import FeedPageProvider from "./feed-page-provider"
import HeaderProvider from "./header-provider"
import PostProvider from "./post-provider"
import ProfleProvider from "./profile-provider"



const MasterProvider = ({children}) => {
    return (
        <HeaderProvider>
            <FeedPageProvider>
                <ProfleProvider>
                    <PostProvider>
                        {children}   
                    </PostProvider>
                </ProfleProvider>
            </FeedPageProvider>
        </HeaderProvider>
        
    )
}

export default MasterProvider