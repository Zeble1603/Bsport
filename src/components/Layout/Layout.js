//Main Layout to wrap up the whole page 

//CSS
import './Layout.css'

export default function Layout ({children}) {
    return (
        <div>
            <div className="layout">
                {children}
            </div>
        </div>
    )
}