import NavBar from './components/NavBar';

export default function Template({ children }) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
}
