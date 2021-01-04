// User profile component
import './UserProfile.scss'
import { useAuth } from 'hooks'

const UserProfile = ({ profileData }) => {
    const { logout } = useAuth()

    return (
        <div className='user-profile'>
            <main>
                <div className='profile-pic'></div>
                <div className='profile-name'>
                    <h5>Welcome Back!</h5>
                    <h4>Ramkumar K</h4>
                </div>

                {profileData && (
                    <div className='profile-details'>
                        <span className='separator' />

                        <h5>D.O.B</h5>
                        <p>{profileData.birth_year}</p>

                        <h5>Gender</h5>
                        <p>{profileData.gender}</p>

                        <h5>Hair Color</h5>
                        <p>{profileData.hair_color}</p>

                        <h5>Height</h5>
                        <p>{profileData.height}</p>

                        <h5>Mass</h5>
                        <p>{profileData.mass}</p>

                        <h5>Skin Color</h5>
                        <p>{profileData.skin_color}</p>

                        <span className='separator' />

                        <h5>Films</h5>
                        <p>{profileData.films.length}</p>

                        <h5>Starships</h5>
                        <p>{profileData.starships.length}</p>

                        <h5>Vechicles</h5>
                        <p>{profileData.vehicles.length}</p>

                        <span className='separator' />
                    </div>
                )}
            </main>

            <footer>
                <button onClick={() => logout()}>Logout</button>
            </footer>
        </div>
    )
}

export { UserProfile }
export default UserProfile