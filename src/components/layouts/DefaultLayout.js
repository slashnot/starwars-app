// Default layout component
import './DefaultLayout.scss'
import logo from 'assets/img/github.png'

const DefaultLayout = () => {

    return (
        <div className="layout-default">
            <header>
                <img src={logo} />
                <img src={logo} />
            </header>
            <div className='content'>
                <h1>Others</h1>
                <main>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                    <h3>Main</h3>
                </main>
            </div>
            <aside><h3>Aside</h3></aside>
        </div>
    )
}

export { DefaultLayout }
export default DefaultLayout