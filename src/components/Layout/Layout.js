import './Layout.css'
//Main Layout to wrap up the whole page 

export default function Layout ({children}) {
    return (
        <div>
            <div className="layout">
                {children}
            </div>
        </div>
    )
}